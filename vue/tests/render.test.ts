import { describe, expect, it } from 'vitest';
import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { HomeIcon, MapPinIcon, SunIcon, WifiIcon } from '../src';

/**
 * 渲染语义测试。
 *
 * Vue 版与 React 版（仓库根 tests/）必须给出同样的 DOM：同样的根节点属性、
 * 同样的无障碍标记、同样的描边缩放。差一个属性，用户看到的图标就可能变形。
 */

async function render(Comp: unknown, props: Record<string, unknown> = {}): Promise<string> {
  const app = createSSRApp({ render: () => h(Comp as never, props) });
  return renderToString(app);
}

function rootAttrs(html: string): Record<string, string> {
  const m = html.match(/^<svg\b([^>]*)>/);
  if (!m) throw new Error(`不是 svg 根节点: ${html.slice(0, 80)}`);
  const attrs: Record<string, string> = {};
  const re = /([:\w-]+)\s*=\s*"([^"]*)"/g;
  let a: RegExpExecArray | null;
  while ((a = re.exec(m[1]))) attrs[a[1]] = a[2];
  return attrs;
}

describe('根节点属性', () => {
  it('与 React 版逐项一致', async () => {
    const attrs = rootAttrs(await render(HomeIcon));
    expect(attrs).toMatchObject({
      viewBox: '0 0 48 48',
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: '#2A2A2A',
      'stroke-width': '3.5',
      width: '24',
      height: '24',
    });
  });

  it('size 同时决定宽高', async () => {
    const attrs = rootAttrs(await render(HomeIcon, { size: 32 }));
    expect(attrs.width).toBe('32');
    expect(attrs.height).toBe('32');
  });

  it('width 优先于 size，另一边回落到 size', async () => {
    const attrs = rootAttrs(await render(HomeIcon, { size: 32, width: 64 }));
    expect(attrs.width).toBe('64');
    expect(attrs.height).toBe('32');
  });

  it('color 映射到 stroke', async () => {
    const attrs = rootAttrs(await render(SunIcon, { color: '#E76F51' }));
    expect(attrs.stroke).toBe('#E76F51');
  });

  it('任意属性透传', async () => {
    const attrs = rootAttrs(await render(HomeIcon, { class: 'ic-a', id: 'a', 'data-x': '1' }));
    expect(attrs.class).toBe('ic-a');
    expect(attrs.id).toBe('a');
    expect(attrs['data-x']).toBe('1');
  });
});

describe('无障碍标记', () => {
  it('没有 label 时标记 aria-hidden', async () => {
    const attrs = rootAttrs(await render(HomeIcon));
    expect(attrs['aria-hidden']).toBe('true');
    expect(attrs.role).toBeUndefined();
  });

  it('有 title 时输出 <title> 与 role="img"，且不再 aria-hidden', async () => {
    const html = await render(HomeIcon, { title: '家' });
    const attrs = rootAttrs(html);
    expect(attrs.role).toBe('img');
    expect(attrs['aria-hidden']).toBeUndefined();
    expect(html).toContain('<title>家</title>');
  });

  it('有 aria-label 时同样不再 aria-hidden', async () => {
    const attrs = rootAttrs(await render(HomeIcon, { 'aria-label': '家' }));
    expect(attrs['aria-hidden']).toBeUndefined();
  });

  it('不输出空占位注释节点', async () => {
    // Vue 的数组子节点里塞 null 会渲染成 <!---->，React 版不会，这里不能有
    const html = await render(HomeIcon);
    expect(html).not.toContain('<!---->');
  });
});

describe('描边缩放', () => {
  it('根节点 strokeWidth 生效', async () => {
    const attrs = rootAttrs(await render(WifiIcon, { strokeWidth: 7 }));
    expect(attrs['stroke-width']).toBe('7');
  });

  it('内层自带描边宽度的元素跟着一起缩放', async () => {
    // WifiIcon 内层两道弧线的设计值是 4，基准 3.5 → 传 7 时整体加倍成 8
    const html = await render(WifiIcon, { strokeWidth: 7 });
    expect(html).toContain('stroke-width="8"');
  });

  it('默认 3.5 时内层描边与设计值一致', async () => {
    const html = await render(WifiIcon);
    expect(html).toContain('stroke-width="4"');
  });
});

describe('图形结构', () => {
  it('带 <g> 嵌套组的图标渲染出同样的层级', async () => {
    const html = await render(MapPinIcon);
    expect(html).toContain('transform="translate(11 2) scale(0.7)"');
    // g 组里有两个子元素
    const g = html.match(/<g[^>]*>([\s\S]*?)<\/g>/);
    expect(g).not.toBeNull();
    expect(g![1].match(/<(path|circle|rect|ellipse)\b/g)?.length).toBe(2);
  });

  it('每个图标都渲染出图形，不止根节点', async () => {
    const html = await render(HomeIcon);
    expect(html.match(/<(path|circle|rect|ellipse|line)\b/g)?.length).toBe(5);
  });
});
