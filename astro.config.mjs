// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://navoyovan.github.io',
  base: '/porfolio-yovan-v5',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('component-library'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});