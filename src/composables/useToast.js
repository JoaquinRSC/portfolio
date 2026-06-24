import { ref } from 'vue'

// Minimal app-wide toast: shared reactive state rendered once by <AppToast>.
const message = ref('')
const visible = ref(false)
let timer = null

export function useToast() {
  function showToast(text, ms = 2600) {
    message.value = text
    visible.value = true
    clearTimeout(timer)
    timer = setTimeout(() => { visible.value = false }, ms)
  }
  return { message, visible, showToast }
}
