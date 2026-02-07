<script setup lang="ts">
import NavComponent from './components/NavComponent.vue'
import TitleComponent from './components/TitleComponent.vue'
import ToolbarComponent from './components/ToolbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <TitleComponent />
  <NavComponent />
  <ToolbarComponent />
  <main class="min-h-screen w-full"><router-view></router-view></main>
  <FooterComponent />
</template>

<style scoped></style>
