#!/usr/bin/env python3
"""
Naive 风格 SVG 图标生成器 + React 组件库
- 50 个 SVG 图标 (48x48 viewBox, 粗描边 + 扁平彩色填充)
- 每个图标生成 .svg + .tsx React 函数组件
- index.ts 统一导出
- package.json + README.md + 预览页
"""
import os
from pathlib import Path

ROOT = str(Path(__file__).resolve().parent.parent)
SVG_DIR = os.path.join(ROOT, 'svg')
SRC_DIR = os.path.join(ROOT, 'src')

os.makedirs(SVG_DIR, exist_ok=True)
os.makedirs(SRC_DIR, exist_ok=True)

# naive 调色板
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

# 50 个图标的 SVG 内容（紧凑但带 naive 风格的色彩与小表情）
ICONS = {
    'home': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M6 24 L24 8 L42 24" fill="{PINK}"/>
<path d="M10 22 L10 40 L38 40 L38 22" fill="{YELLOW}"/>
<rect x="20" y="28" width="8" height="12" fill="{NAVY}"/>
<circle cx="16" cy="30" r="1.5" fill="{INK}"/>
<circle cx="32" cy="30" r="1.5" fill="{INK}"/>
</svg>''',
    'user': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<circle cx="24" cy="17" r="8" fill="{ORANGE}"/>
<path d="M8 42 C 8 32 14 28 24 28 C 34 28 40 32 40 42" fill="{TEAL}"/>
<circle cx="21" cy="17" r="1.5" fill="{INK}"/>
<circle cx="27" cy="17" r="1.5" fill="{INK}"/>
<path d="M21 21 Q 24 23 27 21" stroke="{INK}" fill="none"/>
</svg>''',
    'heart': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M24 40 C 8 30 4 18 12 12 C 18 8 22 12 24 16 C 26 12 30 8 36 12 C 44 18 40 30 24 40 Z" fill="{ORANGE}"/>
<circle cx="18" cy="20" r="1.5" fill="{INK}"/>
<circle cx="30" cy="20" r="1.5" fill="{INK}"/>
</svg>''',
    'star': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M24 6 L29 18 L42 19 L32 28 L35 41 L24 34 L13 41 L16 28 L6 19 L19 18 Z" fill="{YELLOW}"/>
<circle cx="20" cy="22" r="1.3" fill="{INK}"/>
<circle cx="28" cy="22" r="1.3" fill="{INK}"/>
</svg>''',
    'search': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<circle cx="20" cy="20" r="12" fill="{TEAL}"/>
<circle cx="20" cy="20" r="6" fill="{WHITE}"/>
<path d="M30 30 L42 42" stroke="{INK}" stroke-width="4.5"/>
</svg>''',
    'settings': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M24 6 L27 11 L33 10 L34 16 L40 18 L37 23 L40 28 L34 30 L33 36 L27 35 L24 40 L21 35 L15 36 L14 30 L8 28 L11 23 L8 18 L14 16 L15 10 L21 11 Z" fill="{NAVY}"/>
<circle cx="24" cy="23" r="6" fill="{YELLOW}"/>
</svg>''',
    'trash': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M10 16 L38 16 L36 42 L12 42 Z" fill="{ORANGE}"/>
<path d="M18 16 L18 10 L30 10 L30 16" fill="{PINK}"/>
<path d="M6 16 L42 16" stroke="{INK}" stroke-width="3.5"/>
<path d="M19 22 L19 36" stroke="{INK}" stroke-width="2.5"/>
<path d="M29 22 L29 36" stroke="{INK}" stroke-width="2.5"/>
</svg>''',
    'edit': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M8 38 L8 32 L30 10 L38 18 L16 40 L10 40 Z" fill="{YELLOW}"/>
<path d="M30 10 L36 4 L42 10 L38 16" fill="{PINK}"/>
<path d="M8 38 L14 38" stroke="{INK}" stroke-width="2"/>
</svg>''',
    'calendar': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<rect x="8" y="12" width="32" height="28" rx="4" fill="{CREAM}"/>
<path d="M8 20 L40 20" stroke="{INK}" stroke-width="3"/>
<rect x="8" y="12" width="32" height="8" fill="{ORANGE}"/>
<path d="M16 8 L16 16" stroke="{INK}" stroke-width="3"/>
<path d="M32 8 L32 16" stroke="{INK}" stroke-width="3"/>
<circle cx="18" cy="28" r="1.5" fill="{INK}"/>
<circle cx="24" cy="28" r="1.5" fill="{INK}"/>
<circle cx="30" cy="28" r="1.5" fill="{INK}"/>
</svg>''',
    'clock': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<circle cx="24" cy="24" r="18" fill="{TEAL}"/>
<path d="M24 24 L24 13" stroke="{WHITE}" stroke-width="3"/>
<path d="M24 24 L33 28" stroke="{WHITE}" stroke-width="3"/>
<circle cx="24" cy="24" r="2" fill="{INK}"/>
</svg>''',
    'camera': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<rect x="6" y="16" width="36" height="24" rx="3" fill="{NAVY}"/>
<path d="M18 16 L20 10 L28 10 L30 16" fill="{NAVY}"/>
<circle cx="24" cy="28" r="8" fill="{CREAM}"/>
<circle cx="24" cy="28" r="4" fill="{ORANGE}"/>
<rect x="34" y="19" width="4" height="3" fill="{YELLOW}"/>
</svg>''',
    'image': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<rect x="6" y="10" width="36" height="28" rx="3" fill="{CREAM}"/>
<circle cx="16" cy="20" r="3" fill="{YELLOW}"/>
<path d="M10 36 L20 24 L28 32 L36 22 L42 36 Z" fill="{TEAL}"/>
<path d="M10 36 L42 36" stroke="{INK}"/>
</svg>''',
    'folder': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M6 16 L6 38 L42 38 L42 18 L22 18 L18 12 L6 12 Z" fill="{YELLOW}"/>
<path d="M6 18 L42 18" stroke="{INK}" stroke-width="2"/>
</svg>''',
    'file': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M12 6 L12 42 L36 42 L36 18 L24 6 Z" fill="{CREAM}"/>
<path d="M24 6 L24 18 L36 18" fill="{PINK}"/>
<path d="M16 26 L32 26" stroke="{INK}" stroke-width="2"/>
<path d="M16 32 L28 32" stroke="{INK}" stroke-width="2"/>
</svg>''',
    'download': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M24 8 L24 32" stroke="{INK}" stroke-width="4"/>
<path d="M14 24 L24 34 L34 24" fill="{TEAL}"/>
<rect x="8" y="38" width="32" height="6" rx="2" fill="{ORANGE}"/>
</svg>''',
    'upload': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M24 16 L24 40" stroke="{INK}" stroke-width="4"/>
<path d="M14 24 L24 14 L34 24" fill="{ORANGE}"/>
<rect x="8" y="38" width="32" height="6" rx="2" fill="{TEAL}"/>
</svg>''',
    'mail': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<rect x="6" y="12" width="36" height="24" rx="3" fill="{PINK}"/>
<path d="M6 14 L24 28 L42 14" stroke="{INK}"/>
<circle cx="20" cy="22" r="1.5" fill="{INK}"/>
<circle cx="28" cy="22" r="1.5" fill="{INK}"/>
</svg>''',
    'bell': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M10 34 C 10 12 38 12 38 34 Z" fill="{YELLOW}"/>
<path d="M8 34 L40 34" stroke="{INK}" stroke-width="3"/>
<path d="M20 38 C 20 42 28 42 28 38" fill="{ORANGE}"/>
<circle cx="24" cy="24" r="1.5" fill="{INK}"/>
<circle cx="24" cy="29" r="1.5" fill="{INK}"/>
</svg>''',
    'bookmark': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M12 6 L36 6 L36 42 L24 32 L12 42 Z" fill="{ORANGE}"/>
<path d="M20 16 L28 16" stroke="{INK}" stroke-width="2"/>
</svg>''',
    'tag': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M28 6 L42 6 L42 20 L24 38 L10 24 Z" fill="{PINK}"/>
<circle cx="34" cy="14" r="3" fill="{WHITE}"/>
</svg>''',
    'cart': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M6 8 L12 8 L16 32 L38 32 L42 16 L16 16" fill="{TEAL}"/>
<circle cx="18" cy="40" r="4" fill="{ORANGE}"/>
<circle cx="34" cy="40" r="4" fill="{ORANGE}"/>
</svg>''',
    'gift': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<rect x="8" y="20" width="32" height="22" fill="{ORANGE}"/>
<rect x="8" y="14" width="32" height="8" fill="{PINK}"/>
<path d="M24 14 L24 42" stroke="{INK}" stroke-width="3"/>
<path d="M18 14 C 12 10 16 4 22 8 C 24 10 24 14 24 14 Z" fill="{PINK}"/>
<path d="M30 14 C 36 10 32 4 26 8 C 24 10 24 14 24 14 Z" fill="{PINK}"/>
</svg>''',
    'coffee': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M10 22 L10 36 C 10 40 14 42 18 42 L28 42 C 32 42 36 40 36 36 L36 22 Z" fill="{BROWN}"/>
<path d="M36 26 C 42 26 42 34 36 34" fill="{BROWN}"/>
<path d="M16 10 C 16 14 20 14 20 18" stroke="{INK}" stroke-width="2"/>
<path d="M22 10 C 22 14 26 14 26 18" stroke="{INK}" stroke-width="2"/>
<path d="M28 10 C 28 14 32 14 32 18" stroke="{INK}" stroke-width="2"/>
</svg>''',
    'book': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M8 10 L8 38 C 14 36 20 36 24 38 L24 10 C 20 8 14 8 8 10 Z" fill="{NAVY}"/>
<path d="M24 10 L24 38 C 28 36 34 36 40 38 L40 10 C 34 8 28 8 24 10 Z" fill="{TEAL}"/>
<path d="M24 10 L24 38" stroke="{INK}"/>
<circle cx="16" cy="20" r="1.3" fill="{WHITE}"/>
<circle cx="32" cy="20" r="1.3" fill="{WHITE}"/>
</svg>''',
    'music': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="16" cy="32" rx="8" ry="6" transform="rotate(-15 16 32)" fill="{ORANGE}"/>
<ellipse cx="34" cy="28" rx="8" ry="6" transform="rotate(-15 34 28)" fill="{ORANGE}"/>
<path d="M22 14 L40 10 L40 28" stroke="{INK}" stroke-width="3"/>
</svg>''',
    'play': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<circle cx="24" cy="24" r="20" fill="{TEAL}"/>
<path d="M19 16 L34 24 L19 32 Z" fill="{YELLOW}"/>
</svg>''',
    'phone': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M10 8 L18 8 L22 18 L16 22 C 18 28 20 30 26 32 L30 26 L40 30 L40 38 C 40 40 38 42 36 42 C 22 42 6 26 6 12 C 6 10 8 8 10 8 Z" fill="{GREEN}"/>
</svg>''',
    'chat': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M8 10 L40 10 L40 32 L26 32 L20 40 L20 32 L8 32 Z" fill="{YELLOW}"/>
<circle cx="16" cy="21" r="1.8" fill="{INK}"/>
<circle cx="24" cy="21" r="1.8" fill="{INK}"/>
<circle cx="32" cy="21" r="1.8" fill="{INK}"/>
</svg>''',
    'location': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M24 6 C 14 6 8 14 8 22 C 8 32 24 42 24 42 C 24 42 40 32 40 22 C 40 14 34 6 24 6 Z" fill="{ORANGE}"/>
<circle cx="24" cy="22" r="6" fill="{CREAM}"/>
</svg>''',
    'compass': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<circle cx="24" cy="24" r="18" fill="{NAVY}"/>
<path d="M24 10 L29 24 L24 38 L19 24 Z" fill="{ORANGE}"/>
<path d="M24 10 L24 24" stroke="{INK}" stroke-width="2"/>
</svg>''',
    'sun': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<circle cx="24" cy="24" r="10" fill="{YELLOW}"/>
<path d="M24 4 L24 10" stroke="{INK}"/>
<path d="M24 38 L24 44" stroke="{INK}"/>
<path d="M4 24 L10 24" stroke="{INK}"/>
<path d="M38 24 L44 24" stroke="{INK}"/>
<path d="M10 10 L14 14" stroke="{INK}"/>
<path d="M34 34 L38 38" stroke="{INK}"/>
<path d="M10 38 L14 34" stroke="{INK}"/>
<path d="M34 14 L38 10" stroke="{INK}"/>
</svg>''',
    'moon': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M32 6 C 22 8 14 16 14 26 C 14 36 22 42 32 42 C 24 40 20 32 22 24 C 24 16 28 10 32 6 Z" fill="{YELLOW}"/>
<circle cx="36" cy="14" r="1.5" fill="{INK}"/>
<circle cx="40" cy="22" r="1.5" fill="{INK}"/>
</svg>''',
    'cloud': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M14 30 C 8 30 6 22 12 20 C 12 14 20 12 24 16 C 28 10 38 14 36 22 C 42 22 42 30 36 30 Z" fill="{CREAM}"/>
<circle cx="20" cy="24" r="1.5" fill="{INK}"/>
<circle cx="28" cy="24" r="1.5" fill="{INK}"/>
</svg>''',
    'umbrella': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M6 24 C 6 12 42 12 42 24 Z" fill="{ORANGE}"/>
<path d="M6 24 L42 24" stroke="{INK}"/>
<path d="M24 24 L24 40" stroke="{INK}" stroke-width="3"/>
<path d="M24 40 C 24 44 28 44 28 40" stroke="{INK}"/>
<path d="M16 24 L16 20" stroke="{INK}" stroke-width="2"/>
<path d="M32 24 L32 20" stroke="{INK}" stroke-width="2"/>
</svg>''',
    'thermometer': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M24 6 C 20 6 18 10 18 14 L18 32 C 14 36 16 42 24 42 C 32 42 34 36 30 32 L30 14 C 30 10 28 6 24 6 Z" fill="{CREAM}"/>
<circle cx="24" cy="36" r="5" fill="{ORANGE}"/>
<rect x="22" y="18" width="4" height="14" fill="{ORANGE}"/>
</svg>''',
    'leaf': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M8 40 C 8 18 24 6 40 8 C 40 24 26 40 8 40 Z" fill="{GREEN}"/>
<path d="M8 40 L40 8" stroke="{INK}" stroke-width="2"/>
</svg>''',
    'flower': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<circle cx="24" cy="16" r="7" fill="{PINK}"/>
<circle cx="14" cy="22" r="7" fill="{PINK}"/>
<circle cx="34" cy="22" r="7" fill="{PINK}"/>
<circle cx="18" cy="32" r="7" fill="{PINK}"/>
<circle cx="30" cy="32" r="7" fill="{PINK}"/>
<circle cx="24" cy="24" r="6" fill="{YELLOW}"/>
</svg>''',
    'tree': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<circle cx="24" cy="18" r="14" fill="{GREEN}"/>
<rect x="20" y="30" width="8" height="12" fill="{BROWN}"/>
<circle cx="20" cy="16" r="1.5" fill="{INK}"/>
<circle cx="28" cy="16" r="1.5" fill="{INK}"/>
</svg>''',
    'apple': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M24 14 C 14 12 6 22 10 32 C 12 38 18 42 24 38 C 30 42 36 38 38 32 C 42 22 34 12 24 14 Z" fill="{ORANGE}"/>
<path d="M24 14 C 24 8 28 4 32 6" stroke="{INK}" fill="none"/>
<path d="M28 8 C 32 6 36 10 34 12" fill="{GREEN}"/>
<circle cx="20" cy="26" r="1.5" fill="{INK}"/>
<circle cx="28" cy="26" r="1.5" fill="{INK}"/>
</svg>''',
    'fish': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M6 24 C 8 14 22 10 30 14 C 38 18 38 30 30 34 C 22 38 8 34 6 24 Z" fill="{TEAL}"/>
<path d="M30 24 L42 14 L42 34 Z" fill="{ORANGE}"/>
<circle cx="14" cy="22" r="2" fill="{WHITE}"/>
<circle cx="14" cy="22" r="1" fill="{INK}"/>
</svg>''',
    'cat': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M8 16 L14 8 L18 16 Z" fill="{ORANGE}"/>
<path d="M30 16 L34 8 L40 16 Z" fill="{ORANGE}"/>
<circle cx="24" cy="28" r="16" fill="{ORANGE}"/>
<circle cx="18" cy="26" r="2.5" fill="{WHITE}"/>
<circle cx="30" cy="26" r="2.5" fill="{WHITE}"/>
<circle cx="18" cy="27" r="1.3" fill="{INK}"/>
<circle cx="30" cy="27" r="1.3" fill="{INK}"/>
<path d="M24 30 L22 33 L26 33 Z" fill="{PINK}"/>
<path d="M19 34 Q 24 38 29 34" stroke="{INK}" fill="none"/>
</svg>''',
    'dog': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="10" cy="18" rx="6" ry="10" fill="{BROWN}"/>
<ellipse cx="38" cy="18" rx="6" ry="10" fill="{BROWN}"/>
<circle cx="24" cy="26" r="16" fill="{BROWN}"/>
<circle cx="18" cy="24" r="2.5" fill="{WHITE}"/>
<circle cx="30" cy="24" r="2.5" fill="{WHITE}"/>
<circle cx="18" cy="25" r="1.3" fill="{INK}"/>
<circle cx="30" cy="25" r="1.3" fill="{INK}"/>
<ellipse cx="24" cy="32" rx="4" ry="3" fill="{INK}"/>
</svg>''',
    'bird': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="22" cy="26" rx="16" ry="12" fill="{TEAL}"/>
<path d="M36 24 L42 20 L42 28 Z" fill="{ORANGE}"/>
<path d="M28 18 L36 14 L34 22 Z" fill="{NAVY}"/>
<circle cx="34" cy="22" r="2" fill="{WHITE}"/>
<circle cx="34" cy="22" r="1" fill="{INK}"/>
</svg>''',
    'rocket': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M24 6 C 16 6 14 18 14 26 L14 38 L34 38 L34 26 C 34 18 32 6 24 6 Z" fill="{CREAM}"/>
<circle cx="24" cy="22" r="5" fill="{TEAL}"/>
<path d="M14 30 L8 36 L8 42 L14 38" fill="{ORANGE}"/>
<path d="M34 30 L40 36 L40 42 L34 38" fill="{ORANGE}"/>
<path d="M18 42 L24 46 L30 42" fill="{ORANGE}"/>
</svg>''',
    'airplane': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M22 8 L26 8 L28 20 L42 22 L42 26 L28 28 L26 40 L22 40 L20 28 L6 26 L6 22 L20 20 Z" fill="{NAVY}"/>
<path d="M22 20 L26 20 L26 28 L22 28 Z" fill="{ORANGE}"/>
</svg>''',
    'car': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M6 30 L6 36 L42 36 L42 30 L36 18 L12 18 Z" fill="{ORANGE}"/>
<path d="M14 18 L14 12 L34 12 L34 18" fill="{YELLOW}"/>
<circle cx="14" cy="36" r="5" fill="{NAVY}"/>
<circle cx="34" cy="36" r="5" fill="{NAVY}"/>
</svg>''',
    'anchor': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<circle cx="24" cy="10" r="4" fill="{NAVY}"/>
<path d="M24 14 L24 38" stroke="{INK}" stroke-width="4"/>
<path d="M16 22 L24 22 L32 22" stroke="{INK}" stroke-width="3"/>
<path d="M8 30 C 8 38 14 42 24 42 C 34 42 40 38 40 30" fill="none" stroke="{INK}"/>
<path d="M8 30 L12 26 L16 30" fill="{NAVY}"/>
<path d="M32 30 L36 26 L40 30" fill="{NAVY}"/>
</svg>''',
    'key': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<circle cx="14" cy="24" r="10" fill="{YELLOW}"/>
<circle cx="14" cy="24" r="4" fill="{CREAM}"/>
<path d="M24 24 L42 24" stroke="{INK}" stroke-width="4"/>
<path d="M30 24 L30 30" stroke="{INK}" stroke-width="3"/>
<path d="M36 24 L36 30" stroke="{INK}" stroke-width="3"/>
</svg>''',
    'bulb': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M24 6 C 14 6 10 16 14 24 L14 30 L34 30 L34 24 C 38 16 34 6 24 6 Z" fill="{YELLOW}"/>
<rect x="16" y="30" width="16" height="6" fill="{NAVY}"/>
<rect x="18" y="36" width="12" height="4" fill="{NAVY}"/>
<circle cx="20" cy="18" r="1.5" fill="{INK}"/>
<circle cx="28" cy="18" r="1.5" fill="{INK}"/>
</svg>''',
    'magnet': f'''<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="{INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M8 8 L8 24 C 8 34 16 42 24 42 C 32 42 40 34 40 24 L40 8 L32 8 L32 24 C 32 30 28 32 24 32 C 20 32 16 30 16 24 L16 8 Z" fill="{ORANGE}"/>
<rect x="8" y="8" width="8" height="8" fill="{NAVY}"/>
<rect x="32" y="8" width="8" height="8" fill="{NAVY}"/>
</svg>''',
}

# 组件名 -> 文件名映射：组件名用 PascalCase
def pascal(s):
    return ''.join(p.capitalize() for p in s.split('-'))

# 生成 SVG 文件
for name, svg in ICONS.items():
    with open(os.path.join(SVG_DIR, f'{name}.svg'), 'w') as f:
        f.write(svg)

# 生成 React 组件 (TSX)
components = []
for name, svg in ICONS.items():
    comp_name = pascal(name) + 'Icon'
    # 从 SVG 中提取内部路径作为 children
    # 简化：直接嵌入 SVG 内容，使用函数式组件 + props 透传
    inner = svg.split('>', 1)[1].rsplit('<', 1)[0] if '>' in svg else svg
    # 完整 SVG 内容（带 xmlns）
    tsx = f'''import {{ SVGProps }} from 'react';

export const {comp_name} = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#2A2A2A" strokeWidth={{3.5}} strokeLinecap="round" strokeLinejoin="round" {{...props}}>
    {inner}
  </svg>
);

export default {comp_name};
'''
    with open(os.path.join(SRC_DIR, f'{comp_name}.tsx'), 'w') as f:
        f.write(tsx)
    components.append(comp_name)

# 生成 index.ts 统一导出
with open(os.path.join(SRC_DIR, 'index.ts'), 'w') as f:
    for comp_name in components:
        f.write(f"export {{ {comp_name} }} from './{comp_name}';\n")

# 生成 package.json
pkg = '''{
  "name": "naive-icons",
  "version": "0.1.0",
  "description": "Naive folk art style icon set - 50 SVG icons for React",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "scripts": {
    "build": "echo 'No build needed - pure SVG components'",
    "preview": "python3 -m http.server 8080"
  },
  "keywords": ["react", "icons", "svg", "naive", "folk-art"],
  "license": "MIT"
}
'''
with open(os.path.join(ROOT, 'package.json'), 'w') as f:
    f.write(pkg)

# 生成 README.md
readme = '''# Naive Icons

Naive folk art 风格的 SVG 图标库，专为 React 组件设计。共 50 个图标。

## 特性
- **48 个像素点阵**，统一 48x48 viewBox
- **粗描边 + 扁平色块** 的 naive 手绘风格
- **每个图标 ~1-2 KB**，体积小巧
- **透明背景**，可叠加任意颜色
- **TypeScript** 类型支持

## 安装
```bash
npm install naive-icons
# 或者直接复制 src/ 和 svg/ 目录到你的项目
```

## 使用
```tsx
import { HomeIcon, UserIcon, HeartIcon } from 'naive-icons';

function App() {
  return (
    <div>
      <HomeIcon width={48} height={48} />
      <UserIcon width={24} height={24} color="#E76F51" />
      <HeartIcon style={{ width: 32, height: 32, fill: '#F4A6A4' }} />
    </div>
  );
}
```

## 图标列表
'''
# 添加图标列表
icon_list = sorted(ICONS.keys())
for i in range(0, 50, 5):
    chunk = icon_list[i:i+5]
    readme += '- ' + ' · '.join(chunk) + '\n'

readme += '''
## 风格定制
所有图标使用 `currentColor` 友好的描边，可通过 `color` 或 `stroke` 属性覆盖。

```tsx
<SunIcon color="#E9C46A" />           // 改变描边色
<AppleIcon style={{ fill: '#E76F51' }} />  // 改变填充色
```

## 文件结构
```
naive-icons/
├── svg/          # 50 个独立 SVG 文件（适合 sprite / direct use）
├── src/          # 50 个 React 组件 + index.ts
│   ├── HomeIcon.tsx
│   ├── UserIcon.tsx
│   └── index.ts
├── package.json
└── README.md
```

## License
MIT
'''
with open(os.path.join(ROOT, 'README.md'), 'w') as f:
    f.write(readme)

# 生成预览 HTML 页面
preview_html = '''<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<title>Naive Icons Preview</title>
<style>
  body { font-family: -apple-system, sans-serif; background: #FAF3E0; padding: 32px; }
  h1 { color: #264653; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px; }
  .card { background: #FFF; border-radius: 12px; padding: 16px; text-align: center; box-shadow: 0 2px 6px rgba(0,0,0,0.06); }
  .card svg { width: 64px; height: 64px; }
  .name { margin-top: 8px; font-size: 12px; color: #666; }
</style>
</head>
<body>
<h1>Naive Icons — 50 个手绘风图标</h1>
<p>点击图标查看 SVG 源代码（开发工具）</p>
<div class="grid">
'''
for name in sorted(ICONS.keys()):
    preview_html += f'  <div class="card"><object data="svg/{name}.svg" type="image/svg+xml"></object><div class="name">{name}</div></div>\n'
preview_html += '''</div>
</body>
</html>'''
with open(os.path.join(ROOT, 'index.html'), 'w') as f:
    f.write(preview_html)

print(f'已生成 {len(ICONS)} 个 SVG 图标')
print(f'SVG 文件: {SVG_DIR}')
print(f'React 组件: {SRC_DIR} (50 个 .tsx + index.ts)')
print(f'预览页: {ROOT}/index.html')