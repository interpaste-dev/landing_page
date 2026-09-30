// Stałe dane strony, niezależne od języka. Teksty są w src/i18n/, adresy podstron w src/i18n/routes.ts.
export const SITE = {
  name: 'Komunikator',
  themeColor: '#121111',
  ogImage: '/og.png',
  version: '0.1.0',
};

// TODO: podmienić na prawdziwe adresy, gdy będą gotowe.
export const LINKS = {
  source: 'https://github.com/interpaste-dev',
  files: {
    windows: '#',
    linux: '#',
    macos: '#',
    tui: '#',
    olderVersions: '#',
  },
  status: '#',
  supportEmail: 'support@[DOMENA]',
  securityEmail: 'security@[DOMENA]',
};

// Identyfikatory sekcji strony głównej — te same w obu językach.
export const SECTION = {
  features: 'features',
  security: 'security',
  mobile: 'mobile',
  download: 'download',
  news: 'news',
  faq: 'faq',
} as const;
