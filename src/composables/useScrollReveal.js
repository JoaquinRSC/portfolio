import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(selector = '.reveal', threshold = 0.07) {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in-view')
      }),
      { threshold },
    )
    document.querySelectorAll(selector).forEach(el => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
