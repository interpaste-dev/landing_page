const en = {
  meta: {
    title: 'Download Komunikator for Windows, macOS and Linux — free',
    description:
      'Download Komunikator — free, end-to-end encrypted voice and text chat. One executable for Windows, macOS and Linux, plus a terminal client.',
  },
  eyebrow: 'Download',
  titleA: 'Download',
  titleB: 'Komunikator',
  lead: 'Free, no ads. Create your account in the app — no phone number needed.',
  detected: 'We detected your system',
  version: 'Version',
  fileSize: '[FILE SIZE]',
  checksum: 'Verify the SHA-256 checksum',
  older: 'Older versions',
  changelog: 'Changelog',
  platforms: {
    windows: { name: 'Windows', os: 'Windows 10 / 11', cta: 'Download for Windows' },
    linux: { name: 'Linux', os: 'Linux · x86-64', cta: 'Download for Linux' },
    macos: { name: 'macOS', os: 'macOS', cta: 'Download for macOS' },
  },
  othersTitle: 'Other systems',
  others: [
    { key: 'linux', name: 'Linux', meta: 'x86-64 · one executable', cta: 'Download' },
    { key: 'macos', name: 'macOS', meta: 'one executable', cta: 'Download' },
    { key: 'tui', name: 'Terminal (TUI)', meta: 'Windows · macOS · Linux · SSH', cta: 'About the terminal client' },
    { key: 'mobile', name: 'Android · iOS', meta: 'in development' },
  ],
  soon: 'Coming soon',
  verify: {
    title: 'Check that your file is genuine',
    text: 'Compare the checksum of the downloaded file with the one below. Automatic updates are verified by the app itself: an Ed25519 signature and a SHA-256 checksum.',
    cmdComment: '# Windows (PowerShell)',
    expected: '# expected SHA-256',
    placeholder: '[SHA-256 — fill in at release]',
  },
  reqTitle: 'System requirements',
  req: [
    { name: 'Windows', rows: [['System', 'Windows 10 or 11'], ['Key storage', 'Credential Manager'], ['Voice', 'libraries included']] },
    { name: 'Linux', rows: [['Key storage', 'Secret Service'], ['Qt on X11', 'libxcb-cursor0'], ['Voice', 'libportaudio2, PipeWire/Pulse']] },
    { name: 'macOS', rows: [['Key storage', 'Keychain'], ['Voice', 'libraries included'], ['System version', '[TBD]']] },
  ],
  self: {
    title: 'Self-hosted server',
    text: 'Run the server on your own VPS or at home with Docker. Encryption works exactly the same — the server never has the keys anyway.',
    guide: 'Self-hosting guide',
    comment: '# start the server (Docker 24+)',
    status: 'core status',
    logs: 'live logs',
  },
};

type Copy = typeof en;

const pl: Copy = {
  meta: {
    title: 'Pobierz Komunikator na Windows, macOS i Linux — za darmo',
    description:
      'Pobierz Komunikator — darmowy czat głosowy i tekstowy z szyfrowaniem end-to-end. Jeden plik na Windows, macOS i Linux oraz klient w terminalu.',
  },
  eyebrow: 'Pobierz',
  titleA: 'Pobierz',
  titleB: 'Komunikator',
  lead: 'Za darmo, bez reklam. Konto założysz w aplikacji — bez numeru telefonu.',
  detected: 'Wykryliśmy Twój system',
  version: 'Wersja',
  fileSize: '[ROZMIAR PLIKU]',
  checksum: 'Sprawdź sumę SHA-256',
  older: 'Starsze wersje',
  changelog: 'Lista zmian',
  platforms: {
    windows: { name: 'Windows', os: 'Windows 10 / 11', cta: 'Pobierz dla Windows' },
    linux: { name: 'Linux', os: 'Linux · x86-64', cta: 'Pobierz dla Linuxa' },
    macos: { name: 'macOS', os: 'macOS', cta: 'Pobierz dla macOS' },
  },
  othersTitle: 'Inne systemy',
  others: [
    { key: 'linux', name: 'Linux', meta: 'x86-64 · jeden plik', cta: 'Pobierz' },
    { key: 'macos', name: 'macOS', meta: 'jeden plik', cta: 'Pobierz' },
    { key: 'tui', name: 'Terminal (TUI)', meta: 'Windows · macOS · Linux · SSH', cta: 'O kliencie terminalowym' },
    { key: 'mobile', name: 'Android · iOS', meta: 'w przygotowaniu' },
  ],
  soon: 'Wkrótce',
  verify: {
    title: 'Sprawdź, czy plik jest prawdziwy',
    text: 'Porównaj sumę kontrolną pobranego pliku z tą poniżej. Automatyczne aktualizacje aplikacja sprawdza sama: podpis Ed25519 i suma SHA-256.',
    cmdComment: '# Windows (PowerShell)',
    expected: '# oczekiwana suma SHA-256',
    placeholder: '[SHA-256 — uzupełnij przy wydaniu]',
  },
  reqTitle: 'Wymagania',
  req: [
    { name: 'Windows', rows: [['System', 'Windows 10 lub 11'], ['Klucze', 'Menedżer poświadczeń'], ['Głos', 'biblioteki w zestawie']] },
    { name: 'Linux', rows: [['Klucze', 'Secret Service'], ['Qt na X11', 'libxcb-cursor0'], ['Głos', 'libportaudio2, PipeWire/Pulse']] },
    { name: 'macOS', rows: [['Klucze', 'Pęk kluczy (Keychain)'], ['Głos', 'biblioteki w zestawie'], ['Wersja systemu', '[DO USTALENIA]']] },
  ],
  self: {
    title: 'Własny serwer',
    text: 'Postaw serwer na swoim VPS albo w domu, w Dockerze. Szyfrowanie działa tak samo — serwer i tak nie ma kluczy.',
    guide: 'Instrukcja własnego serwera',
    comment: '# uruchomienie serwera (Docker 24+)',
    status: 'stan rdzenia',
    logs: 'logi na bieżąco',
  },
};

export const downloadCopy = { en, pl };
