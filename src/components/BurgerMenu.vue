<template>
  <div >
    <button class="ml-3 mt-4 flex flex-col justify-center items-center w-[28px] h-[28px] bg-transparent border-0 cursor-pointer">
      <i :class="`fas fa-bars text-2xl sm:text-[32px] ${!isOpen ? 'text-orange-400' : 'text-yellow-400'}`"></i>
    </button>
    <div v-if="isOpen" :class="burgerDark" class="w-screen h-[240px] sm:w-screen z-30 border-b-4 border-orange-400">
      <div class="ml-12 pt-10 flex items-center">
        <i class="fas fa-om text-orange-400 text-md" ></i>
        <span class="sm:text-lg font-base ml-2 uppercase text-yellow-400">Explore</span>
      </div>
      <div>
        <ul class="mt-[10px] ml-12 p-0 list-none text-yellow-400">
            <li class="py-[6px] text-lg sm:text-xl">About our StarSeeds</li>
            <li class="py-[6px] text-lg sm:text-xl">About StarSeeds WebApp</li>
        </ul>
      </div>
      <div v-if="!burgerDark.dark" class="flex flex-col items-center marker:text-sm font-light mt-1">
        <div class="flex justify-center mt-10 sm:mt-7">
          <p class="text-xl sm:text-3xl font-style">
            <span class="text-orange-400 mr-[3px]">Star</span>
            <i class="fas fa-meteor text-orange-400"></i>
            <span class="text-yellow-400">seeds</span>
          </p>
        </div>
      </div>
      <div v-else class="flex flex-col items-center text-lg font-light mt-10">
        <div class="flex justify-center mt-7">
          <p class="text-xl sm:text-3xl font-style">
            <span class="text-orange-400 mr-[3px]">Star</span>
            <i class="fas fa-meteor text-orange-400"></i>
            <span class="text-yellow-400">seeds</span>
          </p>
        </div>
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
    burgerDark(){
      const currentRoute = useRoute()
      return (
        currentRoute.name === 'profiles' ||
        currentRoute.name === 'profileDetails' ||
        currentRoute.name === 'feed' ||
        currentRoute.name === 'chat' ||
        currentRoute.name === 'chatPerson'
        ? 'dark' : 'light'
      )
    }
  }
}
</script>

<style scoped>
.dark {
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  color: white;
}
.light {
  background: #1488CC;
  background: -webkit-linear-gradient(to right, #1488CC, #2B32B2, #302b63, #24243e, #0f0c29);
  background: linear-gradient(to right, #1488CC, #2B32B2, #302b63, #24243e, #0f0c29);
  color: white;
}
.font-style {
    font-family: 'Yatra One', cursive;
}
</style>