# Komunikator — landing page

Strona produktowa, blog i centrum pomocy komunikatora. Statyczny build w Astro, dwa języki (EN/PL), bez frameworków JS po stronie klienta.

```
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview
npm run check     # typy i diagnostyka Astro
```

## Stack

| Warstwa     | Technologia                                            |
| ----------- | ------------------------------------------------------ |
| Framework   | Astro 7 (statyczny output)                             |
| Język       | TypeScript (strict), `astro check`                     |
| Treści      | Astro Content Collections (Markdown + schema Zod)      |
| i18n        | Astro i18n — `en` pod `/`, `pl` pod `/pl/`, polskie slugi |
| Obrazy      | `astro:assets` + sharp → AVIF / WebP, `srcset`         |
| Font        | Figtree Variable (self-hosted, `@fontsource-variable`) |
| SEO         | `@astrojs/sitemap`, `@astrojs/rss`, JSON-LD            |
| Style       | CSS scoped w komponentach + tokeny w `global.css`      |
| JS klienta  | tylko drobne skrypty inline (menu, wykrycie systemu, szukajka pomocy) |
| Hosting     | Cloudflare Pages (`public/_headers`)                   |

## Strony

| EN                         | PL                               | Co to jest                                   |
| -------------------------- | -------------------------------- | -------------------------------------------- |
| `/`                        | `/pl/`                           | strona główna                                |
| `/for-gamers/`             | `/pl/dla-graczy/`                | podstrona SEO dla graczy + FAQ               |
| `/security/`               | `/pl/bezpieczenstwo/`            | MLS, model zagrożeń, weryfikacja, audyt      |
| `/download/`               | `/pl/pobierz/`                   | pobieranie, sumy SHA-256, wymagania, self-hosting |
| `/changelog/`              | `/pl/nowosci/`                   | lista zmian + RSS                            |
| `/blog/`, `/blog/<slug>/`  | `/pl/blog/`, `/pl/blog/<slug>/`  | blog (4 wpisy w każdym języku) + RSS         |
| `/help/`, `/help/<slug>/`  | `/pl/pomoc/`, `/pl/pomoc/<slug>/`| centrum pomocy z wyszukiwarką (6 artykułów)  |

## Architektura

```
      src/i18n/ui.ts · src/i18n/pages/*.ts        src/i18n/routes.ts
      teksty EN + PL                              adresy EN ↔ PL (hreflang)
                    │                                       │
 src/content/                                               │      src/assets/*.png
  ├─ blog/{en,pl}/*.md ──┐                                  │            │
  └─ help/{en,pl}/*.md ──┤                                  │            │
                         ▼                                  ▼            ▼
              ┌────────────────────┐        ┌──────────────────────────────────────┐
              │ src/lib/           │───────▶│ src/views/                           │
              │  blog · help · rss │        │  Home · Gamers · Security · Download │
              │  changelog-rss·seo │        │  Changelog · BlogIndex · BlogPost    │
              └────────────────────┘        │  HelpCenter · HelpArticle            │
                                            └──────────────────┬───────────────────┘
                                                               │ używane przez
                                   ┌───────────────────────────┴───────────────┐
                                   ▼                                           ▼
                          src/pages/  (EN, /)                         src/pages/pl/  (PL)
                                   └───────────────────────┬───────────────────┘
                                                           ▼
                                                   astro build → dist/
                          HTML + inline CSS · AVIF/WebP · sitemap · 4× RSS · robots.txt · _headers
```

## PageSpeed (Lighthouse, mobile)

Emulacja Moto G Power, throttling 4× CPU i wolne 4G.

| Strona                                   | Performance | Accessibility | Best Practices | SEO |
| ---------------------------------------- | :---------: | :-----------: | :------------: | :-: |
| `/`                                      |     100     |      100      |      100       | 100 |
| `/pl/`                                   |     100     |      100      |      100       | 100 |
| `/for-gamers/`                           |     100     |      100      |      100       | 100 |
| `/security/`                             |     100     |      100      |      100       | 100 |
| `/pl/pobierz/`                           |     100     |      100      |      100       | 100 |
| `/pl/nowosci/`                           |     100     |      100      |      100       | 100 |
| `/help/`                                 |     100     |      100      |      100       | 100 |
| `/pl/pomoc/przywracanie-konta-z-kopii/`  |     100     |      100      |      100       | 100 |
| `/pl/blog/`                              |     100     |      100      |      100       | 100 |
| `/blog/private-discord-alternative/`     |     100     |      100      |      100       | 100 |

```
Core Web Vitals (mobile)

LCP   1.2 s   ██████░░░░░░░░░░░░░░  próg „dobry”: ≤ 2.5 s
TBT   0 ms    ░░░░░░░░░░░░░░░░░░░░  próg „dobry”: ≤ 200 ms
CLS   0       ░░░░░░░░░░░░░░░░░░░░  próg „dobry”: ≤ 0.1
FCP   0.8 s   ████░░░░░░░░░░░░░░░░  próg „dobry”: ≤ 1.8 s
```

Co to daje:

- **CSS inline** (`build.inlineStylesheets: 'always'`) — żadnego zasobu blokującego renderowanie
- **bez frameworków JS** — menu mobilne na Popover API; poza tym tylko małe skrypty inline tam, gdzie są potrzebne
- **obrazy AVIF/WebP** w kilku szerokościach; hero z art direction (telefon na mobile, desktop od tabletu), `fetchpriority="high"` dla obrazu LCP
- **font** — jeden plik variable na zestaw znaków, `preload` + fallback z dopasowanymi metrykami (CLS = 0)
- **`content-visibility: auto`** dla sekcji poniżej pierwszego ekranu — TBT spadło z 260 ms do 0 ms
- `backdrop-filter` nagłówka tylko od tabletu, lżejsze cienie na mobile
- **cache** — `/_astro/*` z `immutable` na rok (`public/_headers`)

## SEO

```
Każda strona                          Wpis na blogu
├─ <title> + meta description         ├─ og:type = article + article:*
├─ canonical                          ├─ JSON-LD: BlogPosting + BreadcrumbList
├─ hreflang en-US / pl-PL / x-default └─ link do tłumaczenia, czas czytania
├─ Open Graph + Twitter Card
├─ og:image 1200×630                  Artykuł pomocy
└─ JSON-LD: WebSite, Organization     ├─ JSON-LD: TechArticle + BreadcrumbList
                                      └─ okruszki, boczne menu tematów
Podstrony
├─ główna      SoftwareApplication, FAQPage
├─ dla graczy  FAQPage, BreadcrumbList
├─ pobierz     SoftwareApplication, BreadcrumbList
├─ bezpiecz.   WebPage, BreadcrumbList
├─ nowości     ItemList, BreadcrumbList
└─ pomoc       CollectionPage, BreadcrumbList

Globalnie
├─ sitemap z alternatywami językowymi   ├─ RSS: blog EN/PL, lista zmian EN/PL
├─ robots.txt → sitemap                 └─ manifest + ikony
```

Frazy docelowe (EN): `private discord alternative`, `voice chat for gamers`, `end-to-end encrypted voice chat`, `mls protocol explained`, `push to talk cuts off first word`, `safety numbers explained`.

Schema pilnuje długości: `title` ≤ 70 znaków, `description` 70–170 — za długi opis przerwie build.

## Struktura

```
src/
├─ i18n/
│  ├─ ui.ts             teksty wspólne EN + PL (te same klucze w obu)
│  ├─ pages/*.ts        teksty podstron (security, download, gamers, changelog, help)
│  └─ routes.ts         adresy podstron w obu językach
├─ content/
│  ├─ blog/en|pl/       wpisy; translationKey łączy tłumaczenia
│  └─ help/en|pl/       artykuły pomocy; lista numerowana = kroki, cytat = ostrzeżenie
├─ views/               widoki wspólne dla obu języków
├─ pages/  pages/pl/    routing; tylko wywołuje widoki
├─ components/          sekcje strony i elementy wspólne
├─ layouts/Base.astro   <head>: SEO, hreflang, OG, JSON-LD, preload fontu
├─ lib/                 blog, help, RSS, helpery JSON-LD
├─ site.ts              linki (pliki, e-maile) i identyfikatory sekcji
└─ styles/global.css    tokeny kolorów (akcent: --accent)
```

Nowe wydanie: dopisz je na górze `releases` w `src/i18n/pages/changelog.ts` — lista zmian, RSS i karta na stronie głównej zaktualizują się same.

## Deploy — Cloudflare Pages

| Ustawienie           | Wartość            |
| -------------------- | ------------------ |
| Framework preset     | Astro              |
| Build command        | `npm run build`    |
| Output directory     | `dist`             |
| `NODE_VERSION`       | `22`               |
| `SITE_URL`           | docelowa domena, np. `https://interpaste.dev` |

`public/_headers` ustawia cache i nagłówki bezpieczeństwa. Rocket Loader zostaw wyłączony.

## Do uzupełnienia

- domena — `SITE_URL` przy buildzie (domyślnie `https://interpaste.dev`); od niej zależą canonical, hreflang, OG, RSS i sitemap
- pliki do pobrania, instrukcja self-hostingu, regulamin, prywatność, status — `LINKS` w `src/site.ts`
- e-maile `support@` i `security@`, rozmiary plików, sumy SHA-256, ID klucza podpisu, obraz serwera
- wartości oznaczone `[TBD]` / `[DO USTALENIA]` (FAQ, audyt, pomiary CPU i opóźnienia, tryby serwera)
- angielskie zrzuty aplikacji w `src/assets/` dla wersji EN
