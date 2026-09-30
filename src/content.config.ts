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

// Artykuły centrum pomocy: src/content/help/<język>/<slug>.md.
const help = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/help' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(70).max(170),
    category: z.enum(['account', 'backup', 'verification', 'voice', 'servers', 'selfhost']),
    translationKey: z.string(),
    updatedDate: z.coerce.date(),
    appliesTo: z.string(),
    /** Pozycja na liście „Najczęściej czytane” (mniejsza = wyżej); brak = poza listą. */
    popular: z.number().optional(),
  }),
});

export const collections = { blog, help };
