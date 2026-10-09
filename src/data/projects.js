const LANG_COLORS = {
  JavaScript: '#f1e05a',
  Vue:        '#41b883',
  TypeScript: '#3178c6',
  Python:     '#3572a5',
}

export function langColor(lang) {
  return LANG_COLORS[lang] ?? '#52525b'
}

// Tags that carry the data story get accented on the card so a recruiter
// scanning for that skillset sees it at a glance; the rest stay neutral.
const HIGHLIGHT_TAGS = new Set(['Data', 'Analytics', 'Open Data', 'Machine Learning'])

export function isHighlightTag(tag) {
  return HIGHLIGHT_TAGS.has(tag)
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
// Copy fields (all { en, es }): `summary` is the one-line pitch, `highlights`
// the 3-4 bullets a recruiter actually reads, and the optional `caseStudy`
// ({ problem, architecture, decisions, next }) opens a write-up dialog.
// Status flags: `live` (deployed), `private` (code not public, proven via
// screenshots/demo), `wip` (still in development).
// `portrait: true` marks phone-sized (portrait) screenshots so the card and
// lightbox frame them as a device instead of cover-cropping a 16:9 strip.
export const projects = [
  {
    name: 'Vidriera',
    summary: {
      en: 'Aggregator of the used-car stock of 35 Uruguayan dealerships — 2,700+ cars in one search, with price history, days in stock and a fair-price check against similar cars.',
      es: 'Agregador del stock de usados de 35 automotoras uruguayas — más de 2.700 autos en una sola búsqueda, con historial de precios, días en stock y comparación contra autos similares.',
    },
    highlights: {
      en: [
        'Ingestion pipeline in TypeScript: 17 source adapters (Multiaviso signed API, WooCommerce, Magento, Astro islands, SvelteKit, Supabase REST…), each tested against recorded responses',
        'Scheduled on pg_cron → Edge Function, with slow sites offloaded to a GitHub Actions job; every pass logged, price changes snapshotted, duplicates across dealers collapsed',
        'Fair price = median of active comparables (same model, year ±1, similar mileage), precomputed in materialized views',
        'Vue 3 + Tailwind front end with URL-synced filters, autocomplete search, email sign-in, favorites and saved searches (RLS)',
      ],
      es: [
        'Pipeline de ingesta en TypeScript: 17 adaptadores de fuentes (API firmada de Multiaviso, WooCommerce, Magento, islas de Astro, SvelteKit, REST de Supabase…), cada uno testeado contra respuestas grabadas',
        'Programado con pg_cron → Edge Function, con los sitios lentos derivados a un job de GitHub Actions; cada pasada se registra, los cambios de precio se guardan y los duplicados entre automotoras se unifican',
        'Precio justo = mediana de autos comparables activos (mismo modelo, año ±1, kilometraje similar), precalculada en vistas materializadas',
        'Frontend en Vue 3 + Tailwind con filtros en la URL, buscador con autocompletado, ingreso por email, favoritos y búsquedas guardadas (RLS)',
      ],
    },
    language: 'TypeScript',
    live: true,
    url: 'https://vidriera-uy.vercel.app/',
    screenshots: ['/projects/vidriera-1.png'],
    tags: ['Data', 'Analytics', 'Supabase', 'Tailwind'],
    gradient: 'linear-gradient(135deg, #060b1a 0%, #0c1a3d 50%, #2457f518 100%)',
    accent: '#2457f5',
  },
  {
    name: 'Vidriera Insights',
    summary: {
      en: 'Data analysis and machine-learning price model of the Uruguayan used-car market, built in Python on Vidriera’s data — 2,600 cars from 35 dealerships.',
      es: 'Análisis de datos y modelo de machine learning de precios del mercado uruguayo de autos usados, hecho en Python sobre los datos de Vidriera — 2.600 autos de 35 automotoras.',
    },
    highlights: {
      en: [
        'Gradient boosting price model (scikit-learn) with 5-fold cross-validation: within half a point of the comparables method (11.0% vs. 10.5% error) while pricing 100% of the stock instead of 57%',
        'Per-model depreciation separating age from mileage, plus value kept vs. what the same model cost 0 km in its year (e.g. a Fiat Strada keeps ~85% after 3 years, a Peugeot 208 ~62%)',
        'Electric and hybrid market share, dealer pricing vs. market, and dated snapshots that build a market history over time',
        'Live web estimator with conformally calibrated 80% price ranges; pandas + NumPy core, 23 pytest tests, CI and a weekly GitHub Action that refreshes the data',
      ],
      es: [
        'Modelo de precio con gradient boosting (scikit-learn) y validación cruzada de 5 particiones: queda a medio punto del método de comparables (11,0% vs. 10,5% de error) y tasa el 100% del stock en vez del 57%',
        'Depreciación por modelo separando edad y kilometraje, y valor que conserva frente a lo que costaba 0 km en su año (una Fiat Strada conserva ~85% a los 3 años, un Peugeot 208 ~62%)',
        'Participación de eléctricos e híbridos, precios de cada automotora vs. el mercado, y snapshots fechados que arman un historial del mercado',
        'Tasador web en vivo con rangos de precio del 80% calibrados (conformal); núcleo en pandas + NumPy, 23 tests en pytest, CI y una GitHub Action semanal que actualiza los datos',
      ],
    },
    language: 'Python',
    live: true,
    url: 'https://vidriera-insights.vercel.app', // web price estimator; code linked from the page
    screenshots: ['/projects/vidriera-insights-1.png', '/projects/vidriera-insights-2.png'],
    tags: ['Data', 'Machine Learning', 'Python', 'GitHub Actions'],
    gradient: 'linear-gradient(135deg, #07101f 0%, #0b1e3a 50%, #3572a518 100%)',
    accent: '#3572a5',
  },
  {
    name: 'Cuidauto',
    summary: {
      en: 'PWA for Uruguayan drivers: maintenance, legal deadlines (ITV, SOA, patente, libreta) and running costs in one place, with push reminders before anything expires.',
      es: 'PWA para conductores uruguayos: mantenimiento, vencimientos legales (ITV, SOA, patente, libreta) y costos del auto en un solo lugar, con avisos push antes de que venza algo.',
    },
    highlights: {
      en: [
        'Daily pg_cron job → Edge Function → one grouped Web Push per user, deduplicated with a reminder log',
        'Fuel costs priced from official ANCAP data, pulled monthly from Uruguay’s open-data catalog',
        'Row Level Security on every table; the free-plan limit is enforced by a DB trigger, not just the UI',
        'Offline garage, document vault with signed URLs, QR history page, data export and account deletion',
      ],
      es: [
        'pg_cron diario → Edge Function → un Web Push agrupado por usuario, sin repetidos gracias a un log de avisos',
        'Costo de combustible con precios oficiales de ANCAP, traídos cada mes del catálogo de datos abiertos',
        'Row Level Security en todas las tablas; el límite del plan gratis lo impone un trigger, no solo la UI',
        'Garage offline, guantera digital con URLs firmadas, historial público por QR, exportación de datos y baja de cuenta',
      ],
    },
    caseStudy: {
      problem: {
        en: 'In Uruguay a car comes with several legal deadlines — ITV inspection, SOA insurance, patente, driver’s licence — on top of regular maintenance, and each one lives somewhere different. Missing one means a fine. I wanted a single app that keeps all of it and warns you before anything is due, without having to open it.',
        es: 'En Uruguay un auto trae varios vencimientos legales — ITV, SOA, patente, libreta — además del mantenimiento, y cada uno vive en un lugar distinto. Olvidarse uno es una multa. Quería una sola app que lo junte todo y te avise antes de que venza, sin tener que abrirla.',
      },
      architecture: {
        en: [
          'Vue 3 + Quasar PWA on Vercel (Pinia stores), with a custom Workbox service worker that caches Supabase reads so the garage works offline.',
          'Supabase Postgres with RLS on every table; Auth (email + Google), a private bucket for documents and a public one for car photos.',
          'A daily pg_cron job calls the send-reminders Edge Function, protected by a shared-secret header.',
          'The function works out what is due soon or overdue (by km or by date, whichever comes first), skips anything already sent via reminder_log, and sends one grouped Web Push per user (VAPID).',
          'A monthly Edge Function imports ANCAP fuel prices from catalogodatos.gub.uy, smoothing over the feed’s gaps and outliers.',
        ],
        es: [
          'PWA en Vue 3 + Quasar sobre Vercel (stores con Pinia), con un service worker propio de Workbox que cachea las lecturas de Supabase para que el garage ande offline.',
          'Supabase Postgres con RLS en todas las tablas; Auth (email + Google), un bucket privado para documentos y uno público para fotos.',
          'Un job diario de pg_cron llama a la Edge Function send-reminders, protegida con un header de secreto compartido.',
          'La función calcula qué está por vencer o vencido (por km o por fecha, lo que llegue primero), saltea lo ya avisado con reminder_log, y manda un Web Push agrupado por usuario (VAPID).',
          'Una Edge Function mensual importa los precios de combustible de ANCAP desde catalogodatos.gub.uy, suavizando los huecos y valores raros del feed.',
        ],
      },
      decisions: {
        en: [
          'Rules live in the database, not the client: RLS and a SECURITY DEFINER trigger mean a tampered client can’t read other users’ data or skip the car limit.',
          'The Mercado Pago webhook never trusts its payload — it verifies the HMAC signature (timing-safe) and re-fetches the subscription before touching a user’s plan.',
          'Reminders, deadlines and push stay free on purpose; only charts and the QR page are premium, so what saves you from a fine is never paywalled.',
          'Privacy by design for Ley 18.331: account deletion wipes storage and cascades through every table, and exports (JSON / CSV) guard against CSV formula injection.',
        ],
        es: [
          'Las reglas viven en la base, no en el cliente: RLS y un trigger SECURITY DEFINER hacen que un cliente modificado no pueda leer datos ajenos ni saltear el límite de autos.',
          'El webhook de Mercado Pago no confía en el payload — verifica la firma HMAC (comparación timing-safe) y vuelve a pedir la suscripción antes de tocar el plan.',
          'Avisos, vencimientos y push son gratis a propósito; solo los gráficos y el QR son premium, para no cobrar por lo que te evita una multa.',
          'Privacidad desde el diseño por la Ley 18.331: la baja de cuenta borra el storage y cascadea por todas las tablas, y las exportaciones (JSON / CSV) evitan la inyección de fórmulas.',
        ],
      },
      next: {
        en: 'The due-date rules currently exist twice — in the app (unit-tested with Vitest) and mirrored in the Edge Function. Next I’d move them into one shared module so they can’t drift, add an end-to-end test for the reminder pipeline, and take the already-integrated Mercado Pago subscriptions to production.',
        es: 'Las reglas de vencimiento hoy existen dos veces — en la app (con tests unitarios en Vitest) y replicadas en la Edge Function. Lo próximo sería moverlas a un módulo compartido para que no se desincronicen, sumar un test end-to-end del pipeline de avisos, y llevar a producción las suscripciones de Mercado Pago, que ya están integradas.',
      },
    },
    language: 'Vue',
    live: true,
    url: 'https://cuidauto.vercel.app/', // live B2C product (lands on login) — open externally
    portrait: true, // mobile-first PWA: screenshots are phone-sized (portrait)
    screenshots: [
      '/projects/cuidauto-1.png', // garage + expense chart
      '/projects/cuidauto-2.png', // vehicle detail + service history
      '/projects/cuidauto-3.png', // legal deadlines (ITV / SOA / patente)
      '/projects/cuidauto-4.png', // public QR share
      '/projects/cuidauto-5.png', // freemium paywall
      '/projects/cuidauto-6.png', // settings + premium
    ],
    tags: ['PWA', 'Supabase', 'Open Data', 'Web Push'],
    gradient: 'linear-gradient(135deg, #1a0f00 0%, #2a1800 50%, #f9731618 100%)',
    accent: '#f97316',
  },
  {
    name: 'CS2 Skin Tracker',
    summary: {
      en: 'PWA that tracks a CS2 skin trading portfolio — 794 trades so far — with P&L analytics, an equity curve and portfolio value over time.',
      es: 'PWA que trackea un portafolio de trading de skins de CS2 — 794 trades hasta ahora — con analíticas de P&L, curva de equity y valor del portafolio en el tiempo.',
    },
    highlights: {
      en: [
        'Data pipeline: Google Sheets CSV → custom parser (fixes messy dates and ×N quantities) → item images and Buff163 prices',
        'GitHub Actions refreshes the data every 6 h, snapshots daily portfolio value and triggers a Vercel redeploy',
        'Hand-built SVG charts (no chart library): monthly profit, allocation, per-item P&L, equity curve',
        'Vercel serverless API with an origin allowlist and rate limiting; 42 Vitest tests run in CI',
      ],
      es: [
        'Pipeline de datos: CSV de Google Sheets → parser propio (arregla fechas sucias y cantidades ×N) → imágenes y precios de Buff163',
        'GitHub Actions refresca los datos cada 6 h, guarda un snapshot diario del valor y dispara un redeploy en Vercel',
        'Gráficos SVG hechos a mano (sin librería): ganancia mensual, distribución, P&L por ítem, curva de equity',
        'API serverless en Vercel con allowlist de orígenes y rate limiting; 42 tests en Vitest corriendo en CI',
      ],
    },
    language: 'Vue',
    live: true,
    demo: '/demos/skin-tracker/', // self-hosted demo build, embedded in-page (iframe)
    screenshots: ['/projects/skin-tracker-1.png'],
    tags: ['Data', 'Analytics', 'GitHub Actions'],
    gradient: 'linear-gradient(135deg, #0a0f0a 0%, #0d1f0d 50%, #41b88318 100%)',
    accent: '#41b883',
  },
  {
    name: 'AdoptMe Trader',
    summary: {
      en: 'Server-rendered PWA that gives any Roblox Adopt Me trade a WIN / FAIR / LOSE verdict, cross-checking two community value sources across 775 pets and 783 items.',
      es: 'PWA renderizada en el servidor que le da a cualquier trade de Roblox Adopt Me un veredicto WIN / FAIR / LOSE, cruzando dos fuentes de valores sobre 775 mascotas y 783 ítems.',
    },
    highlights: {
      en: [
        'Derives every pet form (Fly / Ride / Neon / Mega) from base values with the AMVGG multiplier formula',
        'Shareable trade links with a PNG preview image rendered server-side from SVG (resvg)',
        'SSR pet pages with per-page meta tags and a generated sitemap for SEO',
        'GitHub Actions re-fetches both sources every 4 h and redeploys to Fly.io (Docker) only when values change',
      ],
      es: [
        'Deriva cada forma de mascota (Fly / Ride / Neon / Mega) desde el valor base con la fórmula de multiplicadores de AMVGG',
        'Links de trade compartibles con una imagen de preview PNG generada en el servidor desde SVG (resvg)',
        'Páginas SSR por mascota con meta tags propios y sitemap generado para SEO',
        'GitHub Actions vuelve a traer ambas fuentes cada 4 h y redeploya en Fly.io (Docker) solo si cambiaron los valores',
      ],
    },
    language: 'TypeScript',
    live: true,
    url: 'https://amtrader.fly.dev/', // live site, public repo — open externally
    screenshots: ['/projects/adoptme-trader-1.png'],
    tags: ['SSR', 'Data', 'Docker', 'CI/CD'],
    gradient: 'linear-gradient(135deg, #1a0a14 0%, #2d0d22 50%, #ec489918 100%)',
    accent: '#ec4899',
  },
  {
    name: 'CSFloat Buy Orders',
    summary: {
      en: 'Self-hosted Node.js bot that runs a CS2 buy-order strategy on CSFloat against live Buff163 prices — 116 orders filled and logged to Google Sheets so far.',
      es: 'Bot en Node.js self-hosted que ejecuta una estrategia de órdenes de compra de CS2 en CSFloat contra precios en vivo de Buff163 — 116 órdenes ejecutadas y registradas en Google Sheets hasta ahora.',
    },
    highlights: {
      en: [
        'Per-skin ratio threshold scaled by liquidity, ignoring narrow “float-hunter” bids when reading the top bid',
        'Prioritised scan of a 4,000+ skin pool, using an on-disk ratio cache to cut API calls',
        'Maintenance mode reprices open orders and fixes their float ranges; a background flip scanner streams over SSE',
        'Rate-limit backoff driven by CSFloat’s headers, a balance-based order cap, dry-run mode and resumable runs',
      ],
      es: [
        'Umbral de ratio por skin escalado según la liquidez, ignorando las ofertas de “float-hunters” al leer la mejor orden',
        'Escaneo priorizado de un pool de más de 4.000 skins, con un caché de ratios en disco para ahorrar llamadas',
        'Modo mantenimiento que re-precia las órdenes abiertas y corrige sus rangos de float; escáner de reventa en segundo plano por SSE',
        'Backoff según los headers de rate-limit de CSFloat, tope de órdenes según el saldo, modo dry-run y corridas reanudables',
      ],
    },
    language: 'JavaScript',
    private: true,
    demo: '/demos/csfloat/', // read-only UI snapshot with sample data, embedded in-page
    screenshots: ['/projects/csfloat-1.png'],
    tags: ['Automation', 'Data', 'Node.js'],
    gradient: 'linear-gradient(135deg, #1a1400 0%, #2d2200 50%, #f59e0b18 100%)',
    accent: '#f59e0b',
  },
]
