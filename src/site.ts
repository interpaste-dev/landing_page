// Wspólne dane strony: nazwa, linki, opisy. Zmieniasz tu — zmienia się wszędzie.
export const SITE = {
  name: 'Komunikator',
  title: 'Komunikator — prywatne serwery, czat i głos z szyfrowaniem E2E',
  description:
    'Prywatny komunikator dla drużyn i znajomych. Szyfrowanie end-to-end (MLS), głos z niskim opóźnieniem, overlay w grze, ~40 MB RAM. Za darmo i open source.',
  locale: 'pl_PL',
  lang: 'pl',
  themeColor: '#121111',
  ogImage: '/og.png',
  ogImageAlt: 'Komunikator — serwery, czat i głos. Tylko dla was.',
};

// TODO: podmienić na prawdziwe adresy, gdy będą gotowe.
export const LINKS = {
  login: '#pobierz',
  register: '#pobierz',
  windows: '#pobierz',
  linux: '#pobierz',
  android: '#pobierz',
  source: 'https://github.com/interpaste-dev',
  terms: '#',
  privacy: '#',
  contact: '#',
  status: '#',
};

export const NAV = [
  { label: 'Funkcje', href: '#funkcje' },
  { label: 'Bezpieczeństwo', href: '#bezpieczenstwo' },
  { label: 'Na telefonie', href: '#urzadzenia' },
  { label: 'Nowości', href: '#nowosci' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Pobierz', href: '#pobierz' },
];

export const FAQ = [
  {
    q: 'Czy naprawdę nikt nie przeczyta moich wiadomości?',
    a: 'Treść szyfrujemy protokołem MLS na Twoim urządzeniu. Serwer przechowuje tylko szyfrogramy i nie ma kluczy. Widzi natomiast metadane: kto jest w grupie i kiedy był online.',
  },
  {
    q: 'Co jeśli zgubię telefon?',
    a: 'Wyloguj go z komputera w Ustawienia › Urządzenia. Jeśli stracisz wszystkie urządzenia, konto odtworzysz frazą odzyskiwania.',
  },
  {
    q: 'Czy mogę przenieść serwer z Discorda?',
    a: '[DO USTALENIA — import kanałów i ról]',
  },
  {
    q: 'Ile to kosztuje?',
    a: 'Aplikacja jest darmowa i open source. [DO USTALENIA — ewentualny płatny hosting serwerów]',
  },
  {
    q: 'Czy mogę postawić własny serwer?',
    a: 'Tak. Podajesz jego adres przy logowaniu, a szyfrowanie działa tak samo.',
  },
];
