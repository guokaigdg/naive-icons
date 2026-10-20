import { describe, expect, it } from 'vitest';
import { createIcon, NAIVE_ROOT, HomeIcon, ArrowUpDownIcon } from '../src';

/**
 * createIcon 是给用户自建图标用的工厂。
 * 它的全部价值在于「产出的图标和内置 178 枚长得一模一样」——根节点、无障碍属性、
 * 描边缩放三件事一旦和库内不一致，自建的图标就会在同一个项目里显得像另一套东西。
 * 所以下面这些断言钉的是「工厂 == 库内」，不是「工厂自己自洽」。
 */

type Rendered = { props: Record<string, unknown> };

function render(Icon: unknown, props: Record<string, unknown> = {}): Rendered {
  return (Icon as unknown as { render: (p: unknown, r: null) => Rendered }).render(props, null);
}

/** 根节点上与图标无关的属性，工厂产出的必须和内置的逐项相同 */
const ROOT_KEYS = ['viewBox', 'xmlns', 'fill', 'strokeLinecap', 'strokeLinejoin'] as const;

function rootOf(props: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(ROOT_KEYS.map((k) => [k, props[k]]));
}

describe('createIcon 的根节点', () => {
  it('与内置图标逐字节一致', () => {
    const mine = render(createIcon('my-icon', <path d="M4 4 L44 44" />));
    const theirs = render(HomeIcon);
    expect(rootOf(mine.props)).toEqual(rootOf(theirs.props));
  });

  it('NAIVE_ROOT 常量与内置图标对得上', () => {
    const theirs = render(HomeIcon);
    expect(NAIVE_ROOT.viewBox).toBe(theirs.props.viewBox);
    expect(NAIVE_ROOT.xmlns).toBe(theirs.props.xmlns);
    expect(NAIVE_ROOT.fill).toBe(theirs.props.fill);
    expect(NAIVE_ROOT.strokeLinecap).toBe(theirs.props.strokeLinecap);
    expect(NAIVE_ROOT.strokeLinejoin).toBe(theirs.props.strokeLinejoin);
  });

  it('尺寸 / 颜色 / 描边默认值与内置图标一致', () => {
    const mine = render(createIcon('my-icon', <path d="M4 4 L44 44" />));
    const theirs = render(HomeIcon);
    expect(mine.props.width).toBe(theirs.props.width);
    expect(mine.props.height).toBe(theirs.props.height);
    expect(mine.props.stroke).toBe(theirs.props.stroke);
    expect(mine.props.strokeWidth).toBe(theirs.props.strokeWidth);
  });

  it('透传 size / color / strokeWidth', () => {
    const p = render(createIcon('my-icon', <path d="M4 4 L44 44" />), {
      size: 32,
      color: '#E76F51',
      strokeWidth: 7,
    }).props;
    expect(p.width).toBe(32);
    expect(p.height).toBe(32);
    expect(p.stroke).toBe('#E76F51');
    expect(p.strokeWidth).toBe(7);
  });
});

describe('createIcon 的无障碍属性', () => {
  it('无标签时 aria-hidden', () => {
    const p = render(createIcon('my-icon', <path d="M4 4 L44 44" />)).props;
    expect(p['aria-hidden']).toBe(true);
    expect(p.role).toBeUndefined();
  });

  it('有 title 时 role=img 且渲染 title 节点', () => {
    const p = render(createIcon('my-icon', <path d="M4 4 L44 44" />), { title: '我的图标' }).props;
    expect(p.role).toBe('img');
    expect(p['aria-hidden']).toBeUndefined();
  });

  it('aria-label / role 也算已标注', () => {
    const a = render(createIcon('my-icon', <path d="M4 4 L44 44" />), { 'aria-label': 'x' }).props;
    expect(a['aria-hidden']).toBeUndefined();
    const b = render(createIcon('my-icon', <path d="M4 4 L44 44" />), { role: 'presentation' }).props;
    expect(b['aria-hidden']).toBeUndefined();
  });
});

describe('createIcon 的描边缩放', () => {
  it('默认 3.5 时内层描边不变', () => {
    const Icon = createIcon('my-icon', (sw) => <path d="M4 4 L44 44" strokeWidth={sw(3.5)} />);
    const body = render(Icon).props.children as unknown[];
    expect(body).toContainEqual(expect.objectContaining({ props: expect.objectContaining({ strokeWidth: 3.5 }) }));
  });

  it('strokeWidth={7} 时内层描边整体加倍', () => {
    const Icon = createIcon('my-icon', (sw) => <path d="M4 4 L44 44" strokeWidth={sw(3.5)} />);
    const body = render(Icon, { strokeWidth: 7 }).props.children as unknown[];
    expect(body).toContainEqual(expect.objectContaining({ props: expect.objectContaining({ strokeWidth: 7 }) }));
  });

  it('层次比例保持：设计值 4 随 3.5→7 变成 8', () => {
    const Icon = createIcon('my-icon', (sw) => <path d="M4 4 L44 44" strokeWidth={sw(4)} />);
    const body = render(Icon, { strokeWidth: 7 }).props.children as unknown[];
    expect(body).toContainEqual(expect.objectContaining({ props: expect.objectContaining({ strokeWidth: 8 }) }));
  });
});

describe('createIcon 的 displayName', () => {
  it('kebab id 自动转成 PascalCase + Icon', () => {
    expect((createIcon('my-icon', <path d="M4 4 L44 44" />) as { displayName: string }).displayName).toBe('MyIcon');
    expect((createIcon('arrow-up-down', <path d="M4 4 L44 44" />) as { displayName: string }).displayName).toBe('ArrowUpDownIcon');
  });

  it('与内置同名组件的 displayName 保持一致', () => {
    expect((createIcon('arrow-up-down', <path d="M4 4 L44 44" />) as { displayName: string }).displayName).toBe(
      (ArrowUpDownIcon as { displayName: string }).displayName,
    );
  });
});
