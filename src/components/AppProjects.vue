<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">// 01 &mdash; projects</div>
        <h2 class="section-title">Things I've built</h2>
        <p class="section-sub">A selection of personal and professional projects</p>
      </div>

      <div class="projects-grid reveal" style="--delay: 0.1s">
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener"
          class="project-card"
        >
          <div class="project-preview" :style="{ background: project.gradient }">
            <div class="mockup">
              <div class="mockup-bar">
                <span class="mockup-dot" />
                <span class="mockup-dot" />
                <span class="mockup-dot" />
                <span class="mockup-address" />
              </div>
              <div class="mockup-body">
                <span class="mockup-line wide"  :style="{ background: project.accent + '55' }" />
                <span class="mockup-line med"   :style="{ background: project.accent + '33' }" />
                <div class="mockup-row">
                  <span class="mockup-block" :style="{ background: project.accent + '22' }" />
                  <span class="mockup-block" :style="{ background: project.accent + '22' }" />
                  <span class="mockup-block" :style="{ background: project.accent + '22' }" />
                </div>
                <span class="mockup-line short" :style="{ background: project.accent + '22' }" />
              </div>
            </div>
            <div class="preview-overlay" />
          </div>

          <div class="project-body">
            <div class="project-header">
              <span class="project-name">{{ project.name }}</span>
              <span v-if="project.live" class="live-badge">Live</span>
            </div>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-footer">
              <span v-if="project.language" class="lang-badge">
                <span class="lang-dot" :style="{ background: langColor(project.language) }" />
                {{ project.language }}
              </span>
              <span class="view-hint">Open ↗</span>
            </div>
          </div>
        </a>
      </div>

      <div class="section-more">
        <a href="https://github.com/JoaquinRSC" target="_blank" rel="noopener" class="more-link">
          View GitHub profile →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects, langColor } from '../data/projects.js'
</script>

<style scoped lang="scss">
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 860px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
}

.project-card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: rgba(34,197,94,0.4);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,197,94,0.08);

    .view-hint { color: var(--accent); }
  }
}

.project-preview {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.mockup {
  width: 85%;
  margin: 16px auto 0;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
  border-bottom: none;
}

.mockup-bar {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 10px;
  background: rgba(255,255,255,0.04);
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.mockup-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
  flex-shrink: 0;
}

.mockup-address {
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: rgba(255,255,255,0.05);
  margin-left: 4px;
}

.mockup-body {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  background: rgba(0,0,0,0.25);
}

.mockup-line {
  display: block;
  height: 6px;
  border-radius: 3px;

  &.wide  { width: 70%; }
  &.med   { width: 50%; }
  &.short { width: 35%; }
}

.mockup-row { display: flex; gap: 5px; }

.mockup-block {
  flex: 1;
  height: 24px;
  border-radius: 3px;
}

.preview-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(6,11,6,0.7) 100%);
  pointer-events: none;
}

.project-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 18px;
  flex: 1;
}

.project-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.project-name {
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.live-badge {
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--accent);
  border: 1px solid rgba(34,197,94,0.35);
  background: rgba(34,197,94,0.08);
  border-radius: 4px;
  padding: 2px 7px;
  flex-shrink: 0;
}

.project-desc {
  font-size: 12px;
  color: var(--muted2);
  line-height: 1.65;
  flex: 1;
}

.project-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--border);
  margin-top: 2px;
}

.lang-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: var(--muted2);
}

.lang-dot {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.view-hint {
  margin-left: auto;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
  transition: color 0.15s;
}

.section-more {
  margin-top: 28px;
  text-align: center;
}

.more-link {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted2);
  transition: color 0.15s;
  &:hover { color: var(--accent); }
}
</style>
