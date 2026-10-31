# Naive Icons for Vue

<p align="right">
  <a href="./README.md">English</a> | 中文
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/guokaigdg/naive-icons/main/assets/logo.svg" alt="Naive Icons" width="110" height="110">
</p>

<p align="center">手绘 naive folk art 风格的 SVG 图标库，为 Vue 3 打造</p>

<p align="center">
  <a href="https://www.npmjs.com/package/naive-icons-vue"><img src="https://img.shields.io/npm/v/naive-icons-vue?style=flat-square&color=E76F51" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/naive-icons-vue"><img src="https://img.shields.io/npm/dm/naive-icons-vue?style=flat-square&color=2A9D8F" alt="npm downloads"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-264653?style=flat-square" alt="license: MIT"></a>
  <br/>
  <img src="https://img.shields.io/badge/Vue-42b883?style=flat-square&logo=vuedotjs&logoColor=white" alt="Vue">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
</p>

每一个图标都建立在 48x48 的网格上，使用 3.5 的粗描边、圆角线帽与复古调色板，
并保留了手绘插画特有的笨拙感与温度——部分图标还带有一对小圆点眼睛和微笑，
让界面多一点点人情味。

这是 [Naive Icons](https://github.com/guokaigdg/naive-icons) 的 Vue 3 版本。
同样 201 枚图标，同样的图形，同样的无障碍行为——只有组件 API 换了。

## 特性

- 覆盖界面、操作、媒体、导航、动物、食物等 11 个分类，风格统一
- 一枚图标一个组件，用 render 函数实现（不需要编译 SFC）
- 完整 TypeScript 类型：IconProps、IconName、IconId、IconComponent、PaletteColor、NAIVE_PALETTE
- tree-shaking 真的生效——单枚图标 minify 后约 1.4 KB
- 导出 `scaledStroke` / `resolveStrokeWidth` / `normalizeIconProps`，自建图标用得上
- `iconNames`——全部图标的运行时 id 列表，按名字取图标不用牺牲 tree-shaking
- `createIcon`——图标工厂，自建图标能拿到与内置图标完全一致的根节点、无障碍与描边缩放
- 支持 currentColor，传入后图标跟随文字颜色

## 安装

```bash
npm install naive-icons-vue
```

Vue 3.4+ 是 peer dependency，本包没有其它运行时依赖。

本包与 `naive-icons`（React 版）**永远同版本发布**，两个包提供的是同一套 201 枚图标，
升级时一起升就行。

## 快速开始

```vue
<script setup lang="ts">
import { HomeIcon, HeartIcon, PenguinIcon } from 'naive-icons-vue';
</script>

<template>
  <nav>
    <HomeIcon :size="24" />
    <HeartIcon :size="24" color="#E76F51" />
    <PenguinIcon :size="48" :stroke-width="7" /> <!-- 整体加粗 -->
  </nav>
</template>
```

tree-shaking 开箱可用：包是 ESM 且设了 `sideEffects: false`，
具名导入只会打进你真正用到的那几枚：

```ts
import { HomeIcon, SearchIcon } from 'naive-icons-vue';
```

也可以从子路径直接导入单枚图标，完全绕开入口文件：

```ts
import { HomeIcon } from 'naive-icons-vue/icons/HomeIcon';
```

两种写法打出来的包体积一样（单枚 minify 后约 1.4 KB）。
仓库里有 `tests/bundle-size.test.ts` 盯着这个数字，构建配置哪天把 tree-shaking 弄坏了，
测试会直接红掉。

要跟随父级文字颜色，得显式传 `currentColor`——默认是墨色 `#2A2A2A`，**不会**自动继承：

```vue
<span style="color: #264653">
  <HomeIcon :size="20" color="currentColor" />
  Home
</span>
```

加无障碍标题：

```vue
<HomeIcon :size="24" title="Back to home" />
```

## 组件属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `size` | `number \| string` | `24` | 宽高相等。传 `null` 回落默认值 |
| `color` | `string` | `#2A2A2A` | 描边颜色 |
| `strokeWidth` | `number \| string` | `3.5` | 描边宽度，相对 48x48 画布 |
| `fill` | `string` | `none` | 填充色 |
| `title` | `string` | — | 渲染 `<title>`，根节点切成 `role="img"` |

其余属性——`class`、`style`、`id`、`aria-*`、`data-*`——原样透传到 `<svg>` 元素上。

描边宽度是整体缩放的，内层描边也跟着走。SVG 里 `stroke-width` 虽然可以继承，
但子元素一旦自带值就不再继承，所以组件用 `sw()` 重算内层宽度，而不是只改根节点。

## 无障碍

- 没有 `title` 也没有 `aria-label`：根节点带 `aria-hidden="true"`。
- 给了 `title`：渲染 `<title>`，根节点带 `role="img"`。
- 给了 `aria-label` 或 `role`：根节点不会被隐藏。

## 拿 DOM 节点

Vue 给的是组件实例，不是元素。通过 `$el` 拿到 `<svg>`：

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { HomeIcon } from 'naive-icons-vue';

const icon = ref<InstanceType<typeof HomeIcon> | null>(null);
// icon.value?.$el 就是 <svg> 元素
</script>

<template>
  <HomeIcon ref="icon" :size="24" />
</template>
```

## 动态取图标与自建图标

`IconName` 只是纯类型，编译后不存在。需要按名字动态取图标时（主题选择器、
CMS 里配的图标字段），用 `iconNames`：

```ts
import { iconNames } from 'naive-icons-vue';
import type { IconId } from 'naive-icons-vue';

const map: Record<IconId, () => Promise<unknown>> = {
  // 只有列出来的图标才会被加载
  'arrow-up-down': () => import('naive-icons-vue/icons/ArrowUpDownIcon').then((m) => m.ArrowUpDownIcon),
  'arrow-jump': () => import('naive-icons-vue/icons/ArrowJumpIcon').then((m) => m.ArrowJumpIcon),
};
```

用命名空间引入整个包（`import * as icons`）也能按名字取图标，但那会把 201 枚全打进包，
tree-shaking 直接归零。`iconNames` 让你只加载真正会用到的那些。

想自己画一枚同风格的图标，用 `createIcon` 工厂。它产出的根节点、无障碍属性与描边缩放
与内置 201 枚完全一致：

```ts
import { createIcon, h } from 'naive-icons-vue';

const MyIcon = createIcon('my-icon', (sw) => [
  h('path', { d: 'M12 12 L36 36', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }),
  h('path', { d: 'M14 20 L20 26', stroke: '#E76F51', 'stroke-width': sw(2) }),
]);
```

```vue
<MyIcon :size="24" :stroke-width="7" title="My icon" />
```

图形部分可以是静态节点列表，也可以是一个接收 `sw(designed)` 的函数。
把设计时的描边宽度交给 `sw()`，设置 `strokeWidth` 时整枚图标会一起加粗——
不然就只是外框变粗、内层细节还是 3.5。

显示名由 id 推导：`my-icon` 变成 `MyIcon`，`arrow-up-down` 变成 `ArrowUpDownIcon`。

## 调色板

```ts
import { NAIVE_PALETTE } from 'naive-icons-vue';

NAIVE_PALETTE.ink;    // '#2A2A2A'
NAIVE_PALETTE.navy;   // '#264653'
NAIVE_PALETTE.orange; // '#E76F51'
```

## 与 React 版的差异

图标逐字节相同、渲染规则共用，但组件 API 是 Vue 那一套：

| | React（`naive-icons`） | Vue（`naive-icons-vue`） |
| --- | --- | --- |
| 拿 DOM 节点 | `forwardRef` 直接给元素 | `ref.value.$el` |
| 属性名 | JSX 要写 camelCase（`strokeWidth`） | 原生 kebab-case 透传 |
| SVG 上的 `class` | React 18 会告警 | 不告警 |

两个包提供同样的 201 枚图标、同样的图形、同样的无障碍行为。

## 直接使用 SVG

包里也带了 SVG 源文件：

```ts
import homeUrl from 'naive-icons-vue/svg/home.svg?url';
```

或者直接从 `node_modules/naive-icons-vue/svg/` 里复制。

## 本地开发

```bash
cd vue
npm ci
npm run typecheck
npm run build
npm test
```

组件由仓库的 `svg/` 目录生成，**不要手改**：

```bash
python3 scripts/generate_vue.py          # 重新生成
python3 scripts/generate_vue.py --check  # 只校验是否最新（CI 用这个）
```

## 浏览器支持

与 React 版一致：任何支持 ES2020 的浏览器。需要 Vue 3.4+。

## 许可证

MIT © [guokaigdg](https://github.com/guokaigdg)
