<template>
    <div class="bg-white relative overflow-hidden">
      <div class="grid grid-cols-2">
        <img src="../assets/Lap-top.png" alt="">
        <div class="flex flex-col justify-center items-center">
          <h1 :class="{ 'opacity-0 translate-x-[30px]': !contentVisible }" class="title transition-all duration-1000">{{ contentVisible ? 'About us' : '' }}</h1>
          <p :class="{ 'opacity-0 translate-x-[30px]': !contentVisible }" class="paragraph transition-all duration-1000">{{ contentVisible ? 'Introducing StarSeeds, the revolutionary chat application that redefines communication. Unlike any other messaging platform, StarSeeds combines cutting-edge AI technology with a sleek, user-friendly interface to provide an unparalleled chatting experience. Seamlessly switch between text, voice, and even holographic messaging, allowing you to truly express yourself. Our advanced language understanding capabilities ensure no message is lost in translation, making global communication effortless. With real-time translation and personalized chat suggestions, StarSeeds bridges the gap between cultures and enhances your connections. Privacy is paramount - end-to-end encryption and self-destructing messages keep your conversations secure. Join StarSeeds today and embark on a new era of dynamic and meaningful conversations.' : '' }}</p>
          <i class="fas fa-meteor text-orange-400 absolute opacity-20 top-10 right-13 text-[500px]"></i>
        </div>
      </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'

const contentVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    contentVisible.value = true
  }, 2000)
})

</script>
  
<style scoped>
.font-custom {
    font-family: 'Yatra One', cursive;
}
.title {
    @apply text-5xl text-orange-400 text-end font-custom z-[1]
}
.paragraph {
    @apply mx-20 mt-5 sm:text-base text-blue-500 text-justify indent-16 z-[1]
}
</style>
  