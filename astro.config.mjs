// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Docelowa domena — używana w canonical, hreflang, og:url, og:image, RSS i sitemapie.
// Można nadpisać zmienną środowiskową SITE_URL przy buildzie.
const site = process.env.SITE_URL ?? 'https://interpaste.dev';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  // Angielski pod `/` (domyślny, pod SEO na rynki anglojęzyczne), polski pod `/pl/`.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', pl: 'pl-PL' } },
    }),
  ],
  build: {
    // Cały CSS inline w <head> — brak zasobów blokujących renderowanie.
    inlineStylesheets: 'always',
  },
  image: {
    layout: 'constrained',
  },
  // Motyw bloków kodu z kontrastem WCAG AA na ciemnym tle.
  markdown: {
    shikiConfig: { theme: 'github-dark-high-contrast' },
  },
});
