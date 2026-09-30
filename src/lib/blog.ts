import { getCollection, type CollectionEntry } from 'astro:content';
import { localePath, type Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;

/** Id wpisu to "<język>/<slug>" (ścieżka pliku w src/content/blog). */
export const postLang = (post: Post) => post.id.split('/')[0] as Lang;
export const postSlug = (post: Post) => post.id.split('/').slice(1).join('/');
export const postUrl = (post: Post) => localePath(postLang(post), `/blog/${postSlug(post)}/`);

/** Opublikowane wpisy w danym języku, od najnowszych. */
export async function getPosts(lang: Lang) {
  const posts = await getCollection('blog', (p) => postLang(p) === lang && !p.data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Adresy tłumaczeń danego wpisu, np. { en: '/blog/x/', pl: '/pl/blog/y/' }. */
export async function getTranslations(post: Post) {
  const all = await getCollection('blog', (p) => p.data.translationKey === post.data.translationKey && !p.data.draft);
  return Object.fromEntries(all.map((p) => [postLang(p), postUrl(p)])) as Partial<Record<Lang, string>>;
}

/** Czas czytania w minutach (~220 słów/min). */
export function readingTime(body = '') {
  const words = body.replace(/[#>*_`|[\]()-]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
