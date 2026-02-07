<script setup lang="ts">
import { ShoppingBasket, Coins, ChevronDown } from 'lucide-vue-next'
</script>

<template>
  <header class="w-full sticky top-1 z-40">
    <div class="mx-auto max-w-6xl px-2 sm:px-4">
      <div class="mt-2 rounded-2xl border border-white/10 bg-white/20 backdrop-blur-md shadow-sm">
        <div class="flex items-center justify-between gap-3 px-3 py-3 sm:px-4">
          <!-- left -->
          <div class="flex items-center gap-3 min-w-0">
            <div class="relative">
              <img
                src="@/assets/images/profile/pp.png"
                class="h-11 w-11 rounded-full border-2 border-primary ring-2 ring-primary/20 object-cover"
                alt="Profile"
              />
              <!-- online dot -->
              <span
                class="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white/60"
              />
            </div>

            <div class="min-w-0 hidden sm:block">
              <p class="text-sm font-semibold leading-4 truncate">Hoş geldin</p>
              <p class="text-xs text-black/60 truncate">Bugün fırsatlar var ✨</p>
            </div>
          </div>

          <!-- right -->
          <div class="flex items-center gap-2 sm:gap-3">
            <!-- basket -->
            <button
              type="button"
              class="group inline-flex items-center justify-center rounded-full border border-white/10 bg-white/30 px-3 py-2 shadow-sm transition-all hover:bg-primary hover:text-second active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-label="Basket"
            >
              <ShoppingBasket class="h-5 w-5" />
              <span class="ml-2 hidden md:inline text-sm font-semibold">Sepet</span>

              <!-- badge -->
              <span
                class="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary text-second text-[11px] font-bold px-1.5 group-hover:bg-second group-hover:text-primary transition-colors"
              >
                2
              </span>
            </button>

            <!-- rate pill -->
            <button
              type="button"
              class="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/30 px-3 py-2 shadow-sm transition-all hover:bg-primary hover:text-second active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <span class="text-[11px] text-black/60 group-hover:text-second/80">Kur</span>
              <span class="text-sm font-semibold">1₺ ≈ 1</span>
              <Coins class="h-4 w-4" />
              <ChevronDown class="h-4 w-4 opacity-60" />
            </button>

            <!-- balance pill -->
            <div
              class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/30 px-3 py-2 shadow-sm transition-all hover:bg-primary hover:text-second"
            >
              <span class="hidden sm:inline text-[11px] text-black/60">Bakiye</span>
              <span class="text-sm font-semibold">60</span>
              <Coins class="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
