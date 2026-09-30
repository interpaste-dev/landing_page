import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../site';
import { LOCALE, type Lang } from '../i18n/ui';
import { route } from '../i18n/routes';
import { changelogCopy } from '../i18n/pages/changelog';

export function changelogFeed(lang: Lang, context: APIContext) {
  const c = changelogCopy[lang];
  const page = route(lang, 'changelog');
  const list = (label: string, items: string[]) => (items.length ? `<p><strong>${label}</strong></p><ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>` : '');
  return rss({
    title: `${SITE.name} — ${c.title}`,
    description: c.lead,
    site: new URL(page, context.site).href,
    customData: `<language>${LOCALE[lang].intl}</language>`,
    // Linki prowadzą do kotwic (#v0-9-2) — bez doklejania ukośnika na końcu.
    trailingSlash: false,
    items: c.releases.map((r) => ({
      title: `${SITE.name} ${r.version} — ${r.title}`,
      pubDate: new Date(r.date),
      link: `${page}#v${r.version.replaceAll('.', '-')}`,
      content: list(c.groups.added, r.added) + list(c.groups.fixed, r.fixed) + list(c.groups.security, r.security),
    })),
  });
}
