const LANG_COLORS = {
  JavaScript: '#f1e05a',
  Vue:        '#41b883',
  Python:     '#3572A5',
}

export function langColor(lang) {
  return LANG_COLORS[lang] ?? '#52525b'
}

// Showing proof of private projects without exposing code or data:
// drop sanitized screenshots (blur prices, names, credentials) into
// `public/projects/` and list their paths in `screenshots`. The card then
// shows them in a lightbox gallery. While `screenshots` is empty, the card
// falls back to the abstract mockup preview, so nothing breaks until the
// images are added.
//
// Action fields (checked in this priority): `demo` (URL embedded in-page via
// iframe so visitors try it without leaving), `screenshots` (open a lightbox),
// `url` (open externally).
// Status flags: `live` (deployed), `private` (code not public, proven via
// screenshots/demo), `wip` (still in development).
export const projects = [
  {
    name: 'CS2 Skin Tracker',
    description:
      'Vue 3 + Quasar PWA to track a CS2 skin investment portfolio. Syncs inventory from Google Sheets, enriches items with images and live Buff163 prices, and shows analytics (P&L, monthly profit, best/worst trades) plus arbitrage detection comparing skin.land vs Buff163.',
    language: 'Vue',
    live: true,
    demo: 'https://skin-tracker-demo.vercel.app', // embedded in-page (iframe), sample data
    screenshots: ['/projects/skin-tracker-1.png'],
    gradient: 'linear-gradient(135deg, #0a0f0a 0%, #0d1f0d 50%, #41b88318 100%)',
    accent: '#41b883',
  },
  {
    name: 'CSFloat Buy Orders',
    description:
      'Node.js web app that automates CS2 buy orders on CSFloat using live Buff163 prices (via SkinsTrack). Scans a skin pool, compares against CSFloat top buy orders, and places orders that pass a ratio filter, plus a background scanner that flags listings cheap enough to flip. Handles per-skin float ranges, pause/resume, and Cloudflare rate-limit backoff.',
    language: 'JavaScript',
    private: true,
    screenshots: [], // e.g. ['/projects/csfloat-1.png', '/projects/csfloat-2.png']
    gradient: 'linear-gradient(135deg, #1a1400 0%, #2d2200 50%, #f59e0b18 100%)',
    accent: '#f59e0b',
  },
  {
    name: 'MP Tracker',
    description:
      'Puppeteer scraper that tracks online car listings in Montevideo, monitoring price drops and new listings over time. Early-stage work in progress.',
    language: 'JavaScript',
    private: true,
    wip: true,
    screenshots: [], // e.g. ['/projects/mp-tracker-1.png']
    gradient: 'linear-gradient(135deg, #001a14 0%, #00261d 50%, #10b98118 100%)',
    accent: '#10b981',
  },
]
