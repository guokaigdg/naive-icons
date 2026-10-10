#!/usr/bin/env python3
"""
生成 skill 的派生产物。源永远是 svg/ + scripts/build_website.py + skills 里的同义词表。

产出两个文件，都不要手改：
  skills/naive-icons/reference/catalog.md   163 枚的目录表（id / 中文名 / 组件名 / 什么时候用）
  skills/naive-icons/scripts/icons.json    全部 SVG 源码，给 emit.py 用

为什么要 icons.json：skill 被 npx skills add 装到用户机器时，只会拷贝
skills/naive-icons/ 目录本身，拿不到仓库根的 svg/。把源码收进一个文件，
skill 就自包含了，用户不必先 npm i naive-icons 才能让助手生成代码。
收成一个文件而不是拷 163 个 svg，是为了不在仓库里堆重复文件。

    python3 scripts/build_skill_assets.py          # 生成
    python3 scripts/build_skill_assets.py --check  # 只校验是否已是最新（CI 可用）

⚠️ 导入 skills/naive-icons/scripts/search.py 是安全的：它只定义常量和函数，
   main() 由 __name__ == '__main__' 保护，不会执行。
   但绝对不要 import scripts/generate_icons_add.py —— 它的生成逻辑在模块层，
   一 import 就会跑 main，重写 index.ts / types.ts / package.json。
"""
import argparse
import ast
import json
import os
import re
import sys
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKILL_DIR = os.path.join(ROOT, 'skills', 'naive-icons')
CATALOG = os.path.join(SKILL_DIR, 'reference', 'catalog.md')
ICONS_JSON = os.path.join(SKILL_DIR, 'scripts', 'icons.json')

# 目录表里「什么时候用」一列最多列几个词，太长就成流水账了
HINT_LIMIT = 7
# 太泛的词不适合当「什么时候用」的提示
VAGUE_HINTS = {'icon', 'icons', '的', '上', '下'}

CATEGORY_ORDER = [
    'interface', 'action', 'media', 'navigation', 'communication',
    'nature', 'animals', 'food', 'objects', 'transport', 'emoji',
]


def read_website_data():
    """从 build_website.py 里取分类和中文名。用 AST 静态解析，不执行模块。"""
    src = open(os.path.join(ROOT, 'scripts', 'build_website.py'), encoding='utf-8').read()
    out = {}
    for node in ast.walk(ast.parse(src)):
        if isinstance(node, ast.Assign):
            for t in node.targets:
                if isinstance(t, ast.Name) and t.id in ('ICON_CATEGORY', 'ZH_NAMES', 'CATEGORIES'):
                    out[t.id] = ast.literal_eval(node.value)
    missing = {'ICON_CATEGORY', 'ZH_NAMES', 'CATEGORIES'} - set(out)
    if missing:
        sys.exit(f'build_website.py 里找不到 {missing}')
    return out['ICON_CATEGORY'], out['ZH_NAMES'], dict(out['CATEGORIES'])


def read_synonyms():
    """从 search.py 里取同义词表。只解析 AST，不 import，避免任何副作用。"""
    path = os.path.join(SKILL_DIR, 'scripts', 'search.py')
    src = open(path, encoding='utf-8').read()
    for node in ast.walk(ast.parse(src)):
        if isinstance(node, ast.Assign):
            for t in node.targets:
                if isinstance(t, ast.Name) and t.id == 'SYNONYMS':
                    return ast.literal_eval(node.value)
    sys.exit('search.py 里找不到 SYNONYMS')


def component_name(icon_id):
    return ''.join(p.capitalize() for p in icon_id.split('-')) + 'Icon'


def build_catalog(cat, zh, cats, syn):
    hints = {i: [] for i in zh}
    for kw, targets in syn.items():
        for t in targets:
            if t in hints and kw not in hints[t]:
                hints[t].append(kw)

    def clean(kws):
        picked = [k for k in dict.fromkeys(kws) if k not in VAGUE_HINTS]
        # 中文词优先，因为读者的母语是中文
        cjk = [k for k in picked if not k.isascii()]
        en = [k for k in picked if k.isascii()]
        return '、'.join((cjk + en)[:HINT_LIMIT]) or '—'

    lines = [
        '# naive-icons 全量目录',
        '',
        '> 本文件由 `scripts/build_skill_assets.py` 生成，不要手改。',
        '> 新增图标后重跑该脚本，否则 `search.py` 仍能命中（索引内嵌在脚本里），',
        '> 但本目录会缺项。',
        '',
        '组件名规则：连字符分段首字母大写 + `Icon`，如 `user-plus` → `UserPlusIcon`。',
        '',
    ]
    for key in CATEGORY_ORDER:
        ids = sorted(i for i in zh if cat.get(i) == key)
        if not ids:
            continue
        lines.append(f'## {cats[key]}（{len(ids)} 枚）')
        lines.append('')
        lines.append('| id | 中文名 | 组件名 | 什么时候用 |')
        lines.append('|---|---|---|---|')
        for i in ids:
            lines.append(f'| `{i}` | {zh[i]} | `{component_name(i)}` | {clean(hints[i])} |')
        lines.append('')
    return '\n'.join(lines)


def build_icons_json():
    svgs = {}
    for name in sorted(os.listdir(os.path.join(ROOT, 'svg'))):
        if not name.endswith('.svg'):
            continue
        icon = name[:-4]
        with open(os.path.join(ROOT, 'svg', name), encoding='utf-8') as f:
            svgs[icon] = f.read().strip()
    return json.dumps(svgs, ensure_ascii=False, sort_keys=True, indent=0) + '\n'


def main():
    ap = argparse.ArgumentParser(description='生成 skill 的 catalog.md 与 icons.json')
    ap.add_argument('--check', action='store_true', help='只校验是否最新，不写文件')
    args = ap.parse_args()

    cat, zh, cats = read_website_data()
    syn = read_synonyms()

    svgs_on_disk = {n[:-4] for n in os.listdir(os.path.join(ROOT, 'svg')) if n.endswith('.svg')}
    for label, ids in (('ICON_CATEGORY', set(cat)), ('ZH_NAMES', set(zh)), ('svg/', svgs_on_disk)):
        if ids != set(cat):
            print(f'✗ {label} 与 svg/ 不一致，差集: {ids ^ set(cat)}', file=sys.stderr)
            return 1

    targets = {CATALOG: build_catalog(cat, zh, cats, syn), ICONS_JSON: build_icons_json()}

    stale = []
    for path, want in targets.items():
        have = open(path, encoding='utf-8').read() if os.path.exists(path) else None
        if have == want:
            print(f'✓ {os.path.relpath(path, ROOT)} 已是最新')
        elif args.check:
            stale.append(os.path.relpath(path, ROOT))
        else:
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(want)
            print(f'写入 {os.path.relpath(path, ROOT)}')

    if stale:
        print(f'✗ 以下文件已过期，请重跑 python3 scripts/build_skill_assets.py：', file=sys.stderr)
        for s in stale:
            print(f'  {s}', file=sys.stderr)
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
