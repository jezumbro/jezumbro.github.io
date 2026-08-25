# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

This is a small Astro-based personal site built with TypeScript and Tailwind
CSS. It is a single static About page at `/` — there is no blog, no content
collections, and no other routes besides the 404 page.

- Single page at `src/pages/index.astro`
- Light/dark mode follows the OS-level `prefers-color-scheme` setting (no manual
  toggle)
- Sitemap, robots.txt, and webmanifest generation for basic SEO/PWA metadata

## Development Commands

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:ci` - Run Prettier check and lint (used in CI)
- `npm run generate:favicon` - Generate favicon files from `public/favicon.svg`

## Architecture

### Key Configuration Files

- `src/site.config.ts`: Site metadata (author, title, description, language, og
  locale)
- `astro.config.ts`: Main Astro configuration
  - Integrations: Icon, Tailwind, Sitemap, RobotsTxt, Webmanifest
  - Development server runs on port 3000

### Component Structure

- `src/components/`: Astro components (BaseHead, SkipLink, SocialList, posthog)
  - `layout/`: Sidebar (brand mark), Footer
- `src/layouts/Base.astro`: Base layout with common head elements, sidebar, and
  footer
- `src/pages/`:
  - `index.astro`: The About page (the entire site)
  - `404.astro`: Not-found page

### Styling

- Tailwind CSS with custom configuration in `tailwind.config.ts`
- Global styles and theme CSS variables in `src/styles/global.css`
- Theme switching follows the OS `prefers-color-scheme` setting; no `data-theme`
  attribute is ever set

### Favicon Generation

- Source: `public/favicon.svg`
- Script: `scripts/generate-favicon.mjs`
- Generates: `favicon-16x16.png`, `favicon-32x32.png`,
  `icons/apple-touch-icon.png` (180x180)
- Uses Sharp for SVG to PNG conversion

## Deployment

The site deploys to GitHub Pages via GitHub Actions
(`.github/workflows/deploy.yml`):

1. Build job:
   - Runs format:ci (Prettier check + ESLint)
   - Builds site using `withastro/action@v4`
2. Deploy job:
   - Deploys to GitHub Pages using `actions/deploy-pages@v4`

Triggers on push and `workflow_dispatch` (no cron — there's no content to
refresh on a schedule anymore).
