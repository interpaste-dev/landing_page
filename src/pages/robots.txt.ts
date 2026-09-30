import type { APIRoute } from 'astro';

// NOINDEX=1 przy buildzie: wersja testowa, niech wyszukiwarki jej nie indeksują.
const rules = import.meta.env.NOINDEX === '1' ? 'Disallow: /' : 'Allow: /';

export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\n${rules}\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
