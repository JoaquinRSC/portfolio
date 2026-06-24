<template>
  <section class="hero">
    <div class="hero-grid-wrap" aria-hidden="true">
      <div class="hero-grid-plane" />
      <div class="hero-grid-fade" />
    </div>
    <div class="hero-center-glow" aria-hidden="true" />

    <div class="container hero-content">
      <div class="hero-pre">{{ m.hero.pre }}</div>
      <h1 class="hero-name">
        {{ m.hero.greetPre }}<span class="hero-accent">Joaquín</span>{{ m.hero.greetPost }}
      </h1>
      <div class="hero-typewriter" aria-live="polite">
        <span class="typed-text">{{ displayText }}</span><span class="cursor" aria-hidden="true">_</span>
      </div>
      <p class="hero-bio">{{ m.hero.bio }}</p>
      <div class="hero-stats">
        <div class="stat-item">
          <span class="stat-num">5+</span>
          <span class="stat-label">{{ m.hero.stats.projects }}</span>
        </div>
        <span class="stat-sep" aria-hidden="true">/</span>
        <div class="stat-item">
          <span class="stat-num">6+</span>
          <span class="stat-label">{{ m.hero.stats.years }}</span>
        </div>
        <span class="stat-sep" aria-hidden="true">/</span>
        <div class="stat-item">
          <span class="stat-num">5</span>
          <span class="stat-label">{{ m.hero.stats.languages }}</span>
        </div>
      </div>
      <div class="hero-actions">
        <a href="#projects" class="btn-primary">{{ m.hero.actions.projects }}</a>
        <a :href="contact.cvPath" :download="contact.cvFilename" class="btn-ghost">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="M7 10l5 5 5-5" />
            <path d="M12 15V3" />
          </svg>
          {{ m.hero.actions.cv }}
        </a>
        <a :href="mailto" class="btn-ghost" @click="copyEmail">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 7 10 6 10-6" />
          </svg>
          {{ m.hero.actions.email }}
        </a>
        <a :href="contact.github" target="_blank" rel="noopener" class="btn-ghost">
          GitHub ↗
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useTypewriter } from '../composables/useTypewriter.js'
import { contact, mailto } from '../data/contact.js'
import { useI18n } from '../composables/useI18n.js'
import { useEmail } from '../composables/useEmail.js'

const { m } = useI18n()
const { copyEmail } = useEmail()
const roles = computed(() => m.value.hero.roles)
const { displayText } = useTypewriter(roles)
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  padding: 0 0 100px;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}

.hero-grid-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 62%;
  pointer-events: none;
  overflow: hidden;
}

.hero-grid-plane {
  position: absolute;
  inset: -60% -60% 0;
  background-image:
    linear-gradient(rgba(34,197,94,0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34,197,94,0.14) 1px, transparent 1px);
  background-size: 70px 70px;
  transform: perspective(380px) rotateX(55deg);
  transform-origin: 50% 100%;
}

.hero-grid-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    var(--bg) 0%,
    transparent 25%,
    transparent 70%,
    var(--bg) 100%
  );
}

.hero-center-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 350px;
  background: radial-gradient(ellipse at 50% 30%, rgba(34,197,94,0.12) 0%, transparent 65%);
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding-top: 130px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-pre {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--accent);
  margin-bottom: 20px;
  opacity: 0.75;
  letter-spacing: 0.5px;
}

.hero-name {
  font-family: var(--mono);
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.1;
  color: var(--text);
  margin-bottom: 16px;
}

.hero-accent {
  color: var(--accent);
  text-shadow: 0 0 40px rgba(34,197,94,0.4);
}

.hero-typewriter {
  font-family: var(--mono);
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  font-weight: 700;
  color: var(--muted2);
  margin-bottom: 28px;
  min-height: 2rem;
}

.typed-text { color: var(--text); }

.cursor {
  color: var(--accent);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.hero-bio {
  font-size: 15px;
  line-height: 1.85;
  color: var(--muted2);
  max-width: 480px;
  margin-bottom: 44px;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 44px;
  padding: 20px 36px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: rgba(34,197,94,0.03);
  flex-wrap: wrap;
  justify-content: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.stat-num {
  font-family: var(--mono);
  font-size: 24px;
  font-weight: 700;
  color: var(--accent);
  text-shadow: 0 0 20px rgba(34,197,94,0.3);
}

.stat-label {
  font-size: 11px;
  color: var(--muted2);
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

.stat-sep {
  font-family: var(--mono);
  font-size: 20px;
  color: var(--border2);
  user-select: none;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 768px) {
  .hero-content { padding-top: 100px; }
  .hero-stats { gap: 16px; padding: 16px 24px; }
}

@media (max-width: 600px) {
  .hero { padding: 0 0 64px; }
  .hero-content { padding-top: 80px; }
  .hero-name { letter-spacing: -0.5px; }
  .hero-bio { font-size: 14px; }
  .hero-stats { width: 100%; justify-content: space-around; padding: 16px 12px; gap: 8px; }
  .stat-sep { display: none; }
  .hero-actions { width: 100%; flex-direction: column; }
  .hero-actions :deep(.btn-primary),
  .hero-actions :deep(.btn-ghost) { width: 100%; justify-content: center; }
}

@media (max-width: 380px) {
  .hero-name { font-size: 2rem; }
  .hero-typewriter { font-size: 1rem; }
  .stat-num { font-size: 20px; }
}
</style>
