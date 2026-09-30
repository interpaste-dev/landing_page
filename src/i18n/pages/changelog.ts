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
