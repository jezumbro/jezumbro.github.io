import { defineCollection, z } from 'astro:content'

import { glob } from 'astro/loaders'

function removeDuplicatesAndLowerCase(array: string[]) {
  return [...new Set(array.map((str) => str.toLowerCase()))]
}

const baseSchema = z.object({
  title: z.string().max(60),
})

const post = defineCollection({
  loader: glob({ base: './src/content/post', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    baseSchema.extend({
      description: z.string(),
      coverImage: z
        .object({
          alt: z.string(),
          src: image(),
        })
        .optional(),
      draft: z.boolean().default(false),
      ogImage: z.string().optional(),
      tags: z
        .array(z.string())
        .default([])
        .transform(removeDuplicatesAndLowerCase),
      publishDate: z.date(),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
    }),
})

export const collections = { post }
