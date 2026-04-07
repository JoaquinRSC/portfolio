<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span class="footer-copy">Built with Vue &amp; Quasar</span>
      <a href="https://github.com/JoaquinRSC" target="_blank" rel="noopener" class="footer-link">
        github.com/JoaquinRSC
      </a>
      <span class="footer-loc">Montevideo, Uruguay</span>
    </div>
  </footer>
</template>

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
