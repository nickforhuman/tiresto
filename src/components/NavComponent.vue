<script setup lang="ts">
import { CircleUserRound, Menu, X } from 'lucide-vue-next'
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const navLinks = ref([
  { name: 'Home', link: '/' },
  { name: 'Special Offers', link: '/special-offers' },
  { name: 'Restaurants', link: '/restaurants' },
  { name: 'Track Order', link: '/track-order' },
])

const isSidebarOpen = ref(false)

const openSidebar = () => (isSidebarOpen.value = true)
const closeSidebar = () => (isSidebarOpen.value = false)
const toggleSidebar = () => (isSidebarOpen.value = !isSidebarOpen.value)

// ESC ile kapat
const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeSidebar()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))

// Sidebar açıkken body scroll kilitle
watch(isSidebarOpen, (v) => {
  document.body.style.overflow = v ? 'hidden' : ''
})
</script>

<template>
  <header class="w-full z-50">
    <!-- full width blur bar -->
    <div class="w-full border-b border-white/10 bg-white/15 backdrop-blur-md shadow-sm">
      <!-- inner container -->
      <div class="mx-auto w-full max-w-6xl px-4">
        <div class="h-12 flex items-center justify-between">
          <!-- logo -->
          <router-link to="/" class="flex items-center gap-2 select-none">
            <img src="@/assets/images/logo.png" class="w-9 h-9 rounded-xl" alt="Logo" />
            <span class="hidden sm:block font-semibold text-sm text-black/90"> Tiresto </span>
          </router-link>

          <!-- desktop nav -->
          <nav class="hidden md:flex items-center gap-2 text-sm">
            <router-link
              v-for="(navLink, i) in navLinks"
              :key="i"
              :to="navLink.link"
              class="px-3 py-2 rounded-xl text-black/80 hover:text-black hover:bg-white/10 transition"
              active-class="bg-white/15 text-black ring-1 ring-white/15"
            >
              {{ navLink.name }}
            </router-link>

            <router-link
              to="/auth/login"
              class="ml-2 flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-second font-bold hover:brightness-110 transition"
            >
              <CircleUserRound class="w-4 h-4" />
              login
            </router-link>
          </nav>

          <!-- mobile actions -->
          <div class="flex md:hidden items-center gap-2">
            <router-link
              to="/auth"
              class="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary text-second font-bold hover:brightness-110 transition"
            >
              <CircleUserRound class="w-4 h-4" />
              <span class="hidden xs:inline">Login</span>
            </router-link>

            <button
              type="button"
              class="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-black transition"
              @click="toggleSidebar"
              aria-label="Open menu"
            >
              <Menu class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- overlay -->
    <transition name="fade">
      <div v-if="isSidebarOpen" class="fixed inset-0 z-60 bg-black/50" @click="closeSidebar" />
    </transition>

    <!-- sidebar drawer -->
    <transition name="drawer">
      <aside
        v-if="isSidebarOpen"
        class="fixed top-0 right-0 z-70 h-dvh w-[85%] max-w-sm bg-second/30 backdrop-blur-md shadow-2xl border-l border-white/10"
        role="dialog"
        aria-modal="true"
      >
        <!-- header -->
        <div class="h-16 px-4 flex items-center justify-between border-b border-white/10">
          <div class="flex items-center gap-2">
            <img src="@/assets/images/logo.png" class="w-9 h-9 rounded-xl" alt="Logo" />
            <span class="font-semibold text-second">Tiresto</span>
          </div>

          <button
            type="button"
            class="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-black transition"
            @click="closeSidebar"
            aria-label="Close menu"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- links -->
        <div class="p-4">
          <div class="flex flex-col gap-2">
            <router-link
              v-for="(navLink, i) in navLinks"
              :key="i"
              :to="navLink.link"
              class="px-4 py-3 rounded-2xl text-second/85 bg-white/5 hover:bg-white/10 transition"
              active-class="bg-white/15 ring-1 ring-white/15 text-black"
              @click="closeSidebar"
            >
              {{ navLink.name }}
            </router-link>

            <router-link
              to="/auth/login"
              class="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-primary text-second font-bold hover:brightness-110 transition"
              @click="closeSidebar"
            >
              <CircleUserRound class="w-4 h-4" />
              login
            </router-link>
          </div>

          <!-- small info / divider -->
          <div class="mt-6 border-t border-white/10 pt-4 text-xs text-black/60">
            © {{ new Date().getFullYear() }} Tiresto
          </div>
        </div>
      </aside>
    </transition>
  </header>
</template>
