import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  corePlugins: {
    // disable some core plugins as they are included in the css, even when unused
    borderOpacity: false,
    fontVariantNumeric: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    scrollSnapType: false,
    textOpacity: false,
    touchAction: false,
  },
  darkMode: 'media',
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.title': {
          '@apply font-sans text-base font-bold uppercase tracking-wide text-accent-2':
            {},
        },
      })
    }),
  ],
  theme: {
    extend: {
      colors: {
        accent: 'hsl(var(--theme-accent) / <alpha-value>)',
        'accent-2': 'hsl(var(--theme-accent-2) / <alpha-value>)',
        bgColor: 'hsl(var(--theme-bg) / <alpha-value>)',
        link: 'hsl(var(--theme-link) / <alpha-value>)',
        quote: 'hsl(var(--theme-quote) / <alpha-value>)',
        textColor: 'hsl(var(--theme-text) / <alpha-value>)',
        border: 'hsl(var(--theme-border) / <alpha-value>)',
        muted: 'hsl(var(--theme-muted) / <alpha-value>)',
        'muted-foreground':
          'hsl(var(--theme-muted-foreground) / <alpha-value>)',
      },
      fontFamily: {
        // Add any custom fonts here
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          ...fontFamily.sans,
        ],
        serif: [...fontFamily.serif],
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
}
export default config
