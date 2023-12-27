<template>
  <div>
    <button class="ml-3 mt-4 flex flex-col justify-center items-center w-[28px] h-[28px] bg-transparent border-0 cursor-pointer"
      @click="toggleOpen">
      <i :class="`fas fa-bars text-2xl sm:text-[32px] ${!isOpen ? 'text-orange-400' : 'text-yellow-400'} `"></i>
    </button>
    <div v-if="isOpen" :class="[burgerDark, 'w-screen  sm:w-screen z-30 border-b-4 border-orange-400']" @click.stop>
      <div class="ml-12 pt-10 flex items-center">
        <i class="fas fa-om text-orange-400 text-md"></i>
        <span class="sm:text-lg font-base ml-2 uppercase text-yellow-400">Explore</span>
      </div>
      <div>
        <h1 @click="toggleParagraph(0)" class="py-[6px] text-lg sm:text-xl cursor-pointer">
          {{ items[0].title }}
        </h1>
        <p v-if="activeIndex === 0" class="ml-5 text-orange-400">
          {{ items[0].content }}
        </p>
        <h1 @click="toggleParagraph(1)" class="py-[6px] text-lg sm:text-xl cursor-pointer">
          {{ items[1].title }}
        </h1>
        <p v-if="activeIndex === 1" class="ml-5 text-orange-400">
          {{ items[1].content }}
        </p>
        <div v-if="activeIndex === 1" class="ml-5 text-[50px] text-orange-400 flex">
          <img src="../assets/vue.256x222.png" class="w-12" alt="" title="Vue.js 3"/>
          <img src="../assets/tailwind-css.256x154.png" class="w-12" alt="" title="Tailwind CSS" />
          <img src="../assets/npm.256x100.png" class="w-20" alt="" title="npm JSON Server" />
        </div>
      </div>
      <div
        v-if="!burgerDark.dark"
        class="flex flex-col items-center marker:text-sm font-light mt-1"
      >
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
import { RouterLink, useRoute } from 'vue-router';

export default {
  components: {
    RouterLink,
  },
  emits: ['is-open'],
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeIndex: null,
      items: [
        {
          title: 'About bts - Author of StarSeeds App',
          content:
            'In progress Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          title: 'StarSeeds BuildBox',
          content:
            'I used these technologies',
        },
      ],
    };
  },
  computed: {
    burgerDark() {
      const currentRoute = useRoute();
      return currentRoute.name === 'profiles' ||
        currentRoute.name === 'profileDetails' ||
        currentRoute.name === 'feed' ||
        currentRoute.name === 'chat' ||
        currentRoute.name === 'chatTest' ||
        currentRoute.name === 'chatPerson'
        ? 'dark'
        : 'light';
    },
  },
  methods: {
    toggleParagraph(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    toggleOpen() {
      this.$emit('is-open', !this.isOpen);
    },
  },
};
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
