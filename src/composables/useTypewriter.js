import { ref, onMounted, onUnmounted, watch, unref, isRef } from 'vue'

const DEFAULTS = {
  typeSpeed:   85,
  deleteSpeed: 45,
  pauseTime:   1800,
}

// `phrases` may be a plain array or a ref/getter — when it's reactive (e.g. it
// changes with the active language) the animation restarts cleanly.
export function useTypewriter(phrases, options = {}) {
  const { typeSpeed, deleteSpeed, pauseTime } = { ...DEFAULTS, ...options }

  const displayText = ref('')
  let phraseIdx = 0
  let charIdx   = 0
  let deleting  = false
  let timer     = null

  const current = () => unref(phrases)

  function tick() {
    const list = current()
    const phrase = list[phraseIdx % list.length]

    if (!deleting) {
      displayText.value = phrase.slice(0, ++charIdx)
      if (charIdx === phrase.length) {
        deleting = true
        timer = setTimeout(tick, pauseTime)
        return
      }
    } else {
      displayText.value = phrase.slice(0, --charIdx)
      if (charIdx === 0) {
        deleting  = false
        phraseIdx = (phraseIdx + 1) % list.length
      }
    }

    timer = setTimeout(tick, deleting ? deleteSpeed : typeSpeed)
  }

  function restart() {
    clearTimeout(timer)
    phraseIdx = 0
    charIdx   = 0
    deleting  = false
    displayText.value = ''
    timer = setTimeout(tick, typeSpeed)
  }

  onMounted(() => { timer = setTimeout(tick, typeSpeed) })
  onUnmounted(() => clearTimeout(timer))

  if (isRef(phrases)) watch(phrases, restart)

  return { displayText }
}
