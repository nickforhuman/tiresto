<script setup lang="ts">
import { ScanSearch } from 'lucide-vue-next'
</script>
<template>
  <div class="w-full flex justify-center items-center select-none">
    <div
      class="w-full grid md:grid-cols-2 grid-cols-1 bg-second border-2 border-gray-100 shadow-sm px-6 py-6 m-5 min-h-104 rounded-2xl"
    >
      <!-- left side start  -->
      <div>
        <div class="flex flex-col gap-4 text-left justify-center items-center">
          <div class="flex flex-col gap-6">
            <h1 class="text-xs text-gray-400">Order Restaurant food, takeaway and groceries.</h1>
            <h1 class="text-6xl font-bold">
              Feast Your Senses,<span class="text-primary-second">Fast and Fresh</span>
            </h1>
            <h1 class="text-xs">Enter a postcode to see what we deliver</h1>
          </div>
          <div class="w-full flex justify-start items-center">
            <form action="" class="flex justify-center items-center relative">
              <input
                type="search"
                placeholder="e.g. EC4R 3TE"
                class="px-6 py-2 border border-primary-second/30 outline-2 outline-primary-second/20 ring-2 ring-primary-second/10 focus:outline-primary/20 focus:border-primary/30 focus:ring-primary/10 rounded-2xl relative"
              />
              <button
                type="submit"
                class="flex justify-center items-center shadow-xl px-4 py-2 bg-primary-second text-second rounded-2xl -right-5 cursor-pointer hover:bg-primary transition-all absolute"
              >
                <ScanSearch /> Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- left side end  -->
      <div
        class="relative md:flex hidden justify-center bg-[url('@/assets/images/intro/texture.png')] bg-cover bg-center items-center"
      >
        <!-- decoration  -->
        <div
          class="flex -z-10 w-82 h-[95%] bg-primary-second rounded-tl-4xl absolute bottom-0 right-0"
        ></div>
        <img
          src="@/assets/images/intro/intro-2.png"
          class="flex right-30 rounded-2xl absolute w-64"
          alt=""
        />
        <img src="@/assets/images/intro/intro-1.png" class="absolute bottom-0 -left-20" alt="" />
        <!-- comments  -->
        <!-- <div class="absolute"></div> -->
      </div>
    </div>
  </div>
</template>
