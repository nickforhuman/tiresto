<script setup lang="ts">
import { ref } from 'vue'

const popularCategories = ref([
  {
    id: 1,
    name: 'Burgers & Fastfood',
    tag: 'restourant',
    img: new URL('@/assets/images/popular/burger.png', import.meta.url).href,
  },
  {
    id: 2,
    name: 'Salats',
    tag: 'restourant',
    img: new URL('@/assets/images/popular/salat.png', import.meta.url).href,
  },
  {
    id: 3,
    name: 'Pasta & Casuals',
    tag: 'restourant',
    img: new URL('@/assets/images/popular/past.png', import.meta.url).href,
  },
  {
    id: 3,
    name: 'Pizza',
    tag: 'restourant',
    img: new URL('@/assets/images/popular/pizza.png', import.meta.url).href,
  },
  {
    id: 4,
    name: 'Breakfast',
    tag: 'restourant',
    img: new URL('@/assets/images/popular/breakfast.png', import.meta.url).href,
  },
  {
    id: 5,
    name: 'Soups',
    tag: 'restourant',
    img: new URL('@/assets/images/popular/soup.png', import.meta.url).href,
  },
])
</script>
<template>
  <div class="w-full">
    <div class="w-full p-3">
      <h1>Tiresto Popular Categories 🤩</h1>
    </div>
    <!-- popular categories start  -->
    <div class="overflow-x-auto w-full flex justify-start items-center select-none">
      <div
        v-for="popular in popularCategories"
        :key="popular.id"
        class="flex gap-3 px-3 py-2 min-w-max snap-x snap-mandatory"
      >
        <div
          class="rounded-2xl shadow-xl border-2 border-gray-200 hover:scale-95 transition-all cursor-pointer relative w-56 h-62 bg-center bg-cover shrink-0 snap-start"
        >
          <div class="w-full">
            <img :src="popular.img" class="object-cover" alt="" />
          </div>
          <div class="w-full m-2 flex flex-col">
            <h1 class="text-md">{{ popular.name }}</h1>
            <h1 class="text-xs text-primary-second font-bold">{{ popular.tag }}</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- popular categories end  -->
    <!-- popular restourants start -->
    <div class="w-full flex justify-center items-center">
      <a href="https://www.apple.com/app-store/" target="_blank">
        <img src="@/assets/images/app.png" class="p-4 rounded-2xl shadow-sm" alt="" />
      </a>
    </div>
    <!-- popular restourants end  -->
  </div>
</template>
