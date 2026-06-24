<template>
  <header class="nav">
    <div class="container nav-inner">
      <button
        type="button"
        class="nav-burger"
        :aria-expanded="menuOpen"
        aria-label="Open menu"
        aria-controls="mobile-menu"
        @click="menuOpen = true"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      <nav class="nav-links">
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#stack">stack</a>
        <a href="#education">education</a>
      </nav>
      <div class="nav-actions">
        <a
          href="https://www.linkedin.com/in/joaquin-rossi-dev"
          target="_blank"
          rel="noopener"
          class="nav-gh"
          aria-label="LinkedIn profile"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/JoaquinRSC"
          target="_blank"
          rel="noopener"
          class="nav-gh"
          aria-label="GitHub profile"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="menu">
        <div v-if="menuOpen" class="mobile-menu-root">
          <div class="mobile-backdrop" @click="menuOpen = false" />
          <nav id="mobile-menu" class="mobile-panel" aria-label="Mobile navigation">
            <div class="mobile-head">
              <span class="mobile-brand">// menu</span>
              <button type="button" class="mobile-close" aria-label="Close menu" @click="menuOpen = false">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <a href="#about" class="mobile-link" @click="menuOpen = false">about</a>
            <a href="#projects" class="mobile-link" @click="menuOpen = false">projects</a>
            <a href="#stack" class="mobile-link" @click="menuOpen = false">stack</a>
            <a href="#education" class="mobile-link" @click="menuOpen = false">education</a>

            <div class="mobile-sep" />

            <a href="mailto:joaquinrossi55@icloud.com" class="mobile-action" @click="menuOpen = false">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 6 10-6" />
              </svg>
              Email me
            </a>
            <a href="/joaquin-rossi-cv.pdf" download="Joaquin-Rossi-CV.pdf" class="mobile-action" @click="menuOpen = false">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="M7 10l5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              Download CV
            </a>
          </nav>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'

const menuOpen = ref(false)

function onKeydown(e) {
  if (e.key === 'Escape') menuOpen.value = false
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) window.addEventListener('keydown', onKeydown)
  else window.removeEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped lang="scss">
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(6,11,6,0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.nav-burger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  margin-left: -8px;
  background: none;
  border: 1px solid var(--border2);
  border-radius: 6px;
  color: var(--accent);
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;

  &:hover { background: rgba(34,197,94,0.08); border-color: var(--accent); }
}

.nav-links {
  display: flex;
  gap: 2px;

  a {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--muted2);
    padding: 6px 12px;
    border-radius: 5px;
    transition: color 0.15s, background 0.15s;

    &:hover { color: var(--accent); background: rgba(34,197,94,0.06); }
  }
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-gh {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--accent);
  padding: 6px 14px;
  border: 1px solid var(--border2);
  border-radius: 6px;
  transition: background 0.15s, border-color 0.15s;
  flex-shrink: 0;

  &:hover { background: rgba(34,197,94,0.08); border-color: var(--accent); }
}

/* ── Mobile slide-in menu ─────────────────────────────────────────── */
.mobile-menu-root {
  position: fixed;
  inset: 0;
  z-index: 200;
}

.mobile-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(6,11,6,0.7);
  backdrop-filter: blur(2px);
}

.mobile-panel {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: min(80vw, 280px);
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  background: var(--surface);
  border-left: 1px solid var(--border2);
  box-shadow: -20px 0 50px rgba(0,0,0,0.5);
}

.mobile-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.mobile-brand {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent);
  opacity: 0.75;
}

.mobile-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: none;
  border: none;
  color: var(--muted2);
  cursor: pointer;
  transition: color 0.15s;

  &:hover { color: var(--accent); }
}

.mobile-link {
  font-family: var(--mono);
  font-size: 15px;
  color: var(--text);
  padding: 12px 10px;
  border-radius: 6px;
  transition: color 0.15s, background 0.15s;

  &:hover, &:active { color: var(--accent); background: rgba(34,197,94,0.06); }
}

.mobile-sep {
  height: 1px;
  background: var(--border);
  margin: 12px 4px;
}

.mobile-action {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--muted2);
  padding: 11px 10px;
  border-radius: 6px;
  transition: color 0.15s, background 0.15s;

  &:hover, &:active { color: var(--accent); background: rgba(34,197,94,0.06); }
}

/* Transition: backdrop fades, panel slides in from the right. */
.menu-enter-active,
.menu-leave-active { transition: opacity 0.25s ease; }
.menu-enter-active .mobile-panel,
.menu-leave-active .mobile-panel { transition: transform 0.25s ease; }
.menu-enter-from,
.menu-leave-to { opacity: 0; }
.menu-enter-from .mobile-panel,
.menu-leave-to .mobile-panel { transform: translateX(100%); }

@media (max-width: 600px) {
  .nav-burger { display: inline-flex; }
  .nav-links { display: none; }
  .nav-gh span { display: none; }
}
</style>
