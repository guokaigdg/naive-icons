import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';
import * as icons from '../src';
import { iconNames } from '../src';

/**
 * 图形保真测试：201 枚组件渲染出来的图形，必须与 svg/ 里的源文件逐属性一致。
 *
 * 这是 Vue 版最强的一条约束——仓库里 svg/ 是唯一事实来源，React 组件、Vue 组件、
 * 官网、skill 目录表全都由它生成。Vue 组件一旦与 svg/ 对不上（比如转换时把某个
 * transform 弄丢、把两层 path 拍平），图形就会变形，而这个测试会当场红掉。
 *
 * 注意比对的是「图形部分」，根节点属性（width / height / aria-hidden / role）
 * 由 render.test.ts 单独盯。
 */

const SVG_DIR = join(process.cwd(), '..', 'svg');

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

function sourceBody(id: string): string {
  const text = readFileSync(join(SVG_DIR, `${id}.svg`), 'utf8');
  return text.slice(text.indexOf('>') + 1, text.lastIndexOf('</svg>'));
}

function renderedBody(html: string): string {
  return html.slice(html.indexOf('>') + 1, html.lastIndexOf('</svg>'));
}

function componentName(id: string): string {
  return `${id.split('-').map((p) => p[0].toUpperCase() + p.slice(1)).join('')}Icon`;
}

async function renderComponent(name: string): Promise<string> {
  const Comp = (icons as Record<string, unknown>)[name];
  const app = createSSRApp({ render: () => h(Comp as never, {}) });
  return renderToString(app);
}

describe('图形保真：Vue 组件 vs svg/ 源文件', () => {
  it('库内图标数量与 iconNames 一致', () => {
    expect(iconNames.length).toBe(201);
  });

  it.each(iconNames.map((id) => [id, componentName(id)] as const))(
    '%s 与源文件逐属性一致',
    async (id, name) => {
      const html = await renderComponent(name);
      expect(normalize(parseTree(renderedBody(html)))).toBe(
        normalize(parseTree(sourceBody(id))),
      );
    },
  );
});
