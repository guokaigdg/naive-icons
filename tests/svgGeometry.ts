/**
 * SVG 几何工具：把 svg/ 里的图形算成「描边外缘」包围盒。
 *
 * 只服务于 tests/margin.test.ts 的边距回归测试，所以只覆盖本库用到的子集：
 * path / circle / rect / ellipse / line / polyline / polygon，加上 translate /
 * scale / rotate / matrix 变换。
 */

export const SIZE = 48;
export const MIN_MARGIN = 3;

/** 圆弧采样点数，够密到不会漏掉弧顶 */
const ARC_SAMPLES = 48;

// ---------------------------------------------------------------- 路径采样

type Pt = [number, number];

function parsePath(d: string): { cmd: string; args: number[] }[] {
  const out: { cmd: string; args: number[] }[] = [];
  const re = /([MmLlHhVvCcSsQqTtAaZz])|(-?\d*\.?\d+(?:[eE][-+]?\d+)?)/g;
  let pending: { cmd: string; args: number[] } | null = null;
  const need = (c: string) =>
    ({ M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 }[c.toUpperCase()] ?? 0);

  let m: RegExpExecArray | null;
  while ((m = re.exec(d)) !== null) {
    if (m[1]) {
      // 只推已经填满参数的 pending；空壳必须丢掉，否则 f[0] 是 undefined → NaN
      if (pending && pending.args.length) out.push(pending);
      const cmd = m[1];
      if (cmd === 'Z' || cmd === 'z') {
        out.push({ cmd, args: [] });
        pending = null;
        continue;
      }
      pending = { cmd, args: [] };
    } else if (pending) {
      pending.args.push(Number(m[2]));
      if (pending.args.length >= need(pending.cmd)) {
        out.push(pending);
        // M 之后的坐标对是隐式 lineto；其余命令的参数可继续重复
        const next = pending.cmd === 'M' ? 'L' : pending.cmd === 'm' ? 'l' : pending.cmd;
        pending = { cmd: next, args: [] };
      }
    }
  }
  if (pending && pending.args.length) out.push(pending);
  return out;
}

function arcPoints(
  x1: number, y1: number, rx: number, ry: number, phiDeg: number,
  largeArc: number, sweep: number, x2: number, y2: number,
): Pt[] {
  if (rx === 0 || ry === 0 || (x1 === x2 && y1 === y2)) return [[x2, y2]];
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  const phi = (phiDeg * Math.PI) / 180;
  const cosP = Math.cos(phi);
  const sinP = Math.sin(phi);
  const dx2 = (x1 - x2) / 2;
  const dy2 = (y1 - y2) / 2;
  const x1p = cosP * dx2 + sinP * dy2;
  const y1p = -sinP * dx2 + cosP * dy2;
  const lam = (x1p * x1p) / (rx * rx) + (y1p * y1p) / (ry * ry);
  if (lam > 1) {
    const s = Math.sqrt(lam);
    rx *= s;
    ry *= s;
  }
  const num = rx * rx * ry * ry - rx * rx * y1p * y1p - ry * ry * x1p * x1p;
  const den = rx * rx * y1p * y1p + ry * ry * x1p * x1p;
  let co = den === 0 ? 0 : Math.sqrt(Math.max(0, num / den));
  if (largeArc === sweep) co = -co;
  const cxp = co * ((rx * y1p) / ry);
  const cyp = -co * ((ry * x1p) / rx);
  const cx = cosP * cxp - sinP * cyp + (x1 + x2) / 2;
  const cy = sinP * cxp + cosP * cyp + (y1 + y2) / 2;
  const ang = (ux: number, uy: number, vx: number, vy: number) => {
    const d = Math.hypot(ux, uy) * Math.hypot(vx, vy);
    if (d === 0) return 0;
    const c = Math.max(-1, Math.min(1, (ux * vx + uy * vy) / d));
    const a = Math.acos(c);
    return ux * vy - uy * vx < 0 ? -a : a;
  };
  const th1 = ang(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry);
  let dth = ang((x1p - cxp) / rx, (y1p - cyp) / ry, (-x1p - cxp) / rx, (-y1p - cyp) / ry);
  if (!sweep && dth > 0) dth -= 2 * Math.PI;
  if (sweep && dth < 0) dth += 2 * Math.PI;
  const out: Pt[] = [];
  for (let i = 0; i <= ARC_SAMPLES; i++) {
    const th = th1 + (dth * i) / ARC_SAMPLES;
    const ex = rx * Math.cos(th);
    const ey = ry * Math.sin(th);
    out.push([cosP * ex - sinP * ey + cx, sinP * ex + cosP * ey + cy]);
  }
  return out;
}

function pathPoints(d: string): Pt[] {
  const pts: Pt[] = [];
  let cx = 0;
  let cy = 0;
  let prevC2: Pt | null = null;
  let prevQ: Pt | null = null;

  for (const { cmd, args } of parsePath(d)) {
    const up = cmd.toUpperCase();
    const rel = cmd !== up;
    const f = args;
    const abs = (x: number, y: number): Pt => (rel ? [cx + x, cy + y] : [x, y]);

    switch (up) {
      case 'M': {
        [cx, cy] = abs(f[0], f[1]);
        pts.push([cx, cy]);
        prevC2 = null;
        prevQ = null;
        break;
      }
      case 'L': {
        [cx, cy] = abs(f[0], f[1]);
        pts.push([cx, cy]);
        prevC2 = null;
        prevQ = null;
        break;
      }
      case 'H': {
        cx = rel ? cx + f[0] : f[0];
        pts.push([cx, cy]);
        prevC2 = null;
        prevQ = null;
        break;
      }
      case 'V': {
        cy = rel ? cy + f[0] : f[0];
        pts.push([cx, cy]);
        prevC2 = null;
        prevQ = null;
        break;
      }
      case 'C': {
        const p: Pt[] = [
          abs(f[0], f[1]),
          abs(f[2], f[3]),
          abs(f[4], f[5]),
        ];
        for (let i = 1; i <= 16; i++) {
          const t = i / 16;
          const mt = 1 - t;
          pts.push([
            mt ** 3 * cx + 3 * mt * mt * t * p[0][0] + 3 * mt * t * t * p[1][0] + t ** 3 * p[2][0],
            mt ** 3 * cy + 3 * mt * mt * t * p[0][1] + 3 * mt * t * t * p[1][1] + t ** 3 * p[2][1],
          ]);
        }
        prevC2 = p[1];
        prevQ = null;
        [cx, cy] = p[2];
        break;
      }
      case 'S': {
        const p: Pt[] = [abs(f[0], f[1]), abs(f[2], f[3])];
        const c1: Pt = prevC2 ? [2 * cx - prevC2[0], 2 * cy - prevC2[1]] : [cx, cy];
        for (let i = 1; i <= 16; i++) {
          const t = i / 16;
          const mt = 1 - t;
          pts.push([
            mt ** 3 * cx + 3 * mt * mt * t * c1[0] + 3 * mt * t * t * p[0][0] + t ** 3 * p[1][0],
            mt ** 3 * cy + 3 * mt * mt * t * c1[1] + 3 * mt * t * t * p[0][1] + t ** 3 * p[1][1],
          ]);
        }
        prevC2 = p[0];
        prevQ = null;
        [cx, cy] = p[1];
        break;
      }
      case 'Q': {
        const p: Pt[] = [abs(f[0], f[1]), abs(f[2], f[3])];
        for (let i = 1; i <= 16; i++) {
          const t = i / 16;
          const mt = 1 - t;
          pts.push([
            mt * mt * cx + 2 * mt * t * p[0][0] + t * t * p[1][0],
            mt * mt * cy + 2 * mt * t * p[0][1] + t * t * p[1][1],
          ]);
        }
        prevQ = p[0];
        prevC2 = null;
        [cx, cy] = p[1];
        break;
      }
      case 'T': {
        const p: Pt = abs(f[0], f[1]);
        const q: Pt = prevQ ? [2 * cx - prevQ[0], 2 * cy - prevQ[1]] : [cx, cy];
        for (let i = 1; i <= 16; i++) {
          const t = i / 16;
          const mt = 1 - t;
          pts.push([
            mt * mt * cx + 2 * mt * t * q[0] + t * t * p[0],
            mt * mt * cy + 2 * mt * t * q[1] + t * t * p[1],
          ]);
        }
        prevQ = p;
        prevC2 = null;
        [cx, cy] = p;
        break;
      }
      case 'A': {
        const x2y2 = rel ? [cx + f[5], cy + f[6]] : [f[5], f[6]];
        pts.push(
          ...arcPoints(cx, cy, f[0], f[1], f[2], f[3], f[4], x2y2[0], x2y2[1]),
        );
        prevC2 = null;
        prevQ = null;
        [cx, cy] = x2y2;
        break;
      }
      case 'Z': {
        cx = 0;
        cy = 0;
        prevC2 = null;
        prevQ = null;
        break;
      }
      default:
        break;
    }
  }
  return pts;
}

// ---------------------------------------------------------------- 变换

type Matrix = [number, number, number, number, number, number]; // a b c d e f
const IDENTITY: Matrix = [1, 0, 0, 1, 0, 0];

function mul(m1: Matrix, m2: Matrix): Matrix {
  const [a1, b1, c1, d1, e1, f1] = m1;
  const [a2, b2, c2, d2, e2, f2] = m2;
  return [
    a1 * a2 + c1 * b2,
    b1 * a2 + d1 * b2,
    a1 * c2 + c1 * d2,
    b1 * c2 + d1 * d2,
    a1 * e2 + c1 * f2 + e1,
    b1 * e2 + d1 * f2 + f1,
  ];
}

function parseTransform(s: string): Matrix {
  let m: Matrix = IDENTITY;
  const re = /(\w+)\s*\(([^)]*)\)/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(s)) !== null) {
    const name = match[1];
    const v = (match[2].match(/-?\d*\.?\d+(?:[eE][-+]?\d+)?/g) ?? []).map(Number);
    let t: Matrix = IDENTITY;
    if (name === 'translate') t = [1, 0, 0, 1, v[0] ?? 0, v[1] ?? 0];
    else if (name === 'scale') {
      const sx = v[0] ?? 1;
      t = [sx, 0, 0, v[1] ?? sx, 0, 0];
    } else if (name === 'rotate') {
      const a = (v[0] * Math.PI) / 180;
      const r: Matrix = [Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0];
      t = v.length >= 3
        ? mul(mul([1, 0, 0, 1, v[1], v[2]], r), [1, 0, 0, 1, -v[1], -v[2]])
        : r;
    } else if (name === 'matrix') {
      t = [v[0], v[1], v[2], v[3], v[4], v[5]];
    }
    m = mul(m, t);
  }
  return m;
}

function apply(m: Matrix, x: number, y: number): Pt {
  return [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
}

// ---------------------------------------------------------------- 元素解析

const TAG_RE = /<(\/?)(path|circle|rect|ellipse|line|polyline|polygon|svg|g)\b([^>]*?)(\/?)>/g;
const ATTR_RE = /([\w-]+)\s*=\s*"([^"]*)"/g;

function attrs(text: string): Record<string, string> {
  const out: Record<string, string> = {};
  let m: RegExpExecArray | null;
  ATTR_RE.lastIndex = 0;
  while ((m = ATTR_RE.exec(text)) !== null) out[m[1]] = m[2];
  return out;
}

function localPoints(tag: string, a: Record<string, string>): Pt[] {
  const n = (k: string, dflt = 0) => (a[k] === undefined ? dflt : Number(a[k]));
  switch (tag) {
    case 'path':
      return pathPoints(a.d ?? '');
    case 'circle': {
      const cx = n('cx');
      const cy = n('cy');
      const r = n('r');
      return [[cx - r, cy - r], [cx + r, cy + r]];
    }
    case 'ellipse': {
      const cx = n('cx');
      const cy = n('cy');
      const rx = n('rx');
      const ry = n('ry');
      return [[cx - rx, cy - ry], [cx + rx, cy + ry]];
    }
    case 'rect': {
      const x = n('x');
      const y = n('y');
      return [[x, y], [x + n('width'), y + n('height')]];
    }
    case 'line':
      return [[n('x1'), n('y1')], [n('x2'), n('y2')]];
    case 'polyline':
    case 'polygon': {
      const v = (a.points ?? '').match(/-?\d*\.?\d+(?:[eE][-+]?\d+)?/g)?.map(Number) ?? [];
      const out: Pt[] = [];
      for (let i = 0; i + 1 < v.length; i += 2) out.push([v[i], v[i + 1]]);
      return out;
    }
    default:
      return [];
  }
}

/** 元素自身的描边半宽。没写就继承根节点的 3.5。 */
function halfStroke(a: Record<string, string>): number {
  if (a.stroke === 'none') return 0;
  const sw = a['stroke-width'] === undefined ? 3.5 : Number(a['stroke-width']);
  return sw / 2;
}

/** 返回该 svg 的四边外缘边距 [左, 右, 上, 下]。 */
export function outerMargins(svgText: string): [number, number, number, number] {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  // transform 栈：每层是 { matrix, depth }
  const stack: Matrix[] = [IDENTITY];
  let depth = 0;

  TAG_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = TAG_RE.exec(svgText)) !== null) {
    const closing = m[1] === '/';
    const tag = m[2];
    const a = attrs(m[3]);
    const selfClosing = m[4] === '/';

    // </g> 必须把组变换弹回去，否则组后面的元素会错用组里的矩阵
    if (closing) {
      if (tag === 'g' && depth > 0) {
        depth -= 1;
        stack.pop();
      }
      continue;
    }
    if (tag === 'g') {
      if (!selfClosing) {
        depth += 1;
        stack.push(a.transform ? mul(stack[depth - 1], parseTransform(a.transform)) : stack[depth - 1]);
      }
      continue;
    }
    if (tag === 'svg') continue;

    const mat = a.transform
      ? mul(stack[depth], parseTransform(a.transform))
      : stack[depth];
    const pts = localPoints(tag, a);
    if (!pts.length) continue;
    const h = halfStroke(a);
    for (const [x, y] of pts) {
      const [wx, wy] = apply(mat, x, y);
      minX = Math.min(minX, wx - h);
      maxX = Math.max(maxX, wx + h);
      minY = Math.min(minY, wy - h);
      maxY = Math.max(maxY, wy + h);
    }
  }
  return [minX, SIZE - maxX, minY, SIZE - maxY];
}
