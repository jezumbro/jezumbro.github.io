# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

This is an Astro-based personal website and blog built with TypeScript, React,
and Tailwind CSS. The site features:

- Static blog posts with MDX support sourced from Notion
- Notes collection for shorter content
- Theme switching (light/dark mode)
- Webmentions integration
- RSS feeds and sitemap generation
- Search functionality with Pagefind

## Development Commands

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:ci` - Run Prettier check and lint (used in CI)
- `npm run generate:favicon` - Generate favicon files from `public/favicon.svg`

## Architecture

### Content Collections

Content is managed through Astro's content collections system with loaders:

- **Posts** (`src/content/post/`): Full blog posts with metadata (tags, dates,
  cover images)
  - Schema: title (max 60 chars), description, publishDate, optional
    updatedDate, tags, draft flag
  - Tags are automatically deduplicated and lowercased
  - Content is fetched from Notion during GitHub Actions build via
    `jezumbro/github-action-notion`
- **Notes** (`src/content/note/`): Shorter form content with ISO 8601 datetime
  format
  - Schema: title (max 60 chars), optional description, publishDate with
    timezone support

Content schemas are defined in `src/content.config.ts` using Zod validation with
the glob loader.

### Key Configuration Files

- `src/site.config.ts`: Site metadata (author, title, description, language, og
  locale), menu links, and Expressive Code theme configuration
  - Configures dual themes: 'dracula' (dark) and 'github-light' (light)
  - Theme switching uses `[data-theme='<type>']` CSS selectors
- `astro.config.ts`: Main Astro configuration
  - Integrations: Expressive Code, Icon, Tailwind, React, Sitemap, MDX,
    RobotsTxt, Webmanifest
  - Custom remark plugins: `remarkReadingTime`, `remarkDirective`,
    `remarkAdmonitions`
  - Custom rehype plugins: `rehypeExternalLinks` (adds nofollow/noreferrer and
    target=\_blank), `rehypeUnwrapImages`
  - Environment variables schema defined using Astro's `envField` API
  - Vite plugin for loading raw font files as buffers (for Satori OG image
    generation)
  - Development server runs on port 3000

### Custom Plugins

Located in `src/plugins/`:

- `remark-reading-time.ts`: Injects estimated reading time into frontmatter
- `remark-admonitions.ts`: Transforms `:::type` directive syntax into styled
  aside elements
  - Supported types: tip, note, important, caution, warning
  - Supports custom titles via directive labels
  - Based on Astro Starlight implementation
  - Uses class prefix `aside-` (not `ad-` to avoid adblockers)

### Component Structure

- `src/components/`: Astro and React components
  - `blog/`: Blog-specific components (TOC, Masthead, PostPreview, webmentions)
  - `layout/`: Header, Footer
  - `ui/`: Reusable UI components built with Radix UI (button, dropdown-menu,
    separator, icons)
  - `webmentions/`: Social interaction components (Comments, Likes)
- `src/layouts/`: Page layouts
  - `Base.astro`: Base layout with common head elements
  - `BlogPost.astro`: Layout for blog posts with TOC and webmentions
- `src/pages/`: File-based routing
  - Dynamic routes for posts (`[...slug].astro`), pagination
    (`[...page].astro`), and tags
  - OG image generation at `og-image/[...slug].png.ts` using Satori
  - RSS feeds for posts and notes

### Styling

- Tailwind CSS with custom configuration
- Global styles in `src/styles/global.css`
- Component-specific styling using Tailwind classes
- Theme switching via `data-theme` attribute
- Radix UI components styled with class-variance-authority (CVA)
- Tailwind plugins: @tailwindcss/typography, tailwindcss-animate

### Search

- Pagefind provides client-side search without external dependencies
- Search index is built post-build (after `astro build`)
- Search UI is implemented in `src/components/Search.astro`
- Content marked for indexing using `data-pagefind-body` attributes in layouts

### Favicon Generation

- Source: `public/favicon.svg`
- Script: `scripts/generate-favicon.mjs`
- Generates: `favicon-16x16.png`, `favicon-32x32.png`,
  `icons/apple-touch-icon.png` (180x180)
- Uses Sharp for SVG to PNG conversion

### Environment Variables

Defined in `astro.config.ts` env schema:

- `WEBMENTION_API_KEY`: Server-side webmention API key (optional, secret)
- `WEBMENTION_URL`: Client-side webmention endpoint (optional, public)
- `WEBMENTION_PINGBACK`: Client-side pingback URL (optional, public)

## Deployment

The site deploys to GitHub Pages via GitHub Actions
(`.github/workflows/deploy.yml`):

1. Build job:
   - Runs format:ci (Prettier check + ESLint)
   - Fetches blog posts from Notion using `jezumbro/github-action-notion@v1.1.1`
   - Notion content is written to `src/content/post/` (cleanup-before enabled)
   - Builds site using `withastro/action@v4`
   - Runs daily at 02:00 UTC via cron schedule
2. Deploy job:
   - Deploys to GitHub Pages using `actions/deploy-pages@v4`

Required secrets: `NOTION_TOKEN`, `NOTION_ROOT_PAGE_ID`

## Content Workflow

Blog posts originate from Notion and are synced during the CI build process.
Local development can use existing markdown files in `src/content/post/`. To
update content, edit the Notion workspace; changes will be reflected on the next
deployment or manual workflow dispatch.
