<template>
  <section id="stack" class="section">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">// 02 &mdash; stack</div>
        <h2 class="section-title">Technologies I use</h2>
      </div>

      <div class="stack-sections reveal" style="--delay: 0.1s">
        <div v-for="group in skills" :key="group.cat" class="stack-group">
          <div class="stack-cat-label">
            <span>{{ group.cat }}</span>
          </div>
          <div class="tech-grid">
            <a
              v-for="tech in group.items"
              :key="tech.name"
              :href="tech.url"
              target="_blank"
              rel="noopener"
              class="tech-card"
              :aria-label="`${tech.name} — open official site`"
            >
              <span class="tech-link-icon" aria-hidden="true">↗</span>
              <img
                :src="tech.icon"
                :alt="tech.name"
                class="tech-icon"
                :class="{ invert: tech.invert }"
                loading="lazy"
                width="38"
                height="38"
              />
              <span class="tech-name">{{ tech.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills } from '../data/skills.js'
</script>

<style scoped lang="scss">
.stack-sections {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.stack-cat-label {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;

  span {
    font-family: var(--mono);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--accent);
    opacity: 0.75;
    white-space: nowrap;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 18px 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  min-width: 82px;
  transition: border-color 0.2s, transform 0.2s, background 0.2s;

  &:hover {
    border-color: rgba(34,197,94,0.35);
    background: var(--surface2);
    transform: translateY(-3px);

    .tech-link-icon { opacity: 1; }
    .tech-name { color: var(--accent); }
  }
}

.tech-link-icon {
  position: absolute;
  top: 7px;
  right: 8px;
  font-size: 9px;
  color: var(--accent);
  opacity: 0;
  transition: opacity 0.15s;
}

.tech-icon {
  width: 38px;
  height: 38px;
  object-fit: contain;

  &.invert { filter: invert(1); }
}

.tech-name {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--muted2);
  text-align: center;
  white-space: nowrap;
  transition: color 0.15s;
}

@media (max-width: 600px) {
  .tech-grid { gap: 8px; }
  .tech-card { min-width: 72px; padding: 14px 10px; }
  .tech-icon { width: 30px; height: 30px; }
}

@media (max-width: 380px) {
  .tech-card { min-width: 64px; padding: 12px 8px; }
  .tech-name { font-size: 9px; }
}
</style>
