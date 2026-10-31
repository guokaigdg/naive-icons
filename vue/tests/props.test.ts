import { describe, expect, it } from 'vitest';
import { normalizeIconProps, resolveStrokeWidth, scaledStroke } from '../src';

/** 钉住优先级：传了具体的宽或高就以它为准，没传的另一边回落到 size。 */
describe('normalizeIconProps 的 width / height', () => {
  it('不传时给 24 × 24 的默认值', () => {
    const p = normalizeIconProps({});
    expect(p.width).toBe(24);
    expect(p.height).toBe(24);
  });

  it('size 同时决定宽高', () => {
    const p = normalizeIconProps({ size: 32 });
    expect(p.width).toBe(32);
    expect(p.height).toBe(32);
  });

  it('width 单独生效，另一边回落到 size', () => {
    const p = normalizeIconProps({ size: 32, width: 64 });
    expect(p.width).toBe(64);
    expect(p.height).toBe(32);
  });

  it('height 单独生效，另一边回落到默认 24', () => {
    const p = normalizeIconProps({ height: 64 });
    expect(p.width).toBe(24);
    expect(p.height).toBe(64);
  });

  it('width 与 height 都传时各自生效', () => {
    const p = normalizeIconProps({ width: 40, height: 64 });
    expect(p.width).toBe(40);
    expect(p.height).toBe(64);
  });

  it('接受字符串尺寸', () => {
    expect(normalizeIconProps({ width: '2em' }).width).toBe('2em');
    expect(normalizeIconProps({ size: '1.5rem' }).width).toBe('1.5rem');
  });

  it('非有限值回落默认值', () => {
    expect(normalizeIconProps({ width: Number.NaN }).width).toBe(24);
    expect(normalizeIconProps({ width: Number.POSITIVE_INFINITY }).width).toBe(24);
    expect(normalizeIconProps({ width: -10 }).width).toBe(24);
    expect(normalizeIconProps({ width: '' }).width).toBe(24);
  });

  it('0 是合法尺寸（用来隐藏图标）', () => {
    expect(normalizeIconProps({ width: 0 }).width).toBe(0);
    expect(normalizeIconProps({ size: 0 }).height).toBe(0);
  });
});

describe('normalizeIconProps 的语义属性映射', () => {
  it('color 映射到 stroke，fill 默认 none', () => {
    const p = normalizeIconProps({});
    expect(p.stroke).toBe('#2A2A2A');
    expect(p.fill).toBe('none');
  });

  it('自定义 color / fill 生效', () => {
    const p = normalizeIconProps({ color: '#E76F51', fill: '#FAEDCD' });
    expect(p.stroke).toBe('#E76F51');
    expect(p.fill).toBe('#FAEDCD');
  });

  it('strokeWidth 映射到 kebab-case 的 stroke-width', () => {
    expect(normalizeIconProps({})['stroke-width']).toBe(3.5);
    expect(normalizeIconProps({ strokeWidth: 7 })['stroke-width']).toBe(7);
  });

  it('size / width / height / title 不会漏进 svg 属性', () => {
    const p = normalizeIconProps({ size: 32, title: '家' });
    expect(p.size).toBeUndefined();
    expect(p.title).toBeUndefined();
  });

  it('其余属性（class / data-* / aria-*）原样透传', () => {
    const p = normalizeIconProps({ class: 'ic', 'data-x': '1', 'aria-label': '家' });
    expect(p.class).toBe('ic');
    expect(p['data-x']).toBe('1');
    expect(p['aria-label']).toBe('家');
  });
});

describe('resolveStrokeWidth', () => {
  it('默认 3.5', () => {
    expect(resolveStrokeWidth(undefined)).toBe(3.5);
    expect(resolveStrokeWidth(null)).toBe(3.5);
  });

  it('字符串数字与数字等价', () => {
    expect(resolveStrokeWidth('7')).toBe(7);
    expect(resolveStrokeWidth(7)).toBe(7);
  });

  it('非法值回落基准', () => {
    expect(resolveStrokeWidth('abc')).toBe(3.5);
    expect(resolveStrokeWidth(Number.NaN)).toBe(3.5);
    expect(resolveStrokeWidth(Number.POSITIVE_INFINITY)).toBe(3.5);
    expect(resolveStrokeWidth(-1)).toBe(3.5);
  });

  it('空串不能被当成 0（Number(空串) 是 0，会静默变成不描边）', () => {
    expect(resolveStrokeWidth('')).toBe(3.5);
    expect(resolveStrokeWidth('   ')).toBe(3.5);
  });

  it('0 合法，表示不描边', () => {
    expect(resolveStrokeWidth(0)).toBe(0);
  });
});

describe('scaledStroke', () => {
  it('默认 3.5 时设计值一根线都不变', () => {
    const sw = scaledStroke(undefined);
    expect(sw(3.5)).toBe(3.5);
    expect(sw(4)).toBe(4);
    expect(sw(2.5)).toBe(2.5);
  });

  it('传 7 时整体加倍且层次保持', () => {
    const sw = scaledStroke(7);
    expect(sw(3.5)).toBe(7);
    expect(sw(4)).toBe(8);
    expect(sw(2)).toBe(4);
  });

  it('结果取两位小数，不吐 17 位浮点', () => {
    const sw = scaledStroke(7);
    expect(String(sw(4))).not.toContain('00000');
    expect(sw(4)).toBe(8);
  });
});
