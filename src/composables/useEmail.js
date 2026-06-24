import { contact } from '../data/contact.js'
import { useToast } from './useToast.js'
import { useI18n } from './useI18n.js'

// Shared "email me" behaviour: still lets the mailto link open a mail client
// (kept as the anchor href), and additionally copies the address with a toast
// so there's always feedback — even when no mail client is configured.
export function useEmail() {
  const { showToast } = useToast()
  const { m } = useI18n()

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email)
    } catch { /* clipboard unavailable — the mailto link still fires */ }
    showToast(`${m.value.toast.emailCopied} — ${contact.email}`)
  }

  return { copyEmail }
}
