import { describe, expect, it } from 'vitest';
import * as pkg from '../src';

const ids = Object.keys(pkg).filter((k) => k.endsWith('Icon'));

/**
 * 这两条曾经长期是坏的：src/types.ts 里 NAIVE_PALETTE / IconProps / IconName /
 * IconComponent / PaletteColor 都有定义，但 src/index.ts 只导出了图标组件，
 * README 教的 import { NAIVE_PALETTE } 直接报运行时 SyntaxError。
 */
describe('包入口的导出', () => {
  it('导出全部图标组件', () => {
    expect(ids.length).toBe(159);
  });

  it('导出 NAIVE_PALETTE', () => {
    expect(pkg.NAIVE_PALETTE).toBeDefined();
    expect(Object.keys(pkg.NAIVE_PALETTE)).toHaveLength(9);
    expect(pkg.NAIVE_PALETTE.ink).toBe('#2A2A2A');
  });

  it('图标 id 与 svg/ 目录一一对应', async () => {
    const { readdirSync } = await import('node:fs');
    const svgs = readdirSync('svg').filter((f) => f.endsWith('.svg')).map((f) => f.slice(0, -4));
    const comps = new Set(ids);
    const missing = svgs.filter((s) => !comps.has(`${s.split('-').map((p) => p[0].toUpperCase() + p.slice(1)).join('')}Icon`));
    expect(missing).toEqual([]);
  });
});
