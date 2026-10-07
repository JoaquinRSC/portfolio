import { createApp } from 'vue'
import { Quasar } from 'quasar'
// SVG icon set so Quasar's built-in icons (carousel arrows/dots) render
// without loading an icon font.
import iconSet from 'quasar/icon-set/svg-mdi-v7'
import 'quasar/src/css/index.sass'
import './css/main.scss'
import { inject as injectAnalytics } from '@vercel/analytics'
import App from './App.vue'

createApp(App)
  .use(Quasar, {
    iconSet,
    config: {
      dark: true,
      brand: { primary: '#22c55e' },
    },
  })
  .mount('#app')

// Vercel Web Analytics — cookieless and privacy-friendly (no consent banner
// needed). Only reports from the deployed domain; a no-op in local dev.
injectAnalytics()

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}
