<template>
  <div class="light relative overflow-hidden">
    <div v-if="currentSlideIndex === 0" class="slider">
      <div class="flex flex-col justify-center items-end my-auto">
        <h1 :class="{ 'opacity-0 translate-x-[-50px]': !slideVisible }" class="title">{{ slideVisible ? 'Private Messaging Redefined' : '' }}</h1>
        <p :class="{ 'opacity-0 translate-x-[-20px]': !slideVisible }" class="paragraph">{{ slideVisible ? 'Welcome to StarSeeds application, the ultimate private messaging app designed with cutting-edge technology and security in mind. Experience seamless, reliable, and encrypted communication like never before. Connect with friends, family, and colleagues across the globe, knowing your conversations are safe from prying eyes. Join the StarSeeds community today and embrace the future of private messaging.' : '' }}</p>
        <i class="fas fa-meteor meteor-small"></i>
      </div>
      <div class="flex justify-center my-auto ml-16">
        <img src="../assets/01Chat.png" class="phone-img" alt="">
        <i class="fas fa-meteor meteor-big"></i>
      </div>
    </div>

    <div v-if="currentSlideIndex === 1" class="slider">
      <div class="flex flex-col justify-center items-end my-auto">
        <h1 :class="{ 'opacity-0 translate-x-[-50px]': !slideVisible }" class="title">{{ slideVisible ? 'Unparalleled Security' : '' }}</h1>
        <p :class="{ 'opacity-0 translate-x-[-20px]': !slideVisible }" class="paragraph">{{ slideVisible ? 'At StarSeeds, your privacy is our top priority. With end-to-end encryption, your messages are shielded from any unauthorized access, ensuring that only you and the intended recipient can read them. Say goodbye to worries about data breaches or unwanted surveillance. Feel confident in sharing your most personal thoughts and moments, knowing they remain between you and your chosen contacts.' : '' }}</p>
        <i class="fas fa-meteor meteor-small"></i>
      </div>
      <div class="flex justify-center my-auto ml-16">
        <img src="../assets/02Profile.png" class="phone-img" alt="">
        <i class="fas fa-meteor meteor-big"></i>
      </div>
    </div>

    <div v-if="currentSlideIndex === 2" class="slider">
      <div class="flex flex-col justify-center items-end my-auto">
        <h1 :class="{ 'opacity-0 translate-x-[-50px]': !slideVisible }" class="title">{{ slideVisible ? 'Seamless User Experience' : '' }}</h1>
        <p :class="{ 'opacity-0 translate-x-[-20px]': !slideVisible }" class="paragraph">{{ slideVisible ? "StarSeeds delivers a user-friendly interface that makes messaging effortless and enjoyable. From intuitive navigation to customizable themes, we provide the tools to create your perfect messaging environment. Whether it's one-on-one chats or group conversations, our app offers a seamless user experience that fosters stronger connections and brings people closer together." : "" }}</p>
        <i class="fas fa-meteor meteor-small"></i>
      </div>
      <div class="flex justify-center my-auto ml-16">
        <img src="../assets/03Messages.png" class="phone-img" alt="">
        <i class="fas fa-meteor meteor-big"></i>
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
  setInterval(rotateSlides, 5000)
})

</script>

<style scoped>
.slider{
  @apply grid md:grid-cols-2 h-[660px]
}
.title {
  @apply text-[22px] lg:text-[30px] xl:text-[40px] text-yellow-400 mx-auto md:mx-0 mt-5 md:mt-0 text-end font-custom duration-500 transition-all
}
.paragraph {
  @apply pl-10 pr-10 md:pl-28 md:pr-0 py-4 text-[14px] sm:text-base text-white text-justify indent-12 z-[1] duration-500 transition-all
}
.phone-img {
  @apply h-[300px] sm:h-[340px] md:h-[400px] lg:h-[550px] mb-12 md:mb-0 rounded-[30px] lg:rounded-[44px] z-[1] shadow-xl shadow-orange-400
}
.meteor-small {
  @apply  text-orange-400 absolute top-20 left-10 opacity-60 text-[200px] lg:text-[250px]
}
.meteor-big {
  @apply text-orange-400 absolute bottom-8 right-[-70px] lg:right-12 opacity-60 text-[350px] lg:text-[470px]
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