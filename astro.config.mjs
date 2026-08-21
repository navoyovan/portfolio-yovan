// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://navoyovan.github.io',
  base: '/portfolio-yovan',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('component-library') && !page.includes('404'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});