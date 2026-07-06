// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Output mode for Cloudflare Pages
  output: 'static',

  // Site configuration
  site: 'https://apartamentosdonjuan.es',

  // Build output directory
  outDir: './dist',
});

