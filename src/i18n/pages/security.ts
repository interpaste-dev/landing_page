import { LINKS } from '../../site';

const en = {
  meta: {
    title: 'Security: how Komunikator protects your chats (MLS, E2EE, threat model)',
    description:
      'How Komunikator encrypts messages and voice with MLS and SFrame, what the server can and can’t see, our threat model, contact verification and security audits.',
  },
  eyebrow: 'Security',
  titleA: 'How we protect',
  titleB: 'your conversations',
  lead: 'No marketing shortcuts: what we encrypt, what can’t be hidden, and what the app can’t protect you from.',
  toc: 'On this page',
  sections: { keys: 'Key lifecycle', threats: 'Threat model', verify: 'Contact verification', open: 'Code and audit' },
  keys: {
    lead: 'Groups run on the MLS protocol (RFC 9420). Every change in group membership creates a new “epoch” with new keys.',
    steps: [
      { tag: 'device', title: 'Sign-up', text: 'Identity keys and key packages are created on your device. The server only receives the public part.' },
      { tag: 'epoch +1', title: 'Joining a group', text: 'A group member adds you via MLS. Everyone moves to a new epoch with a new key.' },
      { tag: 'AEAD', title: 'Every message', text: 'Encrypted with the current epoch key before it leaves your computer. Voice is encrypted with SFrame using a key derived from MLS.' },
      { tag: 'epoch +1', title: 'Someone leaves', text: 'The group immediately moves to a new epoch. The person who left can’t read new messages.' },
    ],
  },
  threats: {
    cols: { threat: 'Threat', level: 'Protection', how: 'How' },
    levels: { yes: 'Protected', partial: 'Partly', no: 'Not protected' },
    rows: [
      { threat: 'Compromised or curious server', level: 'yes', how: 'The server only holds ciphertext and public keys.' },
      { threat: 'Network eavesdropping (e.g. public Wi-Fi)', level: 'yes', how: 'TLS to the server, with end-to-end encryption underneath.' },
      { threat: 'Someone impersonating a friend', level: 'yes', how: 'Once you compare safety numbers; we warn you when a key changes.' },
      { threat: 'Stolen laptop or phone', level: 'partial', how: 'History sits in an encrypted SQLCipher database, the device key in the system keychain, and a PIN locks the app. Log the device out from another one.' },
      { threat: 'Metadata: who, with whom, when', level: 'partial', how: 'The server sees group membership and activity times, but not content.' },
      { threat: 'Malware on your computer', level: 'no', how: 'If someone controls your device, they see what you see.' },
    ] as { threat: string; level: 'yes' | 'partial' | 'no'; how: string }[],
  },
  verify: {
    text: 'Every conversation has a safety number. Compare it in person or over a call. When a friend’s key changes — or differs from the one the server knows — you’ll see a warning in the conversation.',
    link: 'How to compare safety numbers',
    alt: 'Komunikator desktop app: a warning that a contact’s device key has changed, the “unverified” badge and the “Show number” button for the safety number',
  },
  open: {
    items: [
      { icon: 'file', title: 'Source code', text: 'We plan to publish the client and server code so anyone can check how encryption works.', note: '[TBD — public repository]' },
      { icon: 'shield', title: 'Independent audit', text: 'An external audit of the server and protocol is planned before the first production release. We’ll publish the results in full.', note: '[TBD — auditor and date]' },
      { icon: 'alert', title: 'Report a vulnerability', text: 'We reply within 72 hours and follow responsible disclosure.', note: LINKS.securityEmail },
    ],
  },
};

type Copy = typeof en;

const pl: Copy = {
  meta: {
    title: 'Bezpieczeństwo: jak chronimy rozmowy (MLS, E2EE, model zagrożeń)',
    description:
      'Jak Komunikator szyfruje wiadomości i głos protokołami MLS i SFrame, co widzi serwer, a czego nie, model zagrożeń, weryfikacja kontaktów i audyt.',
  },
  eyebrow: 'Bezpieczeństwo',
  titleA: 'Jak chronimy',
  titleB: 'Wasze rozmowy',
  lead: 'Bez marketingowych skrótów: co szyfrujemy, czego nie da się ukryć i przed czym aplikacja Cię nie obroni.',
  toc: 'Na tej stronie',
  sections: { keys: 'Cykl życia klucza', threats: 'Model zagrożeń', verify: 'Weryfikacja kontaktów', open: 'Kod i audyt' },
  keys: {
    lead: 'Grupy działają na protokole MLS (RFC 9420). Każda zmiana składu grupy tworzy nową „epokę” z nowymi kluczami.',
    steps: [
      { tag: 'urządzenie', title: 'Rejestracja', text: 'Klucze tożsamości i pakiety kluczy powstają na Twoim urządzeniu. Serwer dostaje tylko część publiczną.' },
      { tag: 'epoka +1', title: 'Dołączenie do grupy', text: 'Członek grupy dodaje Cię przez MLS. Wszyscy przechodzą do nowej epoki z nowym kluczem.' },
      { tag: 'AEAD', title: 'Każda wiadomość', text: 'Szyfrowana kluczem bieżącej epoki, zanim opuści komputer. Głos szyfruje SFrame z klucza z MLS.' },
      { tag: 'epoka +1', title: 'Ktoś wychodzi', text: 'Grupa od razu przechodzi do nowej epoki. Osoba, która wyszła, nie odczyta nowych wiadomości.' },
    ],
  },
  threats: {
    cols: { threat: 'Zagrożenie', level: 'Ochrona', how: 'Jak' },
    levels: { yes: 'Chroni', partial: 'Częściowo', no: 'Nie chroni' },
    rows: [
      { threat: 'Przejęty lub wścibski serwer', level: 'yes', how: 'Serwer ma tylko szyfrogramy i klucze publiczne.' },
      { threat: 'Podsłuch w sieci (np. publiczne Wi-Fi)', level: 'yes', how: 'TLS do serwera, a pod spodem szyfrowanie end-to-end.' },
      { threat: 'Ktoś podszywa się pod znajomego', level: 'yes', how: 'Gdy porównacie numery bezpieczeństwa; ostrzegamy przy zmianie klucza.' },
      { threat: 'Skradziony laptop lub telefon', level: 'partial', how: 'Historia leży w zaszyfrowanej bazie SQLCipher, klucz urządzenia w sejfie systemowym, a aplikację blokuje PIN. Wylogujesz urządzenie z innego.' },
      { threat: 'Metadane: kto, z kim, kiedy', level: 'partial', how: 'Serwer widzi skład grup i czas aktywności, ale nie treść.' },
      { threat: 'Złośliwe oprogramowanie na Twoim komputerze', level: 'no', how: 'Jeśli ktoś kontroluje urządzenie, widzi to samo co Ty.' },
    ],
  },
  verify: {
    text: 'Każda rozmowa ma numer bezpieczeństwa. Porównajcie go na żywo albo przez telefon. Gdy klucz znajomego się zmieni — albo różni się od tego, który zna serwer — zobaczysz ostrzeżenie w rozmowie.',
    link: 'Jak porównać numery bezpieczeństwa',
    alt: 'Aplikacja Komunikator: ostrzeżenie o zmianie klucza urządzenia rozmówcy, oznaczenie „Niezweryfikowana” i przycisk „Pokaż numer” bezpieczeństwa',
  },
  open: {
    items: [
      { icon: 'file', title: 'Kod źródłowy', text: 'Planujemy opublikować kod klienta i serwera, żeby każdy mógł sprawdzić, jak działa szyfrowanie.', note: '[DO USTALENIA — publiczne repozytorium]' },
      { icon: 'shield', title: 'Niezależny audyt', text: 'Zewnętrzny audyt serwera i protokołu planujemy przed pierwszym wydaniem produkcyjnym. Wyniki opublikujemy w całości.', note: '[DO USTALENIA — audytor i termin]' },
      { icon: 'alert', title: 'Zgłoś podatność', text: 'Odpowiadamy w ciągu 72 godzin. Szanujemy zasady odpowiedzialnego ujawniania.', note: LINKS.securityEmail },
    ],
  },
};

export const securityCopy = { en, pl };
