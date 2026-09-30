# Komunikator — landing page

Strona produktowa i blog komunikatora. Statyczny build w Astro, dwa języki (EN/PL), zero JS po stronie klienta.

```
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview
```

## Stack

| Warstwa     | Technologia                                           |
| ----------- | ----------------------------------------------------- |
| Framework   | Astro 7 (statyczny output)                            |
| Język       | TypeScript (strict)                                   |
| Treści      | Astro Content Collections (Markdown + schema Zod)     |
| i18n        | Astro i18n — `en` pod `/`, `pl` pod `/pl/`            |
| Obrazy      | `astro:assets` + sharp → AVIF / WebP, `srcset`        |
| Font        | Figtree Variable (self-hosted, `@fontsource-variable`) |
| SEO         | `@astrojs/sitemap`, `@astrojs/rss`, JSON-LD           |
| Style       | CSS scoped w komponentach + tokeny w `global.css`     |
| JS klienta  | brak (menu mobilne na Popover API)                    |

## Architektura

```
                    ┌──────────────────────────────┐
                    │        src/i18n/ui.ts        │  teksty EN + PL
                    └──────────────┬───────────────┘
                                   │
 src/content/blog/{en,pl}/*.md     │     src/assets/*.png
          │                        │            │
          ▼                        ▼            ▼
 ┌─────────────────┐     ┌──────────────────────────────┐
 │  src/lib/blog   │────▶│  src/views/                  │
 │  src/lib/rss    │     │   Home · BlogIndex · BlogPost│
 └─────────────────┘     └──────────────┬───────────────┘
                                        │ używane przez
                    ┌───────────────────┴───────────────────┐
                    ▼                                       ▼
          src/pages/  (EN, /)                     src/pages/pl/  (PL, /pl/)
          index · blog/ · blog/[slug] · rss.xml   index · blog/ · blog/[slug] · rss.xml
                    │                                       │
                    └───────────────────┬───────────────────┘
                                        ▼
                                 astro build → dist/
                   HTML + inline CSS · AVIF/WebP · sitemap · RSS · robots.txt
```

## PageSpeed (Lighthouse, mobile)

Emulacja Moto G Power, throttling 4× CPU i wolne 4G. Po 3 przebiegi na stronę, wszystkie z tym samym wynikiem.

| Strona                                | Performance | Accessibility | Best Practices | SEO |
| ------------------------------------- | :---------: | :-----------: | :------------: | :-: |
| `/`                                   |     100     |      100      |      100       | 100 |
| `/pl/`                                |     100     |      100      |      100       | 100 |
| `/pl/blog/`                           |     100     |      100      |      100       | 100 |
| `/blog/private-discord-alternative/`  |     100     |      100      |      100       | 100 |

```
Core Web Vitals (mobile)

LCP   1.2 s   ██████░░░░░░░░░░░░░░  próg „dobry”: ≤ 2.5 s
TBT   0 ms    ░░░░░░░░░░░░░░░░░░░░  próg „dobry”: ≤ 200 ms
CLS   0       ░░░░░░░░░░░░░░░░░░░░  próg „dobry”: ≤ 0.1
FCP   0.8 s   ████░░░░░░░░░░░░░░░░  próg „dobry”: ≤ 1.8 s
```

Co to daje:

- **CSS inline** (`build.inlineStylesheets: 'always'`) — żadnego zasobu blokującego renderowanie
- **zero JS frameworków** — menu mobilne na Popover API, jedyny skrypt to kilka linii domykających menu
- **obrazy AVIF/WebP** w kilku szerokościach; hero z art direction (telefon na mobile, desktop od tabletu), `fetchpriority="high"`
- **font** — jeden plik variable na zestaw znaków, `preload` + fallback z dopasowanymi metrykami (CLS = 0)
- **`content-visibility: auto`** dla sekcji poniżej pierwszego ekranu — TBT spadło z 260 ms do 0 ms
- `backdrop-filter` nagłówka tylko od tabletu, lżejsze cienie na mobile

## SEO

```
Każda strona                         Wpis na blogu
├─ <title> + meta description        ├─ og:type = article + article:*
├─ canonical                         ├─ JSON-LD: BlogPosting
├─ hreflang en-US / pl-PL / x-default├─ JSON-LD: BreadcrumbList
├─ Open Graph + Twitter Card         ├─ link do tłumaczenia (hreflang)
├─ og:image 1200×630                 └─ czas czytania, linki wewnętrzne
└─ JSON-LD: WebSite, Organization

Strona główna                        Globalnie
├─ JSON-LD: SoftwareApplication      ├─ sitemap z alternatywami językowymi
└─ JSON-LD: FAQPage                  ├─ robots.txt → sitemap
                                     ├─ RSS: /rss.xml, /pl/rss.xml
                                     └─ manifest + ikony (PWA-ready)
```

Frazy docelowe (EN): `private discord alternative`, `encrypted discord alternative`, `end-to-end encrypted voice chat`, `mls protocol explained`, `push to talk cuts off first word`, `safety numbers explained`.

Schema wpisów pilnuje długości: `title` ≤ 70 znaków, `description` 70–170 — za długi opis przerwie build.

## Struktura

```
src/
├─ i18n/ui.ts           teksty interfejsu EN + PL (te same klucze w obu)
├─ content/blog/en|pl/  wpisy; translationKey łączy tłumaczenia
├─ views/               Home, BlogIndex, BlogPost — wspólne dla obu języków
├─ pages/  pages/pl/    routing; tylko wywołuje widoki
├─ components/          sekcje strony i elementy wspólne
├─ layouts/Base.astro   <head>: SEO, hreflang, OG, JSON-LD, preload fontu
├─ lib/                 blog (kolekcja, tłumaczenia, czas czytania), RSS
├─ site.ts              linki i identyfikatory sekcji
└─ styles/global.css    tokeny kolorów (akcent: --accent)
```

## Do uzupełnienia

- domena — `SITE_URL` przy buildzie (domyślnie `https://interpaste.dev`); od niej zależą canonical, hreflang, OG, RSS i sitemap
- prawdziwe linki pobierania i logowania — `LINKS` w `src/site.ts`
- odpowiedzi FAQ oznaczone `[TBD]` / `[DO USTALENIA]`
- angielskie zrzuty aplikacji w `src/assets/` dla wersji EN
