<script setup lang="ts">
import IntroComponent from '@/components/home/IntroComponent.vue'
import DiscountmenuComponent from '@/components/home/DiscountmenuComponent.vue'
import PopularcategoriesComponent from '@/components/home/PopularcategoriesComponent.vue'
import PopularrestourantComponent from '@/components/home/PopularrestourantComponent.vue'
</script>
<template>
  <IntroComponent />
  <DiscountmenuComponent />
  <PopularcategoriesComponent />
  <PopularrestourantComponent />
  <div class="grid md:grid-cols-2 grid-cols-1">
    <!-- partner  -->
    <div
      class="relative rounded-2xl shadow-xl h-64 m-5 bg-[url('@/assets/images/partnerwithus.png')] bg-cover bg-center"
    >
      <!-- overlay  -->
      <div class="absolute rounded-2xl w-full h-full bg-black/20"></div>
      <div
        class="absolute bg-white text-primary py-2 px-2 text-xs font-bold top-0 left-10 rounded-b-xl"
      >
        <h1>Earn more with lower fees</h1>
      </div>
      <!-- content  -->
      <div class="absolute bottom-0 flex flex-col gap-1 m-4 z-10">
        <h1 class="text-xs text-primary-second">Signup as a business</h1>
        <h1 class="text-2xl text-second font-bold">Partner with us</h1>
        <router-link
          to="/"
          class="px-4 py-2 rounded-2xl text-second text-center bg-primary-second hover:bg-primary hover:text-primary-second transition-all shadow-xl font-bold"
          >Get Started</router-link
        >
      </div>
    </div>
    <!-- curier  -->
    <div
      class="relative rounded-2xl shadow-xl h-64 m-5 bg-[url('@/assets/images/curier.png')] bg-cover bg-center"
    >
      <!-- overlay  -->
      <div class="absolute w-full rounded-2xl h-full bg-black/20"></div>
      <div
        class="absolute bg-white text-primary py-2 px-2 text-xs font-bold top-0 left-10 rounded-b-xl"
      >
        <h1>Avail exclusive perks</h1>
      </div>
      <!-- content  -->
      <div class="absolute bottom-0 flex flex-col gap-1 m-4 z-10">
        <h1 class="text-xs text-primary-second">Signup as a rider</h1>
        <h1 class="text-2xl text-second font-bold">Ride with us</h1>
        <router-link
          to="/"
          class="px-4 py-2 rounded-2xl text-second text-center bg-primary-second hover:bg-primary hover:text-primary-second transition-all shadow-xl font-bold"
          >Get Started</router-link
        >
      </div>
    </div>
  </div>
</template>
