<template class="app">

  <NavbarHead />

  <Body></Body>

  <RouterView />

</template>

<script setup>
import { RouterView } from 'vue-router'
import NavbarHead from './components/NavbarHead.vue'
import Body from './components/Body.vue'

</script>

<style scoped>
.app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
