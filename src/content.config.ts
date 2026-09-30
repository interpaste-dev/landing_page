import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Wpisy leżą w src/content/blog/<język>/<slug>.md.
// `translationKey` łączy tłumaczenia tego samego wpisu (hreflang + przełącznik języka).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(70).max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['security', 'gaming', 'product']),
    translationKey: z.string(),
    keywords: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
