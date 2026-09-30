# Landing — Komunikator

Strona główna komunikatora, zbudowana w [Astro](https://astro.build) na podstawie projektu „Strona www · desktop / mobile”.

## Start

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # statyczny build do dist/
npm run preview
```

## Języki

- angielski (domyślny) pod `/`, polski pod `/pl/` — tagi `hreflang` + `x-default`, przełącznik EN/PL w nagłówku
- wszystkie teksty interfejsu: `src/i18n/ui.ts` (oba słowniki muszą mieć te same klucze — pilnuje tego TypeScript)

## Blog

- wpisy: `src/content/blog/<en|pl>/<slug>.md`
- `translationKey` w frontmatterze łączy tłumaczenia (hreflang i przełącznik języka prowadzą do odpowiednika)
- `description` ma 70–170 znaków, `title` do 70 — schema odrzuci build, jeśli się nie zmieszczą
- każdy wpis dostaje JSON-LD `BlogPosting` + `BreadcrumbList`, meta `article:*` i trafia do RSS (`/rss.xml`, `/pl/rss.xml`)
- sekcja „Nowości” na stronie głównej pokazuje 3 najnowsze wpisy w danym języku

## Struktura

- `src/views/` — widoki wspólne dla obu języków (Home, BlogIndex, BlogPost); `src/pages/` tylko je wywołuje
- `src/layouts/Base.astro` — `<head>`: SEO, hreflang, Open Graph, Twitter Card, preload fontu
- `src/components/` — sekcje (Hero, Features, Security, Devices, Download, News, Faq) i elementy wspólne
- `src/site.ts` — linki (pobieranie, logowanie itd.) i identyfikatory sekcji
- `src/styles/global.css` — tokeny kolorów; akcent zmieniasz w `--accent`
- `src/assets/` — zrzuty ekranu aplikacji (Astro generuje z nich AVIF/WebP w kilku rozmiarach)
- `public/og.png` — obraz Open Graph 1200×630

## Wydajność

Lighthouse mobile: 100 / 100 / 100 / 100 (Performance, Accessibility, Best Practices, SEO) na stronie głównej EN i PL, liście wpisów i wpisie.

- bez frameworków JS; menu mobilne na Popover API, CSS wstawiony inline
- obrazy AVIF/WebP z `srcset`, hero z art direction (telefon na mobile, desktop od tabletu)
- font Figtree (variable, self-hosted) z preloadem i metrycznym fallbackiem

## Do uzupełnienia

- domena: `SITE_URL` w `astro.config.mjs` (domyślnie `https://interpaste.dev`) — od niej zależą canonical, og:url, og:image i sitemap
- prawdziwe linki w `src/site.ts` (`LINKS`)
- odpowiedzi FAQ oznaczone `[TBD]` / `[DO USTALENIA]` (pomijane w danych strukturalnych)
- zrzuty aplikacji w `src/assets/` są po polsku — dla wersji EN warto dorobić angielskie
