<template>
  <div class="w-full min-h-screen bg-primary flex justify-center items-center px-4 py-10">
    <div
      class="grid md:grid-cols-2 grid-cols-1 rounded-2xl w-full max-w-5xl bg-second overflow-hidden border border-primary-second/20 shadow-2xl"
    >
      <!-- left side start  -->
      <div
        class="h-148 sm:flex hidden bg-primary relative bg-[url('@/assets/images/auth/login.png')] bg-contain bg-no-repeat bg-center"
      ></div>
      <!-- left side end  -->
      <!-- right side start  -->
      <div
        class="md:h-124 h-screen sm:border-none sm:outline-none outline outline-primary-second/50 border border-primary-second/30 rounded-2xl md:rounded-none flex flex-col justify-center items-center relative px-6 sm:px-10 py-10"
      >
        <router-link
          to="/"
          class="absolute text-xs flex gap-2 top-4 left-4 text-primary-second/90 hover:text-primary-second hover:underline items-center"
          ><ArrowLeftToLine class="w-4 h-4" /> Back to Home</router-link
        >
        <!-- header start  -->
        <div class="flex justify-center items-center flex-col text-center w-full">
          <img src="@/assets/images/logo.png" class="w-20 sm:w-24 drop-shadow" alt="" />
          <h1 class="text-2xl sm:text-3xl font-extrabold py-4 leading-tight text-primary">
            Login your <span class="text-primary-second">Tiresto</span> <br />
            account
          </h1>
          <p class="text-xs sm:text-sm text-primary/70 -mt-2">
            Welcome back — please enter your details
          </p>
        </div>
        <!-- header end  -->
        <form action="" class="w-full flex flex-col justify-center items-center gap-4 mt-6">
          <div class="w-full max-w-sm flex text-xs flex-col items-start gap-2">
            <label for="email" class="text-primary/80 font-semibold"> * email </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              class="w-full text-primary px-4 py-3 bg-second border border-primary-second/30 outline-none rounded-xl shadow-sm focus:border-primary-second focus:ring-2 focus:ring-primary-second/25 transition-all placeholder:text-primary/40"
            />
          </div>
          <div class="w-full max-w-sm flex text-xs flex-col items-start gap-2">
            <label for="password" class="text-primary/80 font-semibold"> * Password </label>
            <input
              id="password"
              type="password"
              placeholder="***********"
              class="w-full text-primary px-4 py-3 bg-second border border-primary-second/30 outline-none rounded-xl shadow-sm focus:border-primary-second focus:ring-2 focus:ring-primary-second/25 transition-all placeholder:text-primary/40"
            />
          </div>

          <div class="w-full max-w-sm flex justify-between items-center mt-1">
            <router-link
              to="/auth/forgot-password"
              class="text-xs text-primary hover:text-primary-second hover:underline transition-all"
              >Forgot password ?</router-link
            >
            <router-link
              to="/auth/forgot-password"
              class="text-xs text-primary-second font-semibold hover:underline transition-all"
              >Create account</router-link
            >
          </div>

          <div class="w-full max-w-sm mt-2">
            <button
              type="submit"
              class="w-full text-xs px-4 py-3 border-2 border-primary shadow-xl transition-all rounded-xl bg-primary text-second hover:bg-second hover:text-primary hover:border-primary-second cursor-pointer font-extrabold active:scale-[0.99]"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <!-- right side end  -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeftToLine } from 'lucide-vue-next'
</script>
