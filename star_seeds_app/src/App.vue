<template class="app">

  <NavbarHead />
  
  <RouterView />

  <Footer/>

</template>

<script setup>
import { RouterView } from 'vue-router'
import NavbarHead from './components/NavbarHead.vue'
import Footer from './components/Footer.vue'

</script>

<style scoped>
.app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
