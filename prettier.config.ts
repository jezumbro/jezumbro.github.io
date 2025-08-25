import type { Config } from 'prettier'

const config: Config = {
  // Core formatting options
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  proseWrap: 'always',

  // Prettier plugins
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
  ],

  // Import sorting configuration
  importOrder: ['^@astrojs/(.*)$', '^astro/(.*)$', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  // File overrides
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}

export default config
