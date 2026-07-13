<template>
  <div class="portfolio">
    <div class="bg-grid" aria-hidden="true" />
    <div class="bg-glow" aria-hidden="true" />

    <AppNav />
    <AppHero />
    <AppAbout />
    <AppProjects />
    <AppStack />
    <AppEducation />
    <AppContact />
    <AppFooter />
    <AppToast />
  </div>
</template>

<script setup>
import AppNav       from './components/AppNav.vue'
import AppHero      from './components/AppHero.vue'
import AppAbout     from './components/AppAbout.vue'
import AppProjects  from './components/AppProjects.vue'
import AppStack     from './components/AppStack.vue'
import AppEducation from './components/AppEducation.vue'
import AppContact   from './components/AppContact.vue'
import AppFooter    from './components/AppFooter.vue'
import AppToast     from './components/AppToast.vue'
import { useScrollReveal } from './composables/useScrollReveal.js'

useScrollReveal()
</script>
