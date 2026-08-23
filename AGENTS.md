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

### Phase 6 — Component Showcase Labeling Standards

- [ ] **Dual-Layer Showcase Pattern**: All showcase components follow the 2-Tier format:
  - **Specimen Visual & Production Labels**: Strictly in **Latin** to match the portfolio's editorial motif (e.g. `INCIPE SESSIONEM`, `CONFIRMA ET IMPRIME`, `NOTIFICATIO ACTIVA`, `ELECTIO INDETERMINATA`, `QUALITAS ORDINARIA`, `STATUS_VIVUS`, `TENDENTIA SESSIONUM`).
  - **Tier 1 (Title)**: Functional English variant name (`font-mono text-xs font-semibold`, e.g. `CTA Pulse`, `3-State Checkbox`, `Weekly Telemetry Trend Spline`).
  - **Tier 2 (Props & Tokens)**: Technical API shorthand and dimensions in English (`font-mono text-[11px] text-neutral-500`, e.g. `variant="cta" • Syne 700`, `data={...} • 7-day comparative spline`).
- [ ] **Subsection & Section Headers**: Section/subsection headers in `component-library.astro` must be in English (`font-mono text-xs font-semibold`, e.g. `12.1 / Telemetry Trend Curve`, `12.2 / Activity Schedule Timeline`).
- [ ] **No Redundant Container Boxes**: Never wrap showcase specimens in artificial outer border/padding box containers (`<div class="p-5 border ... bg-...">`). Components mount directly into showcase grid cells.

### Phase 7 — Typography & Font Scoping Rules

- [ ] **Monospace Scoping (`font-mono`)**: `font-mono` is strictly reserved for developer-facing showcase metadata, code snippets, Tier 1/Tier 2 token descriptors, and section numbering badges. **Never use `font-mono` on public-facing component UI.**
- [ ] **Outfit (`font-sans`) Casing**: Elements using `font-sans` (Outfit) must use natural/title casing (`Lun`, `Mar`, `Hebdomada currens`, `sessiones`). **Do not apply `uppercase` to `font-sans`.**
- [ ] **Syne (`font-heading`) for Headings & "Today"**:
  - Headings, primary numeric values, and action button labels use `font-heading font-bold` (Syne).
  - In date pickers, trend charts, and timelines, regular days use `font-sans` (Outfit); **only the active "Today" mark uses `font-heading font-black` (Syne 900) in `uppercase`**.
- [ ] **Header Row Casing Exception**: Component header rows (month headers, sticky legend/status bars, bottom category headers) are permitted to use `uppercase tracking-wider`.

### Phase 8 — Indicator & State Neutrality

- [ ] **Neutral Focal Indicators**: Active "Today" badges and timeline current-day markers must use clean, high-contrast neutral styling (`bg-neutral-950 text-white dark:bg-white dark:text-neutral-950`, `fill-neutral-950 dark:fill-white`) rather than unprompted neon green `#52FF1A` accents.

### Phase 9 — Form Control Transition & Animation Safety

- [ ] **Transition State Scoping**: Active state CSS rules (checked background, active checkmark/dot icons) must be scoped with `:not(.is-transitioning)` so that loading/spinner overlays can cleanly suppress indicator icons without CSS specificity collisions.

### Phase 10 — Component Modularity & Page Isolation

- [ ] **No Inline Interactive Overlays/Modals in Page Templates**: Page templates (`src/pages/*.astro`) must only contain page layout structure, metadata, content orchestration, and component composition. Complex interactive widgets, modal dialogs, backdrop overlays, and easter egg layers must be extracted to dedicated modular components in `src/components/` (e.g. `EasterEggs.astro`).

