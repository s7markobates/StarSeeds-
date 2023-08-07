<template>
  <div class="relative overflow-hidden">

    <slot/>

    <div class="rocket-container">
      <i v-for="index in 49"
        :key="index"
        class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75 z-[0]"
        :style="{ animationDelay: `${0.75 * (index - 1)}s`, visibility: rocketVisible[index] ? 'visible' : 'hidden' }"
      ></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Niz koji će pratiti vidljivost svake rakete
const rocketVisible = ref(new Array(50).fill(false))

rocketVisible.value.slice(1, 50).forEach((_, index) => {
  setTimeout(() => {
    rocketVisible.value[index + 1] = true
  }, 0.75 * (index + 1) * 1000)
})
</script>

<style scoped>
.light {
  background: #1488CC;
  background: -webkit-linear-gradient(to left, #2B32B2, #1488CC);
  background: linear-gradient(to left, #2B32B2, #1488CC);
}
.rocket-container {
  @apply absolute w-full h-full top-0 left-0 flex justify-center items-center pointer-events-none overflow-hidden
}
.animate-slide-up-right {
  animation: slideUpRight 4s infinite;
}
@keyframes slideUpRight {
  from {
    opacity: 1;
    transform: translateX(-220px) translateY(380px);
  }
  to {
    opacity: 0;
    transform: translateX(calc(100% + 110px)) translateY(-340px);
  }
}
.delay-75:nth-child(n) {
  animation-delay: calc(1s * (n - 1));
}
</style>
