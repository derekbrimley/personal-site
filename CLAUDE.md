# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start dev server (Vite)
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run check` - Type-check with svelte-check
- `npm run lint` - Run prettier + eslint checks
- `npm run format` - Auto-format with prettier

## Architecture

This is a personal portfolio site built with **SvelteKit 2** and **Svelte 5**, using TypeScript. It deploys via `@sveltejs/adapter-auto` (Vercel adapter is available but commented out in `svelte.config.js`).

**Node version:** v22.14.0 (see `.nvmrc`)

### Routes

- `/` - Home page with bio, social links, and fade-in animation (`src/routes/+page.svelte`)
- `/projects` - Project showcase grid (`src/routes/projects/+page.svelte`)
- `/logbook` - Blog/logbook section (`src/routes/logbook/`)
- `/favorites` and `/contact-me` exist but are commented out of the nav

Each page imports its own `Header` component from `src/routes/Header.svelte` rather than using the layout. The root layout (`src/routes/+layout.svelte`) only provides global CSS and the app wrapper.

### Key Components

- `src/routes/Header.svelte` - Sticky nav header with mobile hamburger menu
- `src/routes/projects/Project.svelte` - Reusable project card (takes `project_img`, `project_url`, `project_name`, `project_description` props)
- `src/lib/components/Footer.svelte` - Footer (exists but currently commented out in layout)

### Styling

- Global CSS variables and base styles in `src/lib/styles/global.css`
- Color scheme: green primary (`#5C7658`), beige secondary background (`#EFE4D2`), red accent (`#BB5C4F`)
- Component-scoped styles via Svelte `<style>` blocks
- Uses CSS custom properties for spacing, colors, and transitions
- Shared animation classes: `.fade-in`, `.slide-up` (defined globally)

### Formatting

Prettier config: tabs, single quotes, no trailing commas, 100 char print width.
