// Lista zmian. Nowe wydanie dopisujesz na górze `releases` (w obu językach, ta sama wersja i data).
export interface Release {
  version: string;
  date: string; // YYYY-MM-DD
  title: string;
  added: string[];
  fixed: string[];
  security: string[];
}

const en = {
  meta: {
    title: 'Changelog — what’s new in Komunikator',
    description:
      'Every Komunikator release: new features, fixes and security changes. Screen sharing in 1440p, command palette, voice channels with push-to-talk and more.',
  },
  crumb: 'Changelog',
  title: 'What’s new and changelog',
  lead: 'Every version of the app: what we added, what we fixed and what changed in security.',
  rss: 'RSS',
  download: 'Download',
  latest: 'latest',
  groups: { added: 'New', fixed: 'Fixes', security: 'Security' },
  soonTitle: 'Coming soon',
  soon: [
    { icon: 'file', title: 'Attachments up to 25 MB', text: 'Encrypted before sending, with image previews.' },
    { icon: 'at', title: 'Chat by username', text: 'A contact is a person, not a single device.' },
    { icon: 'monitor', title: 'Multiple devices', text: 'Phone and laptop in the same groups.' },
  ],
  releases: [
    {
      version: '0.9.2',
      date: '2026-09-22',
      title: '1440p screen sharing at 60 FPS',
      added: ['Screen sharing, encrypted with SFrame', 'Quick reply from the in-game overlay'],
      fixed: ['Lower CPU usage with many voice channels', 'Faster loading of older history'],
      security: ['Warning when a key doesn’t match the server'],
    },
    {
      version: '0.9.1',
      date: '2026-09-08',
      title: 'Command palette and compact view',
      added: ['Command palette (Ctrl+K)', 'Compact view: one line per message', 'Emoji picker with categories'],
      fixed: ['Fixed r / e / d shortcuts on a selected message'],
      security: ['Safety numbers as a QR code too'],
    },
    {
      version: '0.9.0',
      date: '2026-08-25',
      title: 'Voice channels',
      added: ['Voice channels and push-to-talk', 'On-device noise suppression'],
      fixed: ['Offline message queue is sent when the network comes back'],
      security: ['Server mode shown in the status bar'],
    },
  ] as Release[],
};

type Copy = typeof en;

const pl: Copy = {
  meta: {
    title: 'Nowości i lista zmian — co nowego w Komunikatorze',
    description:
      'Każda wersja Komunikatora: nowe funkcje, poprawki i zmiany w bezpieczeństwie. Udostępnianie ekranu 1440p, paleta poleceń, kanały głosowe z push-to-talk i więcej.',
  },
  crumb: 'Nowości',
  title: 'Nowości i lista zmian',
  lead: 'Każda wersja komunikatora: co doszło, co poprawiliśmy i co zmieniło się w bezpieczeństwie.',
  rss: 'RSS',
  download: 'Pobierz',
  latest: 'najnowsza',
  groups: { added: 'Nowe', fixed: 'Poprawki', security: 'Bezpieczeństwo' },
  soonTitle: 'Wkrótce',
  soon: [
    { icon: 'file', title: 'Załączniki do 25 MB', text: 'Szyfrowane przed wysłaniem, z podglądem obrazów.' },
    { icon: 'at', title: 'Rozmowa po loginie', text: 'Kontakt to osoba, nie pojedyncze urządzenie.' },
    { icon: 'monitor', title: 'Wiele urządzeń', text: 'Telefon i laptop w tych samych grupach.' },
  ],
  releases: [
    {
      version: '0.9.2',
      date: '2026-09-22',
      title: 'Udostępnianie ekranu w 1440p i 60 FPS',
      added: ['Udostępnianie ekranu, szyfrowane SFrame', 'Szybka odpowiedź z overlayu w grze'],
      fixed: ['Mniej zużycia CPU przy wielu kanałach głosowych', 'Szybsze wczytywanie starszej historii'],
      security: ['Ostrzeżenie o kluczu niezgodnym z serwerem'],
    },
    {
      version: '0.9.1',
      date: '2026-09-08',
      title: 'Paleta poleceń i widok zwarty',
      added: ['Paleta poleceń Ctrl+K', 'Widok zwarty: jedna linia na wiadomość', 'Wybór emoji z kategoriami'],
      fixed: ['Poprawione skróty r / e / d na zaznaczonej wiadomości'],
      security: ['Numery bezpieczeństwa także jako kod QR'],
    },
    {
      version: '0.9.0',
      date: '2026-08-25',
      title: 'Kanały głosowe',
      added: ['Kanały głosowe i push-to-talk', 'Redukcja szumów na urządzeniu'],
      fixed: ['Kolejka wiadomości offline wysyła się po powrocie sieci'],
      security: ['Tryb serwera widoczny na pasku stanu'],
    },
  ],
};

export const changelogCopy = { en, pl };
