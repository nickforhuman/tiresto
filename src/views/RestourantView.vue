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
  <!-- restourant intro end  -->
  <!-- all fillials start  -->
  <div class="w-full">
    <!-- filials cards start -->
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- header -->
      <div class="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Şubelerimiz</h2>
          <p class="text-sm text-slate-500 mt-1">
            Size en yakın şubeyi seçip haritada yol tarifi alabilirsiniz.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <!-- filial card -->
        <a
          href="https://maps.app.goo.gl/DVEURyGJbd6BA48v7"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          <!-- image -->
          <div class="relative aspect-video w-full overflow-hidden">
            <img
              src="@/assets/images/restourants/1.jpg"
              alt="Bağlar şubesi"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <!-- gradient overlay -->
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"
            ></div>

            <!-- badge -->
            <div class="absolute left-3 top-3">
              <span
                class="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur"
              >
                Açık
              </span>
            </div>

            <!-- title on image -->
            <div class="absolute bottom-3 left-3 right-3">
              <h3 class="text-base font-bold text-white drop-shadow">Bağlar Şubesi</h3>
              <p class="text-xs text-white/85 mt-0.5">Haritada görüntüle ve yol tarifi al</p>
            </div>
          </div>

          <!-- content -->
          <div class="p-4">
            <div class="flex items-center justify-between gap-3">
              <div class="min-w-0">
                <p class="text-sm font-semibold text-slate-900 truncate">Bağlar Şubesi</p>
                <p class="text-xs text-slate-500 truncate">Google Maps</p>
              </div>

              <span
                class="shrink-0 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-900 transition-colors group-hover:bg-primary group-hover:text-white group-hover:border-primary"
              >
                Haritada aç
              </span>
            </div>
          </div>
        </a>

        <!-- filial card -->
        <a
          href="https://maps.app.goo.gl/Ke7HQNPNk27NugAv6"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          <div class="relative aspect-video w-full overflow-hidden">
            <img
              src="@/assets/images/restourants/2.jpg"
              alt="Adalar şubesi"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"
            ></div>

            <div class="absolute left-3 top-3">
              <span
                class="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur"
              >
                Açık
              </span>
            </div>

            <div class="absolute bottom-3 left-3 right-3">
              <h3 class="text-base font-bold text-white drop-shadow">Adalar Şubesi</h3>
              <p class="text-xs text-white/85 mt-0.5">Haritada görüntüle ve yol tarifi al</p>
            </div>
          </div>

          <div class="p-4">
            <div class="flex items-center justify-between gap-3">
              <div class="min-w-0">
                <p class="text-sm font-semibold text-slate-900 truncate">Adalar Şubesi</p>
                <p class="text-xs text-slate-500 truncate">Google Maps</p>
              </div>

              <span
                class="shrink-0 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-900 transition-colors group-hover:bg-primary group-hover:text-white group-hover:border-primary"
              >
                Haritada aç
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- filials cards end -->
    <!-- map start  -->
    <div class="w-full flex justify-center items-center">
      <iframe
        class="w-full m-4 rounded-xl border border-primary-second outline-2 outline-primary-second/50"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24527.045064755366!2d30.472485910839836!3d39.78723409999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc15e64d474793%3A0x728e78a64b3325ee!2zU2HEn2zEsWsgUGlkZSBCYcSfbGFy!5e0!3m2!1str!2str!4v1770899156486!5m2!1str!2str"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <!-- map end  -->
  </div>
  <!-- all fillials end  -->
</template>
