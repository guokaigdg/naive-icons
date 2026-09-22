#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Naive Icons — 官网数据生成脚本

读取 svg/ 目录下的全部图标，生成 website/assets/js/icons.js。
输出为纯 JS 文件（而非 JSON），这样官网直接用 file:// 打开也能正常加载。
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SVG_DIR = ROOT / 'svg'
OUT_DIR = ROOT / 'website' / 'assets' / 'js'
OUT_FILE = OUT_DIR / 'icons.js'

# ---------------------------------------------------------------- 分类定义
CATEGORIES = [
    ('interface', '界面基础'),
    ('action', '操作'),
    ('media', '文件与媒体'),
    ('navigation', '导航方位'),
    ('communication', '通信'),
    ('nature', '自然天气'),
    ('animals', '动物'),
    ('food', '食物饮品'),
    ('objects', '日常物品'),
    ('transport', '交通工具'),
    ('emoji', '表情'),
]

CATEGORY_MAP = {}
for _id, _label in CATEGORIES:
    CATEGORY_MAP[_id] = _label

ICON_CATEGORY = {
    # 界面基础
    'home': 'interface', 'user': 'interface', 'settings': 'interface',
    'search': 'interface', 'heart': 'interface', 'star': 'interface',
    'bell': 'interface', 'calendar': 'interface', 'clock': 'interface',
    'eye': 'interface', 'bulb': 'interface', 'tag': 'interface',
    'bookmark': 'interface',
    # 操作
    'edit': 'action', 'trash': 'action', 'download': 'action',
    'upload': 'action', 'save': 'action', 'plus': 'action',
    'close': 'action', 'check': 'action', 'refresh': 'action',
    'share': 'action', 'play': 'action',
    # 文件与媒体
    'file': 'media', 'folder': 'media', 'image': 'media', 'camera': 'media',
    'video': 'media', 'mic': 'media', 'music': 'media', 'code': 'media',
    'book': 'media', 'headphones': 'media',
    # 导航方位
    'location': 'navigation', 'compass': 'navigation', 'map': 'navigation',
    'flag': 'navigation', 'anchor': 'navigation', 'magnet': 'navigation',
    'arrow-up': 'navigation', 'arrow-down': 'navigation',
    'arrow-left': 'navigation', 'arrow-right': 'navigation',
    # 通信
    'mail': 'communication', 'chat': 'communication',
    'phone': 'communication', 'wifi': 'communication',
    # 自然天气
    'sun': 'nature', 'moon': 'nature', 'cloud': 'nature',
    'umbrella': 'nature', 'tree': 'nature', 'flower': 'nature',
    'leaf': 'nature', 'rainbow': 'nature', 'mushroom': 'nature',
    'cactus': 'nature', 'snowflake': 'nature', 'flame': 'nature',
    # 动物
    'cat': 'animals', 'dog': 'animals', 'bird': 'animals', 'fish': 'animals',
    'penguin': 'animals', 'rabbit': 'animals', 'bear': 'animals',
    'fox': 'animals', 'owl': 'animals', 'frog': 'animals', 'bee': 'animals',
    'butterfly': 'animals', 'snail': 'animals', 'ladybug': 'animals',
    # 食物饮品
    'apple': 'food', 'strawberry': 'food', 'watermelon': 'food',
    'cherry': 'food', 'lemon': 'food', 'cake': 'food', 'icecream': 'food',
    'donut': 'food', 'coffee': 'food',
    # 日常物品
    'balloon': 'objects', 'lamp': 'objects', 'candle': 'objects',
    'pencil': 'objects', 'paintbrush': 'objects', 'globe': 'objects',
    'trophy': 'objects', 'shopping-bag': 'objects', 'credit-card': 'objects',
    'gift': 'objects', 'thermometer': 'objects', 'lock': 'objects',
    'key': 'objects',
    # 交通工具
    'car': 'transport', 'airplane': 'transport', 'rocket': 'transport',
    'cart': 'transport', 'bicycle': 'transport', 'sailboat': 'transport',
    'train': 'transport',
    # 表情
    'smile': 'emoji', 'thumbs-up': 'emoji',
    # 导航 / 操作骨架
    'menu': 'interface',
    'chevron-down': 'navigation', 'chevron-up': 'navigation',
    'chevron-left': 'navigation', 'chevron-right': 'navigation',
    'ellipsis': 'interface', 'external-link': 'interface',
    'link': 'interface', 'unlink': 'interface',
    'copy': 'action', 'minus': 'action',
    # 运动 / 自然 / 媒体控制 / 饮品 / 品牌
    'basketball': 'objects', 'dumbbell': 'objects',
    'mountain': 'nature', 'tent': 'nature',
    'pause': 'action', 'stop': 'action',
    'coffee-cup': 'food', 'water-cup': 'food',
    'google-chrome': 'objects',
}

# ---------------------------------------------------------------- 中文名
ZH_NAMES = {
    'airplane': '飞机', 'anchor': '锚', 'apple': '苹果', 'arrow-up': '上',
    'arrow-down': '下', 'arrow-left': '左', 'arrow-right': '右', 'balloon': '气球',
    'bear': '小熊', 'bee': '蜜蜂', 'bell': '铃铛', 'bicycle': '自行车',
    'bird': '小鸟', 'book': '书本', 'bookmark': '书签', 'bulb': '灯泡',
    'butterfly': '蝴蝶', 'cactus': '仙人掌', 'cake': '蛋糕',
    'calendar': '日历', 'camera': '相机', 'candle': '蜡烛', 'car': '汽车',
    'cart': '购物车', 'cat': '小猫', 'chat': '对话', 'check': '勾选',
    'cherry': '樱桃', 'clock': '时钟', 'close': '关闭', 'cloud': '云朵',
    'code': '代码', 'coffee': '咖啡', 'compass': '指南针',
    'credit-card': '信用卡', 'dog': '小狗', 'donut': '甜甜圈',
    'download': '下载', 'edit': '编辑', 'eye': '眼睛', 'file': '文件',
    'fish': '小鱼', 'flag': '旗帜', 'flame': '火焰', 'flower': '花朵',
    'folder': '文件夹', 'fox': '狐狸', 'frog': '青蛙', 'gift': '礼物',
    'globe': '地球仪', 'headphones': '耳机', 'heart': '爱心', 'home': '家',
    'icecream': '冰淇淋', 'image': '图片', 'key': '钥匙',
    'ladybug': '瓢虫', 'lamp': '台灯', 'leaf': '叶子', 'lemon': '柠檬',
    'location': '定位', 'lock': '锁', 'magnet': '磁铁', 'mail': '邮件',
    'map': '地图', 'mic': '麦克风', 'moon': '月亮', 'mushroom': '蘑菇',
    'music': '音乐', 'owl': '猫头鹰', 'paintbrush': '画笔',
    'pencil': '铅笔', 'penguin': '企鹅', 'phone': '电话', 'play': '播放',
    'plus': '加号', 'rabbit': '兔子', 'rainbow': '彩虹', 'refresh': '刷新',
    'rocket': '火箭', 'sailboat': '帆船', 'save': '保存', 'search': '搜索',
    'settings': '设置', 'share': '分享', 'shopping-bag': '购物袋',
    'smile': '微笑', 'snail': '蜗牛', 'snowflake': '雪花', 'star': '星星',
    'strawberry': '草莓', 'sun': '太阳', 'tag': '标签',
    'thermometer': '温度计', 'thumbs-up': '点赞', 'train': '火车',
    'trash': '垃圾桶', 'tree': '大树', 'trophy': '奖杯', 'umbrella': '雨伞',
    'upload': '上传', 'user': '用户', 'video': '视频',
    'watermelon': '西瓜', 'wifi': '无线网',
    'menu': '菜单',
    'chevron-down': '向下', 'chevron-up': '向上',
    'chevron-left': '向左', 'chevron-right': '向右',
    'ellipsis': '更多', 'external-link': '外链',
    'link': '链接', 'unlink': '取消链接',
    'copy': '复制', 'minus': '减号',
    'basketball': '篮球', 'dumbbell': '哑铃',
    'mountain': '山峰', 'tent': '帐篷',
    'pause': '暂停', 'stop': '停止',
    'coffee-cup': '咖啡杯', 'water-cup': '水杯',
    'google-chrome': 'Chrome',
}


def to_pascal(name: str) -> str:
    return ''.join(p.capitalize() for p in re.split(r'[-_]', name)) + 'Icon'


def compact_svg(raw: str) -> str:
    """压缩 SVG：去掉换行与多余空格，保留内容结构"""
    raw = raw.strip()
    raw = re.sub(r'>\s+<', '><', raw)
    raw = re.sub(r'\s{2,}', ' ', raw)
    return raw


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    files = sorted(SVG_DIR.glob('*.svg'))
    if not files:
        raise SystemExit(f'未找到 SVG 文件：{SVG_DIR}')

    icons = []
    unassigned = []
    for f in files:
        name = f.stem
        cat = ICON_CATEGORY.get(name)
        if not cat:
            unassigned.append(name)
            cat = 'interface'
        icons.append({
            'id': name,
            'zh': ZH_NAMES.get(name, name),
            'cat': cat,
            'comp': to_pascal(name),
            'svg': compact_svg(f.read_text(encoding='utf-8')),
        })

    icons.sort(key=lambda x: (list(CATEGORY_MAP).index(x['cat']), x['id']))

    payload = {
        'version': '1.0.0',
        'total': len(icons),
        'categories': [{'id': i, 'label': l} for i, l in CATEGORIES],
        'icons': icons,
    }

    js = (
        '/* Naive Icons — 图标数据（由 scripts/build_website.py 自动生成，请勿手改） */\n'
        'window.NAIVE_ICONS = ' + json.dumps(payload, ensure_ascii=False, separators=(',', ':')) + ';\n'
    )
    OUT_FILE.write_text(js, encoding='utf-8')

    print(f'图标总数: {len(icons)}')
    print(f'输出文件: {OUT_FILE}')
    print(f'文件大小: {OUT_FILE.stat().st_size / 1024:.1f} KB')
    for cid, label in CATEGORIES:
        n = sum(1 for i in icons if i['cat'] == cid)
        print(f'  {label:<10s} {n}')
    if unassigned:
        print('未分类（已归入界面基础）:', ', '.join(unassigned))


if __name__ == '__main__':
    main()
