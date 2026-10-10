import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

/**
 * SVG 的 stroke-width 是合法 kebab-case，JSX 里必须写 camelCase。TSX 的 body 从 SVG
 * 原样搬过来，历史上忘了转换，React 会报 "Invalid DOM property `stroke-width`"。
 * 159 枚里曾有 109 枚（68%）中招。
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
  it('163 个组件都存在', () => {
    expect(files.length).toBe(163);
  });

  it('JSX 体内不含 kebab-case 属性', () => {
    const bad = files.filter((f) => KEBAB.test(jsxBody(f)));
    expect(bad).toEqual([]);
  });

  it('内层描边写成按比例缩放，而不是写死的字面量', () => {
    // 只转 camelCase 不够：子元素自带值会挡住继承，内层必须写成 sw(设计值) 跟着缩放
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
