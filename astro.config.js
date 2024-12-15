import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://jezumbro.github.com',
  integrations: [
    mdx(),
    react(),
    sitemap({
      filter: (page) => {
        return !page.includes('blog')
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  server: { port: 3000 },
})
