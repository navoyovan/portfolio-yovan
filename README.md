# portfolio-yovan

Personal portfolio site for Yovan Gunardio Darmawan. Fifth major version. Static, fast, no backend.

Soon Live at [navoyovan.github.io/portfolio-yovan](https://navoyovan.github.io/portfolio-yovan)

---

## Overview

This is a personal portfolio built to show the kind of work I do like web apps, touchscreen kiosk systems, and hardware-adjacent software.

---

## Stack

| Tool | Version | Why |
|---|---|---|
| [Astro](https://astro.build) | v7 | Static output by default. React islands only where needed. |
| [Tailwind CSS v4](https://tailwindcss.com) | v4.3 | Utility-first with `@theme` as the single design token source. No config file needed. |
| [React](https://react.dev) | v19 | Used selectively for interactive components via Astro's island architecture. |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | v3 | Auto-generates `sitemap-index.xml` at build time. |
| GitHub Actions | — | Hosted under the `/portfolio-yovan` subpath. |

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

The site deploys to GitHub Pages under the path `/portfolio-yovan`. This is configured in [`astro.config.mjs`](./astro.config.mjs):

```js
export default defineConfig({
  site: 'https://navoyovan.github.io',
  base: '/portfolio-yovan',
  // ...
});
```