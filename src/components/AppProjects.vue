<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">// 01 &mdash; projects</div>
        <h2 class="section-title">Things I've built</h2>
        <p class="section-sub">
          Live demos where possible, and sanitized previews of private work
        </p>
      </div>

      <div class="projects-grid reveal" style="--delay: 0.1s">
        <article
          v-for="project in projects"
          :key="project.name"
          class="project-card"
        >
          <div
            class="project-preview"
            :class="{ clickable: hasAction(project) }"
            :style="project.screenshots?.length ? null : { background: project.gradient }"
            :role="hasAction(project) ? 'button' : null"
            :tabindex="hasAction(project) ? 0 : null"
            @click="onPreviewClick(project)"
            @keydown.enter="onPreviewClick(project)"
          >
            <template v-if="project.screenshots?.length">
              <img
                :src="project.screenshots[0]"
                :alt="`${project.name} screenshot`"
                class="preview-img"
                loading="lazy"
              />
              <div class="preview-zoom">
                <template v-if="project.demo">▶ Try it live</template>
                <template v-else>
                  ⤢ {{ project.screenshots.length }}
                  screenshot{{ project.screenshots.length > 1 ? 's' : '' }}
                </template>
              </div>
            </template>

            <div v-else class="mockup">
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
              <span v-if="project.live" class="badge badge-live">Live</span>
              <span v-else-if="project.wip" class="badge badge-wip">In Progress</span>
              <span v-if="project.private" class="badge badge-private">Private</span>
            </div>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-footer">
              <span v-if="project.language" class="lang-badge">
                <span class="lang-dot" :style="{ background: langColor(project.language) }" />
                {{ project.language }}
              </span>
              <button
                v-if="project.demo"
                type="button"
                class="action-hint as-button"
                @click="openEmbed(project)"
              >
                Try demo ▶
              </button>
              <a
                v-else-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener"
                class="action-hint"
              >
                Open ↗
              </a>
              <button
                v-else-if="project.screenshots?.length"
                type="button"
                class="action-hint as-button"
                @click="openLightbox(project)"
              >
                Screenshots ⤢
              </button>
              <span v-else class="action-hint muted">Code private</span>
            </div>
          </div>
        </article>
      </div>

      <div class="section-more">
        <a href="https://github.com/JoaquinRSC" target="_blank" rel="noopener" class="more-link">
          View GitHub profile →
        </a>
      </div>
    </div>

    <q-dialog v-model="lightbox.open">
      <q-card class="lightbox-card">
        <div class="lightbox-head">
          <span class="lightbox-title">{{ lightbox.title }}</span>
          <q-btn flat round dense icon="close" class="lightbox-close" @click="lightbox.open = false" />
        </div>
        <q-carousel
          v-model="lightbox.slide"
          animated
          arrows
          :navigation="lightbox.images.length > 1"
          infinite
          swipeable
          control-color="primary"
          class="lightbox-carousel"
        >
          <q-carousel-slide
            v-for="(src, i) in lightbox.images"
            :key="i"
            :name="i"
            class="lightbox-slide"
          >
            <img :src="src" :alt="`${lightbox.title} screenshot ${i + 1}`" class="lightbox-img" />
          </q-carousel-slide>
        </q-carousel>
      </q-card>
    </q-dialog>

    <q-dialog v-model="embed.open" maximized @hide="embed.url = ''">
      <q-card class="embed-card">
        <div class="embed-head">
          <span class="embed-title">{{ embed.title }} · live demo · sample data</span>
          <div class="embed-actions">
            <a :href="embed.url" target="_blank" rel="noopener" class="embed-open">
              Open in new tab ↗
            </a>
            <q-btn flat round dense icon="close" class="lightbox-close" @click="embed.open = false" />
          </div>
        </div>
        <iframe
          v-if="embed.url"
          :src="embed.url"
          class="embed-frame"
          title="Live demo"
          loading="lazy"
        />
      </q-card>
    </q-dialog>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { projects, langColor } from '../data/projects.js'

const lightbox = reactive({ open: false, slide: 0, title: '', images: [] })
const embed = reactive({ open: false, title: '', url: '' })

function hasAction(project) {
  return Boolean(project.demo || project.screenshots?.length || project.url)
}

function openLightbox(project) {
  lightbox.images = project.screenshots
  lightbox.title = project.name
  lightbox.slide = 0
  lightbox.open = true
}

function openEmbed(project) {
  embed.title = project.name
  embed.url = project.demo
  embed.open = true
}

function onPreviewClick(project) {
  if (project.demo) {
    openEmbed(project)
  } else if (project.screenshots?.length) {
    openLightbox(project)
  } else if (project.url) {
    window.open(project.url, '_blank', 'noopener')
  }
}
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

    .action-hint:not(.muted) { color: var(--accent); }
    .preview-img { transform: scale(1.04); }
  }
}

.project-preview {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  &.clickable { cursor: pointer; }
  &:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
}

.preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 0.3s ease;
}

.preview-zoom {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 700;
  color: var(--text);
  background: rgba(6,11,6,0.7);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 5px;
  padding: 3px 8px;
  backdrop-filter: blur(4px);
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

.badge {
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  border-radius: 4px;
  padding: 2px 7px;
  flex-shrink: 0;
}

.badge-live {
  color: var(--accent);
  border: 1px solid rgba(34,197,94,0.35);
  background: rgba(34,197,94,0.08);
}

.badge-wip {
  color: #f59e0b;
  border: 1px solid rgba(245,158,11,0.35);
  background: rgba(245,158,11,0.08);
}

.badge-private {
  color: var(--muted2);
  border: 1px solid var(--border2);
  background: rgba(255,255,255,0.02);
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

.action-hint {
  margin-left: auto;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
  transition: color 0.15s;

  &.as-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  &.muted { cursor: default; }
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

/* Lightbox */
.lightbox-card {
  width: 100%;
  max-width: 1000px;
  background: var(--bg);
  border: 1px solid var(--border2);
}

.lightbox-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 10px 18px;
  border-bottom: 1px solid var(--border);
}

.lightbox-title {
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
}

.lightbox-close { color: var(--muted2); }

/* Match the carousel to the 16:9 screenshots so they fill it with no black
   bars (capped on short viewports). */
.lightbox-carousel {
  background: #000;
  width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
  max-height: 82vh;
}

.lightbox-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.lightbox-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Embedded live demo */
.embed-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--bg);
}

.embed-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 8px 8px 18px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

.embed-title {
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.embed-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.embed-open {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted2);
  white-space: nowrap;
  transition: color 0.15s;
  &:hover { color: var(--accent); }
}

.embed-frame {
  flex: 1;
  width: 100%;
  border: 0;
  background: #060b06;
}
</style>
