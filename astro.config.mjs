// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  // Site configuration
  site: 'https://apartamentosdonjuan.es',

  integrations: [sitemap()],

  // Build output directory
  outDir: './dist',
});

