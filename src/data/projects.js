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
    description: {
      en: 'Vue 3 + Quasar PWA to track a CS2 skin investment portfolio. Syncs inventory from Google Sheets, enriches items with images and live Buff163 prices, and shows analytics (P&L, monthly profit, best/worst trades) plus arbitrage detection comparing skin.land vs Buff163.',
      es: 'PWA en Vue 3 + Quasar para trackear un portafolio de inversión en skins de CS2. Sincroniza el inventario desde Google Sheets, enriquece los ítems con imágenes y precios en vivo de Buff163, y muestra analíticas (P&L, ganancia mensual, mejores/peores trades) más detección de arbitraje comparando skin.land vs Buff163.',
    },
    language: 'Vue',
    live: true,
    demo: '/demos/skin-tracker/', // self-hosted demo build, embedded in-page (iframe)
    screenshots: ['/projects/skin-tracker-1.png'],
    gradient: 'linear-gradient(135deg, #0a0f0a 0%, #0d1f0d 50%, #41b88318 100%)',
    accent: '#41b883',
  },
  {
    name: 'AdoptMe Trader',
    description: {
      en: 'Quasar v2 SSR app (Vue 3 + Pinia + TypeScript) to value pets and judge trade fairness in Roblox Adopt Me. Cross-checks two community value sources (AMVGG and Elvebredd), derives per-form values (Fly/Ride/Neon/Mega) from base values via the AMVGG multiplier formula, and scores demand-adjusted fairness with balancing suggestions. Also browses the live AMVGG market for fair offers. All external sites are fetched server-side and cached in memory; deployed on Fly.io via a multi-stage Docker build.',
      es: 'App SSR en Quasar v2 (Vue 3 + Pinia + TypeScript) para valuar mascotas y juzgar si un trade es justo en Roblox Adopt Me. Cruza dos fuentes de valor de la comunidad (AMVGG y Elvebredd), deriva los valores por forma (Fly/Ride/Neon/Mega) desde los valores base con la fórmula de multiplicadores de AMVGG, y puntúa la justicia ajustada por demanda con sugerencias para balancear. También recorre el mercado en vivo de AMVGG buscando ofertas justas. Todos los sitios externos se consultan del lado del servidor y se cachean en memoria; deployado en Fly.io con un build Docker multi-stage.',
    },
    language: 'Vue',
    live: true,
    url: 'https://amtrader.fly.dev/', // live site, public repo — open externally
    screenshots: ['/projects/adoptme-trader-1.png'],
    gradient: 'linear-gradient(135deg, #1a0a14 0%, #2d0d22 50%, #ec489918 100%)',
    accent: '#ec4899',
  },
  {
    name: 'PokéAccounts',
    description: {
      en: 'Full-stack dashboard (Vue 3 + Quasar frontend, Node.js + Express + SQLite backend) to manage and list a Pokémon GO account inventory on the Eldorado marketplace. Uses Claude (Haiku) vision to read profile screenshots and extract structured stats (level, stardust, shinies, 100% IVs, team) plus a suggested price from comparable listings, and Sharp to auto-blur trainer names on upload for privacy. Handles bulk publish, market-based auto-repricing, pause/resume, and order/sales sync, with a sales analytics view. Adds password login (scrypt + signed session), a Web Push alert before the Eldorado token expires, a browser extension to keep that token synced, and u7buy cross-posting. PWA-ready and responsive.',
      es: 'Dashboard full-stack (frontend Vue 3 + Quasar, backend Node.js + Express + SQLite) para gestionar y publicar un inventario de cuentas de Pokémon GO en el marketplace Eldorado. Usa la visión de Claude (Haiku) para leer capturas de perfil y extraer stats estructurados (nivel, polvo estelar, shinies, IVs 100%, equipo) más un precio sugerido a partir de publicaciones comparables, y Sharp para difuminar automáticamente los nombres de entrenador al subir, por privacidad. Maneja publicación masiva, re-precio automático según el mercado, pausar/reanudar, y sincronización de órdenes/ventas, con una vista de analíticas de ventas. Suma login con contraseña (scrypt + sesión firmada), un aviso Web Push antes de que expire el token de Eldorado, una extensión de navegador para mantener ese token sincronizado, y cross-posting a u7buy. Lista para PWA y responsive.',
    },
    language: 'Vue',
    private: true,
    demo: '/demos/pokemon-accounts/', // read-only UI snapshot with sample data, embedded in-page
    screenshots: ['/projects/pokemon-accounts-1.png'],
    gradient: 'linear-gradient(135deg, #1a1500 0%, #2a2200 50%, #facc1518 100%)',
    accent: '#facc15',
  },
  {
    name: 'CSFloat Buy Orders',
    description: {
      en: 'Node.js web app that automates CS2 buy orders on CSFloat using live Buff163 prices (via SkinsTrack). Scans a skin pool, compares against CSFloat top buy orders, and places orders that pass a ratio filter, plus a background scanner that flags listings cheap enough to flip. Handles per-skin float ranges, pause/resume, and Cloudflare rate-limit backoff.',
      es: 'App web en Node.js que automatiza órdenes de compra de CS2 en CSFloat usando precios en vivo de Buff163 (vía SkinsTrack). Escanea un pool de skins, compara contra las mejores órdenes de compra de CSFloat, y coloca órdenes que pasan un filtro de ratio, más un escáner en segundo plano que marca publicaciones lo bastante baratas para revender. Maneja rangos de float por skin, pausar/reanudar, y backoff ante el rate-limit de Cloudflare.',
    },
    language: 'JavaScript',
    private: true,
    demo: '/demos/csfloat/', // read-only UI snapshot with sample data, embedded in-page
    screenshots: ['/projects/csfloat-1.png'],
    gradient: 'linear-gradient(135deg, #1a1400 0%, #2d2200 50%, #f59e0b18 100%)',
    accent: '#f59e0b',
  },
  {
    name: 'Cuidauto',
    description: {
      en: 'Vue 3 + Quasar PWA (Supabase backend) to track car maintenance and Uruguayan legal deadlines — ITV, SUCIVE/patente, SOA and libreta. Sends Web Push reminders before each obligation expires (daily pg_cron job triggering an Edge Function), with vehicle CRUD and maintenance history, expense charts with date-range filters, a public read-only vehicle page via QR, and a freemium paywall with a car limit and pro-feature gating.',
      es: 'PWA en Vue 3 + Quasar (backend Supabase) para llevar el mantenimiento del auto y los vencimientos legales uruguayos — ITV, SUCIVE/patente, SOA y libreta. Envía recordatorios Web Push antes de que venza cada obligación (un pg_cron diario que dispara una Edge Function), con CRUD de vehículos e historial de mantenimiento, gráficos de gastos con filtros por rango de fechas, una página pública de solo lectura del vehículo vía QR, y un paywall freemium con límite de autos y features pro.',
    },
    language: 'Vue',
    live: true,
    url: 'https://cuidauto.vercel.app/', // live B2C product (lands on login) — open externally
    screenshots: [], // photos coming — drop sanitized shots into public/projects/ e.g. ['/projects/cuidauto-1.png']
    gradient: 'linear-gradient(135deg, #1a0f00 0%, #2a1800 50%, #f9731618 100%)',
    accent: '#f97316',
  },
]
