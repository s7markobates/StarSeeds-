<template>
  <div >
    <button class="ml-3 mt-4 flex flex-col justify-center items-center w-[28px] h-[28px] bg-transparent border-0 cursor-pointer">
      <i :class="`fas fa-bars text-[32px] ${!isOpen ? 'text-orange-400' : 'text-white'}`"></i>
    </button>
    <div v-if="isOpen" :class="darkModeClass" class=" h-[300px] w-screen bg-blue-400 text-white z-30">
      <div class="w-full ml-12 pt-10 flex items-center">
        <i class="fas fa-om text-orange-400 text-md" ></i>
        <span class="text-lg font-base ml-2 uppercase">Explore</span>
      </div>
      <ul class="flex flex-col mt-[10px] ml-12 p-0 list-none ">
        <RouterLink :to="{ name: 'profiles'}">
          <li class="py-[6px] text-[20px]">About our StarSeeds</li>
        </RouterLink>
        <li class="py-[6px] text-[20px]">About StarSeeds WebApp</li>
      </ul>
      <div v-if="!darkModeClass.dark" class="flex flex-col items-center text-white text-xl font-light mt-10">
        <h1>© 2023 Star Seeds | All Rights Reserved</h1>
        <h1>Powered by bts ©</h1>
      </div>
      <div v-else class="flex flex-col items-center text-white text-xl font-light mt-10">
        <h1>© 2023 Star Seeds | All Rights Reserved</h1>
        <h1>Powered by bts ©</h1>
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
  background-color: #001f3f;
  color: white;
}
</style>