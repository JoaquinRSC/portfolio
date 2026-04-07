<template>
  <div class="portfolio">
    <div class="bg-grid" aria-hidden="true" />
    <div class="bg-glow" aria-hidden="true" />

    <AppNav />
    <AppHero />
    <AppProjects />
    <AppStack />
    <AppEducation />
    <AppFooter />
  </div>
</template>

<script setup>
import AppNav       from './components/AppNav.vue'
import AppHero      from './components/AppHero.vue'
import AppProjects  from './components/AppProjects.vue'
import AppStack     from './components/AppStack.vue'
import AppEducation from './components/AppEducation.vue'
import AppFooter    from './components/AppFooter.vue'
import { useScrollReveal } from './composables/useScrollReveal.js'

useScrollReveal()
</script>
