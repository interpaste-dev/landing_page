import { SITE } from '../site';

/** JSON-LD BreadcrumbList z listy { nazwa, ścieżka }. */
export function breadcrumbLd(site: URL, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.path, site).href,
    })),
  };
}

/** JSON-LD FAQPage; pomija odpowiedzi-zaślepki ([TBD] / [DO USTALENIA]). */
export function faqLd(items: { q: string; a: string }[], inLanguage: string) {
  const strip = (s: string) => s.replace(/<[^>]+>/g, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage,
    mainEntity: items
      .filter((f) => !/\[(TBD|DO USTALENIA)/.test(f.a))
      .map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: strip(f.a) } })),
  };
}

export const publisher = (site: URL) => ({
  '@type': 'Organization',
  name: SITE.name,
  url: site.href,
  logo: { '@type': 'ImageObject', url: new URL('/icon-512.png', site).href },
});
