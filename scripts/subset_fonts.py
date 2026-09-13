#!/usr/bin/env python3
"""
把 LXGW Yozai 字体子集化，仅保留站内用到的字符，输出 woff2 + woff。

依赖：fonttools, brotli
    pip install fonttools brotli

用法：
    # 先把 Yozai-Regular.ttf / Yozai-Medium.ttf 放到 scripts/ 旁边
    python3 scripts/subset_fonts.py

输出文件（写到 website/assets/fonts/）：
    yozai-regular.woff2   ≈ 170 KB
    yozai-regular.woff    ≈ 205 KB
    yozai-medium.woff2    ≈ 170 KB
    yozai-medium.woff     ≈ 200 KB

字体源：https://github.com/lxgw/yozai-font  （SIL OFL 1.1）
"""
import os
from fontTools import subset

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(ROOT, "scripts", "fonts-src")
CHARS_FILE = os.path.join(ROOT, "scripts", "font-subset-chars.txt")
OUT_DIR = os.path.join(ROOT, "website", "assets", "fonts")


def collect_chars():
    """扫描站内所有页面，提取实际用到的字符。"""
    import re
    files = [
        "website/index.html",
        "website/assets/js/app.js",
        "website/assets/js/icons.js",
    ]
    chars = set()
    for rel in files:
        path = os.path.join(ROOT, rel)
        if not os.path.exists(path):
            continue
        with open(path, encoding="utf-8") as f:
            chars.update(f.read())
    # ASCII 可打印范围
    chars.update(chr(i) for i in range(0x20, 0x7F))
    # 常用中文标点（站内未用到的也加上，避免后续文本微调时缺字）
    chars.update("，。、；：？！「」『』（）【】《》——…·—–‘’“”")
    chars.update("×→←↑↓↔℃©®™°÷±≤≥≠≈")
    return "".join(sorted(c for c in chars if ord(c) >= 0x20 or c in "\n\r\t"))


def subset_font(src_path, out_stem, text):
    os.makedirs(OUT_DIR, exist_ok=True)

    common = dict(
        desubroutinize=True,
        layout_features=["*"],
        hinting=False,
        name_IDs=["*"],
        name_languages=["*"],
        notdef_outline=True,
        recalc_bounds=True,
        drop_tables=["FFTM", "meta", "GPOS", "feat", "morx"],
    )

    # woff2：主流浏览器
    opts = subset.Options(**common, flavor="woff2", with_zopfli=True)
    f = subset.load_font(src_path, opts)
    sub = subset.Subsetter(options=opts)
    sub.populate(text=text)
    sub.subset(f)
    p = os.path.join(OUT_DIR, out_stem + ".woff2")
    subset.save_font(f, p, opts)
    print(f"  {out_stem}.woff2  {os.path.getsize(p)/1024:6.1f} KB")

    # woff：老浏览器兜底
    opts = subset.Options(**common, flavor="woff")
    f = subset.load_font(src_path, opts)
    sub = subset.Subsetter(options=opts)
    sub.populate(text=text)
    sub.subset(f)
    p = os.path.join(OUT_DIR, out_stem + ".woff")
    subset.save_font(f, p, opts)
    print(f"  {out_stem}.woff   {os.path.getsize(p)/1024:6.1f} KB")


def ensure_src():
    """如果 scripts/fonts-src/ 缺少源字体，从 GitHub release 下载。"""
    import urllib.request
    targets = {
        "Yozai-Regular.ttf": "https://github.com/lxgw/yozai-font/releases/download/v0.868/Yozai-Regular.ttf",
        "Yozai-Medium.ttf": "https://github.com/lxgw/yozai-font/releases/download/v0.868/Yozai-Medium.ttf",
    }
    for name, url in targets.items():
        path = os.path.join(SRC_DIR, name)
        if os.path.exists(path):
            continue
        print(f"下载 {name} ...", end="", flush=True)
        urllib.request.urlretrieve(url, path)
        print(f" {os.path.getsize(path)/1024/1024:.1f} MB")


def main():
    os.makedirs(SRC_DIR, exist_ok=True)
    ensure_src()
    chars = collect_chars()
    with open(CHARS_FILE, "w", encoding="utf-8") as f:
        f.write(chars)
    print(f"子集字符数: {len(set(chars))}")

    mapping = {
        "Yozai-Regular.ttf": "yozai-regular",
        "Yozai-Medium.ttf": "yozai-medium",
    }
    for src_name, out_stem in mapping.items():
        src = os.path.join(SRC_DIR, src_name)
        if not os.path.exists(src):
            print(f"  跳过 {src_name}（未提供；放到 scripts/fonts-src/ 后再跑）")
            continue
        subset_font(src, out_stem, chars)
    print("完成")


if __name__ == "__main__":
    main()