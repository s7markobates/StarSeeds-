<template>
  <div class="mt-[10px] z-30 font-style">
    <div :class="darkModeClass">
      <a v-if="!darkModeClass.dark" href="/">
        <p class="text-4xl">
          <span class="text-orange-400 mr-[3px]">Star</span>
          <i class="fas fa-meteor text-orange-400"></i>
          <span class="text-yellow-400">seeds</span>
        </p>
      </a>
      <a v-else href="/feed">
        <p class="text-4xl">
          <span class="text-orange-400 mr-[3px]">Star</span>
          <i class="fas fa-meteor text-orange-400"></i>
          <span class="text-yellow-400">seeds</span>
        </p>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    darkModeClass() {
      return { dark: !!this.$route.meta?.darkMode }
    }
  }
}

</script>

<style scoped>
.dark {
  background-color: #011D57;
  color: white;
}
.font-style {
  font-family: 'Yatra One', cursive;
}
</style>

