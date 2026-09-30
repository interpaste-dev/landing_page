import type { APIContext } from 'astro';
import { changelogFeed } from '../../lib/changelog-rss';

export const GET = (context: APIContext) => changelogFeed('en', context);
