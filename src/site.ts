// Stałe dane strony, niezależne od języka. Teksty są w src/i18n/ui.ts.
export const SITE = {
  name: 'Komunikator',
  themeColor: '#121111',
  ogImage: '/og.png',
};

// TODO: podmienić na prawdziwe adresy, gdy będą gotowe.
export const LINKS = {
  login: '#download',
  register: '#download',
  windows: '#download',
  linux: '#download',
  android: '#download',
  source: 'https://github.com/interpaste-dev',
  terms: '#',
  privacy: '#',
  contact: '#',
  status: '#',
};

// Identyfikatory sekcji strony głównej — te same w obu językach, żeby linki się nie rozjeżdżały.
export const SECTION = {
  features: 'features',
  security: 'security',
  mobile: 'mobile',
  download: 'download',
  news: 'news',
  faq: 'faq',
} as const;
