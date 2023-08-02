<template>
  <div class="light relative rounded-lg">
    <div v-if="currentSlideIndex === 0" class="grid grid-cols-2 h-[660px] my-4">
      <div class="flex flex-col justify-center items-end my-auto">
        <h1 :class="{ 'opacity-0 translate-x-[-50px]': !slideVisible }" class="title transition-all duration-500">{{ slideVisible ? 'Private Messaging Redefined' : '' }}</h1>
        <p :class="{ 'opacity-0 translate-x-[-20px]': !slideVisible }" class="paragraph transition-all duration-500">{{ slideVisible ? 'Welcome to StarSeeds application, the ultimate private messaging app designed with cutting-edge technology and security in mind. Experience seamless, reliable, and encrypted communication like never before. Connect with friends, family, and colleagues across the globe, knowing your conversations are safe from prying eyes. Join the StarSeeds community today and embrace the future of private messaging.' : '' }}</p>
        <i class="fas fa-meteor text-orange-400 absolute top-20 left-12 opacity-60 text-[250px]"></i>
      </div>
      <div class="flex justify-center my-auto ml-16">
        <img src="../assets/01Chat.png" class="phone-img" alt="">
        <i class="fas fa-meteor text-orange-400 absolute bottom-8 right-12 opacity-60 text-[470px]"></i>
      </div>
    </div>

    <div v-if="currentSlideIndex === 1" class="grid grid-cols-2 h-[660px] my-4">
      <div class="flex flex-col justify-center items-end my-auto">
        <h1 :class="{ 'opacity-0 translate-x-[-50px]': !slideVisible }" class="title transition-all duration-500">{{ slideVisible ? 'Unparalleled Security' : '' }}</h1>
        <p :class="{ 'opacity-0 translate-x-[-20px]': !slideVisible }" class="paragraph transition-all duration-500">{{ slideVisible ? 'At StarSeeds, your privacy is our top priority. With end-to-end encryption, your messages are shielded from any unauthorized access, ensuring that only you and the intended recipient can read them. Say goodbye to worries about data breaches or unwanted surveillance. Feel confident in sharing your most personal thoughts and moments, knowing they remain between you and your chosen contacts.' : '' }}</p>
        <i class="fas fa-meteor text-orange-400 absolute top-20 left-12 opacity-60 text-[250px]"></i>
      </div>
      <div class="flex justify-center my-auto ml-16">
        <img src="../assets/02Profile.png" class="phone-img" alt="">
        <i class="fas fa-meteor text-orange-400 absolute bottom-8 right-12 opacity-60 text-[470px]"></i>
      </div>
    </div>

    <div v-if="currentSlideIndex === 2" class="grid grid-cols-2 h-[660px] my-4">
      <div class="flex flex-col justify-center items-end my-auto">
        <h1 :class="{ 'opacity-0 translate-x-[-50px]': !slideVisible }" class="title transition-all duration-500">{{ slideVisible ? 'Seamless User Experience' : '' }}</h1>
        <p :class="{ 'opacity-0 translate-x-[-20px]': !slideVisible }" class="paragraph transition-all duration-500">{{ slideVisible ? "StarSeeds delivers a user-friendly interface that makes messaging effortless and enjoyable. From intuitive navigation to customizable themes, we provide the tools to create your perfect messaging environment. Whether it's one-on-one chats or group conversations, our app offers a seamless user experience that fosters stronger connections and brings people closer together. Try StarSeeds now and elevate your messaging game!" : "" }}</p>
        <i class="fas fa-meteor text-orange-400 absolute top-20 left-12 opacity-60 text-[250px]"></i>
      </div>
      <div class="flex justify-center my-auto ml-16">
        <img src="../assets/03Messages.png" class="phone-img" alt="">
        <i class="fas fa-meteor text-orange-400 absolute bottom-8 right-12 opacity-60 text-[470px]"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentSlideIndex = ref(0)
const slideVisible = ref(false)

const rotateSlides = () => {
  slideVisible.value = false
  currentSlideIndex.value = (currentSlideIndex.value + 1) % 3
  setTimeout(() => {
    slideVisible.value = true
  }, 400) // Postavi slideVisible na true nakon 100ms kako bismo primenili tranziciju
}

onMounted(() => {
  setInterval(rotateSlides, 10000)
})

</script>

<style scoped>
.title {
  @apply text-3xl text-yellow-400 text-end font-custom
}
.paragraph {
  @apply pl-28 py-3 sm:text-base text-white text-justify indent-12 z-[1]
}
.phone-img {
  @apply h-[550px] rounded-[44px] z-[1] shadow-xl shadow-orange-400
}
.animate-slide-left {
  animation: slideLeft 1s;
  animation-fill-mode: forwards;
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.font-custom {
  font-family: 'Yatra One', cursive;
}
</style>