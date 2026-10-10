#!/usr/bin/env python3
"""
Naive Icons 扩充脚本 —— 只新增，不修改已有的 50 个图标
- 新增图标沿用 v1 规范：48x48 viewBox, stroke #2A2A2A / 3.5, 圆角线帽
- 配色以 9 色 naive 调色板为默认基调，确有必要时可用其他实色（如品牌色，见下方 BLUE），一律扁平填充
- 生成新 .svg + .tsx，更新 index.ts / types.ts / package.json
"""
import os
import re
from pathlib import Path

ROOT = str(Path(__file__).resolve().parent.parent)
SVG_DIR = os.path.join(ROOT, 'svg')
SRC_DIR = os.path.join(ROOT, 'src')

INK = '#2A2A2A'
NAVY = '#264653'
ORANGE = '#E76F51'
YELLOW = '#E9C46A'
PINK = '#F4A6A4'
GREEN = '#588157'
TEAL = '#2A9D8F'
BROWN = '#8B5E3C'
CREAM = '#FAEDCD'
WHITE = '#FFFFFF'
# 调色板之外的补充色：仅在确有必要时使用（如品牌色），扁平填充
BLUE = '#4A8FD4'


def S(body):
    return (f'<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" '
            f'stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">\n'
            f'{body}\n</svg>')


NEW_ICONS = {
    # ---------- 动物 ----------
    'penguin': S(f'''<ellipse cx="24" cy="26" rx="13" ry="17" fill="{NAVY}"/>
<ellipse cx="24" cy="30" rx="7.5" ry="10" fill="{WHITE}"/>
<circle cx="19" cy="19" r="2.5" fill="{WHITE}"/>
<circle cx="29" cy="19" r="2.5" fill="{WHITE}"/>
<circle cx="19" cy="20" r="1.3" fill="{INK}"/>
<circle cx="29" cy="20" r="1.3" fill="{INK}"/>
<path d="M21 23 L27 23 L24 26.5 Z" fill="{ORANGE}"/>
<path d="M11 26 C 7 30 8 36 12 38" fill="none" stroke="{INK}"/>
<path d="M37 26 C 41 30 40 36 36 38" fill="none" stroke="{INK}"/>
<ellipse cx="18" cy="43" rx="4.5" ry="2" fill="{ORANGE}"/>
<ellipse cx="30" cy="43" rx="4.5" ry="2" fill="{ORANGE}"/>'''),

    'rabbit': S(f'''<ellipse cx="17" cy="12" rx="4" ry="9" fill="{CREAM}"/>
<ellipse cx="31" cy="12" rx="4" ry="9" fill="{CREAM}"/>
<ellipse cx="17" cy="13" rx="1.8" ry="5.5" fill="{PINK}"/>
<ellipse cx="31" cy="13" rx="1.8" ry="5.5" fill="{PINK}"/>
<circle cx="24" cy="31" r="13" fill="{CREAM}"/>
<circle cx="19" cy="29" r="1.6" fill="{INK}"/>
<circle cx="29" cy="29" r="1.6" fill="{INK}"/>
<path d="M22 33 L26 33 L24 35.5 Z" fill="{PINK}"/>
<path d="M24 35.5 L24 37" stroke="{INK}" stroke-width="1.8"/>
<path d="M20 39 Q 24 41.5 28 39" stroke="{INK}" fill="none" stroke-width="1.8"/>
<path d="M11 31 L5 29" stroke="{INK}" stroke-width="1.5"/>
<path d="M11 35 L5 36" stroke="{INK}" stroke-width="1.5"/>
<path d="M37 31 L43 29" stroke="{INK}" stroke-width="1.5"/>
<path d="M37 35 L43 36" stroke="{INK}" stroke-width="1.5"/>'''),

    'bear': S(f'''<circle cx="12" cy="14" r="5" fill="{BROWN}"/>
<circle cx="36" cy="14" r="5" fill="{BROWN}"/>
<circle cx="12" cy="14" r="2" fill="{PINK}"/>
<circle cx="36" cy="14" r="2" fill="{PINK}"/>
<circle cx="24" cy="27" r="15" fill="{BROWN}"/>
<circle cx="18" cy="24" r="2.5" fill="{WHITE}"/>
<circle cx="30" cy="24" r="2.5" fill="{WHITE}"/>
<circle cx="18" cy="25" r="1.3" fill="{INK}"/>
<circle cx="30" cy="25" r="1.3" fill="{INK}"/>
<ellipse cx="24" cy="32" rx="6" ry="4.5" fill="{CREAM}"/>
<ellipse cx="24" cy="30.5" rx="2.5" ry="1.8" fill="{INK}"/>
<path d="M24 32.3 L24 34 M24 34 Q 21 36 19.5 34.5 M24 34 Q 27 36 28.5 34.5" stroke="{INK}" fill="none" stroke-width="1.8"/>'''),

    'fox': S(f'''<path d="M11 18 L14 5 L21 14 Z" fill="{ORANGE}"/>
<path d="M37 18 L34 5 L27 14 Z" fill="{ORANGE}"/>
<path d="M13.5 15 L15 9 L18.5 13.5 Z" fill="{PINK}"/>
<path d="M34.5 15 L33 9 L29.5 13.5 Z" fill="{PINK}"/>
<path d="M24 13 C 14 13 9 20 10 26 L 24 41 L 38 26 C 39 20 34 13 24 13 Z" fill="{ORANGE}"/>
<path d="M10 26 L 24 41 L 38 26 C 35 31 30 33 24 33 C 18 33 13 31 10 26 Z" fill="{CREAM}"/>
<circle cx="18" cy="22" r="1.6" fill="{INK}"/>
<circle cx="30" cy="22" r="1.6" fill="{INK}"/>
<ellipse cx="24" cy="37.5" rx="2.5" ry="2" fill="{INK}"/>'''),

    'owl': S(f'''<path d="M12 14 L15 5 L21 12 Z" fill="{NAVY}"/>
<path d="M36 14 L33 5 L27 12 Z" fill="{NAVY}"/>
<ellipse cx="24" cy="27" rx="15" ry="16" fill="{NAVY}"/>
<circle cx="18" cy="22" r="6" fill="{WHITE}"/>
<circle cx="30" cy="22" r="6" fill="{WHITE}"/>
<circle cx="18" cy="23" r="2.5" fill="{INK}"/>
<circle cx="30" cy="23" r="2.5" fill="{INK}"/>
<path d="M21.5 28 L26.5 28 L24 32 Z" fill="{YELLOW}"/>
<path d="M17 37 Q 20 39 23 37" stroke="{INK}" fill="none" stroke-width="1.8"/>
<path d="M25 37 Q 28 39 31 37" stroke="{INK}" fill="none" stroke-width="1.8"/>
<ellipse cx="18" cy="43" rx="3.5" ry="1.8" fill="{YELLOW}"/>
<ellipse cx="30" cy="43" rx="3.5" ry="1.8" fill="{YELLOW}"/>'''),

    'frog': S(f'''<circle cx="14" cy="14" r="6.5" fill="{GREEN}"/>
<circle cx="34" cy="14" r="6.5" fill="{GREEN}"/>
<circle cx="14" cy="14" r="3.5" fill="{WHITE}"/>
<circle cx="34" cy="14" r="3.5" fill="{WHITE}"/>
<circle cx="14" cy="15" r="1.8" fill="{INK}"/>
<circle cx="34" cy="15" r="1.8" fill="{INK}"/>
<ellipse cx="24" cy="29" rx="16" ry="12" fill="{GREEN}"/>
<path d="M13 29 Q 24 39 35 29" stroke="{INK}" fill="none" stroke-width="2.5"/>
<circle cx="11" cy="33" r="2" fill="{PINK}"/>
<circle cx="37" cy="33" r="2" fill="{PINK}"/>'''),

    'bee': S(f'''<ellipse cx="17" cy="13" rx="6" ry="4" transform="rotate(-25 17 13)" fill="{CREAM}"/>
<ellipse cx="31" cy="13" rx="6" ry="4" transform="rotate(25 31 13)" fill="{CREAM}"/>
<ellipse cx="24" cy="29" rx="12" ry="10" fill="{YELLOW}"/>
<path d="M19 20 C 17 25 17 33 19 38" stroke="{INK}" fill="none" stroke-width="3"/>
<path d="M27 19.5 C 25.5 25 25.5 33 27 38.5" stroke="{INK}" fill="none" stroke-width="3"/>
<path d="M36 29 L41 27 L40 32 Z" fill="{INK}"/>
<circle cx="15" cy="26" r="1.6" fill="{INK}"/>
<path d="M13 31 Q 15 33 17.5 32" stroke="{INK}" fill="none" stroke-width="1.8"/>
<path d="M20 19 C 17 13 14 11 11 12" stroke="{INK}" fill="none" stroke-width="1.8"/>
<path d="M28 19 C 31 13 34 11 37 12" stroke="{INK}" fill="none" stroke-width="1.8"/>'''),

    'butterfly': S(f'''<ellipse cx="14" cy="17" rx="8" ry="6" transform="rotate(-25 14 17)" fill="{PINK}"/>
<ellipse cx="34" cy="17" rx="8" ry="6" transform="rotate(25 34 17)" fill="{PINK}"/>
<ellipse cx="15" cy="32" rx="6.5" ry="5" transform="rotate(20 15 32)" fill="{ORANGE}"/>
<ellipse cx="33" cy="32" rx="6.5" ry="5" transform="rotate(-20 33 32)" fill="{ORANGE}"/>
<circle cx="13" cy="16" r="1.8" fill="{WHITE}"/>
<circle cx="35" cy="16" r="1.8" fill="{WHITE}"/>
<circle cx="24" cy="11" r="3" fill="{NAVY}"/>
<rect x="21.5" y="13" width="5" height="24" rx="2.5" fill="{NAVY}"/>
<path d="M21 8 C 18 4 15 4 13 6" stroke="{INK}" fill="none" stroke-width="1.8"/>
<path d="M27 8 C 30 4 33 4 35 6" stroke="{INK}" fill="none" stroke-width="1.8"/>'''),

    'snail': S(f'''<path d="M6 38 L 42 38 C 42 33 39 31 35 31 L 18 31 C 11 31 6 33 6 38 Z" fill="{GREEN}"/>
<circle cx="13" cy="27" r="5" fill="{GREEN}"/>
<path d="M10.5 23 L 8 14" stroke="{INK}" stroke-width="2"/>
<path d="M15.5 23 L 18 14" stroke="{INK}" stroke-width="2"/>
<circle cx="8" cy="12.5" r="1.8" fill="{INK}"/>
<circle cx="18" cy="12.5" r="1.8" fill="{INK}"/>
<circle cx="31" cy="22" r="10" fill="{ORANGE}"/>
<circle cx="31" cy="22" r="2" fill="{INK}"/>
<path d="M31 16 A 6 6 0 1 1 25 22" stroke="{INK}" stroke-width="2" fill="none"/>
<path d="M10 29 Q 12 31 14 29.5" stroke="{INK}" fill="none" stroke-width="1.5"/>'''),

    'ladybug': S(f'''<path d="M16 17 C 16 9 32 9 32 17 Z" fill="{INK}"/>
<circle cx="24" cy="27" r="14" fill="{ORANGE}"/>
<path d="M24 15 L24 41" stroke="{INK}" stroke-width="2.5"/>
<circle cx="17" cy="23" r="2.5" fill="{INK}"/>
<circle cx="31" cy="23" r="2.5" fill="{INK}"/>
<circle cx="15" cy="32" r="2" fill="{INK}"/>
<circle cx="33" cy="32" r="2" fill="{INK}"/>
<path d="M18 10 C 16 6 13 5 11 6" stroke="{INK}" fill="none" stroke-width="1.8"/>
<path d="M30 10 C 32 6 35 5 37 6" stroke="{INK}" fill="none" stroke-width="1.8"/>'''),

    # ---------- 自然 ----------
    'rainbow': S(f'''<path d="M7 34 A 17 17 0 0 1 41 34" stroke="{ORANGE}" stroke-width="4.5" fill="none"/>
<path d="M12.5 34 A 11.5 11.5 0 0 1 35.5 34" stroke="{YELLOW}" stroke-width="4.5" fill="none"/>
<path d="M18 34 A 6 6 0 0 1 30 34" stroke="{TEAL}" stroke-width="4.5" fill="none"/>
<circle cx="6" cy="37" r="3.5" fill="{CREAM}"/>
<circle cx="11" cy="38.5" r="3" fill="{CREAM}"/>
<circle cx="42" cy="37" r="3.5" fill="{CREAM}"/>
<circle cx="37" cy="38.5" r="3" fill="{CREAM}"/>'''),

    'mushroom': S(f'''<path d="M6 22 C 6 9 42 9 42 22 C 42 25 39 26 35 26 L 13 26 C 9 26 6 25 6 22 Z" fill="{ORANGE}"/>
<circle cx="15" cy="18" r="2.2" fill="{WHITE}"/>
<circle cx="24" cy="15" r="2.6" fill="{WHITE}"/>
<circle cx="33" cy="18.5" r="2.2" fill="{WHITE}"/>
<path d="M18 26 L 18 37 C 18 41 30 41 30 37 L 30 26 Z" fill="{CREAM}"/>
<circle cx="22" cy="31" r="1.4" fill="{INK}"/>
<circle cx="26" cy="31" r="1.4" fill="{INK}"/>
<path d="M22 34 Q 24 36 26 34" stroke="{INK}" fill="none" stroke-width="1.8"/>
<path d="M10 42 L38 42" stroke="{GREEN}" stroke-width="3"/>'''),

    'cactus': S(f'''<rect x="20" y="12" width="8" height="30" rx="4" fill="{GREEN}"/>
<path d="M20 26 L 15 26 C 10 26 9 16 14 16 C 16 16 16 18 16 20 L 16 22 L 20 22 Z" fill="{GREEN}"/>
<path d="M28 32 L 33 32 C 38 32 39 22 34 22 C 32 22 32 24 32 26 L 32 28 L 28 28 Z" fill="{GREEN}"/>
<circle cx="24" cy="9" r="2" fill="{YELLOW}"/>
<circle cx="21" cy="10" r="2.5" fill="{PINK}"/>
<circle cx="27" cy="10" r="2.5" fill="{PINK}"/>
<circle cx="24" cy="12.5" r="2.5" fill="{PINK}"/>
<circle cx="23" cy="20" r="1.3" fill="{INK}"/>
<circle cx="26" cy="20" r="1.3" fill="{INK}"/>
<path d="M23 23 Q 24.5 24.5 26 23" stroke="{INK}" fill="none" stroke-width="1.5"/>
<path d="M14 44 L34 44" stroke="{BROWN}" stroke-width="3"/>'''),

    'snowflake': S(f'''<g fill="{TEAL}">
<g transform="rotate(0 24 24)"><path d="M24 6 L27.5 15 L25 19 L23 19 L20.5 15 Z"/><path d="M26 14 L33 9 L30 16 Z"/><path d="M22 14 L15 9 L18 16 Z"/></g>
<g transform="rotate(60 24 24)"><path d="M24 6 L27.5 15 L25 19 L23 19 L20.5 15 Z"/><path d="M26 14 L33 9 L30 16 Z"/><path d="M22 14 L15 9 L18 16 Z"/></g>
<g transform="rotate(120 24 24)"><path d="M24 6 L27.5 15 L25 19 L23 19 L20.5 15 Z"/><path d="M26 14 L33 9 L30 16 Z"/><path d="M22 14 L15 9 L18 16 Z"/></g>
<g transform="rotate(180 24 24)"><path d="M24 6 L27.5 15 L25 19 L23 19 L20.5 15 Z"/><path d="M26 14 L33 9 L30 16 Z"/><path d="M22 14 L15 9 L18 16 Z"/></g>
<g transform="rotate(240 24 24)"><path d="M24 6 L27.5 15 L25 19 L23 19 L20.5 15 Z"/><path d="M26 14 L33 9 L30 16 Z"/><path d="M22 14 L15 9 L18 16 Z"/></g>
<g transform="rotate(300 24 24)"><path d="M24 6 L27.5 15 L25 19 L23 19 L20.5 15 Z"/><path d="M26 14 L33 9 L30 16 Z"/><path d="M22 14 L15 9 L18 16 Z"/></g>
</g>
<circle cx="24" cy="24" r="5" fill="{TEAL}"/>'''),

    'flame': S(f'''<path d="M24 5 C 19 13 12 17 12 27 C 12 36 17 42 24 42 C 31 42 36 36 36 27 C 36 19 30 15 29 9 C 26 13 23 11 24 5 Z" fill="{ORANGE}"/>
<path d="M24 20 C 20 25 18 28 18 32 C 18 37 21 40 24 40 C 27 40 30 37 30 32 C 30 28 26 26 24 20 Z" fill="{YELLOW}"/>'''),

    # ---------- 食物 ----------
    'strawberry': S(f'''<path d="M24 16 C 13 16 8 23 12 31 C 15 37 20 41 24 42 C 28 41 33 37 36 31 C 40 23 35 16 24 16 Z" fill="{ORANGE}"/>
<path d="M14 17 L 18 9 L 22 15 L 24 7 L 26 15 L 30 9 L 34 17 Z" fill="{GREEN}"/>
<circle cx="18" cy="24" r="1.2" fill="{YELLOW}"/>
<circle cx="24" cy="26" r="1.2" fill="{YELLOW}"/>
<circle cx="30" cy="24" r="1.2" fill="{YELLOW}"/>
<circle cx="21" cy="32" r="1.2" fill="{YELLOW}"/>
<circle cx="27" cy="32" r="1.2" fill="{YELLOW}"/>
<circle cx="24" cy="37" r="1.2" fill="{YELLOW}"/>'''),

    'watermelon': S(f'''<path d="M7 16 A 17 17 0 0 0 41 16 Z" fill="{GREEN}"/>
<path d="M11 16 A 13 13 0 0 0 37 16 Z" fill="{CREAM}"/>
<path d="M13.5 16 A 10.5 10.5 0 0 0 34.5 16 Z" fill="{ORANGE}"/>
<circle cx="19" cy="22" r="1.3" fill="{INK}"/>
<circle cx="24" cy="25" r="1.3" fill="{INK}"/>
<circle cx="29" cy="22" r="1.3" fill="{INK}"/>
<circle cx="21.5" cy="29" r="1.3" fill="{INK}"/>
<circle cx="26.5" cy="29" r="1.3" fill="{INK}"/>'''),

    'cherry': S(f'''<path d="M15 27 C 15 17 22 11 29 7" stroke="{BROWN}" stroke-width="2.5" fill="none"/>
<path d="M33 29 C 33 20 32 12 29 7" stroke="{BROWN}" stroke-width="2.5" fill="none"/>
<ellipse cx="27" cy="7" rx="5" ry="2.5" transform="rotate(-15 27 7)" fill="{GREEN}"/>
<circle cx="14" cy="33" r="8" fill="{ORANGE}"/>
<circle cx="33" cy="35" r="8" fill="{ORANGE}"/>
<circle cx="11" cy="30" r="1.8" fill="{WHITE}"/>
<circle cx="30" cy="32" r="1.8" fill="{WHITE}"/>'''),

    'cake': S(f'''<rect x="9" y="28" width="30" height="12" rx="2" fill="{PINK}"/>
<rect x="13" y="18" width="22" height="10" rx="2" fill="{CREAM}"/>
<path d="M13 20 C 15 24 17 20 19 23 C 21 26 23 20 25 23 C 27 26 29 20 31 23 C 33 26 34 21 35 22 L 35 18 L 13 18 Z" fill="{ORANGE}"/>
<rect x="22" y="8" width="4" height="8" fill="{TEAL}"/>
<path d="M24 3 C 22 5.5 22 7.5 24 7.5 C 26 7.5 26 5.5 24 3 Z" fill="{YELLOW}"/>
<path d="M6 40 L42 40" stroke="{BROWN}" stroke-width="3"/>'''),

    'icecream': S(f'''<path d="M15 23 L 24 43 L 33 23 Z" fill="{YELLOW}"/>
<path d="M18 28 L 30 28 M20 33 L 28 33" stroke="{INK}" stroke-width="1.5"/>
<circle cx="24" cy="16" r="9" fill="{PINK}"/>
<circle cx="24" cy="6.5" r="2.5" fill="{ORANGE}"/>
<circle cx="21" cy="15" r="1.4" fill="{INK}"/>
<circle cx="27" cy="15" r="1.4" fill="{INK}"/>
<path d="M21.5 18.5 Q 24 20.5 26.5 18.5" stroke="{INK}" fill="none" stroke-width="1.5"/>'''),

    'donut': S(f'''<circle cx="24" cy="24" r="15" fill="{PINK}"/>
<circle cx="24" cy="24" r="6" fill="{WHITE}"/>
<rect x="17" y="13" width="4.5" height="1.8" rx="0.9" transform="rotate(25 19 14)" fill="{YELLOW}"/>
<rect x="27" y="12" width="4.5" height="1.8" rx="0.9" transform="rotate(-20 29 13)" fill="{TEAL}"/>
<rect x="32" y="19" width="4.5" height="1.8" rx="0.9" transform="rotate(45 34 20)" fill="{NAVY}"/>
<rect x="13" y="22" width="4.5" height="1.8" rx="0.9" transform="rotate(-35 15 23)" fill="{YELLOW}"/>
<rect x="30" y="30" width="4.5" height="1.8" rx="0.9" transform="rotate(15 32 31)" fill="{TEAL}"/>
<rect x="17" y="31" width="4.5" height="1.8" rx="0.9" transform="rotate(60 19 32)" fill="{NAVY}"/>'''),

    'lemon': S(f'''<ellipse cx="24" cy="24" rx="14" ry="10" transform="rotate(-20 24 24)" fill="{YELLOW}"/>
<path d="M10.5 30.5 C 7.5 32.5 5.5 30.5 7.5 28.5" stroke="{INK}" stroke-width="2" fill="none"/>
<path d="M37.5 17.5 C 40.5 15.5 42.5 17.5 40.5 19.5" stroke="{INK}" stroke-width="2" fill="none"/>
<circle cx="20" cy="21" r="1.5" fill="{INK}"/>
<circle cx="27" cy="19" r="1.5" fill="{INK}"/>
<path d="M21 26.5 Q 24 28.5 27 25.5" stroke="{INK}" fill="none" stroke-width="1.8"/>'''),

    # ---------- 交通 ----------
    'bicycle': S(f'''<circle cx="13" cy="33" r="8" fill="none" stroke="{INK}" stroke-width="3"/>
<circle cx="35" cy="33" r="8" fill="none" stroke="{INK}" stroke-width="3"/>
<path d="M13 33 L 20 21 L 31 21" stroke="{INK}" stroke-width="3" fill="none"/>
<path d="M20 21 L 26 33 L 13 33" stroke="{INK}" stroke-width="3" fill="none"/>
<path d="M26 33 L 35 33 L 31 21" stroke="{INK}" stroke-width="3" fill="none"/>
<path d="M31 21 L 33 14 L 38 14" stroke="{INK}" stroke-width="3" fill="none"/>
<path d="M20 21 L 19 15 L 24 15" stroke="{INK}" stroke-width="3" fill="none"/>
<circle cx="26" cy="33" r="2.5" fill="{ORANGE}"/>
<circle cx="13" cy="33" r="2" fill="{TEAL}"/>
<circle cx="35" cy="33" r="2" fill="{TEAL}"/>'''),

    'sailboat': S(f'''<path d="M22 9 L 22 28 L 9 28 Z" fill="{ORANGE}"/>
<path d="M26 6 L 26 28 L 40 28 Z" fill="{CREAM}"/>
<path d="M24 4 L 24 30" stroke="{INK}" stroke-width="3"/>
<path d="M7 32 L 41 32 L 36 40 L 12 40 Z" fill="{BROWN}"/>
<path d="M4 44 C 8 42 10 46 14 44 C 18 42 20 46 24 44 C 28 42 30 46 34 44 C 38 42 40 46 44 44" stroke="{TEAL}" stroke-width="2.5" fill="none"/>
<circle cx="30" cy="17" r="1.6" fill="{ORANGE}"/>'''),

    'train': S(f'''<rect x="7" y="18" width="26" height="15" rx="3" fill="{ORANGE}"/>
<rect x="25" y="9" width="12" height="13" rx="2" fill="{TEAL}"/>
<rect x="28" y="12" width="6" height="5" fill="{CREAM}"/>
<rect x="10" y="10" width="6" height="8" fill="{NAVY}"/>
<circle cx="13" cy="6" r="2.5" fill="{CREAM}"/>
<rect x="5" y="33" width="36" height="4" fill="{NAVY}"/>
<circle cx="13" cy="40" r="4" fill="{YELLOW}"/>
<circle cx="24" cy="40" r="4" fill="{YELLOW}"/>
<circle cx="35" cy="40" r="4" fill="{YELLOW}"/>
<circle cx="13" cy="40" r="1.5" fill="{INK}"/>
<circle cx="24" cy="40" r="1.5" fill="{INK}"/>
<circle cx="35" cy="40" r="1.5" fill="{INK}"/>'''),

    'scooter': S(f'''<g transform="translate(48,0) scale(-1,1)">
<path d="M4 33 L4 22 Q4 16 10 16 L20 16 Q22 24 27 30 L27 33 Z" fill="{YELLOW}"/>
<path d="M6 18 L6 12 Q6 9 9 9 L17 9 Q20 9 20 12 L20 18 Z" fill="{NAVY}"/>
<circle cx="12" cy="37" r="6" fill="none" stroke="{INK}" stroke-width="3"/>
<circle cx="38" cy="37" r="6" fill="none" stroke="{INK}" stroke-width="3"/>
<circle cx="12" cy="37" r="2.2" fill="{TEAL}"/>
<circle cx="38" cy="37" r="2.2" fill="{TEAL}"/>
<path d="M30 33 Q30 21 38 21 Q46 21 46 33 L44 33 Q44 29.7 38 29.7 Q32 29.7 32 33 Z" fill="{YELLOW}"/>
<path d="M25 29 L34 29 L34 33 L25 33 Z" fill="{ORANGE}"/>
<path d="M30 33 L27 14 Q27 11 30 11 Q33 11 33 14 L36 33 Z" fill="{ORANGE}"/>
<path d="M33 11 L33 8 Q33 6 35 6 L37 6 Q39 6 39 8 L39 11 Z" fill="{YELLOW}"/>
<path d="M25 10 L32 8" stroke="{INK}" stroke-width="3"/>
</g>'''),

    # ---------- 物品 ----------
    'balloon': S(f'''<path d="M24 5 C 14 5 9 13 9 19 C 9 26 15 31 24 31 C 33 31 39 26 39 19 C 39 13 34 5 24 5 Z" fill="{ORANGE}"/>
<path d="M21 31 L 27 31 L 24 35 Z" fill="{ORANGE}"/>
<path d="M24 35 C 20 38 28 40 24 44" stroke="{INK}" stroke-width="2" fill="none"/>
<circle cx="17" cy="14" r="2.2" fill="{WHITE}"/>
<circle cx="20.5" cy="19" r="1.4" fill="{INK}"/>
<circle cx="27.5" cy="19" r="1.4" fill="{INK}"/>
<path d="M21 23 Q 24 25 27 23" stroke="{INK}" fill="none" stroke-width="1.8"/>'''),

    'lock': S(f'''<path d="M16 21 L 16 15 C 16 7 32 7 32 15 L 32 21" stroke="{INK}" stroke-width="4" fill="none"/>
<rect x="10" y="21" width="28" height="19" rx="3" fill="{YELLOW}"/>
<circle cx="24" cy="29" r="3" fill="{INK}"/>
<path d="M24 29 L 21.5 35 L 26.5 35 Z" fill="{INK}"/>'''),

    'headphones': S(f'''<path d="M10 31 L 10 25 C 10 11 38 11 38 25 L 38 31" stroke="{INK}" stroke-width="4" fill="none"/>
<rect x="6" y="27" width="8" height="12" rx="3.5" fill="{ORANGE}"/>
<rect x="34" y="27" width="8" height="12" rx="3.5" fill="{ORANGE}"/>'''),

    'lamp': S(f'''<path d="M17 7 L 31 7 L 37 24 L 11 24 Z" fill="{YELLOW}"/>
<path d="M24 24 L 24 36" stroke="{INK}" stroke-width="3"/>
<rect x="15" y="36" width="18" height="4.5" rx="2" fill="{NAVY}"/>
<path d="M12 29 L 10 32" stroke="{INK}" stroke-width="2"/>
<path d="M24 29 L 24 33" stroke="{INK}" stroke-width="2"/>
<path d="M36 29 L 38 32" stroke="{INK}" stroke-width="2"/>'''),

    'candle': S(f'''<rect x="18" y="18" width="12" height="22" rx="2" fill="{CREAM}"/>
<path d="M24 5 C 21 9 21 12.5 24 13.5 C 27 12.5 27 9 24 5 Z" fill="{ORANGE}"/>
<path d="M24 8.5 C 22.8 10.5 22.8 12 24 12.4 C 25.2 12 25.2 10.5 24 8.5 Z" fill="{YELLOW}"/>
<path d="M24 13.5 L 24 18" stroke="{INK}" stroke-width="2"/>
<rect x="13" y="40" width="22" height="4" rx="2" fill="{BROWN}"/>
<path d="M18 22 C 19 24 20 24 20 22" stroke="{PINK}" stroke-width="1.5" fill="none"/>'''),

    'pencil': S(f'''<path d="M13 31 L 31 13 L 35 17 L 17 35 Z" fill="{YELLOW}"/>
<path d="M13 31 L 7 41 L 17 35 Z" fill="{CREAM}"/>
<path d="M9.5 38.5 L 7 41 L 10.5 39.5 Z" fill="{INK}"/>
<path d="M31 13 L 35 9 L 39 13 L 35 17 Z" fill="{PINK}"/>
<path d="M31 13 L 35 17" stroke="{INK}" stroke-width="2"/>'''),

    'paintbrush': S(f'''<path d="M13 31 L 27 17 L 31 21 L 17 35 Z" fill="{BROWN}"/>
<path d="M27 17 L 31 13 L 35 17 L 31 21 Z" fill="{NAVY}"/>
<path d="M31 13 C 33 7 39 5 42 7 C 42 12 37 16 35 17 Z" fill="{PINK}"/>
<circle cx="11" cy="40" r="3" fill="{TEAL}"/>'''),

    'globe': S(f'''<circle cx="24" cy="21" r="14" fill="{TEAL}"/>
<ellipse cx="24" cy="21" rx="6" ry="14" stroke="{INK}" stroke-width="2" fill="none"/>
<path d="M10 21 L 38 21" stroke="{INK}" stroke-width="2"/>
<path d="M17 13 C 19 10 24 10 25 13 C 23 15 19 16 17 13 Z" fill="{GREEN}"/>
<path d="M26 27 C 28 25 32 26 31 29 C 29 31 25 30 26 27 Z" fill="{GREEN}"/>
<path d="M24 35 L 24 39" stroke="{INK}" stroke-width="3"/>
<path d="M15 42 L 33 42" stroke="{INK}" stroke-width="3.5"/>'''),

    'trophy': S(f'''<path d="M14 12 C 6 12 6 22 14 22" stroke="{INK}" stroke-width="3" fill="none"/>
<path d="M34 12 C 42 12 42 22 34 22" stroke="{INK}" stroke-width="3" fill="none"/>
<path d="M14 7 L 34 7 L 34 17 C 34 25 29 29 24 29 C 19 29 14 25 14 17 Z" fill="{YELLOW}"/>
<path d="M24 29 L 24 37" stroke="{INK}" stroke-width="3"/>
<rect x="15" y="37" width="18" height="4.5" rx="2" fill="{BROWN}"/>
<path d="M24 11 L 25.3 14 L 28.5 14.2 L 26 16.5 L 27 19.8 L 24 18 L 21 19.8 L 22 16.5 L 19.5 14.2 L 22.7 14 Z" fill="{ORANGE}"/>'''),

    'shopping-bag': S(f'''<path d="M18 17 C 18 8 30 8 30 17" stroke="{INK}" stroke-width="3" fill="none"/>
<path d="M10 16 L 38 16 L 36 42 L 12 42 Z" fill="{PINK}"/>
<circle cx="20" cy="26" r="1.6" fill="{INK}"/>
<circle cx="28" cy="26" r="1.6" fill="{INK}"/>
<path d="M20 30 Q 24 33 28 30" stroke="{INK}" fill="none" stroke-width="2"/>'''),

    'credit-card': S(f'''<rect x="5" y="12" width="38" height="26" rx="4" fill="{TEAL}"/>
<rect x="5" y="18" width="38" height="6" fill="{NAVY}"/>
<rect x="11" y="28" width="9" height="6" rx="1.5" fill="{YELLOW}"/>
<path d="M24 32.5 L 33 32.5" stroke="{WHITE}" stroke-width="2.5"/>'''),

    # ---------- 表情与手势 ----------
    'smile': S(f'''<circle cx="24" cy="24" r="16" fill="{YELLOW}"/>
<circle cx="18" cy="20" r="2" fill="{INK}"/>
<circle cx="30" cy="20" r="2" fill="{INK}"/>
<path d="M15 27 Q 24 36 33 27" stroke="{INK}" stroke-width="3" fill="none"/>
<circle cx="13.5" cy="26" r="2.2" fill="{PINK}"/>
<circle cx="34.5" cy="26" r="2.2" fill="{PINK}"/>'''),

    'thumbs-up': S(f'''<rect x="7" y="21" width="7" height="17" rx="2" fill="{TEAL}"/>
<path d="M16 38 L 16 23 L 23 12 C 25 9.5 27.5 11 26.5 14 L 24.5 20 L 33 20 C 36.5 20 38 22.5 37 25.5 L 34 35 C 33.3 37 31.8 38 29.5 38 Z" fill="{YELLOW}"/>'''),

    # ---------- UI ----------
    'close': S(f'''<circle cx="24" cy="24" r="17" fill="{CREAM}"/>
<path d="M17 17 L 31 31" stroke="{ORANGE}" stroke-width="4.5"/>
<path d="M31 17 L 17 31" stroke="{ORANGE}" stroke-width="4.5"/>'''),

    'check': S(f'''<circle cx="24" cy="24" r="17" fill="{GREEN}"/>
<path d="M15 24 L 21.5 31 L 34 17" stroke="{WHITE}" stroke-width="4.5" fill="none"/>'''),

    'plus': S(f'''<circle cx="24" cy="24" r="17" fill="{YELLOW}"/>
<path d="M24 15 L 24 33" stroke="{INK}" stroke-width="4.5"/>
<path d="M15 24 L 33 24" stroke="{INK}" stroke-width="4.5"/>'''),

    'refresh': S(f'''<path d="M11 16.5 A 15 15 0 0 1 37 16.5" fill="none" stroke="{TEAL}" stroke-width="4.5"/>
<path d="M40.7 23 L33 18.8 L41 14.2 Z" fill="{ORANGE}" stroke-width="3"/>
<path d="M37 31.5 A 15 15 0 0 1 11 31.5" fill="none" stroke="{TEAL}" stroke-width="4.5"/>
<path d="M7.3 25 L15 29.2 L7 33.8 Z" fill="{ORANGE}" stroke-width="3"/>'''),

    'share': S(f'''<circle cx="13" cy="24" r="5.5" fill="{ORANGE}"/>
<circle cx="33" cy="11" r="5.5" fill="{TEAL}"/>
<circle cx="33" cy="37" r="5.5" fill="{YELLOW}"/>
<path d="M17.5 21.5 L 28.5 14" stroke="{INK}" stroke-width="2.5"/>
<path d="M17.5 26.5 L 28.5 34" stroke="{INK}" stroke-width="2.5"/>'''),

    'wifi': S(f'''<path d="M9 21 A 19 19 0 0 1 39 21" stroke="{TEAL}" stroke-width="4" fill="none"/>
<path d="M15 28 A 11.5 11.5 0 0 1 33 28" stroke="{ORANGE}" stroke-width="4" fill="none"/>
<circle cx="24" cy="35" r="4" fill="{YELLOW}"/>'''),

    'eye': S(f'''<path d="M5 24 C 11 13 37 13 43 24 C 37 35 11 35 5 24 Z" fill="{CREAM}"/>
<circle cx="24" cy="24" r="6.5" fill="{TEAL}"/>
<circle cx="24" cy="24" r="3" fill="{INK}"/>
<circle cx="26" cy="22" r="1.2" fill="{WHITE}"/>'''),

    'video': S(f'''<rect x="4" y="14" width="28" height="20" rx="4" fill="{NAVY}"/>
<path d="M32 21 L 44 14 L 44 34 L 32 27 Z" fill="{ORANGE}"/>
<path d="M14 20 L 23 24 L 14 28 Z" fill="{YELLOW}"/>'''),

    'mic': S(f'''<rect x="18" y="5" width="12" height="20" rx="6" fill="{ORANGE}"/>
<path d="M12 21 C 12 31 16 33 24 33 C 32 33 36 31 36 21" stroke="{INK}" stroke-width="3" fill="none"/>
<path d="M24 33 L 24 39" stroke="{INK}" stroke-width="3"/>
<path d="M17 42 L 31 42" stroke="{INK}" stroke-width="3.5"/>'''),

    'save': S(f'''<path d="M10 7 L 32 7 L 40 15 L 40 41 L 8 41 L 8 7 Z" fill="{NAVY}"/>
<rect x="15" y="7" width="14" height="11" fill="{PINK}"/>
<rect x="26" y="9.5" width="4" height="6" fill="{CREAM}"/>
<rect x="15" y="25" width="18" height="16" fill="{CREAM}"/>
<path d="M19 31 L 29 31 M 19 35 L 26 35" stroke="{INK}" stroke-width="2"/>'''),

    'code': S(f'''<path d="M17 13 L 7 24 L 17 35" stroke="{TEAL}" stroke-width="4" fill="none"/>
<path d="M31 13 L 41 24 L 31 35" stroke="{TEAL}" stroke-width="4" fill="none"/>
<path d="M27 9 L 21 39" stroke="{ORANGE}" stroke-width="3.5"/>'''),

    'map': S(f'''<path d="M8 12 L 18 8 L 30 12 L 40 8 L 40 34 L 30 38 L 18 34 L 8 38 Z" fill="{CREAM}"/>
<path d="M18 8 L 18 34" stroke="{INK}" stroke-width="2.5"/>
<path d="M30 12 L 30 38" stroke="{INK}" stroke-width="2.5"/>
<path d="M12 30 C 15 23 21 28 24 21 C 26 17 29 18 31 16" stroke="{ORANGE}" stroke-width="2.5" fill="none"/>
<circle cx="32" cy="15" r="2.2" fill="{ORANGE}"/>'''),

    'flag': S(f'''<path d="M12 5 L 12 43" stroke="{INK}" stroke-width="3.5"/>
<path d="M12 8 C 19 4 26 12 33 8 L 33 22 C 26 26 19 18 12 22 Z" fill="{ORANGE}"/>
<circle cx="12" cy="5" r="2.5" fill="{YELLOW}"/>'''),

    # ---------- 导航 / 操作骨架 ----------
    'menu': S(f'''<line x1="10" y1="15" x2="38" y2="15" stroke="{INK}" stroke-width="3.5"/>
<line x1="10" y1="24" x2="38" y2="24" stroke="{INK}" stroke-width="3.5"/>
<line x1="14" y1="33" x2="34" y2="33" stroke="{INK}" stroke-width="3.5"/>'''),

    'chevron-down': S(f'''<path d="M12 19 L 24 31 L 36 19" fill="none" stroke="{INK}" stroke-width="3.5"/>'''),
    'chevron-up': S(f'''<path d="M12 29 L 24 17 L 36 29" fill="none" stroke="{INK}" stroke-width="3.5"/>'''),
    'chevron-left': S(f'''<path d="M29 12 L 17 24 L 29 36" fill="none" stroke="{INK}" stroke-width="3.5"/>'''),
    'chevron-right': S(f'''<path d="M19 12 L 31 24 L 19 36" fill="none" stroke="{INK}" stroke-width="3.5"/>'''),

    'ellipsis': S(f'''<circle cx="12" cy="24" r="3" fill="{INK}"/>
<circle cx="24" cy="24" r="3" fill="{INK}"/>
<circle cx="36" cy="24" r="3" fill="{INK}"/>'''),

    'external-link': S(f'''<path d="M26.5 25 L26.5 32 Q26.5 38 20.5 38 L12 38 Q6 38 6 32 L6 20 Q6 14 12 14 L20.5 14" fill="none" stroke="{INK}" stroke-width="5"/>
<path d="M19 25 L30.9 13.1" fill="none" stroke="{ORANGE}" stroke-width="4"/>
<path d="M33 18.8 L33 11 L25.2 11" fill="none" stroke="{ORANGE}" stroke-width="4"/>'''),

    'link': S(f'''<g transform="rotate(45 24 24)">
<rect x="9" y="17" width="16" height="14" rx="7" fill="none" stroke="{INK}" stroke-width="3.5"/>
<rect x="23" y="17" width="16" height="14" rx="7" fill="none" stroke="{INK}" stroke-width="3.5"/></g>'''),

    'unlink': S(f'''<g transform="rotate(45 24 24)">
<rect x="6" y="17" width="14" height="14" rx="7" fill="none" stroke="{INK}" stroke-width="3.5"/>
<rect x="28" y="17" width="14" height="14" rx="7" fill="none" stroke="{INK}" stroke-width="3.5"/></g>'''),

    'copy': S(f'''<rect x="14" y="13" width="20" height="22" rx="3" fill="{CREAM}" stroke="{INK}" stroke-width="3.5"/>
<rect x="10" y="9" width="20" height="22" rx="3" fill="{WHITE}" stroke="{INK}" stroke-width="3.5"/>
<line x1="15" y1="16" x2="25" y2="16" stroke="{INK}" stroke-width="3.5"/>
<line x1="15" y1="22" x2="25" y2="22" stroke="{INK}" stroke-width="3.5"/>'''),

    'minus': S(f'''<circle cx="24" cy="24" r="17" fill="{YELLOW}"/>
<path d="M15 24 L 33 24" stroke="{INK}" stroke-width="4.5"/>'''),

    # ---------- 运动 / 自然 / 媒体控制 / 饮品 / 品牌 ----------
    'basketball': S(f'''<circle cx="24" cy="24" r="18" fill="{ORANGE}"/>
<path d="M24 6 L24 42" stroke="{INK}" stroke-width="2.5"/>
<path d="M6 24 L42 24" stroke="{INK}" stroke-width="2.5"/>
<path d="M11 12 C 17 18 17 30 11 36" stroke="{INK}" stroke-width="2.5"/>
<path d="M37 12 C 31 18 31 30 37 36" stroke="{INK}" stroke-width="2.5"/>'''),

    'dumbbell': S(f'''<rect x="8" y="15" width="6.5" height="18" rx="2.5" fill="{ORANGE}"/>
<rect x="15.5" y="19" width="4" height="10" rx="2" fill="{YELLOW}"/>
<path d="M19.5 24 L28.5 24" stroke="{INK}" stroke-width="3.5"/>
<rect x="28.5" y="19" width="4" height="10" rx="2" fill="{YELLOW}"/>
<rect x="33.5" y="15" width="6.5" height="18" rx="2.5" fill="{ORANGE}"/>'''),

    'mountain': S(f'''<path d="M4 37 L17 15 L24 26 L31 13 L44 37 Z" fill="{GREEN}"/>
<path d="M31 13 L34.5 18.5 L32 17.5 L30 19.5 L28.5 17.5 Z" fill="{CREAM}"/>
<path d="M17 15 L19.5 19 L17.5 18 L15.8 20 L14.6 18.5 Z" fill="{CREAM}"/>
<path d="M31 13 L31 6.5" stroke="{INK}" stroke-width="2"/>
<path d="M31 6.5 L37.5 8.5 L31 10.5 Z" fill="{ORANGE}"/>'''),

    'tent': S(f'''<path d="M5 37 L24 11 L43 37 Z" fill="{ORANGE}"/>
<path d="M24 21 L32.5 37 L15.5 37 Z" fill="{CREAM}"/>
<path d="M24 11 L24 6" stroke="{INK}" stroke-width="2"/>
<path d="M24 6 L31 8.5 L24 11 Z" fill="{YELLOW}"/>'''),

    'pause': S(f'''<circle cx="24" cy="24" r="20" fill="{TEAL}"/>
<path d="M19 16 L19 32" stroke="{YELLOW}" stroke-width="5"/>
<path d="M29 16 L29 32" stroke="{YELLOW}" stroke-width="5"/>'''),

    'stop': S(f'''<circle cx="24" cy="24" r="20" fill="{TEAL}"/>
<rect x="17" y="17" width="14" height="14" rx="2.5" fill="{YELLOW}"/>'''),

    'coffee-cup': S(f'''<path d="M13 11 L35 11 L34 16 L14 16 Z" fill="{BROWN}"/>
<path d="M14.5 16 L17 40 C 17.5 42 30.5 42 31 40 L33.5 16 Z" fill="{CREAM}"/>
<path d="M15.2 23 L32.8 23 L31.9 31 L16.1 31 Z" fill="{ORANGE}"/>
<path d="M24 29.6 C 21.8 27.6 21.7 25.7 23.2 25 C 23.9 24.7 24 25.3 24 25.7 C 24 25.3 24.1 24.7 24.8 25 C 26.3 25.7 26.2 27.6 24 29.6 Z" fill="{CREAM}" stroke="none"/>
<path d="M20 8 C 20 6 22 6 22 3.5" stroke="{INK}" stroke-width="2"/>
<path d="M27 8 C 27 6 29 6 29 3.5" stroke="{INK}" stroke-width="2"/>'''),

    'water-cup': S(f'''<path d="M13 12 L16 39 C 16.5 41.5 31.5 41.5 32 39 L35 12 Z" fill="{CREAM}"/>
<path d="M15.8 24 C 21 22.5 27 25.5 32.2 24 L 30.6 35 C 30.2 37.5 17.8 37.5 17.4 35 Z" fill="{TEAL}"/>
<path d="M28 11 L31.5 4" stroke="{ORANGE}" stroke-width="3"/>
<circle cx="22" cy="29" r="1.6" fill="{CREAM}"/>
<circle cx="25.5" cy="32.5" r="1.2" fill="{CREAM}"/>'''),

    'google-chrome': S(f'''<path d="M24 24 L41.32 14 A20 20 0 0 0 6.68 14 Z" fill="{ORANGE}" stroke="none"/>
<path d="M24 24 L41.32 14 A20 20 0 0 1 24 44 Z" fill="{YELLOW}" stroke="none"/>
<path d="M24 24 L24 44 A20 20 0 0 1 6.68 14 Z" fill="{GREEN}" stroke="none"/>
<circle cx="24" cy="24" r="8.8" fill="{CREAM}" stroke="none"/>
<circle cx="24" cy="24" r="6.8" fill="{BLUE}"/>
<circle cx="24" cy="24" r="20" fill="none"/>'''),

    # ---------- 状态 / 反馈 ----------
    'check-circle': S(f'''<circle cx="24" cy="24" r="17" fill="none" stroke="{INK}" stroke-width="3.5"/>
<path d="M15 24.5 L21 30.5 L34 16" fill="none" stroke="{GREEN}" stroke-width="4"/>'''),

    'x-circle': S(f'''<circle cx="24" cy="24" r="17" fill="none" stroke="{INK}" stroke-width="3.5"/>
<path d="M17 17 L31 31" fill="none" stroke="{ORANGE}" stroke-width="4"/>
<path d="M31 17 L17 31" fill="none" stroke="{ORANGE}" stroke-width="4"/>'''),

    'alert-circle': S(f'''<circle cx="24" cy="24" r="17" fill="none" stroke="{INK}" stroke-width="3.5"/>
<path d="M24 14 L24 27" fill="none" stroke="{ORANGE}" stroke-width="4"/>
<circle cx="24" cy="33" r="2.2" fill="{ORANGE}"/>'''),

    'alert-triangle': S(f'''<path d="M24 7 L43 40 L5 40 Z" fill="{YELLOW}" stroke="{INK}" stroke-width="3.5"/>
<path d="M24 18 L24 30" fill="none" stroke="{INK}" stroke-width="4"/>
<circle cx="24" cy="35" r="2.2" fill="{INK}"/>'''),

    'info': S(f'''<circle cx="24" cy="24" r="17" fill="none" stroke="{INK}" stroke-width="3.5"/>
<circle cx="24" cy="16.5" r="2.2" fill="{TEAL}"/>
<path d="M24 21 L24 34" fill="none" stroke="{TEAL}" stroke-width="4"/>'''),

    'help-circle': S(f'''<circle cx="24" cy="24" r="17" fill="none" stroke="{INK}" stroke-width="3.5"/>
<path d="M19 19 C 19 14 29 14 29 19 C 29 23 24 23 24 27" fill="none" stroke="{TEAL}" stroke-width="3.5"/>
<circle cx="24" cy="33" r="2.2" fill="{TEAL}"/>'''),

    'eye-off': S(f'''<path d="M5 24 C 11 13 37 13 43 24 C 37 35 11 35 5 24 Z" fill="{CREAM}"/>
<circle cx="24" cy="24" r="6.5" fill="{TEAL}"/>
<circle cx="24" cy="24" r="3" fill="{INK}"/>
<path d="M8 8 L 40 40" fill="none" stroke="{ORANGE}" stroke-width="3.5"/>'''),

    'lock-open': S(f'''<path d="M16 22 L 16 15 C 16 6 31 6 31 14 L 31 18" fill="none" stroke="{INK}" stroke-width="4"/>
<rect x="10" y="21" width="28" height="19" rx="3" fill="{YELLOW}"/>
<circle cx="24" cy="29" r="3" fill="{INK}"/>
<path d="M24 29 L 21.5 35 L 26.5 35 Z" fill="{INK}"/>'''),

    'spinner': S(f'''<circle cx="24" cy="24" r="14" fill="none" stroke="{CREAM}" stroke-width="3.5"/>
<path d="M24 10 A 14 14 0 1 1 10 24" fill="none" stroke="{TEAL}" stroke-width="3.5"/>'''),

    # ---------- 成员 / 视图 ----------

    'users': S(f'''<circle cx="15" cy="14" r="6" fill="{NAVY}"/>
<path d="M5 34 C 5 26 9 23 15 23 C 19 23 22 24 24 26 L 24 40 L 8 40 Z" fill="{NAVY}"/>
<circle cx="29" cy="18" r="7.5" fill="{ORANGE}"/>
<path d="M14 42 C 14 33 21 30 29 30 C 37 30 43 33 43 42 Z" fill="{TEAL}"/>
<circle cx="26.5" cy="18" r="1.5" fill="{INK}"/>
<circle cx="31.5" cy="18" r="1.5" fill="{INK}"/>
<path d="M26 22 Q 29 24.5 32 22" stroke="{INK}" fill="none"/>'''),

    'user-plus': S(f'''<circle cx="19" cy="16" r="8" fill="{ORANGE}"/>
<path d="M5 42 C 5 33 11 29 19 29 C 26 29 31 31 34 36 L 34 42 Z" fill="{TEAL}"/>
<circle cx="16.5" cy="16" r="1.5" fill="{INK}"/>
<circle cx="21.5" cy="16" r="1.5" fill="{INK}"/>
<path d="M16 20 Q 19 22.5 22 20" stroke="{INK}" fill="none"/>
<path d="M37 28 L37 38 M32 33 L42 33" stroke="{ORANGE}" stroke-width="4.5"/>'''),

    'grid': S(f'''<rect x="6" y="6" width="16" height="16" rx="3.5" fill="{TEAL}"/>
<rect x="26" y="6" width="16" height="16" rx="3.5" fill="{YELLOW}"/>
<rect x="6" y="26" width="16" height="16" rx="3.5" fill="{ORANGE}"/>
<rect x="26" y="26" width="16" height="16" rx="3.5" fill="{NAVY}"/>'''),

    'list': S(f'''<circle cx="10" cy="14" r="3.4" fill="{TEAL}"/>
<circle cx="10" cy="24" r="3.4" fill="{ORANGE}"/>
<circle cx="10" cy="34" r="3.4" fill="{YELLOW}"/>
<line x1="19" y1="14" x2="41" y2="14" stroke="{INK}" stroke-width="4"/>
<line x1="19" y1="24" x2="41" y2="24" stroke="{INK}" stroke-width="4"/>
<line x1="19" y1="34" x2="41" y2="34" stroke="{INK}" stroke-width="4"/>'''),

    'sliders': S(f'''<line x1="6" y1="15" x2="42" y2="15" stroke="{INK}" stroke-width="3.5"/>
<line x1="6" y1="24" x2="42" y2="24" stroke="{INK}" stroke-width="3.5"/>
<line x1="6" y1="33" x2="42" y2="33" stroke="{INK}" stroke-width="3.5"/>
<circle cx="16" cy="15" r="4.6" fill="{ORANGE}"/>
<circle cx="32" cy="24" r="4.6" fill="{TEAL}"/>
<circle cx="20" cy="33" r="4.6" fill="{YELLOW}"/>'''),

    'more-vertical': S(f'''<circle cx="24" cy="12" r="3.4" fill="{INK}"/>
<circle cx="24" cy="24" r="3.4" fill="{INK}"/>
<circle cx="24" cy="36" r="3.4" fill="{INK}"/>'''),

    # ---------- 数据与表单 ----------

    'filter': S(f'''<path d="M6 8 L42 8 L29 23 L29 41 L19 34 L19 23 Z" fill="{TEAL}"/>
<path d="M6 8 L42 8 L38 14 L10 14 Z" fill="{CREAM}"/>'''),

    'sort': S(f'''<path d="M15 40 L15 14" stroke="{TEAL}" stroke-width="4.5"/>
<path d="M7 22 L15 12 L23 22 Z" fill="{TEAL}"/>
<path d="M33 8 L33 34" stroke="{ORANGE}" stroke-width="4.5"/>
<path d="M25 26 L33 36 L41 26 Z" fill="{ORANGE}"/>'''),

    'check-square': S(f'''<rect x="7" y="7" width="34" height="34" rx="6" fill="none" stroke="{INK}" stroke-width="3.5"/>
<path d="M15 24.5 L21.5 31 L33.5 18" stroke="{GREEN}" stroke-width="5" fill="none"/>'''),

    # ---------- 历史与音量 ----------

    'undo': S(f'''<path d="M24 10 A 14 14 0 1 1 11.9 17" fill="none" stroke="{INK}" stroke-width="4.5"/>
<path d="M17 10 L24 5.5 L24 14.5 Z" fill="{ORANGE}"/>'''),

    'redo': S(f'''<path d="M24 10 A 14 14 0 1 0 36.1 17" fill="none" stroke="{INK}" stroke-width="4.5"/>
<path d="M31 10 L24 5.5 L24 14.5 Z" fill="{ORANGE}"/>'''),

    'volume': S(f'''<path d="M6 19 L13 19 L23 10 L23 38 L13 29 L6 29 Z" fill="{TEAL}"/>
<path d="M29 18 A 8 8 0 0 1 29 30" fill="none" stroke="{ORANGE}" stroke-width="4"/>
<path d="M35 13 A 14 14 0 0 1 35 35" fill="none" stroke="{ORANGE}" stroke-width="3.5"/>'''),

    'volume-x': S(f'''<path d="M5.8 19 L12.8 19 L21 10 L21 38 L12.8 29 L5.8 29 Z" fill="{TEAL}"/>
<path d="M28 18.5 L37 27.5 M37 18.5 L28 27.5" stroke="{ORANGE}" stroke-width="4.5"/>'''),

    # ---------- 视图缩放 ----------

    'maximize': S(f'''<path d="M6 16 L6 6 L16 6" fill="none" stroke="{INK}" stroke-width="4.5"/>
<path d="M32 6 L42 6 L42 16" fill="none" stroke="{INK}" stroke-width="4.5"/>
<path d="M42 32 L42 42 L32 42" fill="none" stroke="{INK}" stroke-width="4.5"/>
<path d="M16 42 L6 42 L6 32" fill="none" stroke="{INK}" stroke-width="4.5"/>
<circle cx="24" cy="24" r="3" fill="{ORANGE}"/>'''),

    'zoom-in': S(f'''<circle cx="20" cy="20" r="12.5" fill="none" stroke="{TEAL}" stroke-width="4"/>
<path d="M29.5 29.5 L40 40" stroke="{INK}" stroke-width="4.5"/>
<path d="M20 15 L20 25 M15 20 L25 20" stroke="{ORANGE}" stroke-width="4"/>'''),

    'zoom-out': S(f'''<circle cx="20" cy="20" r="12.5" fill="none" stroke="{TEAL}" stroke-width="4"/>
<path d="M29.5 29.5 L40 40" stroke="{INK}" stroke-width="4.5"/>
<path d="M15 20 L25 20" stroke="{ORANGE}" stroke-width="4"/>'''),

    'arrow-up-right': S(f'''<path d="M13 35 L33 15" stroke="{ORANGE}" stroke-width="4.5" fill="none"/>
<path d="M34 24 L34 12 L22 12" stroke="{ORANGE}" stroke-width="4.5" fill="none"/>
<circle cx="13" cy="35" r="3" fill="{TEAL}"/>'''),

    # ---------- 通信与附件 ----------

    'send': S(f'''<path d="M6 24 L43 7 L31 41 L24.5 27 Z" fill="{ORANGE}"/>
<path d="M24.5 27 L43 7 L18 21 Z" fill="{YELLOW}"/>'''),

    'inbox': S(f'''<path d="M5 19 L5 41 L43 41 L43 19 L29 19 L26 28 L22 28 L19 19 Z" fill="{TEAL}" stroke="{INK}" stroke-width="3.5" stroke-linejoin="round"/>
<rect x="17" y="33" width="14" height="4" rx="2" fill="{CREAM}"/>'''),

    'paperclip': S(f'''<path d="M17 31 L28 20 A 5 5 0 0 0 21 13 L 12 22 A 9 9 0 0 0 25 35 L 33 27" fill="none" stroke="{TEAL}" stroke-width="4.5"/>'''),

    # ---------- 状态徽章 ----------

    'shield': S(f'''<path d="M24 5 L41 12 C 41 28 34 38 24 43 C 14 38 7 28 7 12 Z" fill="{NAVY}"/>
<path d="M17 24 L22 29 L31 19" stroke="{YELLOW}" stroke-width="4.5" fill="none"/>'''),

    'badge-check': S(f'''<path d="M17 32 L17 43 L24 38.5 L31 43 L31 32 Z" fill="{ORANGE}"/>
<circle cx="24" cy="20" r="13" fill="{NAVY}"/>
<path d="M18 20 L22.5 24.5 L30.5 15.5" stroke="{YELLOW}" stroke-width="4" fill="none"/>'''),

    'bell-off': S(f'''<path d="M11 32 C 11 14 37 14 37 32 Z" fill="{CREAM}" stroke="{INK}" stroke-width="3.5"/>
<path d="M9 32 L39 32" stroke="{INK}" stroke-width="3"/>
<path d="M20 36 C 20 40 28 40 28 36" fill="{INK}"/>
<path d="M10 39 L38 11" stroke="{ORANGE}" stroke-width="4.5"/>'''),

    'ban': S(f'''<circle cx="24" cy="24" r="17" fill="{CREAM}"/>
<path d="M12 36 L36 12" stroke="{ORANGE}" stroke-width="5"/>'''),

    # ---------- 外设 ----------

    'keyboard': S(f'''<rect x="5" y="15" width="38" height="19" rx="4" fill="{YELLOW}"/>
<path d="M12 21 L14.5 21 M18.5 21 L21 21 M25 21 L27.5 21 M31.5 21 L34 21" stroke-width="3"/>
<path d="M12 27 L14.5 27 M18.5 27 L21 27 M25 27 L27.5 27" stroke-width="3"/>
<path d="M16 31.5 L32 31.5" stroke="{ORANGE}" stroke-width="3"/>'''),

    'mouse': S(f'''<rect x="14" y="8" width="20" height="32" rx="10" fill="{TEAL}"/>
<path d="M14 20 L34 20" stroke-width="2.5"/>
<rect x="21.5" y="12" width="5" height="4" rx="2" fill="{ORANGE}" stroke-width="2"/>'''),

    'monitor': S(f'''<rect x="5" y="9" width="38" height="26" rx="4" fill="{TEAL}"/>
<path d="M12 17 L21 17" stroke="{CREAM}" stroke-width="3"/>
<path d="M12 24 L27 24" stroke="{CREAM}" stroke-width="3"/>
<path d="M24 35 L24 41" stroke-width="3.5"/>
<path d="M17 41 L31 41" stroke-width="3.5"/>'''),

    'charger': S(f'''<rect x="11" y="14" width="26" height="26" rx="5" fill="{ORANGE}"/>
<path d="M19 14 L19 8 M29 14 L29 8" stroke-width="3.5"/>
<circle cx="24" cy="27" r="6" fill="none" stroke="{CREAM}" stroke-width="3"/>'''),
}


# SVG 里 stroke-width 等是合法的 kebab-case，JSX 只认 camelCase。
# 另外 SVG 的 stroke-width 是可继承属性，但子元素一旦自带值就不再继承根节点的——
# 库里有 220 处内层自带 stroke-width，其中 182 处是刻意的粗细层次。
# 所以不能只改根节点，必须让内层跟着 strokeWidth 属性按比例缩放：
# 组件里 const sw = scaledStroke(props.strokeWidth)，内层写 strokeWidth={sw(4)}。
# 默认 3.5 → scale 1，粗细分毫不变；传 7 → scale 2，所有描边一起加倍。
_JSX_ATTRS = {
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
}
_JSX_ATTR_RE = re.compile(r'(?<![\w-])([a-z]+-[a-z]+)="')
_STROKE_W_RE = re.compile(r'(?<![\w-])stroke-width="([0-9.]+)"')


def to_jsx_attrs(svg_body):
    """SVG body -> JSX body：属性名转 camelCase，stroke-width 转成缩放调用。"""
    out = _JSX_ATTR_RE.sub(lambda m: _JSX_ATTRS.get(m.group(1), m.group(1)) + '="', svg_body)
    return _STROKE_W_RE.sub(lambda m: 'strokeWidth={sw(%s)}' % m.group(1), out)


def pascal(s):
    return ''.join(p.capitalize() for p in s.split('-'))


# 1) 只写新增的 SVG（绝不动已有文件）
written = []
for name, svg in NEW_ICONS.items():
    path = os.path.join(SVG_DIR, f'{name}.svg')
    if os.path.exists(path):
        print(f'跳过（已存在）: {name}.svg')
        continue
    with open(path, 'w') as f:
        f.write(svg)
    written.append(name)
print(f'新增 SVG: {len(written)} 个')

# 2) 为新增图标生成 .tsx 组件
for name in written:
    comp = pascal(name) + 'Icon'
    svg = NEW_ICONS[name]
    inner = to_jsx_attrs(svg.split('>', 1)[1].rsplit('<', 1)[0])
    tsx = f'''import {{ forwardRef }} from 'react';
import type {{ IconProps }} from './types';
import {{ normalizeIconProps }} from './iconProps';

export const {comp} = forwardRef<SVGSVGElement, IconProps>((props, ref) => {{
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
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
      {inner}
    </svg>
  );
}});

{comp}.displayName = '{comp}';

export default {comp};
'''
    with open(os.path.join(SRC_DIR, f'{comp}.tsx'), 'w') as f:
        f.write(tsx)
print(f'新增 TSX: {len(written)} 个')

# 3) 更新 index.ts —— 按 svg 目录全量重建导出（幂等）
all_names = sorted(f[:-4] for f in os.listdir(SVG_DIR) if f.endswith('.svg'))
with open(os.path.join(SRC_DIR, 'index.ts'), 'w') as f:
    for n in all_names:
        comp = pascal(n) + 'Icon'
        f.write(f"export {{ {comp} }} from './{comp}';\n")
    # 必须转发 types.ts 的类型与色板。少了这两行，README 里的
    #   import { NAIVE_PALETTE } from 'naive-icons'
    #   import type { IconProps } from 'naive-icons'
    # 会分别报运行时 SyntaxError 与 TS2305 / TS2459。
    f.write("\n// 转发类型与色板。少了这两行，README 里的\n")
    f.write("//   import { NAIVE_PALETTE } from 'naive-icons'\n")
    f.write("//   import type { IconProps } from 'naive-icons'\n")
    f.write("// 会分别报运行时 SyntaxError 与 TS2305 / TS2459。\n")
    f.write("export type { IconProps, IconName, IconComponent, PaletteColor } from './types';\n")
    f.write("export { NAIVE_PALETTE } from './types';\n")
print(f'index.ts 重建: {len(all_names)} 个图标导出 + 类型与色板')

# 4) 重建 types.ts
icon_names_ts = ' | '.join(f"'{pascal(n)}Icon'" for n in all_names)
types_ts = f'''import {{ FC }} from 'react';
import type {{ IconProps as IconPropsBase }} from './iconProps';

/** 所有图标的通用 Props（继承原生 SVG 属性），完整定义见 ./iconProps */
export type IconProps = IconPropsBase;

/** naive 风格调色板 */
export const NAIVE_PALETTE = {{
  ink: '#2A2A2A',
  navy: '#264653',
  orange: '#E76F51',
  yellow: '#E9C46A',
  pink: '#F4A6A4',
  green: '#588157',
  teal: '#2A9D8F',
  brown: '#8B5E3C',
  cream: '#FAEDCD',
}} as const;

export type PaletteColor = keyof typeof NAIVE_PALETTE;

/** 所有图标组件名（共 {len(all_names)} 个） */
export type IconName = {icon_names_ts};

/** 图标组件类型 */
export type IconComponent = FC<IconProps>;
'''
with open(os.path.join(SRC_DIR, 'types.ts'), 'w') as f:
    f.write(types_ts)
print('types.ts 重建完成')

# 5) 更新 package.json 描述
import json
import re as _re
pkg_path = os.path.join(ROOT, 'package.json')
with open(pkg_path) as f:
    pkg = json.load(f)
# 仅更新图标数量，保留现有版本号与描述语言，避免回退版本
new_count = len(all_names)
desc = pkg.get('description', '')
pkg['description'] = _re.sub(r'\b\d+\b', str(new_count), desc, count=1)
with open(pkg_path, 'w') as f:
    json.dump(pkg, f, indent=2, ensure_ascii=False)
    f.write('\n')  # json.dump 不补尾换行，不手动写会让 package.json 平白多出一行 diff
print(f'package.json 更新: {new_count} icons')
