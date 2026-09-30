// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Docelowa domena — używana w canonical, og:url, og:image i sitemapie.
// Można nadpisać zmienną środowiskową SITE_URL przy buildzie.
const site = process.env.SITE_URL ?? 'https://interpaste.dev';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // Cały CSS inline w <head> — brak zasobów blokujących renderowanie.
    inlineStylesheets: 'always',
  },
  image: {
    layout: 'constrained',
  },
});
