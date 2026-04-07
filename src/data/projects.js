const LANG_COLORS = {
  JavaScript: '#f1e05a',
  Vue:        '#41b883',
  Python:     '#3572A5',
}

export function langColor(lang) {
  return LANG_COLORS[lang] ?? '#52525b'
}

export const projects = [
  {
    name: 'CS2 Skin Tracker',
    description:
      'Personal investment tracker for CS2 skins. Syncs from Google Sheets, enriches with Buff163 prices, and includes arbitrage detection against skin.land.',
    language: 'Vue',
    url: 'https://skin-tracker-eight.vercel.app',
    live: true,
    gradient: 'linear-gradient(135deg, #0a0f0a 0%, #0d1f0d 50%, #41b88318 100%)',
    accent: '#41b883',
  },
  {
    name: 'CSFloat Buy Orders',
    description:
      'Automates CS2 skin buy orders on CSFloat using live Buff163 prices. Features a web UI, SSE-based scanning, ratio caching, and a Tampermonkey userscript for browser-relayed price fetching.',
    language: 'JavaScript',
    url: 'https://github.com/JoaquinRSC',
    gradient: 'linear-gradient(135deg, #1a1400 0%, #2d2200 50%, #f59e0b18 100%)',
    accent: '#f59e0b',
  },
  {
    name: 'Empresa Progreso',
    description:
      'Internal management system for a logistics company. Handles contracts, partners, categories, financial ratios, and PDF generation.',
    language: 'Vue',
    url: 'https://github.com/JoaquinRSC',
    gradient: 'linear-gradient(135deg, #0a0f1e 0%, #0d1a35 50%, #3b82f618 100%)',
    accent: '#3b82f6',
  },
  {
    name: 'Pokemon Accounts',
    description:
      'Dashboard to manage Pokémon TCG accounts. Tracks published status, credentials, and includes legacy account migration from flat-file storage.',
    language: 'JavaScript',
    url: 'https://github.com/JoaquinRSC',
    gradient: 'linear-gradient(135deg, #0f0a00 0%, #1f1500 50%, #eab30818 100%)',
    accent: '#eab308',
  },
  {
    name: 'MP Tracker',
    description:
      'Scraper and tracker for car listings in Montevideo. Monitors price changes and new listings over time.',
    language: 'JavaScript',
    url: 'https://github.com/JoaquinRSC',
    gradient: 'linear-gradient(135deg, #001a14 0%, #00261d 50%, #10b98118 100%)',
    accent: '#10b981',
  },
  {
    name: 'This Portfolio',
    description:
      'Built with Vue 3 and Quasar. Dark theme, typewriter animation, scroll reveals, and a terminal-inspired design.',
    language: 'Vue',
    url: 'https://github.com/JoaquinRSC',
    gradient: 'linear-gradient(135deg, #061206 0%, #0a1f0a 50%, #22c55e18 100%)',
    accent: '#22c55e',
  },
]
