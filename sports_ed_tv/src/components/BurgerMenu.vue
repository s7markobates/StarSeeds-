<template>
  <div :class="darkModeClass" >
    <button class="ml-3 mt-4 flex flex-col justify-center items-center w-[28px] h-[28px] bg-transparent border-0 cursor-pointer">
      <i :class="`fas fa-bars text-[32px] ${!isOpen ? 'text-orange-500' : 'text-gray-300'}`"></i>
    </button>
    <div v-if="isOpen" :class="darkModeClass" class="mt-1 h-[420px] w-screen bg-white z-30">
      <div class="flex justify-center mb-10">
        <input type="text" placeholder="Video/Blog search" class="border rounded-md p-4 h-9 w-[200px]">
      </div>
      <RouterLink :to="{ name: 'home' }">
        <div class="w-full ml-6 flex items-center">
          <i class="fas fa-arrow-left text-gray-700 text-md" ></i>
          <span class="text-lg font-base ml-1 uppercase">Explore</span>
        </div>
      </RouterLink>
      <ul class="flex flex-col mt-[10px] ml-12 p-0 list-none">
        <li class="py-[6px] text-[20px]">Our Coache</li>
        <RouterLink :to="{ name: 'profiles'}">
          <li class="py-[6px] text-[20px]">Our Champion Athletes</li>
        </RouterLink>
        <li class="py-[6px] text-[20px]">About SportsEdTV</li>
        <li class="py-[6px]"><img src="../assets/logo-fondation.svg" class="h-9" alt="Logo fondation" /></li>
      </ul>
      <div v-if="!darkModeClass.dark" class="flex flex-col items-center text-gray-500 text-xl font-light mt-10">
        <h1>© 2023 SportsEdTV | All Rights Reserved</h1>
        <h1>Web support by Executive Digital</h1>
      </div>
      <div v-else class="flex flex-col items-center text-white text-xl font-light mt-10">
        <h1>© 2023 SportsEdTV | All Rights Reserved</h1>
        <h1>Web support by Executive Digital</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, useRoute } from 'vue-router'

export default {
  components: {
    RouterLink
  },
  emits: ['is-open'],
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    darkModeClass() {
      return { dark: !!useRoute().meta?.darkMode }
    }
  }
}
</script>

<style scoped>
.dark {
  background-color: #011D57;
  color: white;
}
</style>