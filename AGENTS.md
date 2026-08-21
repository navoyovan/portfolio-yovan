## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Build Command

Always build directly via Node — npm/npx wrappers hang in PowerShell:

```bash
node node_modules/astro/bin/astro.mjs build
```

## Pre-Deployment Audit Checklist

Run this checklist before any commit to `master` / push to GitHub Pages.

### Phase 1 — Tailwind v4 CSS Architecture

- [ ] **Token deduplication**: Grep `src/` for any `--font-*`, `--color-*`, `--animate-*` declared in BOTH `@theme` AND `:root`. Remove the `:root` duplicates — `@theme` auto-emits all tokens.
- [ ] **`@keyframes` scoping**: All `@keyframes` for `--animate-*` tokens are nested **inside** `@theme`. Root-level keyframes are tree-shaken by Tailwind's compiler.
- [ ] **Utility classes over arbitrary syntax**: No `font-['Syne',sans-serif]` or similar — use `font-heading`, `font-sans` etc. (auto-generated from `@theme` tokens).
- [ ] **Dark mode unified**: All dark mode overrides live under `@media (prefers-color-scheme: dark)` in `:root`. No stray `.dark` or `.dark-theme` class selectors.

### Phase 2 — GitHub Pages Configuration

- [ ] **`astro.config.mjs`**: Both `site: 'https://navoyovan.github.io'` and `base: '/portfolio-yovan'` are set.
- [ ] **Internal links**: No hardcoded root-relative paths (`/portfolio-index`, `/favicon.ico`, `/og-default.png`). All use `import.meta.env.BASE_URL`.
- [ ] **Navbar active state**: `Astro.url.pathname` comparisons account for `BASE_URL` prefix.
- [ ] **SEO / `<head>`**: Favicon `href`, OG image URL, and canonical `<link>` all prepend `BASE_URL`.
- [ ] **`robots.txt.ts`**: The `Sitemap:` line produces `https://navoyovan.github.io/portfolio-yovan/sitemap-index.xml`.
- [ ] **`public/og-default.png`**: 1200×630 static OG card exists. Without it, social previews 404.

### Phase 3 — Inline Style & Asset Hygiene

- [ ] **Inline font styles**: `grep -r 'style="font-family' src/` returns 0 results. All replaced with Tailwind utility classes.
- [ ] **Exposed IPs / internal URLs**: `grep -r 'http://' src/` returns 0 results. No raw server IPs or internal API endpoints in public-facing code.
- [ ] **Redundant inline properties**: No `style=""` attributes that duplicate properties already defined in the component's CSS class.

### Phase 4 — Animation & Transition Safety

- [ ] **No `transition-all` on animated elements**: Any component with a looping `@keyframes` animation uses a scoped `transition-[transform,background-color,color,border-color,opacity]` — not `transition-all`. `box-shadow` must be excluded from `transition` when driven by `@keyframes`.

### Phase 5 — Component Naming

- [ ] **Neutral names**: No components named after internal products or implementation contexts (e.g., `KioskButton`). Use functional names (`ActionButton`, `PrimaryButton`, etc.).

