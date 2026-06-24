<template>
  <section id="education" class="section">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">education</div>
        <h2 class="section-title">Academic background</h2>
      </div>

      <div class="edu-list reveal" style="--delay: 0.1s">
        <div v-for="edu in education" :key="edu.title" class="edu-item">
          <div class="edu-meta">
            <span class="edu-status">{{ edu.status }}</span>
            <span class="edu-institution">{{ edu.institution }}</span>
          </div>
          <div class="edu-body">
            <div class="edu-title">{{ edu.title }}</div>
            <div class="edu-desc">{{ edu.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { education } from '../data/education.js'
</script>

<style scoped lang="scss">
.edu-list {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.edu-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 24px;
  padding: 26px 30px;
  border-bottom: 1px solid var(--border);
  transition: background 0.15s;

  &:last-child { border-bottom: none; }
  &:hover { background: var(--surface); }

  @media (max-width: 640px) { grid-template-columns: 1fr; gap: 10px; }
  @media (max-width: 600px) { padding: 20px; }
}

.edu-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 2px;
}

.edu-status {
  display: inline-block;
  width: fit-content;
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
  background: rgba(34,197,94,0.08);
  border: 1px solid rgba(34,197,94,0.2);
  border-radius: 4px;
  padding: 3px 9px;
}

.edu-institution {
  font-size: 12px;
  color: var(--muted2);
  line-height: 1.4;
}

.edu-title {
  font-family: var(--mono);
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
  line-height: 1.4;
}

.edu-desc {
  font-size: 13px;
  color: var(--muted2);
  line-height: 1.7;
}
</style>
