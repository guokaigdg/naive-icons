#!/usr/bin/env python3
"""
Naive Icons 扩充脚本 —— 只新增，不修改已有的 50 个图标
- 新增图标沿用 v1 规范：48x48 viewBox, stroke #2A2A2A / 3.5, 圆角线帽, naive 调色板
- 生成新 .svg + .tsx，更新 index.ts / types.ts / package.json
"""
import os
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

    'snowflake': S(f'''<circle cx="24" cy="24" r="3.5" fill="{TEAL}"/>
<path d="M24 5 L24 43" stroke="{TEAL}" stroke-width="3"/>
<path d="M7.6 14.5 L40.4 33.5" stroke="{TEAL}" stroke-width="3"/>
<path d="M7.6 33.5 L40.4 14.5" stroke="{TEAL}" stroke-width="3"/>
<path d="M20 10 L24 6 L28 10" stroke="{TEAL}" stroke-width="2.5" fill="none"/>
<path d="M20 38 L24 42 L28 38" stroke="{TEAL}" stroke-width="2.5" fill="none"/>
<path d="M9.5 11 L8 15.5 L12.5 16.5" stroke="{TEAL}" stroke-width="2.5" fill="none"/>
<path d="M38.5 37 L40 32.5 L35.5 31.5" stroke="{TEAL}" stroke-width="2.5" fill="none"/>
<path d="M12.5 31.5 L8 32.5 L9.5 37" stroke="{TEAL}" stroke-width="2.5" fill="none"/>
<path d="M35.5 16.5 L40 15.5 L38.5 11" stroke="{TEAL}" stroke-width="2.5" fill="none"/>'''),

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

    'refresh': S(f'''<path d="M37 16 A 14.5 14.5 0 1 0 38.5 24" stroke="{TEAL}" stroke-width="3.5" fill="none"/>
<path d="M30 10 L 39 11 L 35 19 Z" fill="{ORANGE}"/>'''),

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

    'external-link': S(f'''<rect x="9" y="9" width="20" height="20" rx="3" fill="none" stroke="{INK}" stroke-width="3.5"/>
<path d="M21 27 L 35 13" fill="none" stroke="{INK}" stroke-width="3.5"/>
<path d="M35 13 L 35 22" fill="none" stroke="{INK}" stroke-width="3.5"/>
<path d="M35 13 L 26 13" fill="none" stroke="{INK}" stroke-width="3.5"/>'''),

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
}


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
    inner = svg.split('>', 1)[1].rsplit('<', 1)[0]
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
print(f'index.ts 重建: {len(all_names)} 个导出')

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
print(f'package.json 更新: {new_count} icons')
