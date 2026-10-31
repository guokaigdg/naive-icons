#!/usr/bin/env python3
"""
生成 naive-icons-vue 包的源码。源永远是 svg/。

产出（都不要手改）：
  vue/src/<Name>Icon.ts   201 枚 Vue 3 组件
  vue/src/index.ts         barrel
  vue/src/iconNames.ts     运行时 id 列表

组件模板与 emit.py --format vue 同源（渲染函数复用 emit.render_vue），
所以 skill 吐给用户的 Vue 代码和仓库里落盘的是同一份。

    python3 scripts/generate_vue.py          # 生成
    python3 scripts/generate_vue.py --check  # 只校验是否已是最新（CI 可用）
"""
import argparse
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SVG_DIR = os.path.join(ROOT, 'svg')
VUE_SRC = os.path.join(ROOT, 'vue', 'src')

# emit.py 在 skills/ 里且自包含（只用标准库），渲染函数直接复用它，
# 免得 Vue 组件模板在两个地方各写一份、日后走样。
sys.path.insert(0, os.path.join(ROOT, 'skills', 'naive-icons', 'scripts'))
import emit  # noqa: E402  —— 路径是上面插进去的


def component_name(icon_id):
    return emit.component_name(icon_id)


def read_body(icon_id):
    """读 svg/<id>.svg，拆成 (根节点行, body 列表)。"""
    with open(os.path.join(SVG_DIR, icon_id + '.svg'), encoding='utf-8') as f:
        text = f.read()
    root, body = emit.split_svg(text)
    if root is None:
        raise SystemExit(f'{icon_id}.svg 格式异常：根节点不在首行')
    return body


def build_index(ids):
    """barrel。顺序与 React 版 src/index.ts 一致（按组件名排）。"""
    lines = []
    for icon_id in sorted(ids, key=component_name):
        comp = component_name(icon_id)
        lines.append(f"export {{ {comp} }} from './{comp}';")
    lines.append('')
    lines.append('// 转发类型与色板。少了这几行，README 里的')
    lines.append('//   import { NAIVE_PALETTE } from \'naive-icons-vue\'')
    lines.append('//   import type { IconProps } from \'naive-icons-vue\'')
    lines.append('// 会分别报运行时 SyntaxError 与 TS2305 / TS2459。')
    lines.append('export type { IconProps, IconComponent, PaletteColor } from \'./types\';')
    lines.append('export { NAIVE_PALETTE } from \'./types\';')
    lines.append('export { normalizeIconProps, scaledStroke, resolveStrokeWidth } from \'./iconProps\';')
    lines.append('')
    lines.append('// 运行时图标名列表 + 自建图标工厂。')
    lines.append('// iconNames 让「按名字动态取图标」不再需要 import * as（那会把 201 枚全打进包）；')
    lines.append('// createIcon 让自建图标复用与内置图标一致的根节点、无障碍与描边缩放逻辑。')
    lines.append('export { iconNames } from \'./iconNames\';')
    lines.append('export type { IconId, IconName } from \'./iconNames\';')
    lines.append('export { createIcon, NAIVE_ROOT } from \'./createIcon\';')
    lines.append('export type { IconBody } from \'./createIcon\';')
    return '\n'.join(lines) + '\n'


def build_icon_names(ids):
    lines = [
        '/**',
        ' * 所有内置图标的 id（kebab-case），运行时数组。',
        ' *',
        ' * IconId 只是纯类型，编译后不存在；需要「按名字动态取图标」时用这个数组，',
        ' * 配合动态 import 别把 201 枚全打进包：',
        ' *',
        " * import { iconNames } from 'naive-icons-vue';",
        ' *',
        " * const map = { 'arrow-up-down': () => import('naive-icons-vue/icons/ArrowUpDownIcon').then(m => m.ArrowUpDownIcon) };",
        ' */',
        'export const iconNames = [',
    ]
    lines += [f"  '{i}'," for i in sorted(ids)]
    lines += [
        '] as const;',
        '',
        '/** 所有内置图标的 id 类型，与 iconNames 一一对应 */',
        'export type IconId = (typeof iconNames)[number];',
        '',
        '/** 所有内置图标的组件名类型 */',
        'export type IconName =',
    ]
    comps = sorted(component_name(i) for i in ids)
    lines += [f"  | '{c}'" for c in comps] + [';']
    return '\n'.join(lines) + '\n'


def main():
    ap = argparse.ArgumentParser(description='生成 naive-icons-vue 包的源码')
    ap.add_argument('--check', action='store_true', help='只校验是否最新，不写文件')
    args = ap.parse_args()

    ids = sorted(n[:-4] for n in os.listdir(SVG_DIR) if n.endswith('.svg'))

    targets = {}
    for icon_id in ids:
        body = read_body(icon_id)
        comp = component_name(icon_id)
        targets[os.path.join(VUE_SRC, comp + '.ts')] = emit.render_vue(icon_id, body)
    targets[os.path.join(VUE_SRC, 'index.ts')] = build_index(ids)
    targets[os.path.join(VUE_SRC, 'iconNames.ts')] = build_icon_names(ids)

    stale = []
    for path, want in sorted(targets.items()):
        have = open(path, encoding='utf-8').read() if os.path.exists(path) else None
        rel = os.path.relpath(path, ROOT)
        if have == want:
            continue
        if args.check:
            stale.append(rel)
        else:
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(want)
            print(f'写入 {rel}')

    if stale:
        print(f'✗ 以下文件已过期，请重跑 python3 scripts/generate_vue.py：', file=sys.stderr)
        for s in stale:
            print(f'  {s}', file=sys.stderr)
        return 1
    if args.check:
        print(f'✓ vue/src 已是最新（{len(ids)} 枚）')
    return 0


if __name__ == '__main__':
    sys.exit(main())
