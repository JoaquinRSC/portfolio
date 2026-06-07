# Joaquín Rossi — Portfolio

My personal developer portfolio. Built with **Vue 3 + Quasar + Vite**, with a
dark, terminal-inspired design and **interactive in-page demos** of my projects
that run on sample data — no backend and no real accounts.

**Live:** https://joaquinrossi.vercel.app

## Highlights

- **Single-page site** — hero, projects, stack and education sections.
- **Embedded project demos** — most project cards open the app in-page (in an
  iframe), running on bundled sample data so there are no real accounts and no
  backend involved:
  - **CS2 Skin Tracker** — a Vue 3 + Quasar PWA (inventory + analytics) built
    with a `DEMO_MODE` flag that loads sample data and skips every API call.
  - **PokéAccounts** — a read-only snapshot of the marketplace dashboard
    (Vue 3 + Quasar) running on bundled sample data.
  - **CSFloat Buy Orders** — the full automation dashboard, with a mock layer
    that intercepts `fetch`/`EventSource` to simulate the live scan and
    opportunities flow.
- **Details** — Open Graph / Twitter link previews, an SVG favicon, scroll
  reveals, a typewriter hero and a responsive layout.

## Tech

- Vue 3 (`<script setup>`), Quasar, Vite, SCSS
- Deployed on Vercel

## Development

```bash
npm install
npm run dev      # dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Project demos

The demos are self-hosted under `public/demos/<name>/` and embedded from the
project cards, so there is no separate deployment per demo. They run on bundled
sample data only; the generators and the CSFloat mock live in `scripts/`.
