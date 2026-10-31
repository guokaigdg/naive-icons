# Naive Icons for Vue

<p align="right">
  <a href="./README.zh-CN.md">中文</a> | English
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/guokaigdg/naive-icons/main/assets/logo.svg" alt="Naive Icons" width="110" height="110">
</p>

<p align="center">Hand-drawn naive folk art SVG icons, for Vue 3 and TypeScript</p>

<p align="center">
  <a href="https://www.npmjs.com/package/naive-icons-vue"><img src="https://img.shields.io/npm/v/naive-icons-vue?style=flat-square&color=E76F51" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/naive-icons-vue"><img src="https://img.shields.io/npm/dm/naive-icons-vue?style=flat-square&color=2A9D8F" alt="npm downloads"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-264653?style=flat-square" alt="license: MIT"></a>
  <br/>
  <img src="https://img.shields.io/badge/Vue-42b883?style=flat-square&logo=vuedotjs&logoColor=white" alt="Vue">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
</p>

Every icon is built on a 48×48 grid with a 3.5 stroke, round line caps and a retro palette —
and keeps the deliberate wobble of a hand-drawn illustration. Some even have a pair of dot eyes
and a smile, so your interface feels a little more human.

This is the Vue 3 port of [Naive Icons](https://github.com/guokaigdg/naive-icons). Same 201
icons, same geometry, same accessibility behaviour — only the component API differs.

## Features

- 201 icons across 11 categories, drawn in one consistent style
- One component per icon, rendered as a Vue 3 render function (no SFC compilation needed)
- Full TypeScript types: `IconProps`, `IconName`, `IconId`, `IconComponent`, `PaletteColor`, `NAIVE_PALETTE`
- Tree-shaking that actually works — a single icon is ~1.4 KB minified
- `scaledStroke` / `resolveStrokeWidth` / `normalizeIconProps` exported for custom icons
- `iconNames` — the runtime id list, so dynamic lookups don't cost you tree-shaking
- `createIcon` — build your own icon in the same style, with identical root node, a11y and stroke scaling
- Supports `currentColor`, so an icon can follow the surrounding text color

## Installation

```bash
npm install naive-icons-vue
```

Vue 3.4+ is a peer dependency; the package has no other runtime dependencies.

This package is always released in lockstep with `naive-icons` (the React version) — same
version number, same 201 icons, so you can upgrade both together.

## Quick Start

```vue
<script setup lang="ts">
import { HomeIcon, HeartIcon, PenguinIcon } from 'naive-icons-vue';
</script>

<template>
  <nav>
    <HomeIcon :size="24" />
    <HeartIcon :size="24" color="#E76F51" />
    <PenguinIcon :size="48" :stroke-width="7" /> <!-- doubles every stroke -->
  </nav>
</template>
```

Tree-shaking works out of the box: the package is ESM and sets `sideEffects: false`, so a named
import pulls in only the icons you actually use:

```ts
import { HomeIcon, SearchIcon } from 'naive-icons-vue';
```

Or import a single icon straight from a subpath, bypassing the entry entirely:

```ts
import { HomeIcon } from 'naive-icons-vue/icons/HomeIcon';
```

Both forms produce the same bundle size (~1.4 KB minified for a single icon). The repo has a
`tests/bundle-size.test.ts` guarding that number, so a build change that breaks tree-shaking
fails the test suite.

To follow the parent text color, pass `currentColor` explicitly — the default is ink `#2A2A2A`
and is **not** inherited automatically:

```vue
<span style="color: #264653">
  <HomeIcon :size="20" color="currentColor" />
  Home
</span>
```

Add an accessibility title:

```vue
<HomeIcon :size="24" title="Back to home" />
```

## Component Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `number \| string` | `24` | Width and height. `null` falls back to the default. |
| `color` | `string` | `#2A2A2A` | Stroke color. |
| `strokeWidth` | `number \| string` | `3.5` | Stroke width, relative to the 48×48 canvas. |
| `fill` | `string` | `none` | Fill color. |
| `title` | `string` | — | Renders a `<title>` and switches the root to `role="img"`. |

Any other attribute — `class`, `style`, `id`, `aria-*`, `data-*` — is passed through to the
`<svg>` element untouched.

The stroke width scales the whole icon, inner strokes included. `stroke-width` is inherited in
SVG, but a child that declares its own value stops inheriting — so the components rewrite
inner widths through `sw()` instead of only touching the root node.

## Accessibility

- No `title` and no `aria-label`: the root gets `aria-hidden="true"`.
- `title` given: a `<title>` element is rendered and the root gets `role="img"`.
- `aria-label` or `role` given: the root is not hidden.

## Getting the DOM node

Vue gives you the component instance, not the element. Reach the `<svg>` through `$el`:

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { HomeIcon } from 'naive-icons-vue';

const icon = ref<InstanceType<typeof HomeIcon> | null>(null);
// icon.value?.$el is the <svg> element
</script>

<template>
  <HomeIcon ref="icon" :size="24" />
</template>
```

## Dynamic Icons & Custom Icons

`IconName` is a type only — it disappears at compile time. When you have to look an icon up by
name at runtime (a theme picker, an icon field coming from a CMS), use `iconNames`:

```ts
import { iconNames } from 'naive-icons-vue';
import type { IconId } from 'naive-icons-vue';

const map: Record<IconId, () => Promise<unknown>> = {
  // only the icons you list are ever loaded
  'arrow-up-down': () => import('naive-icons-vue/icons/ArrowUpDownIcon').then((m) => m.ArrowUpDownIcon),
  'arrow-jump': () => import('naive-icons-vue/icons/ArrowJumpIcon').then((m) => m.ArrowJumpIcon),
};
```

Importing the package as a namespace (`import * as icons`) also lets you look icons up by name,
but it pulls all 201 icons into the bundle and zeroes out tree-shaking. `iconNames` lets you
build a lookup that only loads the icons you actually reach for.

To draw an icon of your own in the same style, use the `createIcon` factory. It produces the
exact same root node, accessibility attributes and stroke scaling as the 201 built-in icons:

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

The body can be a plain node list, or a function that receives `sw(designed)`. Pass the designed
stroke width through `sw()` and the whole icon thickens together when you set `strokeWidth` —
otherwise the outer frame scales while the inner details stay at 3.5.

The display name is derived from the id: `my-icon` becomes `MyIcon`, `arrow-up-down` becomes
`ArrowUpDownIcon`.

## Palette

```ts
import { NAIVE_PALETTE } from 'naive-icons-vue';

NAIVE_PALETTE.ink;   // '#2A2A2A'
NAIVE_PALETTE.navy;  // '#264653'
NAIVE_PALETTE.orange; // '#E76F51'
```

## Differences from the React version

The icons are byte-identical and the rendering rules are shared, but the component API is Vue's:

| | React (`naive-icons`) | Vue (`naive-icons-vue`) |
| --- | --- | --- |
| Getting the DOM node | `forwardRef` hands you the element | `ref.value.$el` |
| Attribute names | JSX needs camelCase (`strokeWidth`) | native kebab-case passes through |
| `class` on an SVG | React 18 warns about it | no warning |

Both packages ship the same 201 icons, the same geometry and the same accessibility behaviour.

## Using the SVG Directly

The package also ships the raw SVG files:

```ts
import homeUrl from 'naive-icons-vue/svg/home.svg?url';
```

Or copy them from `node_modules/naive-icons-vue/svg/`.

## Local Development

```bash
cd vue
npm ci
npm run typecheck
npm run build
npm test
```

The components are generated from the repository's `svg/` directory — never edit them by hand:

```bash
python3 scripts/generate_vue.py          # regenerate
python3 scripts/generate_vue.py --check  # verify they're up to date (CI uses this)
```

## Browser Support

Same as the React package: any browser with ES2020 support. Vue 3.4+ is required.

## License

MIT © [guokaigdg](https://github.com/guokaigdg)
