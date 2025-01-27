import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'

const emails = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/emails' }),
})

export const collections = { emails }
