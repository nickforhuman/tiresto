<template>
  <div class="w-full h-screen bg-primary flex justify-center items-center">
    <div class="grid md:grid-cols-2 grid-cols-1 rounded-xl w-full m-4 bg-second">
      <!-- left side start  -->
      <div
        class="h-124 sm:flex hidden bg-primary relative bg-[url('@/assets/images/auth/login.png')] bg-contain bg-no-repeat bg-center"
      ></div>
      <!-- left side end  -->
      <!-- right side start  -->
      <div class="md:h-124 h-164 flex flex-col justify-center items-center relative">
        <router-link
          to="/"
          class="absolute text-xs flex gap-2 top-2 left-2 text-primary hover:underline"
          ><ArrowLeftToLine class="w-4 h-4" /> Back to Home</router-link
        >
        <!-- header start  -->
        <div class="flex justify-center items-center flex-col">
          <img src="@/assets/images/logo.png" class="w-24" alt="" />
          <h1 class="text-3xl font-bold py-4">
            Login your <span class="text-primary">Tiresto</span> <br />
            account
          </h1>
        </div>
        <!-- header end  -->
        <form action="" class="w-full flex flex-col justify-center items-center gap-2">
          <div class="flex text-xs flex-col items-start">
            <label for="email"> * email </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              class="text-gray-400 px-10 py-2 bg-second border border-primary- outline outline-primary rounded-xl"
            />
          </div>
          <div class="flex text-xs flex-col items-start">
            <label for="password"> * Password </label>
            <input
              type="password"
              placeholder="***********"
              class="text-gray-400 px-10 py-2 bg-second border border-primary outline outline-primary rounded-xl"
            />
          </div>
          <div class="flex flex-col justify-center items-center">
            <div class="flex justify-between items-center gap-2 m-2">
              <router-link to="/auth/forgot-password" class="text-xs text-primary"
                >Forgot password ?</router-link
              >
              <router-link to="/auth/forgot-password" class="text-xs text-primary"
                >Create account</router-link
              >
            </div>
            <button
              type="submit"
              class="w-56 text-xs px-2 py-2 border-2 border-primary shadow-xl transition-all rounded-xl bg-primary text-second hover:bg-second hover:text-primary cursor-pointer font-bold"
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
