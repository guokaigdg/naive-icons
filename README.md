<h1>Naive Icons</h1>

<p align="right">
  English | <a href="./README.zh-CN.md">中文</a>
</p>

<p align="center">
  <img src="assets/logo.svg" alt="Naive Icons" width="132" height="132">
</p>

<p align="center">Hand-drawn "naive folk art" style SVG icon library, built for React and TypeScript</p>

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
  <b>🤖 AI Agent Skill</b> — <code>npx skills add guokaigdg/naive-icons</code> &nbsp;·&nbsp; <a href="#ai-agent-skill">See details &rarr;</a>
</p>

<h2>
    <img src="./svg/sparkles.svg" width="18" alt="" />
    Features
</h2>

- 936 icons across 18 categories — interface, actions, nature, animals, food, transport, emoji and more
- Every icon ships as both an SVG file and a React TSX component
- Full TypeScript types plus helpers: `scaledStroke`, `createIcon`, `iconNames` and more
- Tree-shakeable imports, `currentColor` support, and a11y titles built in
- Official Agent Skill: one command lets your AI agent pick icons by meaning and emit code

<h2 id="ai-agent-skill">
    <img src="./svg/robot.svg" width="18" alt="" />
    AI Agent Skill
</h2>

One command adds icon-picking and code generation to your AI coding agent. No package install
needed — **start a new session** and ask, e.g. "Give this login page a set of naive icons".

```bash
npx skills add guokaigdg/naive-icons
```

<h2>
    <img src="./svg/download.svg" width="18" alt="" />
    Installation
</h2>

Two packages ship the same 936 icons. Pick the one that matches your framework:

| Framework | Package | Requires |
| --- | --- | --- |
| React | `naive-icons` | React 16.8+ (including 18 and 19) |
| Vue 3 | `naive-icons-vue` | Vue 3.4+ |

### React

```bash
npm install naive-icons    # or: yarn add / pnpm add
```

```tsx
import { HomeIcon } from 'naive-icons';
```

### Vue 3

```bash
npm install naive-icons-vue    # or: yarn add / pnpm add
```

```vue
<script setup lang="ts">
import { HomeIcon } from 'naive-icons-vue';
</script>

<template>
  <HomeIcon :size="24" color="#E76F51" />
</template>
```

Vue API: [`vue/README.md`](./vue/README.md).

<h2>
    <img src="./svg/rocket.svg" width="18" alt="" />
    Quick Start
</h2>

```tsx
import { HomeIcon, HeartIcon, PenguinIcon } from 'naive-icons';

export function Example() {
  return (
    <nav>
      <HomeIcon size={24} />
      <HeartIcon size={24} color="#E76F51" />
      <PenguinIcon size={48} strokeWidth={7} />  {/* doubles every stroke */}
    </nav>
  );
}
```

ESM + `sideEffects: false` means named imports pull in only the icons you use:

```tsx
import { HomeIcon, SearchIcon } from 'naive-icons';
```

Or import a single icon from a subpath, skipping the entry:

```tsx
import { HomeIcon } from 'naive-icons/icons/HomeIcon';
```

Pass `currentColor` to follow the parent text color — the default `#2A2A2A` is **not**
inherited:

```tsx
<span style={{ color: '#264653' }}>
  <HomeIcon size={20} color="currentColor" />
  Home
</span>
```

Add an accessibility title:

```tsx
<HomeIcon size={24} title="Back to home" />
```

<h2>
    <img src="./svg/sliders.svg" width="18" alt="" />
    Component Props
</h2>

Every component extends native `SVGProps<SVGSVGElement>` — pass any SVG attribute
(`className`, `onClick`, `style`, …).

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | number \| string \| null | 24 | Icon size, equal width and height. `null` behaves as unset. **Takes precedence *below* `width` / `height`** |
| color | string | `#2A2A2A` | Stroke color. Pass `currentColor` to follow the surrounding text color |
| strokeWidth | number \| string | 3.5 | Stroke width, as a **scale factor relative to the 3.5 baseline**. Passing 7 doubles every stroke while preserving the thickness hierarchy |
| fill | string | none | Fill color. **Only affects primitives that don't set their own `fill`** — this library paints its colour blocks in, so a root `fill` won't override them |
| title | string | — | Accessibility title, rendered as an SVG title node |
| width / height | number \| string | follows size | Set width or height; **takes precedence over `size`**, the omitted side falls back to `size` |

> The `fill` row: naive style relies on solid colour blocks — 1987 of 3170 primitives hard-code
> their own `fill`, so a root `fill` has no effect. Recolour via `color` or `NAIVE_PALETTE`.

> Vue 3 uses the same props and defaults in kebab-case (`:stroke-width="7"`); reach the DOM
> node via `ref.value.$el`. See [`vue/README.md`](./vue/README.md).


<h2>
    <img src="./svg/code.svg" width="18" alt="" />
    Using the SVG Directly
</h2>

Not using React? Use the self-contained SVGs in `svg/` — no external references.

```html
<img src="naive-icons/svg/home.svg" width="24" height="24" alt="Home" />
```

To match the surrounding text color, swap `stroke="#2A2A2A"` for `stroke="currentColor"`:

```html
<svg viewBox="0 0 48 48" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="3.5"
     stroke-linecap="round" stroke-linejoin="round">
  <!-- Copy the path content from svg/home.svg -->
</svg>
```


<h2>
    <img src="./svg/layers.svg" width="18" alt="" />
    Dynamic Icons & Custom Icons
</h2>

`IconName` is type-only. For runtime lookup by name (theme pickers, CMS icon fields),
use `iconNames`:

```tsx
import { iconNames } from 'naive-icons';
import type { IconId } from 'naive-icons';

const map: Record<IconId, () => Promise<unknown>> = {
  // only the icons you list are ever loaded
  'arrow-up-down': () => import('naive-icons/icons/ArrowUpDownIcon').then((m) => m.ArrowUpDownIcon),
  'arrow-jump': () => import('naive-icons/icons/ArrowJumpIcon').then((m) => m.ArrowJumpIcon),
};
```

`import * as icons` also allows name lookup, but bundles all 936 icons and kills
tree-shaking. `iconNames` lets you load only what you use.

For your own icons in the same style, use `createIcon` — identical root node, a11y
attributes and stroke scaling:

```tsx
import { createIcon } from 'naive-icons';

const MyIcon = createIcon('my-icon', (sw) => (
  <>
    <path d="M12 12 L36 36" stroke="#2A2A2A" strokeWidth={sw(3.5)} />
    <path d="M14 20 L20 26" stroke="#E76F51" strokeWidth={sw(2)} />
  </>
));

<MyIcon size={24} strokeWidth={7} title="My icon" />;
```

The body is a node or a function taking `sw(designed)`. Wrap design widths in `sw()` so
`strokeWidth` thickens everything together — otherwise only the frame scales.

Names derive from the id: `my-icon` → `MyIcon`, `arrow-up-down` → `ArrowUpDownIcon`.

<h2>
    <img src="./svg/palette.svg" width="18" alt="" />
    Palette
</h2>

```typescript
import { NAIVE_PALETTE } from 'naive-icons';
```

| Name | Value | Usage |
| --- | --- | --- |
| ink | #2A2A2A | Primary stroke |
| navy | #264653 | Dark main body |
| orange | #E76F51 | Accent |
| yellow | #E9C46A | Warm fill |
| pink | #F4A6A4 | Soft fill |
| green | #588157 | Natural elements |
| teal | #2A9D8F | Secondary |
| brown | #8B5E3C | Wood and earth |
| cream | #FAEDCD | Light background |
| white | #FFFFFF | Cut-out shapes on solid fills |

<h2>
    <img src="./svg/terminal.svg" width="18" alt="" />
    Local Development
</h2>

```bash
git clone https://github.com/guokaigdg/naive-icons.git
cd naive-icons
npm install
npm run dev        # watch build
npm run typecheck
npm run website    # browse icons at localhost:8080
```

Open [`website/index.html`](./website/index.html) to browse, search and preview every icon
without building.

<h2>
    <img src="./svg/shield.svg" width="18" alt="" />
    License
</h2>

MIT License. See [LICENSE](./LICENSE).

All icons are original works, free to use in personal and commercial projects without attribution.

<h2>
    <img src="./svg/heart.svg" width="18" alt="" />
    Sponsor
</h2>

- The easiest way to support is to give it a star and share it. If you have ideas or suggestions about the project, feel free to open an [Issue](https://github.com/guokaigdg/naive-icons/issues) or submit a PR.

- If this project has been helpful to you, you could also treat the developer's cat to a can of food — after all, there's a cat supervising the code behind every icon. <a href="https://guokaigdg.github.io/home/payment.html">Feed the cat a can</a>
