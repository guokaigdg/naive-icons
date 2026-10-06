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
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/SVG-FFB13B?style=flat-square&logoColor=black" alt="SVG">
</p>

<p align="center">
  <b>🤖 AI Agent Skill</b> — install it into Claude Code, Cursor, Codex and friends,<br/>
  and they can pick icons by meaning, emit ready-to-paste code, and know the design rules.<br/>
  <code>npx skills add guokaigdg/naive-icons</code> &nbsp;·&nbsp; <a href="#ai-agent-skill">See details &rarr;</a>
</p>

Each icon is drawn on a 48x48 grid with a 3.5 stroke, rounded line caps, and a retro palette — keeping the charming clumsiness and warmth of hand-drawn illustration. Some icons even feature a pair of dot eyes and a little smile, adding a touch of humanity to your interface.

## Features

- Icons spanning 11 categories: interface, actions, media, navigation, animals, food, and more
- Every icon ships as both an SVG source file and a React TSX component
- Full TypeScript types: IconProps, IconName, IconComponent, NAIVE_PALETTE
- Supports `currentColor` to follow the surrounding text color
- Official Agent Skill: one command installs it into your AI coding agent, which can then pick icons by meaning and emit ready-to-paste code

## AI Agent Skill

Install it into your AI coding agent (Claude Code, Cursor, Codex, …) and it can pick icons by
meaning, emit ready-to-paste code, and know this library's design rules.

```bash
npx skills add guokaigdg/naive-icons
```

You do not need to install the package first. **Start a new session** afterwards,
then just ask:

- "Give this login page a set of naive icons"
- "Find an icon that means 'already read'"

The skill bundles the full icon catalog, the design spec, usage patterns and every SVG source
file, so the agent can generate code even when the package isn't installed in your project.
Re-run the same command after upgrading the library to update it.

> Installing the skill and using the components are separate things. You only need
> `npm install naive-icons` from the Installation section below when you actually want to
> `import { HomeIcon } from 'naive-icons'` in your own code.

## Installation

```bash
npm install naive-icons
```

```bash
yarn add naive-icons
```

```bash
pnpm add naive-icons
```

Naive Icons only depends on React and supports React 16.8 and above (including React 18 and 19).

## Quick Start

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

Tree-shaking works out of the box: the package is ESM and sets `sideEffects: false`, so a
named import pulls in only the icons you actually use:

```tsx
import { HomeIcon, SearchIcon } from 'naive-icons';
```

Or import a single icon straight from a subpath, bypassing the entry entirely:

```tsx
import { HomeIcon } from 'naive-icons/icons/HomeIcon';
```

Both forms produce the same bundle size (~0.9 KB minified for a single icon). The repo has a
`tests/bundle-size.test.ts` guarding that number, so a build change that breaks tree-shaking
fails the test suite.

To follow the parent text color, pass `currentColor` explicitly — the default is ink `#2A2A2A`
and is **not** inherited automatically:

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

## Component Props

Every Naive Icon component extends the native `SVGProps<SVGSVGElement>`, so you can pass any SVG attribute directly, such as `className`, `onClick`, or `style`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | number \| string | 24 | Icon size, equal width and height. Overrides width and height when set |
| color | string | `#2A2A2A` | Stroke color. Pass `currentColor` to follow the surrounding text color |
| strokeWidth | number \| string | 3.5 | Stroke width, as a **scale factor relative to the 3.5 baseline**. Passing 7 doubles every stroke while preserving the thickness hierarchy |
| fill | string | none | Fill color. **Only affects primitives that don't set their own `fill`** — this library paints its colour blocks in, so a root `fill` won't override them |
| title | string | — | Accessibility title, rendered as an SVG title node |

> The `fill` row deserves a note: the naive look depends on solid colour blocks, so 489 of the 730
> primitives hard-code their own `fill` and a root `fill` has no effect on them. That is the style
> itself, not a bug — to recolour, switch the stroke with `color`, or pick from the ten colours in
> `NAIVE_PALETTE`.
| width / height | number \| string | follows size | Set width or height individually; takes **precedence over `size`**, and the side you omit falls back to `size` |

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

## Using the SVG Directly

If your project isn't React, you can use the source files in the `svg/` directory. Every SVG is self-contained with no external references.

```html
<img src="naive-icons/svg/home.svg" width="24" height="24" alt="Home" />
```

To follow the surrounding text color when inlining, replace `stroke="#2A2A2A"` with `stroke="currentColor"`:

```html
<svg viewBox="0 0 48 48" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="3.5"
     stroke-linecap="round" stroke-linejoin="round">
  <!-- Copy the path content from svg/home.svg -->
</svg>
```

You can also build an SVG sprite or icon font — the source files are simple enough to work with.

## Palette

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

## Design Principles

Naive Icons follows four fixed rules. They should be respected when adding new icons.

1. **Grid & bleed**: All graphics are drawn on a 48x48 canvas, keeping at least 3 units between the main body and the canvas edge.
2. **Stroke**: A unified 3.5 width with round caps and joins, and no dashed lines.
3. **Color**: The 9 palette colors set the default tone; other solid colors are allowed when genuinely needed (e.g. brand colors) — no gradients, shadows, or semi-transparent overlays.
4. **Personality**: Slight asymmetry is welcome; encourage dot eyes and a smile on living subjects to keep the hand-drawn clumsiness.

## Local Development

```bash
git clone https://github.com/guokaigdg/naive-icons.git
cd naive-icons
npm install
```

Common scripts:

```bash
npm run build        # Build dist with tsup (ESM + CJS + type declarations)
npm run dev          # Watch mode build
npm run typecheck    # Type check
npm run website      # Preview the site locally (Python static server, port 8080)
npm run icons:build  # Regenerate SVG and TSX from script definitions
npm run icons:add    # Incrementally add icons without overwriting existing files
```

`prepublishOnly` runs the build automatically on publish, so there is no need to run `npm run build` manually.

The build output is `dist/index.mjs` (ESM), `dist/index.js` (CJS), and `dist/index.d.ts` / `dist/index.d.mts` (type declarations). The `exports` field in `package.json` points to the correct file for each `import` / `require` condition. React is declared as external and is not bundled.

The website is a fully static site (no build step, no dependencies). You can open `website/index.html` directly: browse all icons, filter by category, search, adjust size and stroke color live, switch between light/dark/grid preview backgrounds, and click any icon to view React usage, copy code, or download the SVG. It supports light/dark themes (follows the system, with manual toggle remembered) and lets you navigate between icons with arrow keys in the modal.

## Browser Support

Naive Icons outputs standard SVG 1.1 and supports all modern browsers (the last two major versions of Chrome, Firefox, Safari, and Edge). The React components contain no browser-specific APIs and can be safely used in server-side rendering environments.

## License

MIT License. See [LICENSE](./LICENSE).

All icons are original works, free to use in personal and commercial projects without attribution.

## Sponsor

If this project has been helpful, consider treating the developer's cat to a can of food — after all, there's a cat supervising the code behind every icon. <a href="https://guokaigdg.github.io/home/payment.html">Feed the cat a can</a>