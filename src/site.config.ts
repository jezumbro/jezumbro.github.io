import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  // Used as a meta property, found in src/components/BaseHead.astro L:31 + L:49
  author: 'Zeke Zumbro',
  // Used as the default description meta property and webmanifest description
  description: 'Personal site of Zeke Zumbro, a software engineer at Walmart.',
  // HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
  lang: 'en-US',
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: 'en_US',
  // Used to construct the meta title property found in src/components/BaseHead.astro L:11, and webmanifest name found in astro.config.ts L:42
  title: 'About',
}
