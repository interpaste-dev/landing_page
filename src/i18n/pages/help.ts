import type { IconName } from '../../components/Icon.astro';

export type HelpCategory = 'account' | 'backup' | 'verification' | 'voice' | 'servers' | 'selfhost';

export const CATEGORY_ICONS: Record<HelpCategory, IconName> = {
  account: 'user',
  backup: 'download',
  verification: 'shield',
  voice: 'headphones',
  servers: 'users',
  selfhost: 'server',
};

const en = {
  meta: {
    title: 'Help center — Komunikator support and guides',
    description:
      'Answers about your Komunikator account, backups, PIN, safety numbers, push-to-talk, servers and self-hosting. Step-by-step guides and how to contact support.',
  },
  crumb: 'Help',
  title: 'How can we help?',
  searchLabel: 'Search help',
  searchPlaceholder: 'e.g. restore my account, push-to-talk not working',
  searchButton: 'Search',
  noResults: 'No articles match your search. Try other words or write to us.',
  popular: 'Popular:',
  topicsTitle: 'Topics',
  categories: {
    account: { name: 'Account and login', desc: 'Sign-up, password, PIN, session' },
    backup: { name: 'Backups', desc: '.zip file, phrase, new computer' },
    verification: { name: 'Verification and keys', desc: 'Safety numbers, key changes' },
    voice: { name: 'Voice and audio', desc: 'Microphone, push-to-talk, echo' },
    servers: { name: 'Servers and groups', desc: 'Invites, members, channels' },
    selfhost: { name: 'Self-hosted server', desc: 'Installation, certificate, updates' },
  } as Record<HelpCategory, { name: string; desc: string }>,
  articles: (n: number) => (n === 1 ? '1 article' : `${n} articles`),
  mostRead: 'Most read',
  contact: {
    title: 'Didn’t find an answer?',
    text: 'Write to us — we reply on business days, usually within 24 hours.',
    cta: 'Contact support',
  },
  warning: '<strong>We will never ask for your password, PIN or backup phrase.</strong> If someone asks for them, it isn’t us.',
  status: { label: 'Server status', value: 'all systems operational' },
  article: {
    allTopics: 'All topics',
    updated: 'Updated',
    minRead: 'min read',
    appliesTo: 'applies to version',
    needMore: 'Need more help?',
    contact: 'Contact support',
    blog: 'Guides on our blog',
  },
};

type Copy = typeof en;

const pl: Copy = {
  meta: {
    title: 'Centrum pomocy — pomoc i poradniki Komunikatora',
    description:
      'Odpowiedzi o koncie, kopii zapasowej, PIN-ie, numerach bezpieczeństwa, push-to-talk, serwerach i własnym serwerze Komunikatora. Instrukcje krok po kroku i kontakt.',
  },
  crumb: 'Pomoc',
  title: 'Jak możemy pomóc?',
  searchLabel: 'Szukaj w pomocy',
  searchPlaceholder: 'np. jak przywrócić konto, push-to-talk nie działa',
  searchButton: 'Szukaj',
  noResults: 'Żaden artykuł nie pasuje. Spróbuj innych słów albo napisz do nas.',
  popular: 'Popularne:',
  topicsTitle: 'Tematy',
  categories: {
    account: { name: 'Konto i logowanie', desc: 'Rejestracja, hasło, PIN, sesja' },
    backup: { name: 'Kopia zapasowa', desc: 'Plik .zip, fraza, nowy komputer' },
    verification: { name: 'Weryfikacja i klucze', desc: 'Numery bezpieczeństwa, zmiana klucza' },
    voice: { name: 'Głos i dźwięk', desc: 'Mikrofon, push-to-talk, echo' },
    servers: { name: 'Serwery i grupy', desc: 'Zaproszenia, członkowie, kanały' },
    selfhost: { name: 'Własny serwer', desc: 'Instalacja, certyfikat, aktualizacje' },
  },
  articles: (n: number) => (n === 1 ? '1 artykuł' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? `${n} artykuły` : `${n} artykułów`),
  mostRead: 'Najczęściej czytane',
  contact: {
    title: 'Nie znalazłeś odpowiedzi?',
    text: 'Napisz do nas — odpowiadamy w dni robocze, zwykle w ciągu doby.',
    cta: 'Napisz do pomocy',
  },
  warning: '<strong>Nigdy nie poprosimy o hasło, PIN ani frazę kopii.</strong> Jeśli ktoś o nie prosi, to nie jesteśmy my.',
  status: { label: 'Status serwera', value: 'wszystkie systemy działają' },
  article: {
    allTopics: 'Wszystkie tematy',
    updated: 'Zaktualizowano',
    minRead: 'min czytania',
    appliesTo: 'dotyczy wersji',
    needMore: 'Potrzebujesz więcej?',
    contact: 'Napisz do pomocy',
    blog: 'Poradniki na blogu',
  },
};

export const helpCopy = { en, pl };
