<script setup lang="ts">
import { ref, computed } from 'vue'

type Product = {
  id: number
  menuName: string
  discountPercent: number
  image?: string
}

type Category = {
  id: number
  name: string
  products: Product[]
}

const categories = ref<Category[]>([
  {
    id: 1,
    name: 'Vegan',
    products: [
      {
        id: 101,
        menuName: 'Vegan Bowl',
        discountPercent: 40,
        image: new URL('@/assets/images/discount-products/1.png', import.meta.url).href,
      },
      {
        id: 102,
        menuName: 'Doner',
        discountPercent: 40,
        image: new URL('@/assets/images/discount-products/1.png', import.meta.url).href,
      },
      {
        id: 103,
        menuName: 'Vegan Bowl',
        discountPercent: 40,
        image: new URL('@/assets/images/discount-products/2.png', import.meta.url).href,
      },
      {
        id: 104,
        menuName: 'Doner',
        discountPercent: 40,
        image: new URL('@/assets/images/discount-products/1.png', import.meta.url).href,
      },
      {
        id: 105,
        menuName: 'Vegan Bowl',
        discountPercent: 40,
        image: new URL('@/assets/images/discount-products/1.png', import.meta.url).href,
      },
    ],
  },
  {
    id: 2,
    name: 'Burgers',
    products: [
      {
        id: 201,
        menuName: 'Chicken burger',
        discountPercent: 40,
        image: new URL('@/assets/images/discount-products/1.png', import.meta.url).href,
      },
      {
        id: 202,
        menuName: 'Ox burger',
        discountPercent: 40,
        image: new URL('@/assets/images/discount-products/1.png', import.meta.url).href,
      },
    ],
  },
  {
    id: 3,
    name: 'Sushi',
    products: [
      {
        id: 301,
        menuName: 'Snake fish menu',
        discountPercent: 40,
        image: new URL('@/assets/images/discount-products/1.png', import.meta.url).href,
      },
      {
        id: 302,
        menuName: 'Balon fish menu',
        discountPercent: 40,
        image: new URL('@/assets/images/discount-products/1.png', import.meta.url).href,
      },
    ],
  },
])
// fisrt category selector
const activeCategoryId = ref(categories.value[0]?.id ?? 1)

const activeCategory = computed(() => {
  return categories.value.find((c) => c.id == activeCategoryId.value) ?? categories.value[0]
})

const activeProducts = computed(() => activeCategory.value?.products ?? [])

const setActiveCategory = (id: number) => {
  activeCategoryId.value = id
}
</script>

<template>
  <div class="w-full">
    <div class="w-full grid md:grid-cols-2 grid-cols-1 gap-2 p-3">
      <h1>Up to -40% 🎊 tiresto exclusive deals</h1>
      <!-- categories start  -->
      <ul class="flex justify-center items-center gap-2">
        <li
          v-for="category in categories"
          :key="category.id"
          @click="setActiveCategory(category.id)"
          class="text-xs px-4 py-2 rounded-xl border cursor-pointer transition-all whitespace-nowrap"
          :class="
            activeCategoryId === category.id
              ? 'bg-primary-second text-second border-primary-second'
              : 'border-primary-second hover:bg-primary-second hover:text-second'
          "
        >
          {{ category.name }}
        </li>
      </ul>
      <!-- categories end  -->
    </div>
    <!-- menu card start  -->
    <div class="overflow-x-auto w-full flex justify-start items-center select-none">
      <div class="flex gap-3 px-3 py-2 min-w-max snap-x snap-mandatory">
        <!-- menu cards start -->
        <div
          v-for="product in activeProducts"
          :key="product.id"
          :style="{ backgroundImage: `url(${product.image})` }"
          class="rounded-2xl shadow-xl border-2 border-gray-200 hover:scale-95 transition-all cursor-pointer relative w-96 h-56 bg-center bg-cover shrink-0 snap-start"
        >
          <div class="absolute w-full h-full bg-black/40 rounded-2xl" id="overlay"></div>

          <!-- discount -->
          <div
            class="absolute right-5 bg-primary z-10 text-second font-bold rounded-b-xl top-0 p-2 flex justify-center items-center"
          >
            <h1>-{{ product.discountPercent }}%</h1>
          </div>

          <!-- bottom content -->
          <div class="absolute bottom-4 z-10 left-4">
            <h1 class="text-xs text-primary-second font-bold">Restourant</h1>
            <p class="text-xl text-white">{{ product.menuName }}</p>
          </div>
        </div>
        <!-- menu cards end -->
      </div>
    </div>
  </div>
</template>
