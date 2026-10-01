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
      'Every Komunikator release: new features, fixes and security changes. Desktop and terminal apps, encrypted voice, screen sharing, attachments and more.',
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
    { icon: 'phone', title: 'Mobile apps', text: 'Android and iOS, with the same servers and keys per device.' },
    { icon: 'download', title: 'Backups in the desktop app', text: 'Encrypted with your phrase. The terminal client already has them.' },
    { icon: 'shield', title: 'Key transparency', text: 'A public log that proves the server hands out the right keys.' },
  ],
  releases: [
    {
      version: '0.1.1',
      date: '2026-10-01',
      title: 'Clearer voice, English and Polish interface',
      added: [
        'Interface in English and Polish — pick it in Settings → Appearance → Language',
        'Input sensitivity: the microphone only transmits above a threshold, set by hand or automatically from background noise',
        'Switch microphone or headphones during a call without reconnecting',
        'Lost packets shown in the call connection details',
        'Voice channels for 100 people, confirmed in a load test',
      ],
      fixed: [
        'Voice no longer cuts off at the start and end of words',
        'Microphone no longer goes silent with audio processing turned off',
        'Fewer lags: a briefly busy server no longer drops the connection',
        'Linux: the app no longer closes a few seconds after joining a call',
        'Self-hosting: the deploy script turns voice on by default',
        'Large message backlogs download without errors',
      ],
      security: [
        'Voice signalling over TLS (wss://)',
        'At most 5 new accounts per IP address per day',
        'Only members of a group can claim or read its roles',
        'Server health check warns 30 days before the certificate expires',
      ],
    },
    {
      version: '0.1.0',
      date: '2026-09-30',
      title: 'First version: desktop and terminal apps',
      added: [
        'Desktop app for Windows, macOS and Linux (Qt Quick, one executable)',
        'Terminal (TUI) client — works in any terminal and over SSH',
        'Servers with text and voice channels, groups and 1:1 chats by username',
        'Voice calls, screen and camera sharing',
        'Encrypted attachments up to 25 MB',
        'Replies, reactions, editing, pinned messages, “typing…” and read receipts',
        'Profiles: photo, display name, “About me” and links',
      ],
      fixed: [],
      security: [
        'End-to-end encryption with MLS (RFC 9420); voice and video with SFrame',
        'Every request signed with the device key (Ed25519)',
        'Safety numbers and a warning when a contact’s key changes',
        'PIN lock; local history in an encrypted SQLCipher database',
        'Signed automatic updates (Ed25519 + SHA-256)',
      ],
    },
  ] as Release[],
};

type Copy = typeof en;

const pl: Copy = {
  meta: {
    title: 'Nowości i lista zmian — co nowego w Komunikatorze',
    description:
      'Każda wersja Komunikatora: nowe funkcje, poprawki i zmiany w bezpieczeństwie. Aplikacja na komputer i terminal, szyfrowany głos, ekran, załączniki i więcej.',
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
    { icon: 'phone', title: 'Aplikacje mobilne', text: 'Android i iOS, te same serwery i osobne klucze na każdym urządzeniu.' },
    { icon: 'download', title: 'Kopie zapasowe w aplikacji', text: 'Szyfrowane Twoją frazą. Klient terminalowy już je ma.' },
    { icon: 'shield', title: 'Key transparency', text: 'Publiczny log, który dowodzi, że serwer podaje właściwe klucze.' },
  ],
  releases: [
    {
      version: '0.1.1',
      date: '2026-10-01',
      title: 'Czystszy głos, interfejs po polsku i angielsku',
      added: [
        'Interfejs po polsku i angielsku — wybierzesz go w Ustawienia → Wygląd → Język',
        'Czułość wejścia: mikrofon nadaje tylko powyżej progu, ustawianego ręcznie albo automatycznie z szumu tła',
        'Zmiana mikrofonu lub słuchawek w trakcie rozmowy, bez ponownego łączenia',
        'Utracone pakiety widoczne w szczegółach połączenia',
        'Kanały głosowe na 100 osób, sprawdzone testem obciążeniowym',
      ],
      fixed: [
        'Głos nie ucina się już na początku i końcu słów',
        'Mikrofon nie milknie przy wyłączonym przetwarzaniu dźwięku',
        'Mniej lagów: chwilowo zajęty serwer nie zrywa połączenia',
        'Linux: aplikacja nie zamyka się kilka sekund po wejściu do rozmowy',
        'Własny serwer: skrypt wdrożenia domyślnie włącza głos',
        'Duże zaległości wiadomości pobierają się bez błędów',
      ],
      security: [
        'Sygnalizacja głosu przez TLS (wss://)',
        'Najwyżej 5 nowych kont z jednego adresu IP na dobę',
        'Role grupy może przejąć i odczytać tylko jej uczestnik',
        'Test zdrowia serwera ostrzega 30 dni przed wygaśnięciem certyfikatu',
      ],
    },
    {
      version: '0.1.0',
      date: '2026-09-30',
      title: 'Pierwsza wersja: aplikacja na komputer i terminal',
      added: [
        'Aplikacja na Windows, macOS i Linux (Qt Quick, jeden plik wykonywalny)',
        'Klient terminalowy (TUI) — działa w każdym terminalu i przez SSH',
        'Serwery z kanałami tekstowymi i głosowymi, grupy i rozmowy 1:1 po loginie',
        'Rozmowy głosowe, udostępnianie ekranu i kamery',
        'Szyfrowane załączniki do 25 MB',
        'Odpowiedzi, reakcje, edycja, przypięte wiadomości, „pisze…” i potwierdzenia przeczytania',
        'Profile: zdjęcie, wyświetlana nazwa, „O mnie” i linki',
      ],
      fixed: [],
      security: [
        'Szyfrowanie end-to-end MLS (RFC 9420); głos i obraz przez SFrame',
        'Każde żądanie podpisane kluczem urządzenia (Ed25519)',
        'Numery bezpieczeństwa i ostrzeżenie o zmianie klucza rozmówcy',
        'Blokada PIN-em; lokalna historia w zaszyfrowanej bazie SQLCipher',
        'Podpisane automatyczne aktualizacje (Ed25519 + SHA-256)',
      ],
    },
  ],
};

export const changelogCopy = { en, pl };
