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
// Status flags: `live` (deployed, links out), `private` (code not public,
// proven via screenshots), `wip` (still in development).
export const projects = [
  {
    name: 'CS2 Skin Tracker',
    description:
      'Personal investment tracker for CS2 skins. Syncs from Google Sheets, enriches with Buff163 prices, and includes arbitrage detection against skin.land.',
    language: 'Vue',
    url: 'https://skin-tracker-eight.vercel.app',
    live: true,
    screenshots: [], // e.g. ['/projects/skin-tracker-1.png', '/projects/skin-tracker-2.png']
    gradient: 'linear-gradient(135deg, #0a0f0a 0%, #0d1f0d 50%, #41b88318 100%)',
    accent: '#41b883',
  },
  {
    name: 'CSFloat Buy Orders',
    description:
      'Automates CS2 skin buy orders on CSFloat using live Buff163 prices. Features a web UI, SSE-based scanning, ratio caching, and a Tampermonkey userscript for browser-relayed price fetching.',
    language: 'JavaScript',
    private: true,
    screenshots: [], // e.g. ['/projects/csfloat-1.png', '/projects/csfloat-2.png']
    gradient: 'linear-gradient(135deg, #1a1400 0%, #2d2200 50%, #f59e0b18 100%)',
    accent: '#f59e0b',
  },
  {
    name: 'MP Tracker',
    description:
      'Scraper and tracker for car listings in Montevideo. Monitors price changes and new listings over time. Early-stage work in progress.',
    language: 'JavaScript',
    private: true,
    wip: true,
    screenshots: [], // e.g. ['/projects/mp-tracker-1.png']
    gradient: 'linear-gradient(135deg, #001a14 0%, #00261d 50%, #10b98118 100%)',
    accent: '#10b981',
  },
]
