<template>
    <div class="light rounded-lg relative">
      <div v-if="currentSlideIndex === 0" class="grid grid-cols-2 h-[660px] my-4">
        <div class="flex flex-col justify-center items-end my-auto">
          <h1 class="title">Private Messaging Redefined</h1>
          <p class="paragraph">Welcome to StarSeeds application, the ultimate private messaging app designed with cutting-edge technology and security in mind. Experience seamless, reliable, and encrypted communication like never before. Connect with friends, family, and colleagues across the globe, knowing your conversations are safe from prying eyes. Join the StarSeeds community today and embrace the future of private messaging.</p>
          <i class="fas fa-meteor text-orange-300 absolute top-3 left-5 opacity-50 text-[250px]"></i>
        </div>
        <div class="flex justify-center my-auto ml-16">
          <img src="../assets/01Chat.png" class="h-[600px] rounded-[44px] z-[1]" alt="">
          <i class="fas fa-meteor text-orange-300 absolute bottom-3 right-5 opacity-50 text-[400px]"></i>
        </div>
      </div>
      <div v-if="currentSlideIndex === 1" class="grid grid-cols-2 h-[660px] my-4">
        <div class="flex flex-col justify-center items-end my-auto">
          <h1 class="title">Unparalleled Security</h1>
          <p class="paragraph">At StarSeeds, your privacy is our top priority. With end-to-end encryption, your messages are shielded from any unauthorized access, ensuring that only you and the intended recipient can read them. Say goodbye to worries about data breaches or unwanted surveillance. Feel confident in sharing your most personal thoughts and moments, knowing they remain between you and your chosen contacts.</p>
          <i class="fas fa-meteor text-orange-300 absolute top-3 left-5 opacity-50 text-[250px]"></i>
        </div>
        <div class="flex justify-center my-auto ml-16">
          <img src="../assets/02Profile.png" class="h-[600px] rounded-[44px] z-[1]" alt="">
          <i class="fas fa-meteor text-orange-300 absolute bottom-3 right-5 opacity-50 text-[400px]"></i>
        </div>
      </div>
      <div v-if="currentSlideIndex === 2" class="grid grid-cols-2 h-[660px] my-4">
        <div class="flex flex-col justify-center items-end my-auto">
          <h1 class="title">Seamless User Experience</h1>
          <p class="paragraph">StarSeeds delivers a user-friendly interface that makes messaging effortless and enjoyable. From intuitive navigation to customizable themes, we provide the tools to create your perfect messaging environment. Whether it's one-on-one chats or group conversations, our app offers a seamless user experience that fosters stronger connections and brings people closer together. Try StarSeeds now and elevate your messaging game!</p>
          <i class="fas fa-meteor text-orange-300 absolute top-3 left-5 opacity-50 text-[250px]"></i>
        </div>
        <div class="flex justify-center my-auto ml-16">
          <img src="../assets/03Messages.png" class="h-[600px] rounded-[44px] z-[1]" alt="">
          <i class="fas fa-meteor text-orange-300 absolute bottom-3 right-5 opacity-50 text-[400px]"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const currentSlideIndex = ref(0)
  
  const rotateSlides = () => {
    currentSlideIndex.value = (currentSlideIndex.value + 1) % 3
  }
  
  onMounted(() => {
    setInterval(rotateSlides, 10000)
  })
  </script>
  
  <style scoped>
  .title {
    @apply text-3xl text-yellow-400 text-end
  }
  .paragraph {
    @apply pl-20 py-3 sm:text-sm text-white text-justify indent-12
  }
  </style>
  