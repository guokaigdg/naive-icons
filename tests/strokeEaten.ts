/**
 * 「小色块被自身描边吃光」检测器。
 *
 * 背景：根节点统一写死了 stroke="#2A2A2A" stroke-width="3.5"，而 stroke 是可继承
 * 属性——内部任何没写 stroke 的形状都会白拿这条 3.5 宽的墨色描边。描边是**向内**
 * 吃掉的，于是太小的色块会被自己的描边完全盖住：渲染出来只剩一团墨色，强调色
 * 凭空消失（book 封面上的白眼睛、water-cup 的奶白气泡、猫头鹰的黄嘴，都是这么没的）。
 *
 * 判定：填充区域的内切圆半径 r 必须大于描边半宽 sw/2，否则填充被完全覆盖。
 *   circle  : r                                       （精确）
 *   ellipse : min(rx,ry)^2 / max(rx,ry)               （精确，椭圆的最小曲率半径）
 *   rect    : min(w,h) / 2                            （精确）
 *   path    : minWidth / 2                            （上界，见下）
 *
 * path 用的是「最小宽度」上界而不是内切圆：任意形状的内切圆半径都满足
 *   r ≤ minWidth / 2
 * （内切圆在任意方向上的投影长度都是 2r，所以形状在该方向上的投影宽度 ≥ 2r；
 *   minWidth 取遍各边法向方向的投影宽度后仍然 ≥ 2r）。
 * 于是 minWidth ≤ sw 就能**证明** r ≤ sw/2，即填充被完全盖住——这是充分条件，
 * 只会漏报、不会误报。
 *
 * 这条判据换掉了早先的「平均厚度 = 2*面积/周长」：那个指标是上界里的下界，
 * 分不清三角形和真正的细条，扫出 27 枚全是误报（逐个在浏览器里看过）。
 *
 * 已知局限：minWidth 是全局投影宽度，所以「胖身子 + 一根细尾巴」这种形状的细尾巴
 * 会被放过（漏报）。本库目前没有这种画法。
 */

import { arcPoints, parsePath } from './svgGeometry';

/** 墨色。填充与描边都是它的时候，色块并没有「消失」，只是被同色描边撑大了。 */
const INK = '#2A2A2A';

/**
 * 填色至少要剩下这么厚（单位）才算「看得见」。
 *
 * 取 0：只拦「彻底看不见」这一档。往上抬（比如 0.5）会把 alert-circle 感叹号点、
 * smile 腮红这种刻意的「带墨圈的小圆点」也揪出来——那些渲染出来是好的。
 */
export const MIN_VISIBLE = 0;

type Pt = [number, number];

export interface EatenShape {
  /** 元素名：circle / ellipse / rect / path */
  tag: string;
  /** 填充色 */
  fill: string;
  /** 描边半宽 */
  halfStroke: number;
  /** 内切圆半径的上界（已算上 transform 缩放） */
  radiusBound: number;
  /** 给人看的定位信息 */
  detail: string;
}

// ---------------------------------------------------------------- 解析

const TAG_RE = /<(\/?)([a-zA-Z]+)\b([^>]*?)(\/?)>/g;
const ATTR_RE = /([\w-]+)\s*=\s*"([^"]*)"/g;

function parseAttrs(text: string): Record<string, string> {
  const out: Record<string, string> = {};
  ATTR_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = ATTR_RE.exec(text)) !== null) out[m[1]] = m[2];
  return out;
}

/**
 * 从 transform 里取出等效缩放系数（只用于和尺寸有关的判定）。
 * 旋转不影响尺寸，平移不影响尺寸，只需要管 scale / matrix。
 */
function transformScale(transform: string | undefined): number {
  if (!transform) return 1;
  let sx = 1;
  let sy = 1;
  const re = /(\w+)\s*\(([^)]*)\)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(transform)) !== null) {
    const name = m[1];
    const v = (m[2].match(/-?\d*\.?\d+(?:[eE][-+]?\d+)?/g) ?? []).map(Number);
    if (name === 'scale') {
      sx *= v[0] ?? 1;
      sy *= v[1] ?? v[0] ?? 1;
    } else if (name === 'matrix') {
      sx *= Math.hypot(v[0] ?? 1, v[1] ?? 0);
      sy *= Math.hypot(v[2] ?? 0, v[3] ?? 1);
    }
  }
  // 非等比缩放时取较小的那个，宁可判得保守一点也别误报
  return Math.min(Math.abs(sx), Math.abs(sy));
}

function num(a: Record<string, string>, key: string): number | null {
  const raw = a[key];
  if (raw === undefined) return null;
  const v = Number(raw);
  return Number.isFinite(v) ? v : null;
}

/** 归一化颜色写法：大写、去空格。rgb() 之类本库没用到。 */
function normColor(c: string | undefined): string {
  return (c ?? '').replace(/\s+/g, '').toUpperCase();
}

// ---------------------------------------------------------------- 路径展平

/** 把 path 的 d 拆成若干条子路径，每条是一串采样点。 */
function flattenSubpaths(d: string): Pt[][] {
  const subs: Pt[][] = [];
  let cur: Pt[] = [];
  let cx = 0;
  let cy = 0;
  let sx = 0;
  let sy = 0;
  let prevCubicCtrl: Pt | null = null;
  let prevQuadCtrl: Pt | null = null;

  const startSub = (x: number, y: number) => {
    if (cur.length) subs.push(cur);
    cx = x;
    cy = y;
    sx = x;
    sy = y;
    cur = [[x, y]];
  };
  const add = (pts: Pt[]) => {
    for (const p of pts) cur.push(p);
    const last = cur[cur.length - 1];
    cx = last[0];
    cy = last[1];
  };

  for (const { cmd, args: f } of parsePath(d)) {
    const up = cmd.toUpperCase();
    const rel = cmd !== up;
    const ax = (v: number) => (rel ? cx + v : v);
    const ay = (v: number) => (rel ? cy + v : v);

    switch (up) {
      case 'M':
        startSub(ax(f[0]), ay(f[1]));
        prevCubicCtrl = null;
        prevQuadCtrl = null;
        break;

      case 'L':
        add([[ax(f[0]), ay(f[1])]]);
        prevCubicCtrl = null;
        prevQuadCtrl = null;
        break;

      case 'H':
        add([[ax(f[0]), cy]]);
        prevCubicCtrl = null;
        prevQuadCtrl = null;
        break;

      case 'V':
        add([[cx, ay(f[0])]]);
        prevCubicCtrl = null;
        prevQuadCtrl = null;
        break;

      case 'C': {
        const p1: Pt = [ax(f[0]), ay(f[1])];
        const p2: Pt = [ax(f[2]), ay(f[3])];
        const p3: Pt = [ax(f[4]), ay(f[5])];
        const p0: Pt = [cx, cy];
        const pts: Pt[] = [];
        for (let i = 1; i <= 16; i++) {
          const t = i / 16;
          const mt = 1 - t;
          pts.push([
            mt ** 3 * p0[0] + 3 * mt * mt * t * p1[0] + 3 * mt * t * t * p2[0] + t ** 3 * p3[0],
            mt ** 3 * p0[1] + 3 * mt * mt * t * p1[1] + 3 * mt * t * t * p2[1] + t ** 3 * p3[1],
          ]);
        }
        add(pts);
        prevCubicCtrl = p2;
        prevQuadCtrl = null;
        break;
      }

      case 'S': {
        const p1: Pt = prevCubicCtrl
          ? [2 * cx - prevCubicCtrl[0], 2 * cy - prevCubicCtrl[1]]
          : [cx, cy];
        const p2: Pt = [ax(f[0]), ay(f[1])];
        const p3: Pt = [ax(f[2]), ay(f[3])];
        const p0: Pt = [cx, cy];
        const pts: Pt[] = [];
        for (let i = 1; i <= 16; i++) {
          const t = i / 16;
          const mt = 1 - t;
          pts.push([
            mt ** 3 * p0[0] + 3 * mt * mt * t * p1[0] + 3 * mt * t * t * p2[0] + t ** 3 * p3[0],
            mt ** 3 * p0[1] + 3 * mt * mt * t * p1[1] + 3 * mt * t * t * p2[1] + t ** 3 * p3[1],
          ]);
        }
        add(pts);
        prevCubicCtrl = p2;
        prevQuadCtrl = null;
        break;
      }

      case 'Q': {
        const p1: Pt = [ax(f[0]), ay(f[1])];
        const p2: Pt = [ax(f[2]), ay(f[3])];
        const p0: Pt = [cx, cy];
        const pts: Pt[] = [];
        for (let i = 1; i <= 12; i++) {
          const t = i / 12;
          const mt = 1 - t;
          pts.push([
            mt * mt * p0[0] + 2 * mt * t * p1[0] + t * t * p2[0],
            mt * mt * p0[1] + 2 * mt * t * p1[1] + t * t * p2[1],
          ]);
        }
        add(pts);
        prevQuadCtrl = p1;
        prevCubicCtrl = null;
        break;
      }

      case 'T': {
        const p1: Pt = prevQuadCtrl
          ? [2 * cx - prevQuadCtrl[0], 2 * cy - prevQuadCtrl[1]]
          : [cx, cy];
        const p2: Pt = [ax(f[0]), ay(f[1])];
        const p0: Pt = [cx, cy];
        const pts: Pt[] = [];
        for (let i = 1; i <= 12; i++) {
          const t = i / 12;
          const mt = 1 - t;
          pts.push([
            mt * mt * p0[0] + 2 * mt * t * p1[0] + t * t * p2[0],
            mt * mt * p0[1] + 2 * mt * t * p1[1] + t * t * p2[1],
          ]);
        }
        add(pts);
        prevQuadCtrl = p1;
        prevCubicCtrl = null;
        break;
      }

      case 'A': {
        const x2 = ax(f[5]);
        const y2 = ay(f[6]);
        const pts = arcPoints(cx, cy, f[0], f[1], f[2], f[3], f[4], x2, y2);
        add(pts);
        prevCubicCtrl = null;
        prevQuadCtrl = null;
        break;
      }

      case 'Z': {
        if (cur.length) {
          cur.push([sx, sy]);
          subs.push(cur);
          cur = [];
        }
        cx = sx;
        cy = sy;
        prevCubicCtrl = null;
        prevQuadCtrl = null;
        break;
      }

      default:
        break;
    }
  }

  if (cur.length) subs.push(cur);
  return subs;
}

/**
 * 开放子路径的「厚度」：隐式闭合的那条弦到曲线的最大距离。
 *
 * 开放 path 填充时会被隐式闭合，但**闭合边不参与描边**——描边只画在真正的曲线上。
 * 所以填充区里离弦最远的点（也就是露出来的那条）离曲线有多远，决定了颜色还剩多少：
 *   厚度 ≤ sw/2 → 整片都被描边盖住（颜色彻底消失）
 * 厚度就是弦到曲线的最大距离（凸函数取极值在边界，弦上距离最大）。
 */
function openPathThickness(subs: Pt[][]): number | null {
  if (subs.length !== 1) return null; // 多条子路径没法用这个判据
  const s = subs[0];
  if (s.length < 2) return null;
  const first = s[0];
  const last = s[s.length - 1];
  if (Math.hypot(last[0] - first[0], last[1] - first[1]) < 1e-9) return null; // 闭合的走另一条判据

  const segs: [Pt, Pt][] = [];
  for (let i = 0; i < s.length - 1; i++) segs.push([s[i], s[i + 1]]);

  const distToSeg = (q: Pt, a: Pt, b: Pt) => {
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const len2 = dx * dx + dy * dy;
    if (len2 === 0) return Math.hypot(q[0] - a[0], q[1] - a[1]);
    let t = ((q[0] - a[0]) * dx + (q[1] - a[1]) * dy) / len2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(q[0] - (a[0] + t * dx), q[1] - (a[1] + t * dy));
  };

  const SAMPLES = 33;
  let max = 0;
  for (let k = 0; k <= SAMPLES; k++) {
    const t = k / SAMPLES;
    const q: Pt = [last[0] + (first[0] - last[0]) * t, last[1] + (first[1] - last[1]) * t];
    let d = Infinity;
    for (const [a, b] of segs) d = Math.min(d, distToSeg(q, a, b));
    if (d > max) max = d;
  }
  return max;
}

/**
 * 形状的最小宽度：沿各边法向方向做投影，取投影跨度的最小值。
 *
 * 返回 null 表示形状退化（点太少），判不了。
 */
function minWidth(subs: Pt[][]): number | null {
  const all: Pt[] = [];
  for (const s of subs) for (const p of s) all.push(p);
  if (all.length < 3) return null;

  let min = Infinity;
  for (const s of subs) {
    const n = s.length;
    if (n < 2) continue;
    for (let i = 0; i < n; i++) {
      const a = s[i];
      const b = s[(i + 1) % n]; // 开放子路径在填充时会被隐式闭合
      const dx = b[0] - a[0];
      const dy = b[1] - a[1];
      const len = Math.hypot(dx, dy);
      if (len < 1e-9) continue;
      const ux = -dy / len;
      const uy = dx / len;
      let lo = Infinity;
      let hi = -Infinity;
      for (const p of all) {
        const t = p[0] * ux + p[1] * uy;
        if (t < lo) lo = t;
        if (t > hi) hi = t;
      }
      const w = hi - lo;
      if (w < min) min = w;
    }
  }
  return Number.isFinite(min) ? min : null;
}

/**
 * 凸多边形的更紧上界：r ≤ 2A/P。
 *
 * 凸多边形可以拆成「内切圆心到各边」的三角形，每个三角形的高都 ≥ r，所以
 * A ≥ r·P/2，即 r ≤ 2A/P。对正多边形这个界是取等的，比最小宽度紧得多
 * （三角形的最小宽度是最短高，而 2A/P 才是真正的内切圆半径）。
 *
 * 非凸形状不能用这条（带凹口时 A/P 会偏小），所以只在确认是凸的时候才用。
 * 多条子路径也不��（可能是带洞的形状），一并排除。
 */
function convexBound2AP(subs: Pt[][]): number | null {
  if (subs.length !== 1) return null;
  const s = subs[0];
  const n = s.length;
  if (n < 3) return null;

  let area2 = 0; // 有向面积的两倍
  let perim = 0;
  let sign = 0;
  for (let i = 0; i < n; i++) {
    const a = s[i];
    const b = s[(i + 1) % n];
    area2 += a[0] * b[1] - b[0] * a[1];
    perim += Math.hypot(b[0] - a[0], b[1] - a[1]);
    const c = s[(i + 2) % n];
    const cross = (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]);
    if (Math.abs(cross) < 1e-9) continue;
    const sgn = cross > 0 ? 1 : -1;
    if (sign === 0) sign = sgn;
    else if (sgn !== sign) return null; // 凹
  }
  if (sign === 0 || perim === 0) return null;
  const area = Math.abs(area2) / 2;
  return (2 * area) / perim;
}


// ---------------------------------------------------------------- 判定

interface Style {
  fill: string;
  stroke: string;
  sw: number;
  scale: number;
}

/**
 * 内切圆半径的上界（未乘 transform 缩放）。
 * circle / ellipse / rect 是精确值；path 是最小宽度的一半（见文件头）。
 */
function radiusBound(tag: string, a: Record<string, string>): number | null {
  switch (tag) {
    case 'circle': {
      const r = num(a, 'r');
      return r === null ? null : r;
    }
    case 'ellipse': {
      const rx = num(a, 'rx');
      const ry = num(a, 'ry');
      if (rx === null || ry === null) return null;
      const long = Math.max(rx, ry);
      const short = Math.min(rx, ry);
      if (long === 0) return 0;
      // 椭圆的内切圆半径 = 短半轴^2 / 长半轴
      return (short * short) / long;
    }
    case 'rect': {
      const w = num(a, 'width');
      const h = num(a, 'height');
      if (w === null || h === null) return null;
      return Math.min(w, h) / 2;
    }
    case 'path': {
      const subs = flattenSubpaths(a.d ?? '');
      const thickness = openPathThickness(subs);
      if (thickness !== null) return thickness; // 开放 path：看弦到曲线的厚度
      const w = minWidth(subs);
      if (w === null) return null;
      let bound = w / 2;
      const tight = convexBound2AP(subs);
      if (tight !== null && tight < bound) bound = tight;
      return bound;
    }
    default:
      return null;
  }
}

function describe(tag: string, a: Record<string, string>): string {
  const keys: Record<string, string[]> = {
    circle: ['cx', 'cy', 'r'],
    ellipse: ['cx', 'cy', 'rx', 'ry'],
    rect: ['x', 'y', 'width', 'height'],
  };
  const parts = (keys[tag] ?? [])
    .filter((k) => a[k] !== undefined)
    .map((k) => `${k}=${a[k]}`);
  return `<${tag} ${parts.join(' ')}>`;
}

/**
 * 扫一遍 svg 源码，返回所有「填充被自身描边完全吃掉」的形状。
 *
 * @param svgText svg 文件内容
 */
export function findEatenShapes(svgText: string): EatenShape[] {
  const out: EatenShape[] = [];

  const rootMatch = /<svg\b([^>]*)>/.exec(svgText);
  const root = rootMatch ? parseAttrs(rootMatch[1]) : {};
  const rootStyle: Style = {
    // SVG 默认值：fill 是 black，stroke 是 none，stroke-width 是 1
    fill: root.fill ?? 'black',
    stroke: root.stroke ?? 'none',
    sw: num(root, 'stroke-width') ?? 1,
    scale: 1,
  };

  // 分组栈：<g> 可以改写 fill / stroke / stroke-width，也可以带 transform
  const stack: Style[] = [rootStyle];

  TAG_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = TAG_RE.exec(svgText)) !== null) {
    const closing = m[1] === '/';
    const tag = m[2].toLowerCase();
    const attrs = parseAttrs(m[3]);
    const selfClosing = m[4] === '/';
    const parent = stack[stack.length - 1];

    if (closing) {
      if (tag === 'g' && stack.length > 1) stack.pop();
      continue;
    }
    if (tag === 'svg') continue;

    if (tag === 'g') {
      if (!selfClosing) {
        stack.push({
          fill: attrs.fill ?? parent.fill,
          stroke: attrs.stroke ?? parent.stroke,
          sw: num(attrs, 'stroke-width') ?? parent.sw,
          scale: parent.scale * transformScale(attrs.transform),
        });
      }
      continue;
    }

    // 继承：元素自己没写就用外层的
    const fill = normColor(attrs.fill ?? parent.fill);
    const stroke = normColor(attrs.stroke ?? parent.stroke);
    const sw = num(attrs, 'stroke-width') ?? parent.sw;
    const scale = parent.scale * transformScale(attrs.transform);

    // 没填充 → 不是色块
    if (!fill || fill === 'NONE' || fill.startsWith('URL(')) continue;
    // 显式关掉描边 → 不会被吃
    if (stroke === 'NONE') continue;
    // 墨色压墨色：色块没丢颜色，只是被同色描边撑大，不算这个缺陷
    if (fill === INK) continue;
    // 描边与填充同色：颜色不会消失，只是形状变大
    if (stroke === fill) continue;

    const halfStroke = sw / 2;
    if (halfStroke <= 0) continue;

    const bound = radiusBound(tag, attrs);
    if (bound === null) continue;

    const r = bound * scale;
    // 剩下的可见部分：bound 是内切圆半径的上界，所以 bound - 描边半宽 也是可见厚度的上界。
    // 上界都撑不住 0.5 个单位，就别谈「看得见了」（0.5 单位在 24px 显示时不到 0.25px）。
    const visible = r - halfStroke;
    if (visible <= MIN_VISIBLE + 1e-9) {
      out.push({
        tag,
        fill,
        halfStroke,
        radiusBound: r,
        detail: `${describe(tag, attrs)} fill=${attrs.fill ?? fill} 内切圆半径上界 ${r.toFixed(2)}，扣掉描边半宽 ${halfStroke.toFixed(2)} 只剩 ${visible.toFixed(2)}`,
      });
    }
  }

  return out;
}
