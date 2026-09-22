<h1>Naive Icons</h1>

<p align="right">
  <a href="./README.md">中文</a> | <a href="./README.en.md">English</a>
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


Naive Icons is a hand-drawn SVG icon library with a naive folk art style, built for React and TypeScript. All 125 icons are AI-generated original works.

Each icon is drawn on a 48x48 grid with a 3.5 stroke, rounded line caps, and a unified retro palette — keeping the charming clumsiness and warmth of hand-drawn illustration. Some icons even feature a pair of dot eyes and a little smile, adding a touch of humanity to your interface.

- Icon count: 125
- Per-icon size: roughly 400–700 bytes
- Dependencies: zero runtime dependencies, React as a peer dependency only
- License: MIT

## Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Component Props](#component-props)
- [Using the SVG Directly](#using-the-svg-directly)
- [Palette](#palette)
- [Icon List](#icon-list)
- [Design Principles](#design-principles)
- [Directory Structure](#directory-structure)
- [Local Development](#local-development)
- [Browser Support](#browser-support)
- [License](#license)

## Features

- 125 original hand-drawn SVG icons spanning 11 categories: interface, actions, media, navigation, animals, food, and more
- Unified spec: 48x48 viewBox, 3.5 stroke width, round line caps and joins
- Unified palette: 9 retro colors, usable directly as design tokens
- Some icons feature dot eyes and a little smile for a highly recognizable style
- Every icon ships as both an SVG source file and a React TSX component
- Full TypeScript types: IconProps, IconName, IconCategory, NAIVE_PALETTE
- Transparent background, no gradients, no external font dependency
- Supports currentColor, so icons automatically follow the surrounding text color

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

Import per icon to further reduce bundle size:

```tsx
import HomeIcon from 'naive-icons/src/HomeIcon';
```

Use with currentColor so icons automatically inherit the parent text color:

```tsx
<span style={{ color: '#264653' }}>
  <HomeIcon size={20} />
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
| color | string | currentColor | Stroke color |
| strokeWidth | number \| string | 3.5 | Stroke width, scaled to the 48x48 canvas |
| fill | string | none | Fill color |
| title | string | — | Accessibility title, rendered as an SVG title node |
| width / height | number \| string | follows size | Set width or height individually |

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

## Icon List

**Interface Basics** (18)
home, user, settings, search, heart, star, bell, calendar, clock, eye, bulb, tag, bookmark, menu, ellipsis, external-link, link, unlink

**Actions** (15)
edit, trash, download, upload, save, plus, close, check, refresh, share, play, pause, stop, copy, minus

**Files & Media** (10)
file, folder, image, camera, video, mic, music, code, book, headphones

**Navigation & Direction** (14)
location, compass, map, flag, anchor, magnet, arrow-up, arrow-down, arrow-left, arrow-right, chevron-down, chevron-up, chevron-left, chevron-right

**Communication** (4)
mail, chat, phone, wifi

**Nature & Weather** (14)
sun, moon, cloud, umbrella, tree, mountain, tent, flower, leaf, rainbow, mushroom, cactus, snowflake, flame

**Animals** (14)
cat, dog, bird, fish, penguin, rabbit, bear, fox, owl, frog, bee, butterfly, snail, ladybug

**Food & Drink** (11)
apple, strawberry, watermelon, cherry, lemon, cake, icecream, donut, coffee, coffee-cup, water-cup

**Everyday Objects** (16)
balloon, basketball, dumbbell, lamp, candle, pencil, paintbrush, globe, google-chrome, trophy, shopping-bag, credit-card, gift, thermometer, lock, key

**Transport** (7)
car, airplane, rocket, cart, bicycle, sailboat, train

**Emotions** (2)
smile, thumbs-up

Icon file names use kebab-case (e.g. `shopping-bag.svg`, `thumbs-up.svg`), while React component names use PascalCase with an `Icon` suffix (e.g. `ShoppingBagIcon`, `ThumbsUpIcon`).

## Design Principles

Naive Icons follows four fixed rules. They should be respected when adding new icons.

1. **Grid & bleed**: All graphics are drawn on a 48x48 canvas, keeping at least 3 units between the main body and the canvas edge.
2. **Stroke**: A unified 3.5 width with round caps and joins, and no dashed lines.
3. **Color**: Use only the 9 colors in the palette — no gradients, shadows, or semi-transparent overlays.
4. **Personality**: Slight asymmetry is welcome; encourage dot eyes and a smile on living subjects to keep the hand-drawn clumsiness.

## Directory Structure

```
naive-icons/
├── svg/                 125 SVG source files
├── src/                 125 React TSX components + index.ts + types.ts
├── assets/              Brand assets (logo)
├── scripts/             Icon generation and preview build scripts
├── website/             Official documentation site
├── dist/                Build output (ESM + CJS + type declarations, not version-controlled)
├── tsup.config.ts       Build configuration
├── tsconfig.json
├── LICENSE
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
└── package.json
```

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

## Fonts

The icon library itself (SVG and React components) has no font dependency. The website additionally loads a hand-written-style font for headings and body text: [LXGW Yozai](https://github.com/lxgw/yozai-font) (SIL Open Font License 1.1, free for commercial use).

The website self-hosts the font: it only bundles the characters actually used on the site (about 715 characters, roughly 170 KB for the regular weight), fully offline. Files live in `website/assets/fonts/`. To regenerate the subset yourself, run:

```bash
python3 scripts/subset_fonts.py
```

It depends on `fonttools` and `brotli`:

```bash
pip install fonttools brotli
```

## Browser Support

Naive Icons outputs standard SVG 1.1 and supports all modern browsers (the last two major versions of Chrome, Firefox, Safari, and Edge). The React components contain no browser-specific APIs and can be safely used in server-side rendering environments.

## License

MIT License. See [LICENSE](./LICENSE).

All icons are original works, free to use in personal and commercial projects without attribution.