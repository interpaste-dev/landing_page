import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { route } from '../i18n/routes';

export type HelpArticle = CollectionEntry<'help'>;

/** Id artykułu to "<język>/<slug>" (ścieżka pliku w src/content/help). */
export const helpLang = (a: HelpArticle) => a.id.split('/')[0] as Lang;
export const helpSlug = (a: HelpArticle) => a.id.split('/').slice(1).join('/');
export const helpUrl = (a: HelpArticle) => `${route(helpLang(a), 'help')}${helpSlug(a)}/`;

/** Artykuły w danym języku: najpierw „najczęściej czytane”, potem alfabetycznie. */
export async function getHelp(lang: Lang) {
  const all = await getCollection('help', (a) => helpLang(a) === lang);
  return all.sort((a, b) => (a.data.popular ?? 99) - (b.data.popular ?? 99) || a.data.title.localeCompare(b.data.title));
}

/** Adresy tłumaczeń artykułu (hreflang + przełącznik języka). */
export async function getHelpTranslations(article: HelpArticle) {
  const all = await getCollection('help', (a) => a.data.translationKey === article.data.translationKey);
  return Object.fromEntries(all.map((a) => [helpLang(a), helpUrl(a)])) as Partial<Record<Lang, string>>;
}
