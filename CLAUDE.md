# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

Freshly scaffolded Astro site — currently just the `minimal` template plus Tailwind. No pages, components, or content beyond `src/pages/index.astro` exist yet. Build out structure (layouts, components, content collections) only as pages actually need it — don't pre-build scaffolding.

## Package manager

Use `bun`, not `npm`/`npx`/`yarn`. Run Astro CLI commands with `bunx astro ...`.

## Node version requirement

Astro 7 requires Node `>=22.22.0` (see `package.json` `engines`). The system Node is older (v22.20.0 at setup time). A matching version is installed via `nvm` — before running `bunx astro ...` or `bun run build`, do:

```
export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use 22.22.0
```

`bun run dev` / `bun run build` via the package.json scripts work fine without this since bun runs its own JS runtime — the nvm switch is only needed for commands that shell out to the `astro` Node binary directly (e.g. `bunx astro add`, `bunx astro check`).

## Commands

- `bun run dev` — start dev server (`localhost:4321`)
- `bun run build` — production build to `./dist/`
- `bun run preview` — preview the production build locally
- `bunx astro add <integration>` — add an integration (requires the nvm step above)
- `bunx astro check` — type-check `.astro` files

When starting the dev server for yourself (not for the user to view live), prefer `astro dev --background`, managed with `astro dev stop` / `astro dev status` / `astro dev logs`.

## `projects/` directory

Not part of this Astro app. It holds standalone source checkouts of the user's other projects (Flutter, React Native, etc.) kept around as reference material for portfolio content — don't build, lint, or treat them as part of this site's codebase.

## Architecture

- Routing is file-based: anything under `src/pages/` (`.astro` or `.md`) becomes a route named after its file path.
- Styling is Tailwind v4 via the Vite plugin (`@tailwindcss/vite`), wired in `astro.config.mjs`. The stylesheet is `src/styles/global.css` (just `@import "tailwindcss";`) — import it from the top of any top-level page/layout that needs Tailwind classes to take effect.
- No UI framework (React/Vue/Svelte) is installed. Add one with `bunx astro add <framework>` only when an interactive component actually needs it — Astro components (`.astro`) handle static markup without one.
- No content collections or layouts exist yet. When adding multiple pages that share chrome, introduce a `src/layouts/Layout.astro` at that point rather than before.

## Docs

- https://docs.astro.build/en/guides/routing/ — pages, dynamic routes, middleware
- https://docs.astro.build/en/basics/astro-components/ — Astro components
- https://docs.astro.build/en/guides/framework-components/ — React/Vue/Svelte/Preact components
- https://docs.astro.build/en/guides/content-collections/ — content collections
- https://docs.astro.build/en/guides/styling/ — styling, Tailwind
- https://docs.astro.build/en/guides/internationalization/ — i18n
