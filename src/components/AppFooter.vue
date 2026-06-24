<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span class="footer-copy">{{ m.footer.built }}</span>
      <div class="footer-links">
        <a :href="mailto" class="footer-link" @click="copyEmail">
          {{ contact.email }}
        </a>
        <a :href="contact.github" target="_blank" rel="noopener" class="footer-link">
          github.com/JoaquinRSC
        </a>
        <a :href="contact.linkedin" target="_blank" rel="noopener" class="footer-link">
          linkedin.com/in/joaquin-rossi-dev
        </a>
      </div>
      <span class="footer-loc">{{ m.footer.location }}</span>
    </div>
  </footer>
</template>

<script setup>
import { contact, mailto } from '../data/contact.js'
import { useI18n } from '../composables/useI18n.js'
import { useEmail } from '../composables/useEmail.js'

const { m } = useI18n()
const { copyEmail } = useEmail()
</script>

<style scoped lang="scss">
.footer {
  padding: 28px 0;
  border-top: 1px solid var(--border);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  color: var(--muted);
}

.footer-links {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-link {
  font-family: var(--mono);
  color: var(--muted2);
  transition: color 0.15s;
  &:hover { color: var(--accent); }
}

@media (max-width: 600px) {
  .footer-inner { flex-direction: column; text-align: center; gap: 6px; }
}
</style>
