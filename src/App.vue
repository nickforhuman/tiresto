<script setup lang="ts">
import NavComponent from './components/NavComponent.vue'
import TitleComponent from './components/TitleComponent.vue'
import ToolbarComponent from './components/ToolbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
// router
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()

const isAuthRoute = computed(() => route.path.startsWith('/auth'))
</script>

<template>
  <TitleComponent v-if="!isAuthRoute" />
  <NavComponent v-if="!isAuthRoute" />
  <ToolbarComponent v-if="!isAuthRoute" />
  <main class="min-h-screen w-full"><router-view></router-view></main>
  <FooterComponent v-if="!isAuthRoute" />
</template>

<style scoped></style>
