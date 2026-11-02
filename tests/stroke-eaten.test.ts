import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { findEatenShapes } from './strokeEaten';

/**
 * 回归测试：小色块的填充不能被它自己的描边完全吃掉。
 *
 * 根节点写死了 stroke-width="3.5"，这条描边会继承给内部所有没写 stroke 的形状，
 * 描边向内吃 1.75 单位。半径不够大的色块于是整个消失——渲染出来是一坨墨色，
 * 强调色没了。之前 book 的白眼睛、water-cup 的奶白气泡、猫头鹰的黄嘴、企鹅的橘脚，
 * 都是这么没的；而且因为「svg 里少写了几个字」，肉眼看源码完全看不出来。
 *
 * 正确做法：小色块自己写 stroke="none"（search.svg / cat.svg 一直是这么写的，
 * 只是全库普遍遗漏）。
 *
 * 判据与局限见 tests/strokeEaten.ts 的文件头：
 *   circle / ellipse / rect —— 内切圆半径精确判定；
 *   path —— 闭合的用「最小宽度」和「2A/P」这两条对内切圆半径成立的上界，
 *   开放的用「隐式闭合边到曲线的厚度」（闭合边不参与描边，不能按整圈算）。
 * 上界只会漏报，不会误报。
 */

const files = readdirSync('svg').filter((f) => f.endsWith('.svg'));

describe('小色块不会被自身描边吃光', () => {
  it('没有形状的填充被自己的描边完全覆盖', () => {
    const bad: string[] = [];
    for (const f of files) {
      for (const p of findEatenShapes(readFileSync(`svg/${f}`, 'utf8'))) {
        bad.push(`${f}: ${p.detail}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('检测器自己抓得住问题，不会空转', () => {
    const wrap = (body: string) =>
      `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#2A2A2A" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">\n${body}\n</svg>`;

    // r=1.75 的白点正好被 3.5 描边盖住 → 抓得到
    expect(findEatenShapes(wrap('<circle cx="24" cy="24" r="1.75" fill="#FFFFFF"/>'))).toHaveLength(1);
    // 补上 stroke="none" 就没事了
    expect(findEatenShapes(wrap('<circle cx="24" cy="24" r="1.75" fill="#FFFFFF" stroke="none"/>'))).toHaveLength(0);
    // r 够大也没事
    expect(findEatenShapes(wrap('<circle cx="24" cy="24" r="2.5" fill="#FFFFFF"/>'))).toHaveLength(0);
    // 扁椭圆：最小曲率半径 = 1^2/5 = 0.2 → 抓得到
    expect(findEatenShapes(wrap('<ellipse cx="24" cy="24" rx="5" ry="1" fill="#E9C46A"/>'))).toHaveLength(1);
    // 细长条：min(w,h)/2 = 1.5 ≤ 1.75 → 抓得到
    expect(findEatenShapes(wrap('<rect x="10" y="20" width="10" height="3" fill="#588157"/>'))).toHaveLength(1);
    // 闭合 path：细长三角 → 抓得到
    expect(findEatenShapes(wrap('<path d="M21 31 L27 31 L24 35 Z" fill="#E76F51"/>'))).toHaveLength(1);
    // 同一个三角加粗到描边吃不掉 → 没事
    expect(findEatenShapes(wrap('<path d="M18 31 L30 31 L24 37 Z" fill="#E76F51"/>'))).toHaveLength(0);
    // 开放 path：闭合边不描边，露出来的那一条还剩 3 单位厚 → 不算被吃光
    expect(findEatenShapes(wrap('<path d="M20 38 C20 42 28 42 28 38" fill="#E76F51"/>'))).toHaveLength(0);
    // 墨色压墨色不算缺陷
    expect(findEatenShapes(wrap('<circle cx="24" cy="24" r="1" fill="#2A2A2A"/>'))).toHaveLength(0);
    // 没有填充的纯线条不算
    expect(findEatenShapes(wrap('<circle cx="24" cy="24" r="1" fill="none"/>'))).toHaveLength(0);
  });
});
