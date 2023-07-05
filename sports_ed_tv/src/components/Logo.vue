<template>
  <div :class="darkModeClass">
    <a href="">
      <img v-if="!darkModeClass.dark" src="../assets/logo-main.png" class="h-9 mt-2" alt="Logo">
      <img v-else src="../assets/logo-dark.png" class="h-[25px] mt-[15px]" alt="Logo">
    </a>
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
</style>