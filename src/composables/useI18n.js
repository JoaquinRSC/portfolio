import { ref, computed } from 'vue'
import { messages } from '../data/i18n.js'

// Shared, app-wide language state. Defined at module scope so every component
// reads and writes the same reactive ref. Defaults to English (matches the
// page's SEO/OG locale) and persists the visitor's choice.
const SUPPORTED = ['en', 'es']
const STORAGE_KEY = 'lang'

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED.includes(saved)) return saved
  } catch { /* localStorage unavailable */ }
  return 'en'
}

const lang = ref(initialLang())
if (typeof document !== 'undefined') document.documentElement.lang = lang.value

export function useI18n() {
  const m = computed(() => messages[lang.value])

  function setLang(next) {
    if (!SUPPORTED.includes(next) || next === lang.value) return
    lang.value = next
    document.documentElement.lang = next
    try { localStorage.setItem(STORAGE_KEY, next) } catch { /* ignore */ }
  }

  return { lang, m, setLang, supported: SUPPORTED }
}
