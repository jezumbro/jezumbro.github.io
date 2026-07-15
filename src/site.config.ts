import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'

import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: 'Zeke Zumbro',
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: 'en-US',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
  },
  // Used as the default description meta property and webmanifest description
  description:
    'A modern blog built with Astro, featuring thoughts on technology, design, and building in public.',
  // HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
  lang: 'en-US',
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: 'en_US',
  // Used to construct the meta title property found in src/components/BaseHead.astro L:11, and webmanifest name found in astro.config.ts L:42
  title: 'A Blog',
}

// Used to generate links in the Sidebar.
export const menuLinks: { path: string; title: string; hidden?: boolean }[] = [
  {
    path: '/',
    title: 'About',
  },
  {
    path: '/posts/',
    title: 'Writing',
  },
  {
    path: '/misc/',
    title: 'Misc',
    hidden: true,
  },
].filter((x) => !x.hidden)

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
  styleOverrides: {
    borderRadius: '4px',
    codeFontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
    codeFontSize: '0.875rem',
    codeLineHeight: '1.7142857rem',
    codePaddingInline: '1rem',
    frames: {
      frameBoxShadowCssValue: 'none',
    },
    uiLineHeight: 'inherit',
  },
  // No data-theme attribute is ever set (theme follows prefers-color-scheme only),
  // so skip the attribute-selector output and rely on Expressive Code's
  // useDarkModeMediaQuery default, which applies for one dark + one light theme.
  themeCssSelector: false,
  // One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
  themes: ['dracula', 'github-light'],
  useThemedScrollbars: false,
}
