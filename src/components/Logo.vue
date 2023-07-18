<template>
  <div class="mt-[10px] z-30 font-custom">
    <div :class="darkModeClass">
      <a v-if="!darkModeClass.dark" href="/">
        <p class="text-4xl">
          <span class="text-orange-400 mr-[3px]">Star</span>
          <i class="fas fa-meteor text-orange-400"></i>
          <span class="text-yellow-400">seeds</span>
        </p>
      </a>
      <a v-else>
        <RouterLink to="/feed">
          <p class="text-4xl">
            <span class="text-orange-400 mr-[3px]">Star</span>
            <i class="fas fa-meteor text-orange-400"></i>
            <span class="text-yellow-400">seeds</span>
          </p>
        </RouterLink>
      </a>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';


export default {
  component: RouterLink,
  computed: {
    darkModeClass() {
      return { dark: !!this.$route.meta?.darkMode }
    }
  }
}

</script>

<style scoped>
.dark {
  color: white;
}
.font-custom {
  font-family: 'Yatra One', cursive;
}
</style>

