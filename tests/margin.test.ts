import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { outerMargins, MIN_MARGIN, SIZE } from './svgGeometry';

/**
 * 描边外缘边距的回归测试。
 *
 * 规范（skills/naive-icons/reference/design-spec.md 第 2 节）：主体**含描边外缘**
 * 距画布边缘 ≥ 3 单位，即 48 宽画布里内容不能超出 3 ~ 45。
 *
 * 这条规则以前只靠肉眼把关，于是陆续攒下 30 枚违规（sun / pause / google-chrome 的
 * 外缘只有 2.25，rainbow 与 flag 甚至到 0.75）。补图时最容易照着现有图标描，
 * 也就最容易继续复制违规——所以这里用代码钉住。
 *
 * 判定要点：按**描边外缘**算，不是按路径中心线。stroke-width 3.5 会让描边向外
 * 扩 1.75，中心线在 4.75 处才算安全，4 不算。
 */

const files = readdirSync('svg').filter((f) => f.endsWith('.svg'));

describe('SVG 的描边外缘边距', () => {
  it('svg 数量与库一致', () => {
    expect(files.length).toBe(178);
  });

  it(`每枚图标的四边边距都不小于 ${MIN_MARGIN} 单位`, () => {
    const bad: string[] = [];
    for (const f of files) {
      const m = outerMargins(readFileSync(`svg/${f}`, 'utf8'));
      if (Math.min(...m) < MIN_MARGIN - 1e-6) {
        bad.push(`${f}: ${m.map((v) => v.toFixed(2)).join(' / ')}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('边距是在 48x48 画布里算的，不是别的尺寸', () => {
    expect(SIZE).toBe(48);
  });
});
