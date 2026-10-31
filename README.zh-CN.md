<h1>Naive Icons</h1>

<p align="right">
  <a href="./README.md">English</a> | 中文
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
  <img src="https://img.shields.io/badge/Vue-42b883?style=flat-square&logo=vuedotjs&logoColor=white" alt="Vue">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/SVG-FFB13B?style=flat-square&logoColor=black" alt="SVG">
  <a href="https://hub.xerj.org/contributors/guokaigdg"><img src="https://hub.xerj.org/contributors/guokaigdg/badge.svg" alt="Contributors"></a>
</p>

<p align="center">
  <b>🤖 AI Agent Skill</b> — 给 Claude Code / Cursor / Codex 等 AI 编码助手装一份，<br/>
  它就能按语义帮你挑图标、生成可直接粘贴的代码，并且知道这套图标的设计规范。<br/>
  <code>npx skills add guokaigdg/naive-icons</code> &nbsp;·&nbsp; <a href="#ai-agent-skill">看详情 &rarr;</a>
</p>

每一个图标都建立在 48x48 的网格上，使用 3.5 的粗描边、圆角线帽与复古调色板，并保留了手绘插画特有的笨拙感与温度——部分图标还带有一对小圆点眼睛和微笑，让界面多一点点人情味。

## 特性

- 图标覆盖界面、操作、媒体、导航、动物、食物等 11 个分类
- 每个图标同时提供 SVG 源文件与 React TSX 组件
- 完整 TypeScript 类型：IconProps、IconName、IconComponent、PaletteColor、NAIVE_PALETTE
- 导出 `scaledStroke` / `resolveStrokeWidth` / `normalizeIconProps`，需要自建图标时用得上
- `iconNames`——全部图标的运行时 id 列表，按名字取图标时不用牺牲 tree-shaking
- `createIcon`——图标工厂，自建图标能拿到与内置图标完全一致的根节点、无障碍与描边缩放
- 支持 currentColor，传入后图标跟随文字颜色
- 官方 Agent Skill：一条命令装到 AI 编码助手，按语义帮你挑图标并生成代码
- 另有 Vue 3 版本 `naive-icons-vue`：同样的 201 枚图标与同样的图形，只是组件 API 换成了 Vue 那套

## AI Agent Skill

给 AI 编码助手（Claude Code、Cursor、Codex 等）装一份，它就能按语义帮你挑图标、
生成可直接粘贴的代码，并且知道这套图标的设计规范。

```bash
npx skills add guokaigdg/naive-icons
```

不用先装本库。装完**新开会话**，然后直接说：

- 「用 naive 图标给这个登录页配一套图标」
- 「找个表示『已读』的图标」

Skill 自带完整图标目录、设计规范和用法，以及全部 SVG 源码，助手生成代码不依赖项目里
是否装了本库。库升级后重跑同一条命令即可更新。

> 装 skill 和用组件是两件事。要在代码里 `import { HomeIcon } from 'naive-icons'`，
> 才需要下面「安装」里的 `npm install naive-icons`。

## 安装

本库有两个包，卖的是同一套 201 枚图标。按你的框架挑一个装：

| 框架 | 包名 | 需要 |
| --- | --- | --- |
| React | `naive-icons` | React 16.8+（含 18 与 19） |
| Vue 3 | `naive-icons-vue` | Vue 3.4+ |

两个包**永远同版本发布**，升级时一起升最省心。

### React

```bash
npm install naive-icons
```

```bash
yarn add naive-icons
```

```bash
pnpm add naive-icons
```

```tsx
import { HomeIcon } from 'naive-icons';
```

### Vue 3

```bash
npm install naive-icons-vue
```

```bash
yarn add naive-icons-vue
```

```bash
pnpm add naive-icons-vue
```

```vue
<script setup lang="ts">
import { HomeIcon } from 'naive-icons-vue';
</script>

<template>
  <HomeIcon :size="24" color="#E76F51" />
</template>
```

完整 API 见 [`vue/README.zh-CN.md`](./vue/README.zh-CN.md)。两个包都由同一份 `svg/` 生成，
图形永远不会走偏。

## 快速开始

下面用 React 举例。Vue 3 的写法见 [`vue/README.zh-CN.md`](./vue/README.zh-CN.md)。

```tsx
import { HomeIcon, HeartIcon, PenguinIcon } from 'naive-icons';

export function Example() {
  return (
    <nav>
      <HomeIcon size={24} />
      <HeartIcon size={24} color="#E76F51" />
      <PenguinIcon size={48} strokeWidth={7} />  {/* 描边整体加倍 */}
    </nav>
  );
}
```

按需引入：包是 ESM 且标记了 `sideEffects: false`，用具名导入即可，打包器会自动 tree-shaking——
只用到的图标才会进你的包：

```tsx
import { HomeIcon, SearchIcon } from 'naive-icons';
```

也可以从子路径直接引单个图标，完全跳过顶层入口：

```tsx
import { HomeIcon } from 'naive-icons/icons/HomeIcon';
```

两种写法实测产出的体积一致（只有一个图标时约 0.9 KB minified）。
仓库里有 `tests/bundle-size.test.ts` 盯着这个体积，改坏构建会直接测试失败。

想跟随父级文字颜色，显式传 `currentColor`（默认是墨色 `#2A2A2A`，不会自动继承）：

```tsx
<span style={{ color: '#264653' }}>
  <HomeIcon size={20} color="currentColor" />
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
| size | number \| string \| null | 24 | 图标尺寸，宽高相等。`null` 等同不传。**优先级低于 width / height** |
| color | string | `#2A2A2A` | 描边颜色。传 `currentColor` 可跟随父级文字颜色 |
| strokeWidth | number \| string | 3.5 | 描边宽度，**相对基准值 3.5 的缩放系数**。传 7 相当于整体描边加倍，粗细层次保持不变 |
| fill | string | none | 填充色。**只对没有自带 fill 的图元生效**——本库图标的色块是画上去的，传 `fill` 改不了它们 |
| title | string | — | 无障碍标题，渲染为 SVG title 节点 |
| width / height | number \| string | 跟随 size | 单独指定宽或高，**优先级高于 size**，没传的那一边回落到 size |

> Vue 3 版的属性名与默认值完全一致，只是模板里要写成 kebab-case（`:stroke-width="7"`），
> 拿 DOM 节点用 `ref.value.$el`。详见 [`vue/README.zh-CN.md`](./vue/README.zh-CN.md)。

> `fill` 那一行值得单独说一句：naive 风格靠的就是实心色块，730 个图元里 489 个硬编码了自己的
> `fill`，所以根节点的 `fill` 对它们无效。这不是 bug，是风格本身——要换配色请用 `color`
> 换描边，或直接取 `NAIVE_PALETTE` 里已有的十色。

```typescript
import type { IconProps } from 'naive-icons';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string | null;
  color?: string;
  strokeWidth?: number | string;
  fill?: string;
  title?: string;
}

// 也导出了 scaledStroke / resolveStrokeWidth / normalizeIconProps
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

## 动态取图标与自建图标

`IconName` 是纯类型，编译后就不存在了。需要运行时按名字取图标（主题选择器、后台配置的
图标字段），用 `iconNames`：

```tsx
import { iconNames } from 'naive-icons';
import type { IconId } from 'naive-icons';

const map: Record<IconId, () => Promise<unknown>> = {
  // 只有列出来的图标才会被加载
  'arrow-up-down': () => import('naive-icons/icons/ArrowUpDownIcon').then((m) => m.ArrowUpDownIcon),
  'arrow-jump': () => import('naive-icons/icons/ArrowJumpIcon').then((m) => m.ArrowJumpIcon),
};
```

用 `import * as icons` 也能按名字取，但会把全部 201 枚都打进包，tree-shaking 直接归零。
`iconNames` 让你搭一张只加载真正用得到的图标的查找表。

想自己画一个同样风格的图标，用 `createIcon` 工厂。它产出的根节点、无障碍属性和描边缩放
与内置的 201 枚完全一致：

```tsx
import { createIcon } from 'naive-icons';

const MyIcon = createIcon('my-icon', (sw) => (
  <>
    <path d="M12 12 L36 36" stroke="#2A2A2A" strokeWidth={sw(3.5)} />
    <path d="M14 20 L20 26" stroke="#E76F51" strokeWidth={sw(2)} />
  </>
));

<MyIcon size={24} strokeWidth={7} title="我的图标" />;
```

图形部分既可以是一个普通节点，也可以是接收 `sw(designed)` 的函数。把设计时的描边宽度交给
`sw()`，传 `strokeWidth` 时整枚图标会一起加粗——不然就只剩外框变粗、内层细节还停在 3.5。

displayName 由 id 自动推导：`my-icon` 变成 `MyIcon`，`arrow-up-down` 变成 `ArrowUpDownIcon`。

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

## 设计原则

Naive Icons 遵循四条固定规则，新增图标时也应保持一致。

1. **网格与出血**：全部图形绘制在 48x48 画布内，主体距离画布边缘至少保留 3 个单位。
2. **描边**：统一 3.5 宽度，端点与转角均为 round，不使用虚线。
3. **配色**：以调色板的 10 色为默认基调，确有必要时可用其他实色（如品牌色），不使用渐变、阴影与半透明叠加。
4. **性格**：允许线条轻微不对称，鼓励给有生命的图形加上圆点眼睛与微笑，保留手绘的笨拙感。

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

## 浏览器支持

Naive Icons 输出的是标准 SVG 1.1，支持所有现代浏览器（Chrome、Firefox、Safari、Edge 最近两个大版本）。React 组件不含任何浏览器专有 API，可在服务端渲染环境中安全使用。

## 许可证

MIT License。详见 [LICENSE](./LICENSE)。

全部图标均为原创作品，可自由用于个人与商业项目，无需署名。

## 赞助

如果这个项目对你有帮助，不妨请开发者的猫吃个罐罐——毕竟每个图标背后都有一只猫在监督代码。<a href="https://guokaigdg.github.io/home/payment.html">请猫吃个罐罐</a>
