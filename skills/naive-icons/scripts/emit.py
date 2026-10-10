#!/usr/bin/env python3
"""
naive-icons 代码输出 —— 把图标变成可直接粘贴的代码。

只用标准库。SVG 源码主要来自同目录的 icons.json（全部 163 枚收在这一个文件里，
由 scripts/build_skill_assets.py 从 svg/ 生成）。这样 skill 自包含：无论用
npx skills add 还是手动复制装到哪，都能出码，不需要项目里装了本库。

icons.json 缺失时才退回按目录找 svg/：
  1) --svg-dir 显式指定
  2) skill 自带的 scripts/svg/
  3) 从脚本所在位置向上找 naive-icons 仓库根
  4) 当前目录及上级目录的 node_modules/naive-icons/svg/

    python3 emit.py users user-plus                    # 默认 tsx
    python3 emit.py lock --format jsx --size 20         # 内联 JSX
    python3 emit.py refresh --format svg                # 原始 SVG 文件
    python3 emit.py bell --format html --color white    # 静态 HTML
    python3 emit.py trash --format json                 # 给 agent 消费
    python3 emit.py a b c --out src/icons --format tsx  # 批量落盘
"""
import argparse
import json
import os
import re
import re
import sys

# SVG 属性名 -> JSX 属性名。只列真正需要改写的，其余（cx/cy/r/d/fill/viewBox…）两边同名。
ATTR_JSX = {
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
}

ICON_COUNT = 163


def component_name(icon_id):
    """users -> UsersIcon，与 src/types.ts 的 IconName 保持一致。"""
    return ''.join(p.capitalize() for p in icon_id.split('-')) + 'Icon'


def _is_naive_root(path):
    """确认某个目录是 naive-icons 的根（含 svg/ 且 package.json 的 name 对得上）。
    只看有没有 svg/ + package.json 会误认别的仓库，所以必须校验 name。"""
    if not os.path.isdir(os.path.join(path, 'svg')):
        return False
    pkg = os.path.join(path, 'package.json')
    if not os.path.isfile(pkg):
        return False
    try:
        with open(pkg, encoding='utf-8') as f:
            return json.load(f).get('name') == 'naive-icons'
    except (ValueError, OSError):
        return False


_EXPLICIT_DIR = None


def find_svg_dir(explicit=None):
    """定位 svg 目录，找不到返回 None。这是 icons.json 缺失时的兜底。顺序：
    1) --svg-dir 显式指定
    2) skill 自带的 scripts/svg/
    3) 从脚本位置向上找 naive-icons 仓库根
    4) 从 cwd 向上找 node_modules/naive-icons

    正常路径走不到这里——icons.json 就够了。
    """
    global _EXPLICIT_DIR
    if explicit:
        _EXPLICIT_DIR = explicit if os.path.isdir(explicit) else None
        return _EXPLICIT_DIR
    if _EXPLICIT_DIR:
        return _EXPLICIT_DIR

    bundled = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'svg')
    if os.path.isdir(bundled):
        return bundled

    for start in (os.path.dirname(os.path.abspath(__file__)),
                  os.path.abspath(os.getcwd())):
        d = start
        while True:
            # 祖先目录本身（skill 随仓库走时命中）
            if _is_naive_root(d):
                return os.path.join(d, 'svg')
            # 以及它的 node_modules/naive-icons（用户项目里命中）
            nm = os.path.join(d, 'node_modules', 'naive-icons')
            if _is_naive_root(nm):
                return os.path.join(nm, 'svg')
            parent = os.path.dirname(d)
            if parent == d:
                break
            d = parent
    return None


_BUNDLE = None
_BUNDLE_TRIED = False


def load_bundle():
    """读同目录的 icons.json —— 全部 SVG 源码收在这一个文件里。

    有了它 skill 就自包含：npx skills add 只拷贝 skills/naive-icons/ 目录本身，
    拿不到仓库根的 svg/，所以把源码随目录一起带走，用户不必先 npm i。
    文件由 scripts/build_skill_assets.py 从 svg/ 生成，不要手改。
    """
    global _BUNDLE, _BUNDLE_TRIED
    if _BUNDLE_TRIED:
        return _BUNDLE
    _BUNDLE_TRIED = True
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'icons.json')
    if os.path.isfile(path):
        try:
            with open(path, encoding='utf-8') as f:
                _BUNDLE = json.load(f)
        except ValueError:
            _BUNDLE = None
    return _BUNDLE


def read_svg(icon_id):
    """按 icon id 取 SVG 源：先 icons.json，再退回 svg/ 目录。"""
    bundle = load_bundle()
    if bundle and icon_id in bundle:
        return bundle[icon_id]
    svg_dir = find_svg_dir()
    if not svg_dir:
        return None
    path = os.path.join(svg_dir, icon_id + '.svg')
    if not os.path.isfile(path):
        return None
    with open(path, encoding='utf-8') as f:
        return f.read()


def split_svg(text):
    """拆成 (根节点整行, body 列表)。根节点在仓库里 163 枚完全统一。"""
    lines = text.strip().split('\n')
    if len(lines) < 3 or not lines[0].startswith('<svg') or lines[-1] != '</svg>':
        return None, []
    return lines[0], lines[1:-1]


def to_jsx_attr(name):
    return ATTR_JSX.get(name, name)


def apply_overrides(body, color=None, stroke_width=None):
    """把 color / stroke-width 打到根节点上（body 内显式写死的描边保持原样，
    彩色描边是 naive 风格的一部分，不该被覆盖）。"""
    out = []
    for line in body:
        if color and 'stroke="#2A2A2A"' in line:
            line = line.replace('stroke="#2A2A2A"', f'stroke="{color}"')
        if stroke_width and 'stroke-width="3.5"' in line:
            line = line.replace('stroke-width="3.5"', f'stroke-width="{stroke_width}"')
        out.append(line)
    return out


_STROKE_W_RE = re.compile(r'(?<![\w-])stroke-width="([0-9.]+)"')


def to_jsx_attrs(line):
    """把单行 SVG 标签里的属性名转成 JSX 写法。"""
    def sub(m):
        return to_jsx_attr(m.group(1)) + '="' + m.group(2) + '"'
    return re.sub(r'([a-zA-Z-]+)="([^"]*)"', sub, line)


def render_svg(root, body, size=None, color=None, stroke_width=None):
    body = apply_overrides(body, color, stroke_width)
    if size:
        root = re.sub(r'viewBox="[^"]*"', f'viewBox="0 0 48 48"', root)
        if 'width=' not in root:
            root = root.replace('>', f' width="{size}" height="{size}">', 1)
    return '\n'.join([root] + body + ['</svg>'])


def render_jsx(body, size=None, color=None, stroke_width=None):
    """内联 JSX，可直接贴进 .jsx/.tsx。"""
    body = apply_overrides(body, color, stroke_width)
    attrs = ['viewBox="0 0 48 48"']
    if size:
        attrs.append(f'width={{{size}}} height={{{size}}}')
    attrs += ['fill="none"']
    if color:
        attrs.append(f'stroke="{color}"')
    if stroke_width:
        attrs.append(f'strokeWidth={{{stroke_width}}}')
    attrs += ['strokeLinecap="round"', 'strokeLinejoin="round"', 'aria-hidden="true"']
    inner = '\n'.join('  ' + to_jsx_attrs(l) for l in body)
    head = '  <svg ' + ' '.join(attrs) + '>'
    return head + '\n' + inner + '\n  </svg>'


TSX_TEMPLATE = """import {{ forwardRef }} from 'react';
import type {{ IconProps }} from './types';
import {{ normalizeIconProps, scaledStroke }} from './iconProps';

export const {comp} = forwardRef<SVGSVGElement, IconProps>((props, ref) => {{
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
  const sw = scaledStroke(props.strokeWidth);
  return (
    <svg
      ref={{ref}}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={{props.title ? 'img' : undefined}}
      aria-hidden={{labelled ? undefined : true}}
      {{...normalizeIconProps(props)}}
    >
      {{props.title ? <title>{{props.title}}</title> : null}}

{body}

    </svg>
  );
}});

{comp}.displayName = '{comp}';

export default {comp};
"""


def render_tsx(icon_id, body):
    """body 顶格不缩进。
    仓库内 159 个 tsx 的空行缩进有三种历史写法（104 个用 4 空格、54 个用 6 空格、
    1 个无空行），这里统一输出不带尾随空格的版本——本脚本是给下游用户复制用的，
    没必要复刻某一版历史排版。

    body 必须过 to_jsx_attrs：SVG 里 stroke-width 是合法的，JSX 里必须写 strokeWidth，
    否则 React 报 "Invalid DOM property" 且该属性不生效，表现为 strokeWidth 只加粗外框、
    内层线条纹丝不动。仓库里曾有 109/159 枚中招。
    """
    comp = component_name(icon_id)
    def conv(l):
        l = _STROKE_W_RE.sub(lambda m: 'strokeWidth={sw(%s)}' % m.group(1), l)
        return to_jsx_attrs(l)
    inner = '\n'.join(conv(l) for l in body)
    return TSX_TEMPLATE.format(comp=comp, body=inner)


def render_html(icon_id, body, size=24, color=None):
    body = apply_overrides(body, color, None)
    inner = '\n'.join('    ' + l for l in body)
    return (
        f'<!-- naive-icons: {icon_id} -->\n'
        f'<svg width="{size}" height="{size}" viewBox="0 0 48 48" '
        f'xmlns="http://www.w3.org/2000/svg" fill="none" '
        f'stroke="{color or "#2A2A2A"}" stroke-width="3.5" '
        f'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">\n'
        f'{inner}\n  </svg>'
    )


def main():
    ap = argparse.ArgumentParser(
        description='naive-icons 代码输出',
        epilog='例：python3 emit.py users --format jsx --size 20')
    ap.add_argument('icons', nargs='+', help='一个或多个图标 id（如 users user-plus）')
    ap.add_argument('--format', '-f', default='tsx',
                    choices=['tsx', 'jsx', 'svg', 'html', 'json'], help='输出格式，默认 tsx')
    ap.add_argument('--size', type=int, help='写死尺寸（jsx/html 有效）')
    ap.add_argument('--color', help='覆盖墨色，如 "#333333" 或 "currentColor"')
    ap.add_argument('--stroke-width', type=float, help='覆盖描边宽度')
    ap.add_argument('--out', '-o', help='输出目录（tsx 批量落盘时用）')
    ap.add_argument('--svg-dir', help='显式指定 svg 源目录（icons.json 缺失时的兜底）')
    args = ap.parse_args()

    # icons.json 优先；都没有才报错
    if not load_bundle() and not find_svg_dir(args.svg_dir):
        print('找不到 SVG 源。任选一种方式补上：\n'
              '  用 npx skills add guokaigdg/naive-icons 重新装一次 skill（自带 icons.json）\n'
              '  --svg-dir /path/to/naive-icons/svg\n'
              '  在 naive-icons 仓库内或已 npm i naive-icons 的项目里运行', file=sys.stderr)
        return 1

    blocks, missing = [], []
    for icon_id in args.icons:
        text = read_svg(icon_id)
        if text is None:
            missing.append(icon_id)
            continue
        root, body = split_svg(text)
        if root is None:
            print(f'{icon_id}.svg 格式异常，根节点不在首行', file=sys.stderr)
            missing.append(icon_id)
            continue

        if args.format == 'svg':
            out = render_svg(root, body, args.size, args.color, args.stroke_width)
        elif args.format == 'jsx':
            out = render_jsx(body, args.size, args.color, args.stroke_width)
        elif args.format == 'html':
            out = render_html(icon_id, body, args.size or 24, args.color)
        elif args.format == 'json':
            out = json.dumps({'id': icon_id, 'component': component_name(icon_id),
                              'svg': render_svg(root, body, args.size, args.color,
                                                args.stroke_width)},
                             ensure_ascii=False, indent=2)
        else:
            out = render_tsx(icon_id, body)

        if args.out and args.format == 'tsx':
            os.makedirs(args.out, exist_ok=True)
            path = os.path.join(args.out, component_name(icon_id) + '.tsx')
            with open(path, 'w', encoding='utf-8') as f:
                f.write(out)
            print(f'写入 {path}')
        else:
            blocks.append(out)

    if missing:
        print(f'未找到: {", ".join(missing)}（库内共 {ICON_COUNT} 枚，'
              f'可用 search.py --list-categories 查看分类）', file=sys.stderr)
        if not blocks and not args.out:
            return 1

    if blocks:
        sep = '\n\n' if args.format != 'json' else '\n'
        print(sep.join(blocks))
    return 1 if missing and not blocks else 0


if __name__ == '__main__':
    sys.exit(main())
