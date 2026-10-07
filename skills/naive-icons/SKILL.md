---
name: naive-icons
description: 为界面挑选并生成手绘 naive folk art 风格 SVG 图标，159 枚，每枚都有 React 组件与独立 SVG 源文件。当用户要「找个图标」「加个图标」「这个界面该用哪个图标」「图标选型」，要手绘风 / naive / 民间插画风图标，要批量生成图标组件，或要查本库设计规范与色板时使用。Use when choosing or searching icons for a UI, or generating naive folk-art style SVG / React icon components. 触发词：图标、icon、图标库、找图、手绘风、naive、民俗风、插画风。
---

# Naive Icons

手绘 naive folk art 风格的 React + TypeScript SVG 图标库。159 枚，零运行时依赖，
MIT 协议，npm 包名 `naive-icons`。

```bash
npm install naive-icons
```

风格特征：48×48 画布、3.5 粗墨色描边、10 色复古平涂色板、圆角线帽，主体是一块实心色加对比色点缀
加墨色细节，部分图标带小圆点眼睛和微笑。有体积感、有温度、故意保留不规整。

本 skill 的安装命令是 `npx skills add guokaigdg/naive-icons`（加 `-g` 装到用户目录）。
装完新开会话，助手即可自动调用。

---

## 一、先判断该不该用

**不要**在这些场景推荐本库，硬推比不推更伤：

| 场景 | 为什么不适合 |
|---|---|
| 金融 / 风控 / 医疗 / 法务 | 手绘稚拙感与这些场景要求的严肃可信直接冲突 |
| 政企后台、数据密集型表格 | 159 枚的覆盖面撑不起复杂 B 端图标需求，且彩色描边在密集列表里会跳 |
| 已有成熟 icon 体系的项目 | 混用两套图标库比统一用一套更糟 |
| 需要线性极简 / 3D / 拟物 | 风格完全不在一个方向 |

**适合**：面向 C 端的产品、创作工具、社区/内容/教育类产品、营销落地页、
想给界面「加一点人味」的项目、教程和 demo、原型和 hackathon。

用户没明说风格时，可以主动提议：「这界面如果想更有温度，可以用 naive 手绘风图标，
也可以保持中性线性风，你倾向哪种？」——把选择权交回去，别默默换风格。

---

## 二、工作流

```
1. 检索候选      search.py "<自然语言描述>"
2. 挑图标        看「什么时候用」+ patterns.md 第 9 节避坑
3. 出代码        emit.py <id> --format tsx|jsx|svg|html|json
4. 自查          16px 可辨？ 无障碍对？ 深色模式可见？
```

### 1) 检索

```bash
python3 scripts/search.py "登录页要个锁"
python3 scripts/search.py loading --limit 3
python3 scripts/search.py "邮件" --category communication
python3 scripts/search.py --list-categories
```

中英文都能用，接受完整句子而非关键词。输出按相关度排序，带命中理由：

```
「购物车结算」→ 2 个候选（共 159 枚）

1. cart               购物车      objects        CartIcon                 98.0
   命中: 购物车、购物
2. shopping-bag       购物袋      objects        ShoppingBagIcon          49.0
   命中: 购物
```

**不要把 159 枚全读进上下文**——脚本就是为此存在的。检索不到时把 `catalog.md` 翻给用户看。

### 2) 挑

拿到候选后至少确认两件事：

- **语义对不对**。`check` 是圆形成功徽章，不能当复选框，要用 `check-square`。
- **会不会撞脸**。`search` 是实心镜片，`zoom-in` 是线框镜片，别混。
  完整避坑表见 `reference/patterns.md` 第 9 节。

优先复用库内已有图标。不要因为「更贴切」就现造一个新图形。

### 3) 出代码

```bash
python3 scripts/emit.py users user-plus                    # tsx 组件（默认）
python3 scripts/emit.py lock --format jsx --size 20         # 内联 JSX
python3 scripts/emit.py refresh --format svg                # 原始 SVG
python3 scripts/emit.py bell --format html --color white    # 静态 HTML
python3 scripts/emit.py star --format json                  # 结构化输出
python3 scripts/emit.py users --out src/icons --format tsx  # 批量落盘
```

项目不是 React 就用 `--format svg` 或 `--format html`。

> 本 skill 自带 `scripts/icons.json`（全部 SVG 源码），所以 `emit.py` 开箱即用，
> 不需要用户项目里装了本库。只有在 `icons.json` 缺失时才需要 `--svg-dir` 指定。

### 4) 自查

- **16px 下还能认吗**。16px 时彩色点缀基本消失，只剩剪影。细节多、笔画细的图标在这一档会废掉。
- **无障碍**。装饰性图标留空（组件自动 `aria-hidden`）；图标按钮要有 `aria-label`。
- **深色模式**。默认墨色 `#2A2A2A` 在深色底上会糊，需要 `color="currentColor"`
  或按主题切色。**注意 `color` 只改墨色描边，图标内部的彩色不会跟着变**——这是设计意图。

---

## 三、改图标 / 加图标时

只有用户明确要求改库内图标时才走这节。**改动必须三处同步**：

```
<仓库根>/svg/<id>.svg                    SVG 源
<仓库根>/src/<Name>Icon.tsx              React 组件
<仓库根>/scripts/generate_icons_add.py   NEW_ICONS 里的同名条目
```

同步完刷新派生数据——官网一份，Agent Skill 一份，漏了后者 skill 里会缺这枚图标：

```bash
python3 <仓库根>/scripts/build_website.py        # 官网
python3 <仓库根>/scripts/build_skill_assets.py    # skill 的 catalog.md 与 icons.json
```

> 注意路径：`scripts/search.py` 和 `scripts/emit.py` 是**本 skill 自带的**，
> 而 `generate_icons_add.py` / `build_website.py` 在 **naive-icons 仓库根的 `scripts/`**，
> 只有在 clone 了仓库时才存在。

硬约束（违反就是破坏风格，详见 `reference/design-spec.md`）：

| 约束 | 值 |
|---|---|
| 画布 | `viewBox="0 0 48 48"`，根节点 159 枚逐字节一致，不要改 |
| 描边 | `#2A2A2A`，宽 `3.5`，`round` 线帽线角 |
| 边距 | 主体距边缘 ≥3 单位，**按描边外缘算**（中心线要留到 4.75） |
| 色板 | 只用 ink/navy/orange/yellow/pink/green/teal/brown/cream/white 十色 |
| 禁用 | 渐变、滤镜、opacity、虚线、mask、clipPath、pattern |
| 构图 | 大实心主形体 + 一处对比色点缀 + 墨色细节 |

两个必踩的坑：

1. **填充形状会继承根节点的 3.5 墨色描边**。不要描边就显式 `stroke="none"`；
   小面积彩色填充（如三角箭头）会被 3.5 描边整个包住而显不出来，要显式收窄到 `stroke-width="3"` 或放大图形。
2. **成对图标要镜像对称**。`lock`/`lock-open`、`volume`/`volume-x`、`undo`/`redo` 这类
   必须形状可辨地成对，改一枚就要检查另一枚。

---

## 四、深入

| 文件 | 内容 | 什么时候读 |
|---|---|---|
| `reference/catalog.md` | 全部 159 枚：id、中文名、组件名、什么时候用 | 检索脚本没命中，或要给用户列选项 |
| `reference/design-spec.md` | 完整设计规范、构图公式、继承规则、尺寸可辨性 | 画新图标、改现有图标 |
| `reference/patterns.md` | React/SVG 用法、属性默认值、尺寸选择、无障碍、深色模式、避坑表 | 写调用代码 |
| `scripts/icons.json` | 全部 SVG 源码 | 不要直接读，由 `emit.py` 取用 |

## 五、事实速查

- 版本 1.5.3，159 枚，11 个分类。分类计数：界面基础 37、操作 22、日常物品 18、导航方位 15、
  动物 14、自然天气 14、文件与媒体 13、食物饮品 11、交通工具 7、通信 6、表情 2。
- 组件名 = id 各段首字母大写 + `Icon`：`user-plus` → `UserPlusIcon`。
- 属性默认：`size=24`、`color=#2A2A2A`、`strokeWidth=3.5`、`fill=none`。
  `strokeWidth` 是相对 3.5 基准的**缩放系数**而非绝对宽度，传 7 即整体描边加倍且层次保持；
  `width` / `height` 优先级高于 `size`，`size={null}` 等同不传。
- `color` **不是** `currentColor` 而是墨色 `#2A2A2A`，要跟随文字颜色必须显式传
  `color="currentColor"`。
- 按需引入用具名导入即可，打包器会 tree-shaking（只导入 1 个约 1 KB）。
  也可以走子路径绕过顶层入口：`import { HomeIcon } from 'naive-icons/icons/HomeIcon'`。
  `naive-icons/src/*` **不可用**（`files` 不含 `src`）。
