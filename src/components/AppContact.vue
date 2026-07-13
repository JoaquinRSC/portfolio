<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="contact-card reveal">
        <div class="section-header">
          <div class="section-label">{{ m.contact.label }}</div>
          <h2 class="section-title">{{ m.contact.title }}</h2>
          <p class="section-sub contact-sub">{{ m.contact.sub }}</p>
        </div>

        <div class="contact-actions">
          <a :href="mailto" class="btn-primary" @click="copyEmail">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6 10-6" />
            </svg>
            {{ m.contact.email }}
          </a>
          <a :href="contact.cvPath" :download="contact.cvFilename" class="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="M7 10l5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
            {{ m.contact.cv }}
          </a>
          <a :href="contact.linkedin" target="_blank" rel="noopener" class="btn-ghost">LinkedIn ↗</a>
          <a :href="contact.github" target="_blank" rel="noopener" class="btn-ghost">GitHub ↗</a>
        </div>

        <a :href="mailto" class="contact-email selectable" @click="copyEmail">{{ contact.email }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { contact, mailto } from '../data/contact.js'
import { useI18n } from '../composables/useI18n.js'
import { useEmail } from '../composables/useEmail.js'

const { m } = useI18n()
const { copyEmail } = useEmail()
</script>

<style scoped lang="scss">
.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 56px 32px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background:
    radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.06) 0%, transparent 60%),
    var(--surface);
}

.contact-card .section-header {
  margin-bottom: 32px;
  // The section counter increments on this header just like the others, so the
  // eyebrow number stays in sequence with the rest of the page.
}

.contact-card .section-label,
.contact-card .section-title { display: block; }

.contact-sub {
  max-width: 460px;
  margin: 10px auto 0;
  line-height: 1.7;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.contact-email {
  margin-top: 28px;
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
  transition: color 0.15s;

  @media (hover: hover) {
    &:hover { color: var(--accent); }
  }
}

@media (max-width: 600px) {
  .contact-card { padding: 40px 20px; }
  .contact-actions { width: 100%; flex-direction: column; }
  .contact-actions .btn-primary,
  .contact-actions .btn-ghost { width: 100%; justify-content: center; }
}
</style>
