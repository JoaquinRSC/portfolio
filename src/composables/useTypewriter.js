import { ref, onMounted, onUnmounted } from 'vue'

const DEFAULTS = {
  typeSpeed:   85,
  deleteSpeed: 45,
  pauseTime:   1800,
}

export function useTypewriter(phrases, options = {}) {
  const { typeSpeed, deleteSpeed, pauseTime } = { ...DEFAULTS, ...options }

  const displayText = ref('')
  let phraseIdx = 0
  let charIdx   = 0
  let deleting  = false
  let timer     = null

  function tick() {
    const phrase = phrases[phraseIdx]

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
        phraseIdx = (phraseIdx + 1) % phrases.length
      }
    }

    timer = setTimeout(tick, deleting ? deleteSpeed : typeSpeed)
  }

  onMounted(() => { timer = setTimeout(tick, typeSpeed) })
  onUnmounted(() => clearTimeout(timer))

  return { displayText }
}
