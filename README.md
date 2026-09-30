# Landing — Komunikator

Strona główna komunikatora, zbudowana w [Astro](https://astro.build) na podstawie projektu „Strona www · desktop / mobile”.

## Start

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # statyczny build do dist/
npm run preview
```

## Struktura

- `src/pages/index.astro` — strona główna + JSON-LD (SoftwareApplication, FAQPage)
- `src/layouts/Base.astro` — `<head>`: SEO, Open Graph, Twitter Card, preload fontu
- `src/components/` — sekcje (Hero, Features, Security, Devices, Download, News, Faq) i elementy wspólne
- `src/site.ts` — nazwa, opisy, linki (pobieranie, logowanie itd.) i FAQ w jednym miejscu
- `src/styles/global.css` — tokeny kolorów; akcent zmieniasz w `--accent`
- `src/assets/` — zrzuty ekranu aplikacji (Astro generuje z nich AVIF/WebP w kilku rozmiarach)
- `public/og.png` — obraz Open Graph 1200×630

## Wydajność

- bez frameworków JS; menu mobilne na Popover API, CSS wstawiony inline
- obrazy AVIF/WebP z `srcset`, hero z art direction (telefon na mobile, desktop od tabletu)
- font Figtree (variable, self-hosted) z preloadem i metrycznym fallbackiem

## Do uzupełnienia

- domena: `SITE_URL` w `astro.config.mjs` (domyślnie `https://interpaste.dev`) — od niej zależą canonical, og:url, og:image i sitemap
- prawdziwe linki w `src/site.ts` (`LINKS`)
- odpowiedzi FAQ oznaczone `[DO USTALENIA]`
