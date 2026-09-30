// Wszystkie teksty interfejsu w obu językach. Angielski jest domyślny (serwowany z `/`),
// polski spod `/pl/`. Klucze muszą być takie same w obu słownikach — TypeScript tego pilnuje.

export const LANGS = ['en', 'pl'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

export const LOCALE: Record<Lang, { og: string; intl: string; label: string; short: string }> = {
  en: { og: 'en_US', intl: 'en-US', label: 'English', short: 'EN' },
  pl: { og: 'pl_PL', intl: 'pl-PL', label: 'Polski', short: 'PL' },
};

/** Ścieżka w danym języku: localePath('pl', '/blog/') → '/pl/blog/'. */
export function localePath(lang: Lang, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === DEFAULT_LANG ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}

export function formatDate(lang: Lang, date: Date) {
  return new Intl.DateTimeFormat(LOCALE[lang].intl, { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}

const en = {
  meta: {
    title: 'Komunikator — private Discord alternative with end-to-end encryption',
    description:
      'Private voice and text chat for gaming teams and friends. End-to-end encrypted with MLS, low-latency voice, in-game overlay, ~40 MB RAM. Free and open source.',
    ogAlt: 'Komunikator — servers, chat and voice. Just for you.',
  },
  a11y: { skip: 'Skip to content', openMenu: 'Open menu', closeMenu: 'Close menu', home: 'home page', language: 'Language', breadcrumb: 'Breadcrumb', homeCrumb: 'Home' },
  nav: {
    features: 'Features',
    gamers: 'For gamers',
    security: 'Security',
    mobile: 'Mobile',
    blog: 'Blog',
    help: 'Help',
    changelog: 'Changelog',
    faq: 'FAQ',
    download: 'Download',
    login: 'Log in',
    register: 'Sign up',
  },
  hero: {
    pillTag: 'New',
    pill: '1440p · 60 FPS screen sharing, encrypted too',
    titleA: 'Servers, chat and voice.',
    titleB: 'Just for you.',
    sub: 'A chat app for gaming teams and friends where the server can’t read a single message. Lightweight, fast and open source.',
    ctaWindows: 'Download for Windows',
    ctaAndroid: 'Download for Android',
    ctaWeb: 'Sign up in your browser',
    perks: ['No phone number', 'Open source', 'Self-hostable', '~40 MB RAM'],
    shotAlt:
      'Komunikator desktop app: the “Ranked squad” server, #tactics channel with messages, voice channels and the list of people online',
    chipKeys: 'Group keys rotated',
    chipKeysSub: 'epoch 14 · MLS',
    chipTalking: 'Kuba is talking',
    chipTalkingSub: 'Lobby · 18 ms',
    chipServer: 'Server sees',
    chipVerified: '4 of 5 people verified',
  },
  features: {
    eyebrow: 'Features',
    title: 'Like Discord. But private.',
    lead: 'Everything you use every day — without handing your conversations to anyone.',
    items: [
      { title: 'Everything is encrypted', text: 'Messages, files, reactions and voice calls. Keys are created on your device.' },
      { title: 'Low-latency voice', text: 'Opus at 48 kHz, push-to-talk, noise suppression and 60 FPS screen sharing.' },
      { title: 'Lightweight client', text: 'About 40 MB of RAM. It won’t steal frames from your game and runs on older hardware.' },
      { title: 'In-game overlay', text: 'See who’s talking, reply quickly and get content-free notifications without alt-tabbing.' },
      { title: 'Make it yours', text: 'Themes, accent colour, density and custom contact names. All stored locally.' },
      { title: 'Device verification', text: 'Safety numbers and QR codes. We warn you when someone’s key changes.' },
    ],
  },
  security: {
    eyebrow: 'Security',
    title: 'The server only sees noise.',
    lead: 'Your message is encrypted before it leaves your computer. The server just relays it — it has no keys to open it.',
    flowLabel: 'How a message travels',
    you: 'Your device',
    youNote: 'encrypts with the group key',
    server: 'Server',
    serverNote: 'relays the ciphertext',
    friends: 'Your friends’ devices',
    friendsNote: 'decrypt locally',
    sample: '“game at 8?”',
    tableTitle: 'What our server can see',
    more: 'How we protect your conversations',
    rows: [
      { label: 'Message and file contents', verdict: 'can’t see', ok: true },
      { label: 'Voice calls', verdict: 'can’t hear', ok: true },
      { label: 'Channel names and topics', verdict: 'can’t see', ok: true },
      { label: 'Who is in a group and when they were online', verdict: 'sees (metadata)', ok: false },
    ],
  },
  devices: {
    eyebrow: 'On your phone',
    titleA: 'Game on PC,',
    titleB: 'chat in your pocket.',
    lead: 'The same servers and conversations on your phone. Every device has its own keys, so you can log out a lost phone with one click.',
    points: [
      { title: 'Content-free notifications', text: 'Your lock screen only shows that something arrived.' },
      { title: 'Fingerprint unlock', text: 'The local key store is encrypted with your PIN.' },
      { title: 'Join voice with one tap', text: 'Push-to-talk works on mobile too.' },
    ],
    altChats: 'Mobile app: list of servers and conversations',
    altVoice: 'Mobile app: voice channel with a push-to-talk button',
  },
  download: {
    eyebrow: 'Download',
    title: 'Get started in two minutes.',
    lead: 'Free. No ads. You can also run your own server.',
    platforms: {
      windows: { meta: 'Windows 10 and 11 · 64-bit', cta: 'Download .exe' },
      linux: { meta: 'AppImage · .deb', cta: 'Download' },
      android: { meta: 'Android 9+', cta: 'Download APK' },
      ios: { meta: 'in development' },
    },
    soon: 'Coming soon',
  },
  news: {
    eyebrow: 'News',
    title: 'What’s new',
    allPosts: 'All posts',
    changelog: 'Changelog',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'Can really nobody read my messages?',
        a: 'Message contents are encrypted with the MLS protocol on your device. The server only stores ciphertext and has no keys. It does see metadata: who is in a group and when they were online.',
      },
      {
        q: 'What if I lose my phone?',
        a: 'Log it out from your computer in Settings › Devices. If you lose every device, you can restore your account with your recovery phrase.',
      },
      { q: 'Can I move my server over from Discord?', a: '[TBD — importing channels and roles]' },
      { q: 'How much does it cost?', a: 'The app is free and open source. [TBD — optional paid server hosting]' },
      { q: 'Can I run my own server?', a: 'Yes. Enter its address when you log in and encryption works exactly the same.' },
    ],
  },
  footer: {
    about: 'A private chat app for gaming teams and friends. End-to-end encrypted with MLS.',
    product: 'Product',
    resources: 'Resources',
    info: 'Info',
    source: 'Source code',
    helpCenter: 'Help center',
    terms: 'Terms',
    privacy: 'Privacy',
    contact: 'Contact',
    status: 'Server status',
    rights: 'open source',
  },
  blog: {
    title: 'Blog',
    metaTitle: 'Blog — encryption, voice chat and privacy for gamers | Komunikator',
    description:
      'Guides on end-to-end encryption, the MLS protocol, push-to-talk and private voice chat for gaming teams. Written without jargon.',
    lead: 'Encryption, voice chat and privacy — explained without jargon.',
    readMore: 'Read more',
    minRead: 'min read',
    updated: 'Updated',
    back: 'All posts',
    related: 'Keep reading',
    ctaTitle: 'Try Komunikator',
    ctaText: 'Free, open source and end-to-end encrypted. No phone number needed.',
    ctaButton: 'Download for free',
    rss: 'RSS feed',
    categories: { security: 'Security', gaming: 'For gamers', product: 'Product' },
  },
};

type Dict = typeof en;

const pl: Dict = {
  meta: {
    title: 'Komunikator — prywatne serwery, czat i głos z szyfrowaniem E2E',
    description:
      'Prywatny komunikator dla drużyn i znajomych. Szyfrowanie end-to-end (MLS), głos z niskim opóźnieniem, overlay w grze, ~40 MB RAM. Za darmo i open source.',
    ogAlt: 'Komunikator — serwery, czat i głos. Tylko dla was.',
  },
  a11y: { skip: 'Przejdź do treści', openMenu: 'Otwórz menu', closeMenu: 'Zamknij menu', home: 'strona główna', language: 'Język', breadcrumb: 'Okruszki', homeCrumb: 'Strona główna' },
  nav: {
    features: 'Funkcje',
    gamers: 'Dla graczy',
    security: 'Bezpieczeństwo',
    mobile: 'Na telefonie',
    blog: 'Blog',
    help: 'Pomoc',
    changelog: 'Nowości',
    faq: 'FAQ',
    download: 'Pobierz',
    login: 'Zaloguj',
    register: 'Załóż konto',
  },
  hero: {
    pillTag: 'Nowość',
    pill: 'Udostępnianie ekranu 1440p · 60 FPS, też szyfrowane',
    titleA: 'Serwery, czat i głos.',
    titleB: 'Tylko dla was.',
    sub: 'Komunikator dla drużyn i znajomych, w którym serwer nie może przeczytać ani jednej wiadomości. Lekki, szybki i otwarty.',
    ctaWindows: 'Pobierz na Windows',
    ctaAndroid: 'Pobierz na Androida',
    ctaWeb: 'Załóż konto w przeglądarce',
    perks: ['Bez numeru telefonu', 'Open source', 'Własny serwer', '~40 MB RAM'],
    shotAlt:
      'Okno aplikacji Komunikator: serwer „Drużyna ranked”, kanał #taktyka z wiadomościami, kanały głosowe i lista osób online',
    chipKeys: 'Klucze grupy odświeżone',
    chipKeysSub: 'epoka 14 · MLS',
    chipTalking: 'Kuba mówi',
    chipTalkingSub: 'Lobby · 18 ms',
    chipServer: 'Serwer widzi',
    chipVerified: 'Zweryfikowano 4 z 5 osób',
  },
  features: {
    eyebrow: 'Funkcje',
    title: 'Jak Discord. Tylko prywatnie.',
    lead: 'Wszystko, czego używacie na co dzień — bez oddawania treści rozmów komukolwiek.',
    items: [
      { title: 'Szyfrowanie wszystkiego', text: 'Wiadomości, pliki, reakcje i rozmowy głosowe. Klucze powstają na Twoim urządzeniu.' },
      { title: 'Głos z niskim opóźnieniem', text: 'Opus 48 kHz, push-to-talk, redukcja szumów i udostępnianie ekranu w 60 FPS.' },
      { title: 'Lekki klient', text: 'Około 40 MB RAM. Nie zabiera klatek w grze i działa na starszym sprzęcie.' },
      { title: 'Overlay w grze', text: 'Kto mówi, szybka odpowiedź i powiadomienia bez treści — bez wychodzenia z gry.' },
      { title: 'Twój wygląd', text: 'Motywy, kolor akcentu, gęstość i własne nazwy kontaktów. Zostają lokalnie.' },
      { title: 'Weryfikacja urządzeń', text: 'Numery bezpieczeństwa i kod QR. Ostrzeżemy, gdy czyjś klucz się zmieni.' },
    ],
  },
  security: {
    eyebrow: 'Bezpieczeństwo',
    title: 'Serwer widzi tylko szum.',
    lead: 'Wiadomość jest szyfrowana, zanim opuści Twój komputer. Serwer tylko ją przekazuje — nie ma kluczy, żeby ją otworzyć.',
    flowLabel: 'Droga wiadomości',
    you: 'Twoje urządzenie',
    youNote: 'szyfruje kluczem grupy',
    server: 'Serwer',
    serverNote: 'przekazuje szyfrogram',
    friends: 'Urządzenia znajomych',
    friendsNote: 'odszyfrowują lokalnie',
    sample: '„o 20 gramy?”',
    tableTitle: 'Co widzi nasz serwer',
    more: 'Jak chronimy Wasze rozmowy',
    rows: [
      { label: 'Treść wiadomości i plików', verdict: 'nie widzi', ok: true },
      { label: 'Rozmowy głosowe', verdict: 'nie słyszy', ok: true },
      { label: 'Nazwy kanałów i opisy', verdict: 'nie widzi', ok: true },
      { label: 'Kto jest w grupie i kiedy był online', verdict: 'widzi (metadane)', ok: false },
    ],
  },
  devices: {
    eyebrow: 'Na telefonie',
    titleA: 'Gra na PC,',
    titleB: 'rozmowa w kieszeni.',
    lead: 'Te same serwery i rozmowy na telefonie. Każde urządzenie ma własne klucze, więc zgubiony telefon wylogujesz jednym kliknięciem.',
    points: [
      { title: 'Powiadomienia bez treści', text: 'Na ekranie blokady widać tylko, że coś przyszło.' },
      { title: 'Odblokowanie odciskiem palca', text: 'Lokalna baza kluczy jest zaszyfrowana PIN-em.' },
      { title: 'Dołączanie do głosu jednym dotknięciem', text: 'Push-to-talk także na telefonie.' },
    ],
    altChats: 'Aplikacja mobilna: lista serwerów i rozmów',
    altVoice: 'Aplikacja mobilna: kanał głosowy z przyciskiem push-to-talk',
  },
  download: {
    eyebrow: 'Pobierz',
    title: 'Zacznij w dwie minuty.',
    lead: 'Za darmo. Bez reklam. Możesz też postawić własny serwer.',
    platforms: {
      windows: { meta: 'Windows 10 i 11 · 64-bit', cta: 'Pobierz .exe' },
      linux: { meta: 'AppImage · .deb', cta: 'Pobierz' },
      android: { meta: 'Android 9+', cta: 'Pobierz APK' },
      ios: { meta: 'w przygotowaniu' },
    },
    soon: 'Wkrótce',
  },
  news: {
    eyebrow: 'Nowości',
    title: 'Co nowego',
    allPosts: 'Wszystkie wpisy',
    changelog: 'Lista zmian',
  },
  faq: {
    title: 'Częste pytania',
    items: [
      {
        q: 'Czy naprawdę nikt nie przeczyta moich wiadomości?',
        a: 'Treść szyfrujemy protokołem MLS na Twoim urządzeniu. Serwer przechowuje tylko szyfrogramy i nie ma kluczy. Widzi natomiast metadane: kto jest w grupie i kiedy był online.',
      },
      {
        q: 'Co jeśli zgubię telefon?',
        a: 'Wyloguj go z komputera w Ustawienia › Urządzenia. Jeśli stracisz wszystkie urządzenia, konto odtworzysz frazą odzyskiwania.',
      },
      { q: 'Czy mogę przenieść serwer z Discorda?', a: '[DO USTALENIA — import kanałów i ról]' },
      { q: 'Ile to kosztuje?', a: 'Aplikacja jest darmowa i open source. [DO USTALENIA — ewentualny płatny hosting serwerów]' },
      { q: 'Czy mogę postawić własny serwer?', a: 'Tak. Podajesz jego adres przy logowaniu, a szyfrowanie działa tak samo.' },
    ],
  },
  footer: {
    about: 'Prywatny komunikator dla drużyn i znajomych. Szyfrowanie end-to-end MLS.',
    product: 'Produkt',
    resources: 'Zasoby',
    info: 'Informacje',
    source: 'Kod źródłowy',
    helpCenter: 'Centrum pomocy',
    terms: 'Regulamin',
    privacy: 'Prywatność',
    contact: 'Kontakt',
    status: 'Status serwera',
    rights: 'open source',
  },
  blog: {
    title: 'Blog',
    metaTitle: 'Blog — szyfrowanie, czat głosowy i prywatność dla graczy | Komunikator',
    description:
      'Poradniki o szyfrowaniu end-to-end, protokole MLS, push-to-talk i prywatnym czacie głosowym dla drużyn. Bez żargonu.',
    lead: 'Szyfrowanie, czat głosowy i prywatność — bez żargonu.',
    readMore: 'Czytaj dalej',
    minRead: 'min czytania',
    updated: 'Zaktualizowano',
    back: 'Wszystkie wpisy',
    related: 'Czytaj dalej',
    ctaTitle: 'Wypróbuj Komunikator',
    ctaText: 'Za darmo, open source i z szyfrowaniem end-to-end. Bez numeru telefonu.',
    ctaButton: 'Pobierz za darmo',
    rss: 'Kanał RSS',
    categories: { security: 'Bezpieczeństwo', gaming: 'Dla graczy', product: 'Produkt' },
  },
};

export const ui: Record<Lang, Dict> = { en, pl };

export function useT(lang: Lang) {
  return ui[lang];
}

export function getLang(currentLocale: string | undefined): Lang {
  return (LANGS as readonly string[]).includes(currentLocale ?? '') ? (currentLocale as Lang) : DEFAULT_LANG;
}
