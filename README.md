# Astro SEO Starter Platform

A high-performance, SEO-optimized web platform built with **Astro v5**, **Tailwind CSS v4**, **React 19 Islands**, and comprehensive search engine optimization tools.

---

## 🚀 Features

- **Zero-JS Baseline**: Ships 0kb JavaScript by default to maximize Core Web Vitals (LCP, INP, CLS, TTFB).
- **Selective Hydration (React Islands)**: Isolated React components loaded only when needed via `client:visible`, `client:load`, or `client:idle`.
- **Complete SEO Head System (`SEO.astro`)**:
  - Dynamic canonical URL generation.
  - Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`).
  - Twitter Cards (`summary_large_image`).
  - Schema.org JSON-LD structured data for Google Rich Snippets.
- **Automated Sitemaps & Robots.txt**:
  - Auto-generated `sitemap-index.xml` via `@astrojs/sitemap`.
  - Dynamic `robots.txt` endpoint referencing the generated sitemap.
- **Minimal Navigation & Routes**:
  - Sticky minimal navigation with active route detection.
  - `/` — Homepage with SEO architecture features & React island demo.
  - `/component-library` — Reusable UI primitives showcase.
  - `/portfolio-index` — Project archive and case studies.

---

## 📁 Project Structure

```text
/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── InteractiveCounter.jsx   # React Island example (client:visible)
│   │   ├── Navbar.astro             # Minimal header with bottom border & active states
│   │   └── SEO.astro                # Meta, Open Graph, Twitter Cards, Schema.org JSON-LD
│   ├── layouts/
│   │   └── RootLayout.astro         # Master layout with SEO & global Tailwind styles
│   ├── pages/
│   │   ├── component-library.astro  # Component library showcase page
│   │   ├── index.astro              # Homepage
│   │   ├── portfolio-index.astro    # Portfolio project archive
│   │   └── robots.txt.ts            # Dynamic robots.txt endpoint
│   └── styles/
│       └── global.css               # Tailwind CSS v4 entry point
├── astro.config.mjs                 # Integrations: React, Tailwind, Sitemap
├── package.json
└── tsconfig.json                    # Strict TypeScript configuration
```

---

## 🧞 Available Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Start local development server at `http://localhost:4321` |
| `npm run build` | Build static production site to `./dist/` |
| `npm run preview` | Preview production build locally |

