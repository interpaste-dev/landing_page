import type { Lang } from './ui';

// Adresy podstron w obu językach. Polskie mają polskie slugi (lepsze pod SEO w PL),
// więc alternatywy językowe (hreflang, przełącznik) biorą się stąd, a nie z podmiany prefiksu.
export const ROUTES = {
  home: { en: '/', pl: '/pl/' },
  security: { en: '/security/', pl: '/pl/bezpieczenstwo/' },
  download: { en: '/download/', pl: '/pl/pobierz/' },
  gamers: { en: '/for-gamers/', pl: '/pl/dla-graczy/' },
  changelog: { en: '/changelog/', pl: '/pl/nowosci/' },
  blog: { en: '/blog/', pl: '/pl/blog/' },
  help: { en: '/help/', pl: '/pl/pomoc/' },
  selfhost: { en: '/self-hosting/', pl: '/pl/wlasny-serwer/' },
  tui: { en: '/terminal-client/', pl: '/pl/klient-terminalowy/' },
  vsDiscord: { en: '/vs-discord/', pl: '/pl/porownanie-z-discordem/' },
  privacy: { en: '/privacy/', pl: '/pl/prywatnosc/' },
  terms: { en: '/terms/', pl: '/pl/regulamin/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof ROUTES;

export const route = (lang: Lang, key: RouteKey) => ROUTES[key][lang];

/** Odnośnik do sekcji strony głównej, np. home('pl', 'features') → '/pl/#features'. */
export const homeAnchor = (lang: Lang, id: string) => `${ROUTES.home[lang]}#${id}`;
