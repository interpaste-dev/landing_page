const en = {
  meta: {
    title: 'Download Komunikator for Windows, Linux and Android — free',
    description:
      'Download Komunikator — free, end-to-end encrypted voice and text chat for gamers. For Windows 10/11, Linux (AppImage, .deb, Flatpak) and Android.',
  },
  eyebrow: 'Download',
  titleA: 'Download',
  titleB: 'Komunikator',
  lead: 'Free, no ads. Create your account in the app — no phone number needed.',
  detected: 'We detected your system',
  version: 'Version',
  fileSize: '[FILE SIZE]',
  checksum: 'Verify the SHA-256 checksum',
  portable: 'Portable .zip',
  older: 'Older versions',
  changelog: 'Changelog',
  platforms: {
    windows: { name: 'Windows', os: 'Windows 11 · 64-bit', cta: 'Download for Windows' },
    linux: { name: 'Linux', os: 'Linux · 64-bit', cta: 'Download for Linux' },
    android: { name: 'Android', os: 'Android', cta: 'Download APK' },
  },
  othersTitle: 'Other systems',
  others: [
    { key: 'linux', name: 'Linux', meta: 'AppImage · .deb · Flatpak', cta: 'Download' },
    { key: 'android', name: 'Android', meta: 'Android 9 and newer', cta: 'Download APK' },
    { key: 'macos', name: 'macOS', meta: 'in development' },
    { key: 'ios', name: 'iOS', meta: 'in development' },
  ],
  soon: 'Coming soon',
  verify: {
    title: 'Check that your file is genuine',
    text: 'Compare the checksum of the downloaded file with the one below. Releases are also signed with key [SIGNING KEY ID].',
    cmdComment: '# Windows (PowerShell)',
    expected: '# expected SHA-256',
    placeholder: '[SHA-256 — fill in at release]',
  },
  reqTitle: 'System requirements',
  req: [
    { name: 'Windows', rows: [['System', '10 or 11, 64-bit'], ['Memory', '~40 MB in the background'], ['Disk', '[SIZE]']] },
    { name: 'Linux', rows: [['System', 'glibc 2.31+'], ['Audio', 'PipeWire or PulseAudio'], ['Disk', '[SIZE]']] },
    { name: 'Android', rows: [['System', 'Android 9+'], ['Unlock', 'fingerprint or PIN'], ['Notifications', 'content-free']] },
  ],
  self: {
    title: 'Self-hosted server',
    text: 'Run the server on your own VPS or at home. Encryption works exactly the same — the server never has the keys anyway.',
    guide: 'Installation guide',
    comment: '# docker compose — example',
    image: '[SERVER IMAGE]',
  },
};

type Copy = typeof en;

const pl: Copy = {
  meta: {
    title: 'Pobierz Komunikator na Windows, Linux i Androida — za darmo',
    description:
      'Pobierz Komunikator — darmowy czat głosowy i tekstowy z szyfrowaniem end-to-end dla graczy. Windows 10/11, Linux (AppImage, .deb, Flatpak) i Android. Sumy SHA-256.',
  },
  eyebrow: 'Pobierz',
  titleA: 'Pobierz',
  titleB: 'Komunikator',
  lead: 'Za darmo, bez reklam. Konto założysz w aplikacji — bez numeru telefonu.',
  detected: 'Wykryliśmy Twój system',
  version: 'Wersja',
  fileSize: '[ROZMIAR PLIKU]',
  checksum: 'Sprawdź sumę SHA-256',
  portable: 'Wersja przenośna .zip',
  older: 'Starsze wersje',
  changelog: 'Lista zmian',
  platforms: {
    windows: { name: 'Windows', os: 'Windows 11 · 64-bit', cta: 'Pobierz dla Windows' },
    linux: { name: 'Linux', os: 'Linux · 64-bit', cta: 'Pobierz dla Linuxa' },
    android: { name: 'Android', os: 'Android', cta: 'Pobierz APK' },
  },
  othersTitle: 'Inne systemy',
  others: [
    { key: 'linux', name: 'Linux', meta: 'AppImage · .deb · Flatpak', cta: 'Pobierz' },
    { key: 'android', name: 'Android', meta: 'Android 9 i nowsze', cta: 'Pobierz APK' },
    { key: 'macos', name: 'macOS', meta: 'w przygotowaniu' },
    { key: 'ios', name: 'iOS', meta: 'w przygotowaniu' },
  ],
  soon: 'Wkrótce',
  verify: {
    title: 'Sprawdź, czy plik jest prawdziwy',
    text: 'Porównaj sumę kontrolną pobranego pliku z tą poniżej. Wydania podpisujemy też kluczem [ID KLUCZA PODPISU].',
    cmdComment: '# Windows (PowerShell)',
    expected: '# oczekiwana suma SHA-256',
    placeholder: '[SHA-256 — uzupełnij przy wydaniu]',
  },
  reqTitle: 'Wymagania',
  req: [
    { name: 'Windows', rows: [['System', '10 lub 11, 64-bit'], ['Pamięć', '~40 MB w tle'], ['Dysk', '[ROZMIAR]']] },
    { name: 'Linux', rows: [['System', 'glibc 2.31+'], ['Dźwięk', 'PipeWire lub PulseAudio'], ['Dysk', '[ROZMIAR]']] },
    { name: 'Android', rows: [['System', 'Android 9+'], ['Odblokowanie', 'odcisk palca lub PIN'], ['Powiadomienia', 'bez treści']] },
  ],
  self: {
    title: 'Własny serwer',
    text: 'Postaw serwer na swoim VPS albo w domu. Szyfrowanie działa tak samo — serwer i tak nie ma kluczy.',
    guide: 'Instrukcja instalacji',
    comment: '# docker compose — przykład',
    image: '[OBRAZ SERWERA]',
  },
};

export const downloadCopy = { en, pl };
