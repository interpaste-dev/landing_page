import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../site';
import { LOCALE, localePath, useT, type Lang } from '../i18n/ui';
import { getPosts, postUrl } from './blog';

export async function blogFeed(lang: Lang, context: APIContext) {
  const t = useT(lang);
  const posts = await getPosts(lang);
  return rss({
    title: `${SITE.name} — ${t.blog.title}`,
    description: t.blog.description,
    site: new URL(localePath(lang, '/'), context.site).href,
    customData: `<language>${LOCALE[lang].intl}</language>`,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: postUrl(p),
      categories: [t.blog.categories[p.data.category], ...p.data.keywords],
    })),
  });
}
