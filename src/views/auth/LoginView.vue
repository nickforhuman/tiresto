<template>
  <div class="w-full h-screen bg-primary-second flex justify-center items-center">
    <div class="grid md:grid-cols-2 grid-cols-1 rounded-xl shadow-xl w-full m-4 bg-second">
      <!-- left side start  -->
      <div
        class="h-124 bg-primary-second relative bg-[url('@/assets/images/auth/login.png')] bg-contain bg-no-repeat bg-center"
      ></div>
      <!-- left side end  -->
      <!-- right side start  -->
      <div class="flex flex-col justify-center items-center">
        <!-- header start  -->
        <div class="flex justify-center items-center flex-col">
          <h1 class="text-3xl font-bold">
            Login your <span class="text-primary">Tiresto</span> <br />
            account
          </h1>
        </div>
        <!-- header end  -->
        <form action="" class="w-full flex flex-col justify-center items-center gap-2">
          <div class="flex flex-col items-start">
            <label for="email"> * your email </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              class="text-gray-400 px-4 py-2 bg-second border border-primary-second outline outline-primary-second rounded-xl"
            />
          </div>
          <div class="flex flex-col items-start">
            <label for="password"> * Password </label>
            <input
              type="password"
              class="text-gray-400 px-4 py-2 bg-second border border-primary-second outline outline-primary-second rounded-xl"
            />
          </div>
          <div class="flex flex-col justify-center items-center">
            <div class="flex justify-between items-center gap-2 m-2">
              <router-link to="/auth/forgot-password" class="text-xs text-primary-second"
                >Forgot password ?</router-link
              >
              <router-link to="/auth/forgot-password" class="text-xs text-primary"
                >Create account</router-link
              >
            </div>
            <button
              type="submit"
              class="w-64 px-4 py-2 rounded-xl bg-primary-second text-second font-bold"
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
