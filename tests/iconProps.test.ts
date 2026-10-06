import { describe, expect, it } from 'vitest';
import { HomeIcon, scaledStroke } from '../src';

/**
 * 以前 normalizeIconProps 无条件写 svgProps.width = size，
 * 于是 props 里传的 width / height 被静默吃掉，README 承诺的
 * 「单独指定宽或高」根本做不到。这里钉住优先级规则：
 *   传了具体的宽或高就以它为准，没传的另一边回落到 size。
 */
describe('normalizeIconProps 的 width / height', () => {
  const render = (props: Record<string, unknown>) =>
    (HomeIcon as unknown as { render: (p: unknown, r: null) => { props: Record<string, unknown> } })
      .render(props, null).props;

  it('不传时给 24 × 24 的默认值', () => {
    expect(render({}).width).toBe(24);
    expect(render({}).height).toBe(24);
  });

  it('size 同时决定宽高', () => {
    expect(render({ size: 32 }).width).toBe(32);
    expect(render({ size: 32 }).height).toBe(32);
  });

  it('width 单独生效，另一边回落到 size', () => {
    const p = render({ size: 32, width: 64 });
    expect(p.width).toBe(64);
    expect(p.height).toBe(32);
  });

  it('height 单独生效，另一边回落到默认 24', () => {
    const p = render({ height: 64 });
    expect(p.width).toBe(24);
    expect(p.height).toBe(64);
  });

  it('width 与 height 都传时各自生效', () => {
    const p = render({ width: 40, height: 64 });
    expect(p.width).toBe(40);
    expect(p.height).toBe(64);
  });

  it('接受字符串尺寸', () => {
    expect(render({ width: '2em' }).width).toBe('2em');
    expect(render({ size: '1.5rem' }).width).toBe('1.5rem');
  });

  it('size 缺省但只给一边时，另一边是 24 而非 undefined', () => {
    expect(render({ width: 40 }).height).toBe(24);
  });
});

describe('size 的边界值', () => {
  const render = (props: Record<string, unknown>) =>
    (HomeIcon as unknown as { render: (p: unknown, r: null) => { props: Record<string, unknown> } })
      .render(props, null).props;

  // 以前用解构默认值 `const { size = 24 }`，它只对 undefined 生效。
  // `size={isLarge ? 32 : null}` 这种写法会传进 null，导致 svg 上 width/height
  // 属性整个消失，图标按浏览器默认尺寸渲染。
  it('size={null} 回落 24，而不是让属性消失', () => {
    expect(render({ size: null }).width).toBe(24);
    expect(render({ size: null }).height).toBe(24);
  });

  it('size={undefined} 回落 24', () => {
    expect(render({ size: undefined }).width).toBe(24);
  });

  it('size 为负数时回落 24', () => {
    expect(render({ size: -10 }).width).toBe(24);
    expect(render({ size: -10 }).height).toBe(24);
  });

  it('size={0} 保留 0（用 0 隐藏图标是合理用法）', () => {
    expect(render({ size: 0 }).width).toBe(0);
  });

  it('width={null} 回落而不是产出 null', () => {
    expect(render({ width: null }).width).toBe(24);
  });
});

describe('strokeWidth 按比例缩放', () => {
  it('默认 3.5 时 scale 为 1，设计值原样保留', () => {
    const sw = scaledStroke(undefined);
    expect(sw(3.5)).toBe(3.5);
    expect(sw(4)).toBe(4);
    expect(sw(1.5)).toBe(1.5);
  });

  it('传 7 时整体加倍，层次关系保持', () => {
    const sw = scaledStroke(7);
    expect(sw(3.5)).toBe(7);
    expect(sw(4)).toBe(8);
    expect(sw(1.5)).toBe(3);
  });

  it('传 2 时整体缩小', () => {
    const sw = scaledStroke(2);
    expect(sw(3.5)).toBeCloseTo(2);
    expect(sw(7)).toBeCloseTo(4);
  });

  it('非法值（0 / 负数 / 字符串）回落到基准 3.5，不至于把图标画没', () => {
    for (const v of [0, -4, '3px', undefined, null]) {
      expect(scaledStroke(v as never)(3.5)).toBe(3.5);
    }
  });
});
