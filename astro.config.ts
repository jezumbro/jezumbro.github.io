import icon from 'astro-icon'
import robotsTxt from 'astro-robots-txt'
import webmanifest from 'astro-webmanifest'

import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

import { defineConfig } from 'astro/config'

import { siteConfig } from './src/site.config'

export default defineConfig({
  integrations: [
    icon(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    sitemap(),
    robotsTxt(),
    webmanifest({
      // See: https://github.com/alextim/astro-lib/blob/main/packages/astro-webmanifest/README.md
      /**
       * required
       **/
      name: siteConfig.title,
      /**
       * optional
       **/
      // short_name: "Astro_Cactus",
      description: siteConfig.description,
      lang: siteConfig.lang,
      icon: 'public/icon.svg', // the source for generating favicon & icons
      icons: [
        {
          src: 'icons/apple-touch-icon.png', // used in src/components/BaseHead.astro L:26
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: 'icons/icon-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      start_url: '/',
      background_color: '#171717', // tailwind neutral.900
      theme_color: '#ef4444', //tailwind red.500
      display: 'standalone',
      config: {
        insertFaviconLinks: false,
        insertThemeColorMeta: false,
        insertManifestLink: false,
      },
    }),
  ],
  // https://docs.astro.build/en/guides/prefetch/
  prefetch: true,
  // ! Please remember to replace the following site property with your own domain
  site: 'https://jezumbro.github.com',
  server: { port: 3000 },
})
