<script setup lang="ts">
import { FileCheck, Motorbike, Clock8, Clock11, Star, Sparkles, Search } from 'lucide-vue-next'
</script>
<template>
  <!-- restourant intro start  -->
  <div class="w-full flex justify-center items-center">
    <div
      class="relative rounded-xl border-2 border-second shadow-xl grid md:grid-cols-2 grid-cols-1 w-full min-h-96 m-2 py-4 gap-2 px-2 bg-[url('@/assets/images/restourants/back.png')] bg-center bg-cover"
    >
      <!-- overlay  -->
      <div class="absolute w-full h-full bg-white/50"></div>
      <!-- left side start  -->
      <div class="z-10 flex flex-col justify-center items-start gap-2">
        <p class="text-xs">I'm lovin' it!</p>
        <h1 class="text-2xl">Tiresto's Eskishehir Turkey</h1>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-2">
          <div
            class="px-4 py-2 bg-primary-second rounded-2xl text-second font-bold flex justify-center items-center text-xs"
          >
            <FileCheck class="w-4 h-4 mx-1" />
            <h1>Minimum Order: 12 GBP</h1>
          </div>
          <div
            class="px-4 py-2 bg-primary-second rounded-2xl text-second font-bold flex justify-center items-center text-xs"
          >
            <Motorbike class="w-4 h-4 mx-1" />
            <h1>Delivery in 20-25 Minutes</h1>
          </div>
        </div>
        <div class="w-full flex md:justify-center justify-start items-center">
          <div
            class="w-64 px-2 py-2 bg-primary rounded-2xl text-second font-bold flex justify-center items-center text-xs"
          >
            <Clock8 class="w-4 h-4 mx-1" />
            <h1>Open until 8:00 -</h1>
            <Clock11 class="w-4 h-4 mx-1" />
            <h1>close until 23:00</h1>
          </div>
        </div>
      </div>
      <!-- left side end  -->
      <!-- right side start  -->
      <div class="z-10 flex justify-center items-center">
        <div
          class="relative rounded-xl shadow-2xl border-2 border-second md:w-96 w-72 md:h-86 h-64 bg-[url('@/assets/images/restourants/back.png')] bg-center bg-cover realative"
        >
          <div
            class="absolute -bottom-2 gap-3 -left-3 md:w-32 w-26 md:h-32 h-26 rounded-xl shadow-xl bg-second flex flex-col justify-center items-center"
          >
            <h1 class="text-4xl font-bold">4.0</h1>
            <div class="flex justify-center items-center text-primary-second">
              <Star class="w-4 h-4" />
              <Star class="w-4 h-4" />
              <Star class="w-4 h-4" />
              <Star class="w-4 h-4" />
              <Star class="text-black w-4 h-4" />
            </div>
            <h1 class="text-center text-xs text-gray-500">1,260 reviews</h1>
          </div>
        </div>
      </div>
      <!-- right side end  -->
    </div>
  </div>
  <!-- all offers start  -->
  <div class="w-full">
    <div class="flex justify-center items-center">
      <!-- header  -->
      <div>
        <h1 class="flex justify-center gap-1 md:text-3xl text-xs font-bold px-4 py-2">
          <Sparkles class="text-primary-second" /> All Offers from Eskisehir Tiresto
        </h1>
      </div>
      <!-- search bar  -->
      <div class="flex justify-end items-center m-2">
        <form action="" class="relative">
          <input
            type="search"
            class="px-4 py-2 text-xs text-center bg-second text-gray-400 rounded-2xl border border-primary-second focus:outline outline-primary/30 focus:border-primary focus:ring ring-primary/20"
            placeholder="Search from menu..."
          />
          <button type="submit" class="absolute left-0 p-2 text-gray-400">
            <Search class="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  </div>
  <!-- all offers end  -->
  <!-- restourant intro end  -->
</template>
