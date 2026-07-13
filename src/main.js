import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './css/main.scss'
import { inject as injectAnalytics } from '@vercel/analytics'
import App from './App.vue'

createApp(App)
  .use(Quasar, {
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
