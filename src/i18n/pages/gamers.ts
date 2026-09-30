const en = {
  meta: {
    title: 'Encrypted voice chat for gaming teams — a private Discord alternative',
    description:
      'Voice channels, screen sharing and text chat for your team, end-to-end encrypted with MLS and SFrame. A native, ad-free Discord alternative for gamers.',
  },
  crumb: 'For gamers',
  eyebrow: 'For gamers',
  title: 'Voice chat for your team that doesn’t read your comms',
  lead: 'Voice channels, screen sharing and end-to-end encrypted chat. A native app with no browser inside, and zero ads.',
  cta: 'Download for free',
  ctaServer: 'Run your own server',
  overlayAlt: 'Komunikator desktop app: the “Ranked squad” server with text channels, voice channels and people online',
  builtTitle: 'Built for playing',
  built: [
    { icon: 'speaker', title: 'Voice channels', text: 'Drop in like on Discord. See who’s on the channel, with a green outline on whoever is talking.' },
    { icon: 'monitor', title: 'Screen and camera', text: 'Show your game or your face to the team. The stream is encrypted with the same key as voice.' },
    { icon: 'bolt', title: 'Native app', text: 'A GPU-drawn Qt Quick interface — no browser engine running in the background.' },
    { icon: 'lock', title: 'Private', text: 'Tactics and conversations are end-to-end encrypted. The server only sees noise.' },
  ],
  perf: {
    title: 'Lighter when your game needs the resources',
    text: 'We’ll measure resource usage during a match and publish the methodology together with the results.',
    link: 'How we measure',
    stats: [
      { value: '[X] MB', label: 'RAM in the background' },
      { value: '[X] %', label: 'CPU during a call' },
      { value: '[X] ms', label: 'voice latency in Europe' },
    ],
  },
  steps: {
    title: 'Your team on a server in 3 steps',
    items: [
      { title: 'Create an account', text: 'Just a username and password — no phone number or email. Keys are created on your computer.' },
      { title: 'Create a server', text: 'Add text channels for tactics and voice channels for the lobby.' },
      { title: 'Add friends', text: 'Invite them by username. Every new member gets new group keys.' },
    ],
  },
  faqTitle: 'Gamer questions',
  faq: [
    {
      q: 'Is there an in-game overlay?',
      a: 'Not yet — it’s planned. For now, keep Komunikator on a second screen or switch to it when you need to.',
    },
    {
      q: 'Does push-to-talk work while the game window is active?',
      a: 'Not yet in the desktop app — a global push-to-talk key is planned. Meanwhile, mute with Ctrl+Shift+M or the button in the voice panel. The terminal client has push-to-talk as a toggle key.',
    },
    {
      q: 'Does encryption add voice latency?',
      a: 'Frames are encrypted locally and very quickly. Latency depends mostly on your network and the distance to the server.',
    },
    { q: 'Can my clan have its own server?', a: 'Yes — see the <a href="{selfhost}">self-hosting guide</a>. It runs in Docker.' },
  ],
  final: { title: 'Jump into the Lobby', text: 'Free, no ads, no phone number.', cta: 'Download Komunikator' },
};

type Copy = typeof en;

const pl: Copy = {
  meta: {
    title: 'Szyfrowany czat głosowy dla drużyn — prywatna alternatywa dla Discorda',
    description:
      'Kanały głosowe, udostępnianie ekranu i czat dla drużyny, szyfrowane end-to-end (MLS i SFrame). Natywna alternatywa dla Discorda dla graczy, bez reklam.',
  },
  crumb: 'Dla graczy',
  eyebrow: 'Dla graczy',
  title: 'Komunikator dla drużyny, który nie czyta Waszych rozmów',
  lead: 'Kanały głosowe, udostępnianie ekranu i czat szyfrowany end-to-end. Natywna aplikacja bez przeglądarki w środku i bez reklam.',
  cta: 'Pobierz za darmo',
  ctaServer: 'Postaw własny serwer',
  overlayAlt: 'Aplikacja Komunikator: serwer „Drużyna ranked” z kanałami tekstowymi, głosowymi i listą osób online',
  builtTitle: 'Zrobiony do grania',
  built: [
    { icon: 'speaker', title: 'Kanały głosowe', text: 'Wskakujesz jak na Discordzie. Widać, kto jest na kanale, a mówiący ma zieloną obwódkę.' },
    { icon: 'monitor', title: 'Ekran i kamera', text: 'Pokaż drużynie grę albo siebie. Obraz jest szyfrowany tym samym kluczem co głos.' },
    { icon: 'bolt', title: 'Natywna aplikacja', text: 'Interfejs Qt Quick rysowany na GPU — bez silnika przeglądarki działającego w tle.' },
    { icon: 'lock', title: 'Prywatnie', text: 'Taktyki i rozmowy szyfrowane end-to-end. Serwer widzi tylko szum.' },
  ],
  perf: {
    title: 'Lżejszy, gdy gra potrzebuje zasobów',
    text: 'Zmierzymy zużycie w trakcie meczu i opublikujemy metodologię razem z wynikami.',
    link: 'Jak mierzymy',
    stats: [
      { value: '[X] MB', label: 'RAM w tle' },
      { value: '[X] %', label: 'CPU w trakcie rozmowy' },
      { value: '[X] ms', label: 'opóźnienie głosu w Europie' },
    ],
  },
  steps: {
    title: 'Drużyna na serwerze w 3 krokach',
    items: [
      { title: 'Załóż konto', text: 'Tylko login i hasło — bez numeru telefonu i e-maila. Klucze powstają na Twoim komputerze.' },
      { title: 'Utwórz serwer', text: 'Dodaj kanały tekstowe na taktykę i głosowe na lobby.' },
      { title: 'Dodaj znajomych', text: 'Zaproś ich po loginie. Każdy nowy członek dostaje nowe klucze grupy.' },
    ],
  },
  faqTitle: 'Pytania graczy',
  faq: [
    {
      q: 'Czy jest overlay w grze?',
      a: 'Jeszcze nie — jest w planach. Na razie trzymaj Komunikator na drugim ekranie albo przełączaj się do niego, gdy trzeba.',
    },
    {
      q: 'Czy push-to-talk działa, gdy okno gry jest aktywne?',
      a: 'W aplikacji na komputer jeszcze nie — globalny klawisz push-to-talk jest w planach. Do tego czasu wyciszasz się Ctrl+Shift+M albo przyciskiem w panelu głosu. Klient terminalowy ma push-to-talk jako klawisz przełącznika.',
    },
    {
      q: 'Czy szyfrowanie zwiększa opóźnienie głosu?',
      a: 'Szyfrowanie ramek dzieje się lokalnie i jest bardzo szybkie. Opóźnienie zależy głównie od sieci i odległości od serwera.',
    },
    { q: 'Czy mogę mieć własny serwer dla klanu?', a: 'Tak — zobacz <a href="{selfhost}">instrukcję własnego serwera</a>. Działa w Dockerze.' },
  ],
  final: { title: 'Wbijajcie na Lobby', text: 'Za darmo, bez reklam, bez numeru telefonu.', cta: 'Pobierz Komunikator' },
};

export const gamersCopy = { en, pl };
