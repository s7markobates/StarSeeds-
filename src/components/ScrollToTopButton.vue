<template>
    <button
      v-show="shouldShowScrollToTopButton"
      title="Top"
      @click="scrollToTop"
      class="scroll-to-top"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const shouldShowScrollToTopButton = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

onMounted(() => {
  window.addEventListener("scroll", () => {
    shouldShowScrollToTopButton.value = window.scrollY > window.innerHeight
  })
})

</script>

<style scoped>
.scroll-to-top {
    @apply fixed bottom-10 right-10 py-3 px-[17px] bg-transparent rounded-full shadow-md border-2 md:border-4 border-orange-400 z-[2] cursor-pointer;
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
  }
  
  .scroll-to-top i {
    @apply text-orange-400 md:text-2xl
  }
  .scroll-to-top:hover {
    opacity: 1;
    scale: 1.1;
  }
</style>