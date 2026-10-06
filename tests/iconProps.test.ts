import { describe, expect, it } from 'vitest';
import { HomeIcon } from '../src';

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
