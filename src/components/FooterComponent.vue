<script setup lang="ts">
import { MapPinCheck, Instagram, Facebook, Linkedin, Mail } from 'lucide-vue-next'
import { ref } from 'vue'

const medias = ref([
  { icon: Instagram, link: 'https://instagram.com/', label: 'Instagram' },
  { icon: Facebook, link: 'https://facebook.com/', label: 'Facebook' },
  { icon: Linkedin, link: 'https://linkedin.com/', label: 'LinkedIn' },
])
</script>

<template>
  <footer class="w-full bg-second border-t border-primary/10">
    <!-- top spacing -->
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <!-- GRID -->
      <div class="grid gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <!-- COMPANY -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <img src="@/assets/images/logo.png" class="w-40 sm:w-44" alt="Company logo" />
          </div>

          <!-- app buttons -->
          <div class="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#"
              class="group inline-flex items-center gap-2 rounded-xl bg-black/90 px-3 py-2 shadow-sm ring-1 ring-white/10 hover:opacity-90 transition"
              aria-label="Download on App Store"
            >
              <img src="@/assets/images/app/appstorevec.png" class="h-6 w-auto" alt="App Store" />
            </a>

            <a
              href="#"
              class="group inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 shadow-sm ring-1 ring-primary/10 hover:bg-white/10 transition"
              aria-label="Get it on Google Play"
            >
              <img src="@/assets/images/app/playstore.png" class="h-6 w-auto" alt="Google Play" />
            </a>
          </div>

          <!-- address -->
          <a
            href="#"
            class="inline-flex items-start gap-2 text-sm text-primary/80 hover:text-primary transition"
          >
            <MapPinCheck class="mt-0.5 h-5 w-5 text-primary-second" />
            <span>Eskişehir, Yenibağlar…</span>
          </a>

          <p class="text-xs text-primary/60 leading-relaxed">
            Fast & fresh delivery. Discover deals and track your orders with ease.
          </p>
        </div>

        <!-- SUBSCRIBE -->
        <div class="flex flex-col gap-4">
          <div class="space-y-1">
            <h2 class="text-lg font-semibold text-primary">Get Exclusive Deals</h2>
            <p class="text-sm text-primary/60">Join our newsletter for weekly offers.</p>
          </div>

          <form class="w-full">
            <label class="sr-only" for="email">Email</label>

            <div
              class="flex items-stretch rounded-2xl border border-primary-second/25 bg-white/5 ring-1 ring-primary/5 focus-within:ring-2 focus-within:ring-primary/15 transition"
            >
              <div class="flex items-center pl-3 text-primary/50">
                <Mail class="h-5 w-5" />
              </div>

              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                class="w-full bg-transparent px-3 py-2.5 text-sm text-primary placeholder:text-primary/40 outline-none"
              />

              <button
                type="submit"
                class="shrink-0 rounded-2xl bg-primary-second px-4 py-2.5 text-sm font-semibold text-second hover:bg-primary transition"
              >
                Subscribe
              </button>
            </div>

            <p class="mt-2 text-xs text-primary/50">
              We won’t spam. Read our
              <router-link
                to="/"
                class="underline underline-offset-4 hover:text-primary transition"
              >
                email policy </router-link
              >.
            </p>
          </form>

          <!-- social -->
          <ul class="flex items-center gap-2 pt-1">
            <li v-for="(media, i) in medias" :key="i">
              <a
                :href="media.link"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="media.label"
                class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-primary/10 hover:bg-primary-second/15 hover:ring-primary-second/30 transition"
              >
                <component :is="media.icon" class="h-5 w-5 text-primary" />
              </a>
            </li>
          </ul>
        </div>

        <!-- LEGAL -->
        <div class="flex flex-col gap-4">
          <h2 class="text-base font-semibold text-primary">Legal Pages</h2>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link
                to="/"
                class="text-primary/70 hover:text-primary hover:underline underline-offset-4 transition"
              >
                Terms and conditions
              </router-link>
            </li>
            <li>
              <router-link
                to="/"
                class="text-primary/70 hover:text-primary hover:underline underline-offset-4 transition"
              >
                Privacy
              </router-link>
            </li>
            <li>
              <router-link
                to="/"
                class="text-primary/70 hover:text-primary hover:underline underline-offset-4 transition"
              >
                Cookies
              </router-link>
            </li>
            <li>
              <router-link
                to="/"
                class="text-primary/70 hover:text-primary hover:underline underline-offset-4 transition"
              >
                Modern Slavery Statement
              </router-link>
            </li>
          </ul>
        </div>

        <!-- IMPORTANT LINKS -->
        <div class="flex flex-col gap-4">
          <h2 class="text-base font-semibold text-primary">Important Links</h2>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link
                to="/"
                class="text-primary/70 hover:text-primary hover:underline underline-offset-4 transition"
              >
                Get help
              </router-link>
            </li>
            <li>
              <router-link
                to="/"
                class="text-primary/70 hover:text-primary hover:underline underline-offset-4 transition"
              >
                Add your restaurant
              </router-link>
            </li>
            <li>
              <router-link
                to="/"
                class="text-primary/70 hover:text-primary hover:underline underline-offset-4 transition"
              >
                Sign up to deliver
              </router-link>
            </li>
            <li>
              <router-link
                to="/"
                class="text-primary/70 hover:text-primary hover:underline underline-offset-4 transition"
              >
                Create a business account
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- bottom bar -->
      <div
        class="mt-10 pt-6 border-t border-primary/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between"
      >
        <p class="text-xs text-primary/50">
          © {{ new Date().getFullYear() }} Tiresto. All rights reserved.
        </p>

        <div class="flex items-center gap-3 text-xs text-primary/60">
          <router-link to="/" class="hover:text-primary transition">Privacy</router-link>
          <span class="text-primary/25">•</span>
          <router-link to="/" class="hover:text-primary transition">Terms</router-link>
          <span class="text-primary/25">•</span>
          <router-link to="/" class="hover:text-primary transition">Cookies</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
