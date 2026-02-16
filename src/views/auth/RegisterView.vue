<template>
  <div
    class="relative w-full min-h-screen bg-primary-second px-4 py-10 flex items-center justify-center overflow-hidden"
  >
    <!-- background decoration -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
      <div
        class="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary-second/30 blur-3xl"
      ></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]"
      ></div>
    </div>

    <div
      class="relative grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-primary-second/20 bg-second/80 shadow-2xl backdrop-blur-md md:grid-cols-2"
    >
      <!-- left -->
      <div class="relative px-6 py-10 sm:px-10">
        <router-link
          to="/"
          class="absolute left-6 top-6 inline-flex items-center gap-2 text-xs text-primary/80 hover:text-primary-second hover:underline"
        >
          <ArrowLeftToLine class="h-4 w-4" />
          Back to Home
        </router-link>

        <!-- header -->
        <div class="pt-12">
          <div class="flex items-center gap-3">
            <img src="@/assets/images/logo.png" class="w-10 sm:w-12 drop-shadow" alt="Tiresto" />
            <div class="leading-tight">
              <h1 class="text-lg font-extrabold text-primary sm:text-xl">Tiresto</h1>
              <p class="text-xs text-primary-second/70">Sign in to continue</p>
            </div>
          </div>

          <h2 class="mt-6 text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
            Login your <span class="text-primary-second">Tiresto</span> account
          </h2>
          <p class="mt-2 text-sm text-primary-second/70">
            Welcome back — please enter your details
          </p>
        </div>

        <!-- form -->
        <form class="mt-8 space-y-4">
          <!-- Fullname -->
          <div class="space-y-2">
            <label for="fullname" class="text-xs font-semibold text-primary-second/80">
              Fullname <span class="text-primary-second/60">*</span>
            </label>

            <div
              class="group flex items-center gap-2 rounded-xl border border-primary-second/25 bg-second px-3 py-2 shadow-sm transition-all focus-within:border-primary-second focus-within:ring-2 focus-within:ring-primary-second/25"
            >
              <User class="h-4 w-4 text-primary/50 group-focus-within:text-primary-second" />
              <input
                id="fullname"
                type="text"
                placeholder="Abbasov Xelil"
                class="w-full bg-transparent py-1 text-sm text-primary outline-none placeholder:text-primary/35"
                autocomplete="name"
              />
            </div>
          </div>

          <!-- Email -->
          <div class="space-y-2">
            <label for="email" class="text-xs font-semibold text-primary-second/80">
              Email <span class="text-primary-second/60">*</span>
            </label>

            <div
              class="group flex items-center gap-2 rounded-xl border border-primary-second/25 bg-second px-3 py-2 shadow-sm transition-all focus-within:border-primary-second focus-within:ring-2 focus-within:ring-primary-second/25"
            >
              <Mail class="h-4 w-4 text-primary/50 group-focus-within:text-primary-second" />
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                class="w-full bg-transparent py-1 text-sm text-primary outline-none placeholder:text-primary/35"
                autocomplete="email"
              />
            </div>
          </div>

          <!-- Phone -->
          <div class="space-y-2">
            <label for="phone" class="text-xs font-semibold text-primary-second/80">
              Phone <span class="text-primary-second/60">*</span>
            </label>

            <div
              class="group flex items-center gap-2 rounded-xl border border-primary-second/25 bg-second px-3 py-2 shadow-sm transition-all focus-within:border-primary-second focus-within:ring-2 focus-within:ring-primary-second/25"
            >
              <Phone class="h-4 w-4 text-primary/50 group-focus-within:text-primary-second" />
              <input
                id="phone"
                type="tel"
                inputmode="tel"
                placeholder="+90 (5xx) xxx xx xx"
                class="w-full bg-transparent py-1 text-sm text-primary outline-none placeholder:text-primary/35"
                autocomplete="tel"
              />
            </div>
          </div>

          <!-- Password -->
          <div class="space-y-2">
            <label for="password" class="text-xs font-semibold text-primary-second/80">
              Password <span class="text-primary-second/60">*</span>
            </label>

            <div
              class="group flex items-center gap-2 rounded-xl border border-primary-second/25 bg-second px-3 py-2 shadow-sm transition-all focus-within:border-primary-second focus-within:ring-2 focus-within:ring-primary-second/25"
            >
              <Lock class="h-4 w-4 text-primary/50 group-focus-within:text-primary-second" />
              <input
                id="password"
                type="password"
                placeholder="********"
                class="w-full bg-transparent py-1 text-sm text-primary outline-none placeholder:text-primary/35"
                autocomplete="current-password"
              />

              <button
                type="button"
                class="rounded-lg p-1 text-primary/50 hover:text-primary-second"
                aria-label="Show password"
              >
                <Eye class="h-4 w-4" />
              </button>
            </div>
          </div>

          <!-- Again Password -->
          <div class="space-y-2">
            <label for="password2" class="text-xs font-semibold text-primary-second/80">
              Again Password <span class="text-primary-second/60">*</span>
            </label>

            <div
              class="group flex items-center gap-2 rounded-xl border border-primary-second/25 bg-second px-3 py-2 shadow-sm transition-all focus-within:border-primary-second focus-within:ring-2 focus-within:ring-primary-second/25"
            >
              <ShieldCheck class="h-4 w-4 text-primary/50 group-focus-within:text-primary-second" />
              <input
                id="password2"
                type="password"
                placeholder="********"
                class="w-full bg-transparent py-1 text-sm text-primary outline-none placeholder:text-primary/35"
                autocomplete="new-password"
              />
            </div>
          </div>

          <div class="flex items-center justify-between pt-2">
            <router-link
              to="/auth/forgot-password"
              class="text-xs text-primary-second/80 hover:text-primary-second hover:underline"
            >
              Forgot password?
            </router-link>

            <router-link
              to="/auth/register"
              class="text-xs font-semibold text-primary hover:underline"
            >
              Create account
            </router-link>
          </div>

          <button
            type="submit"
            class="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary-second bg-primary-second px-4 py-3 text-xs font-extrabold text-second shadow-xl transition-all hover:bg-second hover:text-primary-second hover:border-primary-second active:scale-[0.99]"
          >
            <LogIn class="h-4 w-4" />
            Sign up
          </button>
        </form>
      </div>

      <!-- right -->
      <div class="relative hidden min-h-[560px] md:block">
        <div
          class="absolute inset-0 bg-[url('@/assets/images/auth/register.webp')] bg-cover bg-center"
        ></div>

        <!-- overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-tr from-primary-second/85 via-primary-second/35 to-transparent"
        ></div>

        <!-- content -->
        <div class="relative flex h-full flex-col justify-end p-8">
          <div class="max-w-sm rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
            <p class="text-sm font-semibold text-second">
              “Fast ordering, smooth delivery, and clean UI.”
            </p>
            <p class="mt-2 text-xs text-second/80">Join Tiresto and manage your orders easily.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeftToLine, User, Mail, Phone, Lock, Eye, ShieldCheck, LogIn } from 'lucide-vue-next'
</script>
