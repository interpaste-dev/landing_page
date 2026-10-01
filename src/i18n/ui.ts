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
      'Private voice and text chat for gaming teams and friends. End-to-end encrypted with MLS, encrypted voice and screen sharing, desktop and terminal apps. Free.',
    ogAlt: 'Komunikator — servers, chat and voice. Just for you.',
  },
  a11y: { skip: 'Skip to content', openMenu: 'Open menu', closeMenu: 'Close menu', home: 'home page', language: 'Language', breadcrumb: 'Breadcrumb', homeCrumb: 'Home', mainMenu: 'Main menu', mobileMenu: 'Mobile menu', notFound: 'Page not found', notFoundText: 'This page doesn’t exist or has moved.' },
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
    pill: 'Screen and camera sharing, end-to-end encrypted',
    titleA: 'Servers, chat and voice.',
    titleB: 'Just for you.',
    sub: 'A chat app for gaming teams and friends where the server can’t read a single message. Native, fast and free.',
    ctaWindows: 'Download for Windows',
    ctaAndroid: 'Download Komunikator',
    ctaWeb: 'How encryption works',
    perks: ['No phone number', 'Windows · macOS · Linux', 'Self-hostable', 'Terminal client'],
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
      { title: 'Encrypted voice and video', text: 'Voice channels, calls, screen and camera sharing — encrypted with SFrame. Noise suppression and echo cancellation.' },
      { title: 'Native and light', text: 'A GPU-drawn Qt Quick interface — no browser inside. Long histories scroll smoothly.' },
      { title: 'Terminal client too', text: 'A full TUI client with the same encryption. Works in any terminal and over SSH.' },
      { title: 'Make it yours', text: 'Themes, accent colour, density and custom contact names. All stored locally.' },
      { title: 'Device verification', text: 'Safety numbers for every conversation. We warn you when someone’s key changes.' },
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
    eyebrow: 'On your phone · coming soon',
    titleA: 'Game on PC,',
    titleB: 'chat in your pocket.',
    lead: 'Mobile apps are in development. Multiple devices already work on desktop: every device has its own keys, and you can log out a lost one from another.',
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
      windows: { meta: 'Windows 10 and 11 · one .exe file', cta: 'Download' },
      linux: { meta: 'x86-64 · one executable', cta: 'Download' },
      macos: { meta: 'one executable', cta: 'Download' },
      mobile: { meta: 'Android and iOS in development' },
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
        q: 'What if I lose my laptop or phone?',
        a: 'Log it out from another device in Settings › Devices — it’s removed from your account and your groups. Your other devices keep working.',
      },
      { q: 'Can I move my server over from Discord?', a: '[TBD — importing channels and roles]' },
      { q: 'How much does it cost?', a: 'The app is free. [TBD — optional paid server hosting]' },
      { q: 'Can I run my own server?', a: 'Yes. The server runs in Docker; enter its address under Advanced when you log in. Encryption works exactly the same.' },
    ],
  },
  footer: {
    about: 'A private chat app for gaming teams and friends. End-to-end encrypted with MLS.',
    product: 'Product',
    resources: 'Resources',
    info: 'Info',
    helpCenter: 'Help center',
    tui: 'Terminal client',
    selfhost: 'Self-hosting',
    vsDiscord: 'Komunikator vs Discord',
    terms: 'Terms',
    privacy: 'Privacy',
    contact: 'Contact',
    status: 'Server status',
    rights: 'end-to-end encrypted with MLS',
  },
  blog: {
    title: 'Blog',
    metaTitle: 'Blog — encryption, voice chat and privacy for gamers | Komunikator',
    description:
      'Guides on end-to-end encryption, the MLS protocol, voice chat and privacy for gaming teams. Written without jargon.',
    lead: 'Encryption, voice chat and privacy — explained without jargon.',
    readMore: 'Read more',
    minRead: 'min read',
    updated: 'Updated',
    back: 'All posts',
    related: 'Keep reading',
    ctaTitle: 'Try Komunikator',
    ctaText: 'Free and end-to-end encrypted. No phone number needed.',
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
      'Prywatny komunikator dla drużyn i znajomych. Szyfrowanie end-to-end (MLS), szyfrowany głos i udostępnianie ekranu, aplikacja na komputer i terminal. Za darmo.',
    ogAlt: 'Komunikator — serwery, czat i głos. Tylko dla was.',
  },
  a11y: { skip: 'Przejdź do treści', openMenu: 'Otwórz menu', closeMenu: 'Zamknij menu', home: 'strona główna', language: 'Język', breadcrumb: 'Okruszki', homeCrumb: 'Strona główna', mainMenu: 'Menu główne', mobileMenu: 'Menu mobilne', notFound: 'Nie ma takiej strony', notFoundText: 'Ta strona nie istnieje albo została przeniesiona.' },
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
    pill: 'Udostępnianie ekranu i kamery, szyfrowane end-to-end',
    titleA: 'Serwery, czat i głos.',
    titleB: 'Tylko dla was.',
    sub: 'Komunikator dla drużyn i znajomych, w którym serwer nie może przeczytać ani jednej wiadomości. Natywny, szybki i darmowy.',
    ctaWindows: 'Pobierz na Windows',
    ctaAndroid: 'Pobierz Komunikator',
    ctaWeb: 'Jak działa szyfrowanie',
    perks: ['Bez numeru telefonu', 'Windows · macOS · Linux', 'Własny serwer', 'Klient w terminalu'],
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
      { title: 'Szyfrowany głos i obraz', text: 'Kanały głosowe, rozmowy, udostępnianie ekranu i kamery — szyfrowane SFrame. Redukcja szumów i usuwanie echa.' },
      { title: 'Natywny i lekki', text: 'Interfejs Qt Quick rysowany na GPU — bez przeglądarki w środku. Długa historia przewija się płynnie.' },
      { title: 'Także w terminalu', text: 'Pełny klient TUI z tym samym szyfrowaniem. Działa w każdym terminalu i przez SSH.' },
      { title: 'Twój wygląd', text: 'Motywy, kolor akcentu, gęstość i własne nazwy kontaktów. Zostają lokalnie.' },
      { title: 'Weryfikacja urządzeń', text: 'Numer bezpieczeństwa dla każdej rozmowy. Ostrzeżemy, gdy czyjś klucz się zmieni.' },
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
    eyebrow: 'Na telefonie · wkrótce',
    titleA: 'Gra na PC,',
    titleB: 'rozmowa w kieszeni.',
    lead: 'Aplikacje mobilne są w przygotowaniu. Wiele urządzeń działa już na komputerach: każde ma własne klucze, a zgubione wylogujesz z innego.',
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
      windows: { meta: 'Windows 10 i 11 · jeden plik .exe', cta: 'Pobierz' },
      linux: { meta: 'x86-64 · jeden plik', cta: 'Pobierz' },
      macos: { meta: 'jeden plik', cta: 'Pobierz' },
      mobile: { meta: 'Android i iOS w przygotowaniu' },
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
        q: 'Co jeśli zgubię laptopa albo telefon?',
        a: 'Wyloguj go z innego urządzenia w Ustawienia › Urządzenia — zniknie z konta i z Twoich grup. Pozostałe urządzenia działają dalej.',
      },
      { q: 'Czy mogę przenieść serwer z Discorda?', a: '[DO USTALENIA — import kanałów i ról]' },
      { q: 'Ile to kosztuje?', a: 'Aplikacja jest darmowa. [DO USTALENIA — ewentualny płatny hosting serwerów]' },
      { q: 'Czy mogę postawić własny serwer?', a: 'Tak. Serwer działa w Dockerze; jego adres podajesz przy logowaniu w „Zaawansowane”. Szyfrowanie działa tak samo.' },
    ],
  },
  footer: {
    about: 'Prywatny komunikator dla drużyn i znajomych. Szyfrowanie end-to-end MLS.',
    product: 'Produkt',
    resources: 'Zasoby',
    info: 'Informacje',
    helpCenter: 'Centrum pomocy',
    tui: 'Klient terminalowy',
    selfhost: 'Własny serwer',
    vsDiscord: 'Komunikator czy Discord',
    terms: 'Regulamin',
    privacy: 'Prywatność',
    contact: 'Kontakt',
    status: 'Status serwera',
    rights: 'szyfrowanie end-to-end MLS',
  },
  blog: {
    title: 'Blog',
    metaTitle: 'Blog — szyfrowanie, czat głosowy i prywatność dla graczy | Komunikator',
    description:
      'Poradniki o szyfrowaniu end-to-end, protokole MLS, czacie głosowym i prywatności dla drużyn. Bez żargonu.',
    lead: 'Szyfrowanie, czat głosowy i prywatność — bez żargonu.',
    readMore: 'Czytaj dalej',
    minRead: 'min czytania',
    updated: 'Zaktualizowano',
    back: 'Wszystkie wpisy',
    related: 'Czytaj dalej',
    ctaTitle: 'Wypróbuj Komunikator',
    ctaText: 'Za darmo i z szyfrowaniem end-to-end. Bez numeru telefonu.',
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
