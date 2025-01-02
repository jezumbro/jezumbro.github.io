import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './_posts' }),
  schema: z.object({
    title: z.string(),
    status: z.string().optional(),
    publishedDate: z.coerce.date().optional(),
    createdTime: z.coerce.date().optional(),
  }),
})

export const collections = { blog }
