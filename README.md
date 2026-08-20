# porfolio-yovan-v5

Personal portfolio site for Yovan Gunardio Darmawan. Fifth major version. Static, fast, no backend.

Soon Live at ~~[navoyovan.github.io/porfolio-yovan-v5](https://navoyovan.github.io/porfolio-yovan-v5)~~

---

## Overview

This is a personal portfolio built to show the kind of work I do — web apps, touchscreen kiosk systems, and hardware-adjacent software.

---

## Stack

| Tool | Version | Why |
|---|---|---|
| [Astro](https://astro.build) | v7 | Static output by default. React islands only where needed. |
| [Tailwind CSS v4](https://tailwindcss.com) | v4.3 | Utility-first with `@theme` as the single design token source. No config file needed. |
| [React](https://react.dev) | v19 | Used selectively for interactive components via Astro's island architecture. |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | v3 | Auto-generates `sitemap-index.xml` at build time. |
| GitHub Pages | — | ~~Hosted under the `/porfolio-yovan-v5` subpath.~~ |

---

## Project Structure

```
/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── og-default.png          # Default 1200×630 Open Graph card
├── src/
│   ├── components/
│   │   ├── ActionButton.astro  # CTA, primary, and secondary button variants
│   │   ├── Hero.astro          # Full-bleed typographic header with ambient symbol animations
│   │   ├── MetricCard.astro    # Stat cards used in the overview section
│   │   ├── Navbar.astro        # Sticky minimal nav with BASE_URL-aware active state
│   │   ├── ProjectTile.astro   # Project card for portfolio grid
│   │   ├── SEO.astro           # Meta, Open Graph, Twitter Cards, JSON-LD
│   │   ├── SquareWaveLoader.astro  # Animated loader component
│   │   └── StatusBadge.astro   # Inline status/availability indicator
│   ├── layouts/
│   │   └── RootLayout.astro    # Wraps all pages; injects SEO, fonts, global styles
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── portfolio-index.astro  # Work archive
│   │   ├── component-library.astro  # Design system showcase
│   │   └── robots.txt.ts       # Dynamic robots.txt with sitemap URL
│   └── styles/
│       └── global.css          # Tailwind v4 entry point; all @theme tokens and custom animations
├── astro.config.mjs
└── package.json
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (runs at localhost:4321)
npm run dev
```

> **Note for Windows + PowerShell**: `npm run build` can hang due to stdio redirection issues.
> Run the build directly instead:
> ```bash
> node node_modules/astro/bin/astro.mjs build
> ```

---

## Deployment

The site deploys to GitHub Pages under the path `/porfolio-yovan-v5`. This is configured in [`astro.config.mjs`](./astro.config.mjs):

```js
export default defineConfig({
  site: 'https://navoyovan.github.io',
  base: '/porfolio-yovan-v5',
  // ...
});
```

Because of the base path, all internal links must use `import.meta.env.BASE_URL` rather than root-relative paths like `/about`. This is already handled in `Navbar.astro` and `SEO.astro`.

The sitemap is auto-generated and referenced in `robots.txt`:
```
Sitemap: https://navoyovan.github.io/porfolio-yovan-v5/sitemap-index.xml
```
