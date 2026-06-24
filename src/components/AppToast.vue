<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="visible" class="toast" role="status" aria-live="polite">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        <span>{{ message }}</span>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useToast } from '../composables/useToast.js'

const { visible, message } = useToast()
</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  z-index: 300;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  max-width: calc(100vw - 32px);
  padding: 11px 18px;
  border-radius: 999px;
  font-family: var(--mono);
  font-size: 13px;
  color: var(--text);
  background: rgba(6,11,6,0.92);
  border: 1px solid rgba(34,197,94,0.4);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  backdrop-filter: blur(8px);

  svg { color: var(--accent); flex-shrink: 0; }
  span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
}

.toast-enter-active,
.toast-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.toast-enter-from,
.toast-leave-to { opacity: 0; transform: translate(-50%, 12px); }
</style>
