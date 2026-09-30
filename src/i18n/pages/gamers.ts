const en = {
  meta: {
    title: 'Voice chat for gamers that doesn’t cost FPS — encrypted & free',
    description:
      'Low-latency voice chat for gaming teams: push-to-talk, in-game overlay and end-to-end encrypted text channels. A lightweight, ad-free Discord alternative for gamers.',
  },
  crumb: 'For gamers',
  eyebrow: 'For gamers',
  title: 'Voice chat for your team that doesn’t cost FPS',
  lead: 'Voice channels with push-to-talk, an in-game overlay and end-to-end encrypted chat. A lightweight client in the background and zero ads.',
  cta: 'Download for free',
  ctaServer: 'Create a team server',
  overlayAlt: 'In-game overlay over Counter-Strike 2: who is talking in the Lobby, the #tactics channel and a content-free notification',
  builtTitle: 'Built for playing',
  built: [
    { icon: 'hand', title: 'Push-to-talk', text: 'Your own key, works in fullscreen. The buffer never cuts off your first words.' },
    { icon: 'gamepad', title: 'In-game overlay', text: 'See who’s talking, reply quickly and mute without leaving the game.' },
    { icon: 'bolt', title: 'Light in the background', text: 'A native interface with no browser inside. Little RAM and CPU.' },
    { icon: 'lock', title: 'Private', text: 'Tactics and conversations are end-to-end encrypted. The server only sees noise.' },
  ],
  perf: {
    title: 'Lighter when your game needs the resources',
    text: 'We measure resource usage during a match and publish the methodology. Results will be filled in after testing version 1.0.',
    link: 'How we measure',
    stats: [
      { value: '~40 MB', label: 'RAM in the background' },
      { value: '[X] %', label: 'CPU during a call' },
      { value: '[X] ms', label: 'voice latency in Europe' },
    ],
  },
  steps: {
    title: 'Your team on a server in 3 steps',
    items: [
      { title: 'Create an account', text: 'No phone number or email. Keys are created on your computer.' },
      { title: 'Create a server', text: 'The “Gaming team” template gives you general, tactics and Lobby channels right away.' },
      { title: 'Invite friends', text: 'Send a link. Every new member gets new group keys.' },
    ],
  },
  faqTitle: 'Gamer questions',
  faq: [
    { q: 'Does the overlay work with fullscreen games?', a: '[TBD — list of supported modes and games]' },
    { q: 'Does the push-to-talk key work while the game window is active?', a: 'Yes. The shortcut is global — set it in Settings › Keyboard shortcuts.' },
    { q: 'Does encryption add voice latency?', a: 'Frames are encrypted locally and very quickly. Latency depends mostly on your network and the distance to the server.' },
    { q: 'Can my clan have its own server?', a: 'Yes — the setup guide is on the <a href="{download}#self-hosting">Download</a> page.' },
  ],
  final: { title: 'Jump into the Lobby', text: 'Free, no ads, no phone number.', cta: 'Download for Windows' },
};

type Copy = typeof en;

const pl: Copy = {
  meta: {
    title: 'Komunikator głosowy dla graczy, który nie zabiera FPS',
    description:
      'Czat głosowy dla drużyn z niskim opóźnieniem: push-to-talk, overlay w grze i kanały tekstowe szyfrowane end-to-end. Lekka alternatywa dla Discorda bez reklam.',
  },
  crumb: 'Dla graczy',
  eyebrow: 'Dla graczy',
  title: 'Komunikator dla drużyny, który nie zabiera FPS',
  lead: 'Kanały głosowe z push-to-talk, overlay w grze i czat szyfrowany end-to-end. Lekki klient w tle i żadnych reklam.',
  cta: 'Pobierz za darmo',
  ctaServer: 'Załóż serwer drużyny',
  overlayAlt: 'Overlay nad grą Counter-Strike 2: kto mówi w Lobby, kanał #taktyka i powiadomienie bez treści',
  builtTitle: 'Zrobiony do grania',
  built: [
    { icon: 'hand', title: 'Push-to-talk', text: 'Własny klawisz, działa na pełnym ekranie. Bufor nie ucina pierwszych słów.' },
    { icon: 'gamepad', title: 'Overlay w grze', text: 'Kto mówi, szybka odpowiedź i wyciszenie bez wychodzenia z gry.' },
    { icon: 'bolt', title: 'Lekki w tle', text: 'Natywny interfejs bez przeglądarki w środku. Mało RAM-u i CPU.' },
    { icon: 'lock', title: 'Prywatnie', text: 'Taktyki i rozmowy szyfrowane end-to-end. Serwer widzi tylko szum.' },
  ],
  perf: {
    title: 'Lżejszy, gdy gra potrzebuje zasobów',
    text: 'Mierzymy zużycie w trakcie meczu i publikujemy metodologię. Wyniki uzupełnimy po testach na wersji 1.0.',
    link: 'Jak mierzymy',
    stats: [
      { value: '~40 MB', label: 'RAM w tle' },
      { value: '[X] %', label: 'CPU w trakcie rozmowy' },
      { value: '[X] ms', label: 'opóźnienie głosu w Europie' },
    ],
  },
  steps: {
    title: 'Drużyna na serwerze w 3 krokach',
    items: [
      { title: 'Załóż konto', text: 'Bez numeru telefonu i e-maila. Klucze powstają na Twoim komputerze.' },
      { title: 'Utwórz serwer', text: 'Szablon „Drużyna do gier” od razu daje kanały ogólny, taktyka i Lobby.' },
      { title: 'Zaproś znajomych', text: 'Wyślij link. Każdy nowy członek dostaje nowe klucze grupy.' },
    ],
  },
  faqTitle: 'Pytania graczy',
  faq: [
    { q: 'Czy overlay działa z grami na pełnym ekranie?', a: '[DO USTALENIA — lista wspieranych trybów i gier]' },
    { q: 'Czy klawisz push-to-talk działa, gdy okno gry jest aktywne?', a: 'Tak. Skrót jest globalny i ustawisz go w Ustawienia › Skróty klawiszowe.' },
    { q: 'Czy szyfrowanie zwiększa opóźnienie głosu?', a: 'Szyfrowanie ramek dzieje się lokalnie i jest bardzo szybkie. Opóźnienie zależy głównie od sieci i odległości od serwera.' },
    { q: 'Czy mogę mieć własny serwer dla klanu?', a: 'Tak — instrukcja jest na stronie <a href="{download}#self-hosting">Pobierz</a>.' },
  ],
  final: { title: 'Wbijajcie na Lobby', text: 'Za darmo, bez reklam, bez numeru telefonu.', cta: 'Pobierz na Windows' },
};

export const gamersCopy = { en, pl };
