import { describe, expect, it } from 'vitest';
import { HomeIcon, normalizeIconProps, scaledStroke, resolveStrokeWidth } from '../src';

/** 钉住优先级：传了具体的宽或高就以它为准，没传的另一边回落到 size。 */
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

  // 解构默认值只对 undefined 生效，null 会让尺寸属性整个消失
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

  it('非法值回落到基准 3.5，不至于把图标画没', () => {
    // 0 不在这里：它是合法的「不描边」，根与内层一起归零才算一致
    for (const v of [-4, '3px', 'abc', undefined, null]) {
      expect(scaledStroke(v as never)(3.5)).toBe(3.5);
    }
  });
});

describe('strokeWidth 的边界与非法值', () => {
  const render = (props: Record<string, unknown>) =>
    (HomeIcon as unknown as { render: (p: unknown, r: null) => { props: Record<string, unknown> } })
      .render(props, null).props;

  it('字符串与数字等价——"7" 必须同样触发缩放', () => {
    const a = scaledStroke(7)(4);
    const b = scaledStroke('7')(4);
    expect(a).toBe(b);
    expect(a).toBe(8);
  });

  it('非法值回落到基准，不透传到 DOM', () => {
    for (const v of ['abc', '', '3.5px', NaN, -4, null, undefined, {} as never]) {
      expect(resolveStrokeWidth(v as never)).toBe(3.5);
      expect(scaledStroke(v as never)(4)).toBe(4);
    }
  });

  it('0 合法，根节点与内层一起归零', () => {
    expect(resolveStrokeWidth(0)).toBe(0);
    expect(scaledStroke(0)(4)).toBe(0);
    expect(render({ strokeWidth: 0 }).strokeWidth).toBe(0);
  });

  it('缩放结果取两位小数，不输出 17 位浮点', () => {
    expect(scaledStroke(10)(4)).toBe(11.43);
    expect(scaledStroke(100)(4)).toBe(114.29);
    expect(scaledStroke(0.5)(3.5)).toBe(0.5);
    // 整数倍必须精确
    expect(scaledStroke(7)(3.5)).toBe(7);
    expect(scaledStroke(7)(4)).toBe(8);
  });

  it('size / width / height 不泄漏进 svg 的 props', () => {
    // 不是 SVG 属性，留在 rest 里会被 {...rest} 带进 svg 的 props 污染下游
    const p = normalizeIconProps({ size: 32, width: 40, className: 'x' });
    expect(p).not.toHaveProperty('size');
    expect(p.width).toBe(40);
    expect(p.height).toBe(32);
    expect(p.className).toBe('x');
  });
});

describe('size / width / height 的非有限值', () => {
  const render = (props: Record<string, unknown>) =>
    (HomeIcon as unknown as { render: (p: unknown, r: null) => { props: Record<string, unknown> } })
      .render(props, null).props;

  const BAD = [NaN, Infinity, -Infinity, -1, -10];

  // 以前只有 size 过了 Number.isFinite 校验，width / height 走的是裸 `?? resolved`，
  // 于是 width={NaN} 会直接进 DOM：React 报 Received NaN，浏览器也忽略该属性。
  it.each(BAD)('size={%p} 回落 24', (v) => {
    expect(render({ size: v }).width).toBe(24);
    expect(render({ size: v }).height).toBe(24);
  });

  it.each(BAD)('width={%p} 回落，且不会被 size 救成 NaN', (v) => {
    expect(render({ width: v }).width).toBe(24);
    // size 合法时，width 非法仍回落到 size 的值而不是 NaN
    expect(render({ size: 32, width: v }).width).toBe(32);
  });

  it.each(BAD)('height={%p} 回落，且不会被 size 救成 NaN', (v) => {
    expect(render({ height: v }).height).toBe(24);
    expect(render({ size: 32, height: v }).height).toBe(32);
  });

  it('null 与 undefined 都回落', () => {
    for (const v of [null, undefined]) {
      expect(render({ size: v }).width).toBe(24);
      expect(render({ width: v }).width).toBe(24);
      expect(render({ height: v }).height).toBe(24);
    }
  });

  it('0 在三者上都保留（用来隐藏图标）', () => {
    expect(render({ size: 0 }).width).toBe(0);
    expect(render({ size: 0 }).height).toBe(0);
    expect(render({ width: 0 }).width).toBe(0);
    expect(render({ height: 0 }).height).toBe(0);
  });

  it('字符串尺寸原样透传', () => {
    expect(render({ size: '1em' }).width).toBe('1em');
    expect(render({ width: '2em' }).width).toBe('2em');
    expect(render({ height: '100%' }).height).toBe('100%');
  });

  // 空串不是合法尺寸值：渲染成 width="" 会被浏览器忽略，图标退回默认尺寸。
  // resolveStrokeWidth 早就把 '' 挡住了，三者必须一致。
  it.each(['', ' ', '\t', '\n', '   '])('空串尺寸 %p 回落，不透传', (v) => {
    expect(render({ size: v }).width).toBe(24);
    expect(render({ width: v }).width).toBe(24);
    expect(render({ height: v }).height).toBe(24);
    // size 合法时，width 空串回落到 size
    expect(render({ size: 32, width: v }).width).toBe(32);
    expect(render({ size: 32, height: v }).height).toBe(32);
  });

  it('带空白的合法字符串仍透传', () => {
    expect(render({ size: ' 1em ' }).width).toBe(' 1em ');
  });

  it('归一化后不产生任何 NaN / Infinity', () => {
    for (const v of BAD) {
      for (const p of [{ size: v }, { width: v }, { height: v }, { size: 32, width: v, height: v }]) {
        const r = render(p) as { width: unknown; height: unknown };
        expect(Number.isNaN(r.width)).toBe(false);
        expect(Number.isFinite(r.width) || typeof r.width === 'string').toBe(true);
        expect(Number.isNaN(r.height)).toBe(false);
        expect(Number.isFinite(r.height) || typeof r.height === 'string').toBe(true);
      }
    }
  });
});
