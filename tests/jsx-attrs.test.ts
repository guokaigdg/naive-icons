import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

/**
 * SVG 里 stroke-width / stroke-linecap / stroke-linejoin 是合法的 kebab-case，
 * JSX 里必须写 camelCase。TSX 的 body 是从 SVG 原样搬过来的，历史上忘了转换，
 * 结果 React 报 "Invalid DOM property `stroke-width`" 且属性完全失效——
 * 表现为 <Icon strokeWidth={7} /> 只加粗外框、内层线条纹丝不动，视觉直接断裂。
 * 159 枚里曾有 109 枚（68%）中招，从 1.1/1.2 一路带到线上。
 */
const files = readdirSync('src').filter((f) => f.endsWith('Icon.tsx'));
const KEBAB = /\s([a-z]+-[a-z]+)="/;

/** 只取 JSX 体：根 <svg ...> 之后、</svg> 之前。根节点本来就是 camelCase。 */
function jsxBody(file: string): string {
  const L = readFileSync(`src/${file}`, 'utf8').split('\n');
  const i = L.findIndex((l) => l.trim().startsWith('<svg'));
  const j = L.length - 1 - [...L].reverse().findIndex((l) => l.trim() === '</svg>');
  return L.slice(i + 1, j).join('\n');
}

describe('TSX 里的 SVG 属性名', () => {
  it('159 个组件都存在', () => {
    expect(files.length).toBe(159);
  });

  it('JSX 体内不含 kebab-case 属性', () => {
    const bad = files.filter((f) => KEBAB.test(jsxBody(f)));
    expect(bad).toEqual([]);
  });

  it('内层描边写成按比例缩放，而不是写死的字面量', () => {
    // alert-circle 的内层原本是 stroke-width="3.5" / "4"。只转成 camelCase 还不够：
    // SVG 的 stroke-width 可继承，但子元素自带值就挡住了根节点的 strokeWidth，
    // 表现为 <Icon strokeWidth={7} /> 只加粗外框、内层纹丝不动。
    // 所以内层必须写成 strokeWidth={sw(设计值)}，跟着属性按比例缩放。
    const body = jsxBody('AlertCircleIcon.tsx');
    expect(body).toContain('strokeWidth={sw(3.5)}');
    expect(body).toContain('strokeWidth={sw(4)}');
    expect(body).not.toMatch(KEBAB);
    // 组件里必须有 sw 的声明
    expect(readFileSync('src/AlertCircleIcon.tsx', 'utf8'))
      .toContain('const sw = scaledStroke(props.strokeWidth)');
  });

  it('内层不带描边的图标不该凭空多出 sw 调用', () => {
    // HomeIcon 的内层全靠继承根节点，不该出现 sw
    expect(jsxBody('HomeIcon.tsx')).not.toContain('sw(');
  });

  it('svg/ 源文件保持 kebab-case（那是合法的，不能被"修"成 camel）', () => {
    const svg = readFileSync('svg/alert-circle.svg', 'utf8');
    expect(svg).toContain('stroke-width="3.5"');
  });
});
