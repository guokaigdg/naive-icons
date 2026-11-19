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
  <a href="https://hub.xerj.org/contributors/guokaigdg"><img src="https://hub.xerj.org/contributors/guokaigdg/badge.svg" alt="Contributors"></a>
</p>

<p align="center">
  <b>🤖 AI Agent Skill</b> — <code>npx skills add guokaigdg/naive-icons</code> &nbsp;·&nbsp; <a href="#ai-agent-skill">看详情 &rarr;</a>
</p>

<h2>
    <img src="./svg/sparkles.svg" width="18" alt="" />
    特性
</h2>

- 921 枚图标，覆盖 18 个分类——界面、操作、自然、动物、食物、交通、表情等
- 每枚图标同时提供 SVG 源文件与 React TSX 组件
- 完整 TypeScript 类型，并导出 `scaledStroke`、`createIcon`、`iconNames` 等工具
- 支持按需引入、`currentColor` 跟随文字色，内置无障碍标题
- 官方 Agent Skill：一条命令装好，AI 助手即可按语义挑图标、生成代码

<h2 id="ai-agent-skill">
    <img src="./svg/robot.svg" width="18" alt="" />
    AI Agent Skill
</h2>

一条命令给 AI 编码助手加上按语义挑图标、生成代码的能力，无需先装本库——**新开会话**后直接说「用 naive 图标给这个登录页配一套图标」。

```bash
npx skills add guokaigdg/naive-icons
```

<h2>
    <img src="./svg/download.svg" width="18" alt="" />
    安装
</h2>

本库有两个包，卖的是同一套 921 枚图标。按你的框架挑一个装：

| 框架 | 包名 | 需要 |
| --- | --- | --- |
| React | `naive-icons` | React 16.8+（含 18 与 19） |
| Vue 3 | `naive-icons-vue` | Vue 3.4+ |

### React

```bash
npm install naive-icons    # 或 yarn add / pnpm add
```

```tsx
import { HomeIcon } from 'naive-icons';
```

### Vue 3

```bash
npm install naive-icons-vue    # 或 yarn add / pnpm add
```

```vue
<script setup lang="ts">
import { HomeIcon } from 'naive-icons-vue';
</script>

<template>
  <HomeIcon :size="24" color="#E76F51" />
</template>
```

Vue API 见 [`vue/README.zh-CN.md`](./vue/README.zh-CN.md)。

<h2>
    <img src="./svg/rocket.svg" width="18" alt="" />
    快速开始
</h2>

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

ESM + `sideEffects: false`，具名导入即自动 tree-shaking，只打包用到的图标：

```tsx
import { HomeIcon, SearchIcon } from 'naive-icons';
```

也可从子路径直引单个图标，跳过顶层入口：

```tsx
import { HomeIcon } from 'naive-icons/icons/HomeIcon';
```

传 `currentColor` 可跟随父级文字颜色（默认 `#2A2A2A` 不会自动继承）：

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

<h2>
    <img src="./svg/sliders.svg" width="18" alt="" />
    组件属性
</h2>

每个组件都继承原生 `SVGProps<SVGSVGElement>`，可直传 `className`、`onClick`、`style` 等任意 SVG 属性。

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | number \| string \| null | 24 | 图标尺寸，宽高相等。`null` 等同不传。**优先级低于 width / height** |
| color | string | `#2A2A2A` | 描边颜色。传 `currentColor` 可跟随父级文字颜色 |
| strokeWidth | number \| string | 3.5 | 描边宽度，**相对基准值 3.5 的缩放系数**。传 7 相当于整体描边加倍，粗细层次保持不变 |
| fill | string | none | 填充色。**只对没有自带 fill 的图元生效**——本库图标的色块是画上去的，传 `fill` 改不了它们 |
| title | string | — | 无障碍标题，渲染为 SVG title 节点 |
| width / height | number \| string | 跟随 size | 单独指定宽或高，**优先级高于 size**，没传的那一边回落到 size |

> Vue 3 属性名与默认值一致，模板里写成 kebab-case（`:stroke-width="7"`），DOM 节点用
> `ref.value.$el`。详见 [`vue/README.zh-CN.md`](./vue/README.zh-CN.md)。

> `fill`：naive 风格靠实心色块，3170 个图元里 1987 个自带 `fill`，根节点 `fill` 对它们无效。
> 换配色请用 `color` 或 `NAIVE_PALETTE` 中的颜色。


<h2>
    <img src="./svg/code.svg" width="18" alt="" />
    直接使用 SVG
</h2>

非 React 项目可直用 `svg/` 下的源文件，全部自包含、无外部引用。

```html
<img src="naive-icons/svg/home.svg" width="24" height="24" alt="首页" />
```

内联时把 `stroke="#2A2A2A"` 换成 `stroke="currentColor"` 即可跟随文字色：

```html
<svg viewBox="0 0 48 48" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="3.5"
     stroke-linecap="round" stroke-linejoin="round">
  <!-- 复制 svg/home.svg 中的 path 内容 -->
</svg>
```


<h2>
    <img src="./svg/layers.svg" width="18" alt="" />
    动态取图标与自建图标
</h2>

`IconName` 是纯类型。运行时按名字取图标（主题选择器、后台图标字段）用 `iconNames`：

```tsx
import { iconNames } from 'naive-icons';
import type { IconId } from 'naive-icons';

const map: Record<IconId, () => Promise<unknown>> = {
  // 只有列出来的图标才会被加载
  'arrow-up-down': () => import('naive-icons/icons/ArrowUpDownIcon').then((m) => m.ArrowUpDownIcon),
  'arrow-jump': () => import('naive-icons/icons/ArrowJumpIcon').then((m) => m.ArrowJumpIcon),
};
```

`import * as icons` 也能按名取，但会打进全部 921 枚、tree-shaking 归零；`iconNames` 只加载用到的图标。

自建同风格图标用 `createIcon`，根节点、无障碍与描边缩放与内置图标完全一致：

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

图形是普通节点或接收 `sw(designed)` 的函数。设计宽度经 `sw()` 处理后，`strokeWidth`
会让整枚图标一起加粗——否则只有外框变粗。

名称由 id 推导：`my-icon` → `MyIcon`，`arrow-up-down` → `ArrowUpDownIcon`。

<h2>
    <img src="./svg/palette.svg" width="18" alt="" />
    调色板
</h2>

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

<h2>
    <img src="./svg/terminal.svg" width="18" alt="" />
    本地开发
</h2>

```bash
git clone https://github.com/guokaigdg/naive-icons.git
cd naive-icons
npm install
npm run dev        # 监听构建
npm run typecheck
npm run website    # 本地浏览图标（端口 8080）
```

直接打开 [`website/index.html`](./website/index.html) 即可浏览、搜索、预览全部图标，无需构建。

<h2>
    <img src="./svg/shield.svg" width="18" alt="" />
    许可证
</h2>

MIT License。详见 [LICENSE](./LICENSE)。

全部图标均为原创作品，可自由用于个人与商业项目，无需署名。

<h2>
    <img src="./svg/heart.svg" width="18" alt="" />
    赞助
</h2>

- 支持这个项目最简单的方式就是点个 Star 并分享出去。如果你有想法或建议，欢迎提 [Issue](https://github.com/guokaigdg/naive-icons/issues) 或提交 PR。

- 如果这个项目对你有帮助，也不妨请开发者的猫吃个罐罐——毕竟每个图标背后都有一只猫在监督代码。<a href="https://guokaigdg.github.io/home/payment.html">请猫吃个罐罐</a>
