
<h1>Naive Icons</h1>

<p align="right">
  <a href="./README.md">中文</a> | <a href="./README.en.md">English</a>
</p>

<p align="center">
  <img src="assets/logo.svg" alt="Naive Icons" width="132" height="132">
</p>


<p align="center">手绘 naive folk art 风格的 SVG 图标库，为 React 与 TypeScript 打造</p>

<p align="center">
  <a href="https://github.com/guokaigdg/naive-icons/stargazers"><img src="https://img.shields.io/github/stars/guokaigdg/naive-icons?style=flat-square&color=E9C46A" alt="GitHub stars"></a>
  <a href="https://www.npmjs.com/package/naive-icons"><img src="https://img.shields.io/npm/v/naive-icons?style=flat-square&color=E76F51" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/naive-icons"><img src="https://img.shields.io/npm/dm/naive-icons?style=flat-square&color=2A9D8F" alt="npm downloads"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-264653?style=flat-square" alt="license: MIT"></a>
  <br/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/SVG-FFB13B?style=flat-square&logoColor=black" alt="SVG">
</p>

Naive Icons 是一套手绘 naive folk art 风格的 SVG 图标库，为 React 与 TypeScript 打造。全部 125 个图标由 AI 生成，均为原创作品。

每一个图标都建立在 48x48 的网格上，使用 3.5 的粗描边、圆角线帽与统一的复古调色板，并保留了手绘插画特有的笨拙感与温度——部分图标还带有一对小圆点眼睛和微笑，让界面多一点点人情味。

- 图标数量：125
- 单个体积：约 400 至 700 字节
- 依赖：零运行时依赖，仅 peer 依赖 React
- 许可证：MIT

## 目录

- [特性](#特性)
- [安装](#安装)
- [快速开始](#快速开始)
- [组件属性](#组件属性)
- [直接使用 SVG](#直接使用-svg)
- [调色板](#调色板)
- [图标清单](#图标清单)
- [设计原则](#设计原则)
- [目录结构](#目录结构)
- [本地开发](#本地开发)
- [浏览器支持](#浏览器支持)
- [许可证](#许可证)

## 特性

- 125 个手绘风格的原创 SVG 图标，覆盖界面、操作、媒体、导航、动物、食物等 11 个分类
- 统一规格：48x48 viewBox、3.5 描边宽度、round 线帽与线角
- 统一调色板：9 色复古配色，可作为设计令牌直接引用
- 部分图标带有圆点眼睛与微笑表情，风格辨识度高
- 每个图标同时提供 SVG 源文件与 React TSX 组件
- 完整 TypeScript 类型：IconProps、IconName、IconCategory、NAIVE_PALETTE
- 透明背景、无渐变、无外部字体依赖
- 支持 currentColor，可跟随文字颜色自动变化

## 安装

```bash
npm install naive-icons
```

```bash
yarn add naive-icons
```

```bash
pnpm add naive-icons
```

Naive Icons 只依赖 React，支持 React 16.8 及以上版本（含 React 18 与 19）。

## 快速开始

```tsx
import { HomeIcon, HeartIcon, PenguinIcon } from 'naive-icons';

export function Example() {
  return (
    <nav>
      <HomeIcon size={24} />
      <HeartIcon size={24} color="#E76F51" />
      <PenguinIcon size={48} strokeWidth={4} />
    </nav>
  );
}
```

按需引入可以进一步减小打包体积：

```tsx
import HomeIcon from 'naive-icons/src/HomeIcon';
```

配合 currentColor 使用，图标会自动继承父级文字颜色：

```tsx
<span style={{ color: '#264653' }}>
  <HomeIcon size={20} />
  首页
</span>
```

添加无障碍标题：

```tsx
<HomeIcon size={24} title="返回首页" />
```

## 组件属性

Naive Icons 的每个组件都继承原生 `SVGProps<SVGSVGElement>`，可以直接传入 `className`、`onClick`、`style` 等任意 SVG 属性。

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | number \| string | 24 | 图标尺寸，宽高相等。传入后覆盖 width 与 height |
| color | string | currentColor | 描边颜色 |
| strokeWidth | number \| string | 3.5 | 描边宽度，按 48x48 画布比例缩放 |
| fill | string | none | 填充色 |
| title | string | — | 无障碍标题，渲染为 SVG title 节点 |
| width / height | number \| string | 跟随 size | 单独指定宽或高 |

```typescript
import type { IconProps } from 'naive-icons';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  fill?: string;
  title?: string;
}
```

## 直接使用 SVG

如果项目不是 React，可以直接使用 `svg/` 目录下的源文件。所有 SVG 都是自包含的，没有外部引用。

```html
<img src="naive-icons/svg/home.svg" width="24" height="24" alt="首页" />
```

内联使用时，把 `stroke="#2A2A2A"` 替换为 `stroke="currentColor"` 即可跟随文字颜色：

```html
<svg viewBox="0 0 48 48" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="3.5"
     stroke-linecap="round" stroke-linejoin="round">
  <!-- 复制 svg/home.svg 中的 path 内容 -->
</svg>
```

也可以做成 SVG sprite 或 Icon Font，源文件结构足够简单，便于二次加工。

## 调色板

```typescript
import { NAIVE_PALETTE } from 'naive-icons';
```

| 名称 | 色值 | 用途 |
| --- | --- | --- |
| ink | #2A2A2A | 主描边色 |
| navy | #264653 | 深色主体 |
| orange | #E76F51 | 强调色 |
| yellow | #E9C46A | 暖色填充 |
| pink | #F4A6A4 | 柔和填充 |
| green | #588157 | 自然元素 |
| teal | #2A9D8F | 辅助色 |
| brown | #8B5E3C | 木质与土地 |
| cream | #FAEDCD | 浅色底 |

## 图标清单

**界面基础**（18）
home, user, settings, search, heart, star, bell, calendar, clock, eye, bulb, tag, bookmark, menu, ellipsis, external-link, link, unlink

**操作**（13）
edit, trash, download, upload, save, plus, close, check, refresh, share, play, copy, minus

**文件与媒体**（10）
file, folder, image, camera, video, mic, music, code, book, headphones

**导航方位**（14）
location, compass, map, flag, anchor, magnet, arrow-up, arrow-down, arrow-left, arrow-right, chevron-down, chevron-up, chevron-left, chevron-right

**通信**（4）
mail, chat, phone, wifi

**自然天气**（12）
sun, moon, cloud, umbrella, tree, flower, leaf, rainbow, mushroom, cactus, snowflake, flame

**动物**（14）
cat, dog, bird, fish, penguin, rabbit, bear, fox, owl, frog, bee, butterfly, snail, ladybug

**食物饮品**（11）
apple, strawberry, watermelon, cherry, lemon, cake, icecream, donut, coffee, coffee-cup, water-cup

**日常物品**（13）
balloon, lamp, candle, pencil, paintbrush, globe, trophy, shopping-bag, credit-card, gift, thermometer, lock, key

**交通工具**（7）
car, airplane, rocket, cart, bicycle, sailboat, train

**表情**（2）
smile, thumbs-up

图标文件名使用 kebab-case（如 `shopping-bag.svg`、`thumbs-up.svg`），React 组件名使用 PascalCase 并带 Icon 后缀（如 `ShoppingBagIcon`、`ThumbsUpIcon`）。

## 设计原则

Naive Icons 遵循四条固定规则，新增图标时也应保持一致。

1. **网格与出血**：全部图形绘制在 48x48 画布内，主体距离画布边缘至少保留 3 个单位。
2. **描边**：统一 3.5 宽度，端点与转角均为 round，不使用虚线。
3. **配色**：只使用调色板中的 9 个颜色，不使用渐变、阴影与半透明叠加。
4. **性格**：允许线条轻微不对称，鼓励给有生命的图形加上圆点眼睛与微笑，保留手绘的笨拙感。

## 目录结构

```
naive-icons/
├── svg/                 125 个 SVG 源文件
├── src/                 125 个 React TSX 组件 + index.ts + types.ts
├── assets/              品牌资源（logo）
├── scripts/             图标生成与预览构建脚本
├── website/             官方文档站点
├── dist/                构建产物（ESM + CJS + 类型声明，不纳入版本控制）
├── tsup.config.ts       构建配置
├── tsconfig.json
├── LICENSE
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
└── package.json
```

## 本地开发

```bash
git clone https://github.com/guokaigdg/naive-icons.git
cd naive-icons
npm install
```

常用脚本：

```bash
npm run build        # 用 tsup 构建 dist（ESM + CJS + 类型声明）
npm run dev          # 监听模式构建
npm run typecheck    # 类型检查
npm run website      # 本地预览官网（Python 静态服务器，端口 8080）
npm run icons:build  # 依据 scripts 中的定义重新生成 SVG 与 TSX
npm run icons:add    # 增量新增图标，不覆盖已有文件
```

发布时 `prepublishOnly` 会自动执行构建，无需手动运行 `npm run build`。

构建产物为 `dist/index.mjs`（ESM）、`dist/index.js`（CJS）与 `dist/index.d.ts` / `dist/index.d.mts`（类型声明），`package.json` 的 `exports` 已按 `import` / `require` 条件分别指向对应文件。React 被声明为 external，不会被打进产物。

官网是纯静态站点（无构建、无依赖），直接打开 `website/index.html` 也能用：浏览全部图标、按分类筛选、搜索、实时调整尺寸与描边颜色、切换浅色/深色/网格预览底，点击任意图标可查看 React 用法、复制代码或下载 SVG。支持浅色 / 深色主题（跟随系统、可手动切换并记忆），弹窗内可用方向键连续切换图标。

## 字体

图标库本体（SVG 与 React 组件）不依赖任何字体。官网额外引入一款手写感字体用于标题与正文：[LXGW 悠哉字体](https://github.com/lxgw/yozai-font)（SIL Open Font License 1.1，可自由商用）。

官网自托管方式：仅打包站内实际用到的字符（约 715 个，常规字重约 170 KB），完全离线可用，文件位于 `website/assets/fonts/`。如需自行重新生成子集，运行：

```bash
python3 scripts/subset_fonts.py
```

依赖 `fonttools` 与 `brotli`：

```bash
pip install fonttools brotli
```

## 浏览器支持

Naive Icons 输出的是标准 SVG 1.1，支持所有现代浏览器（Chrome、Firefox、Safari、Edge 最近两个大版本）。React 组件不含任何浏览器专有 API，可在服务端渲染环境中安全使用。

## 许可证

MIT License。详见 [LICENSE](./LICENSE)。

全部图标均为原创作品，可自由用于个人与商业项目，无需署名。
