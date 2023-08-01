<template>
  <div class="light relative overflow-hidden">

    <slot/>

    <div class="rocket-container">
      <i v-for="index in 19"
        :key="index"
        class="fas fa-rocket text-orange-400 animate-slide-up-right delay-75"
        :style="{ animationDelay: `${0.75 * (index - 1)}s`, visibility: rocketVisible[index] ? 'visible' : 'hidden' }"
      ></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Niz koji će pratiti vidljivost svake rakete
const rocketVisible = ref(new Array(20).fill(false))

// Postavljanje vidljivosti prvih 5 raketa na false, ostale su po defaultu false
rocketVisible.value.slice(1, 20).forEach((_, index) => {
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
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  overflow: hidden;
}

.animate-slide-up-right {
  animation: slideUpRight 4s infinite;
}


@keyframes slideUpRight {
  from {
    opacity: 1;
    transform: translateX(-100px) translateY(200px);
  }
  to {
    opacity: 0;
    transform: translateX(calc(100% + 100px)) translateY(-200px);
  }
}
.delay-75:nth-child(n) {
  animation-delay: calc(0.75s * (n - 1));
}
</style>
