import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import * as icons from '../src';
import { iconNames } from '../src';

/**
 * 图形保真测试：731 枚 React 组件渲染出来的图形，必须与 svg/ 里的源文件逐属性一致。
 *
 * 这是 React 版最强的一条约束——仓库里 svg/ 是唯一事实来源，React 组件、Vue 组件、
 * 官网、skill 目录表全都由它生成。React 组件一旦与 svg/ 对不上（比如转换时把某个
 * transform 弄丢、把两层 path 拍平、或者像历史上那样手工改了 svg 却忘了重跑生成脚本），
 * 图形就会变形，而这个测试会当场红掉。
 *
 * 这条测试是补上的：Vue 侧早就有同名的保真测试，React 侧却一直没有，于是
 * `eye` / `eye-off` 的 React 组件在 svg 重绘后悄悄停留在旧画面，还跟着发布出去了。
 * 详见 CHANGELOG 1.15.0。
 *
 * 注意比对的是「图形部分」，根节点属性（width / height / aria-hidden / role）
 * 由 jsx-attrs.test.ts 单独盯。
 */

const SVG_DIR = join(process.cwd(), 'svg');

/** React 元素（只用到本测试关心的几个字段）。 */
type El = { type: unknown; props: Record<string, unknown> };

/** SVG 节点。 */
type Node = { tag: string; attrs: Record<string, string>; children: Node[] };

const TAG_RE = /<(\/?)([a-zA-Z][-a-zA-Z0-9]*)((?:\s+[^\s=]+\s*=\s*"[^"]*")*)\s*(\/?)>/g;

function parseTree(html: string): Node[] {
  const root: Node[] = [];
  const stack: Node[][] = [root];
  const re = new RegExp(TAG_RE.source, 'g');
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const [, closing, tag, attrStr, selfClose] = m;
    if (closing) {
      if (stack.length > 1) stack.pop();
      continue;
    }
    const attrs: Record<string, string> = {};
    const are = /([:\w-]+)\s*=\s*"([^"]*)"/g;
    let a: RegExpExecArray | null;
    while ((a = are.exec(attrStr))) attrs[a[1]] = a[2];
    const node: Node = { tag, attrs, children: [] };
    stack[stack.length - 1].push(node);
    if (!selfClose) stack.push(node.children);
  }
  return root;
}

/** 树转成可比较的文本。属性排序后比对，避免被属性顺序差异误伤。 */
function normalize(nodes: Node[], depth = 0): string {
  const pad = '  '.repeat(depth);
  return nodes
    .map((n) => {
      const attrs = Object.entries(n.attrs)
        .sort(([x], [y]) => (x < y ? -1 : x > y ? 1 : 0))
        .map(([k, v]) => `${k}=${v}`)
        .join('|');
      const head = `${pad}${n.tag}[${attrs}]`;
      const kids = normalize(n.children, depth + 1);
      return kids ? `${head}\n${kids}` : head;
    })
    .join('\n');
}

/** React 的 camelCase 属性名 → SVG 的 kebab-case 属性名。 */
function kebab(name: string): string {
  return name.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`);
}

/** React 组件的 props → 与 SVG 同形状的节点列表。 */
function reactNodes(el: El): Node[] {
  const raw = el.props.children as unknown;
  // React 在只有一个子元素时把 children 设成该元素本身，不是数组
  const list: unknown[] = Array.isArray(raw) ? raw : raw == null ? [] : [raw];
  const flat = list.flat(8) as unknown[];
  const out: Node[] = [];
  for (const c of flat) {
    if (!c || typeof c !== 'object') continue;
    const child = c as El;
    if (typeof child.type !== 'string') continue;
    const attrs: Record<string, string> = {};
    for (const [k, v] of Object.entries(child.props)) {
      if (k === 'children' || k === 'key' || k === 'ref') continue;
      if (v === undefined || v === null) continue;
      attrs[kebab(k)] = String(v);
    }
    out.push({ tag: child.type, attrs, children: reactNodes(child) });
  }
  return out;
}

function sourceBody(id: string): string {
  const text = readFileSync(join(SVG_DIR, `${id}.svg`), 'utf8');
  return text.slice(text.indexOf('>') + 1, text.lastIndexOf('</svg>'));
}

function componentName(id: string): string {
  return `${id.split('-').map((p) => p[0].toUpperCase() + p.slice(1)).join('')}Icon`;
}

function renderIcon(name: string): El {
  const Comp = (icons as Record<string, unknown>)[name];
  return (Comp as unknown as { render: (p: unknown, r: null) => El }).render({}, null);
}

describe('图形保真：React 组件 vs svg/ 源文件', () => {
  it('库内图标数量与 iconNames 一致', () => {
    // 计数不写死：图标增减时这里不会变成维护陷阱（Vue 那侧仍写死，见 vue/tests/svg-parity.test.ts）
    expect(iconNames.length).toBe(
      readdirSync(SVG_DIR).filter((f) => f.endsWith('.svg')).length,
    );
  });

  it.each(iconNames.map((id) => [id, componentName(id)] as const))(
    '%s 与源文件逐属性一致',
    (id, name) => {
      const svg = renderIcon(name);
      expect(normalize(reactNodes(svg))).toBe(normalize(parseTree(sourceBody(id))));
    },
  );
});
