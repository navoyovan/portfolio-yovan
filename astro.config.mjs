// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const BLOG_DIR = './src/content/blog';
/** @type {Record<string, { noindex: boolean; lastmod?: string }>} */
const blogMeta = {};
if (fs.existsSync(BLOG_DIR)) {
  for (const f of fs.readdirSync(BLOG_DIR)) {
    if (!/\.mdx?$/.test(f)) continue;
    const content = fs.readFileSync(path.join(BLOG_DIR, f), 'utf8');
    const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    const fm = fmMatch ? fmMatch[1] : '';
    const field = (/** @type {string} */ k) => {
      const m = fm.match(new RegExp(`^${k}:\\s*["']?([^"'\\r\\n]+)`, 'm'));
      return m ? m[1].trim() : undefined;
    };
    const slug = f.replace(/\.mdx?$/, '');
    blogMeta[slug] = {
      noindex: field('noindex') === 'true' || field('draft') === 'true',
      lastmod: field('updatedDate') ?? field('publishDate'),
    };
  }
}

const EXCLUDED_PAGES = ['component-library', '404', 'ascii-sandbox', 'hero-sandbox'];

/**
 * @param {string} url
 */
const getBlogSlug = (url) => {
  const m = url.match(/\/blog\/([^/]+)\/?$/);
  return m ? m[1] : null;
};

// https://astro.build/config
export default defineConfig({
  site: 'https://navoyovan.github.io',
  base: '/portfolio-yovan',
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        if (EXCLUDED_PAGES.some((p) => page.includes(p))) return false;
        const slug = getBlogSlug(page);
        if (slug && blogMeta[slug]?.noindex) return false;
        return true;
      },
      serialize: (item) => {
        const slug = getBlogSlug(item.url);
        const lastmod = slug ? blogMeta[slug]?.lastmod : undefined;
        if (lastmod) {
          const date = new Date(lastmod);
          if (!isNaN(date.getTime())) {
            item.lastmod = date.toISOString();
          }
        }
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});