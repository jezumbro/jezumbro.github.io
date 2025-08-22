# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

This is an Astro-based personal website and blog built with TypeScript, React,
and Tailwind CSS. The site features:

- Static blog posts with MDX support
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

## Architecture

### Content Collections

- **Posts** (`src/content/post/`): Full blog posts with metadata (tags, dates,
  cover images)
- **Notes** (`src/content/note/`): Shorter form content
- Content schemas defined in `src/content.config.ts` using Zod validation

### Key Configuration Files

- `src/site.config.ts`: Site metadata, menu links, and Expressive Code theme
  settings
- `astro.config.ts`: Astro configuration with integrations (MDX, React,
  Tailwind, etc.)
- Custom remark plugins for reading time and admonitions in `src/plugins/`

### Component Structure

- `src/components/`: Astro and React components
  - `blog/`: Blog-specific components (TOC, post previews)
  - `layout/`: Header, Footer
  - `ui/`: Reusable UI components built with Radix UI
  - `webmentions/`: Social interaction components
- `src/layouts/`: Page layouts (Base, BlogPost)
- `src/pages/`: File-based routing

### Styling

- Tailwind CSS with custom configuration
- Global styles in `src/styles/global.css`
- Component-specific styling using Tailwind classes
- Theme switching via data attributes

### Content Management

- Blog posts support frontmatter with title, description, tags, dates
- Custom remark plugins add reading time and admonition support
- Images handled through Astro's image optimization
- RSS feeds auto-generated for posts and notes

### Environment Variables

- `WEBMENTION_API_KEY`: Server-side webmention API key (optional)
- `WEBMENTION_URL`: Client-side webmention endpoint (optional)
- `WEBMENTION_PINGBACK`: Client-side pingback URL (optional)

## Deployment

The site deploys to GitHub Pages via GitHub Actions (see badge in README). The
build outputs to `dist/` directory.
