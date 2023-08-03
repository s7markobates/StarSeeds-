<template>
  <div class="text-blue-500 bg-white mx-auto">

    <Banner class="light relative overflow-hidden">
      <div class="flex flex-col justify-center items-center py-[320px]">
        <div class="text-[50px] sm:text-[70px] lg:text-[120px] my-auto sm:mt-1 font-custom">
          <span class="text-orange-400 mr-[5px]">Star</span>
          <i class="fas fa-meteor text-orange-400"></i>
          <span class="text-yellow-400 ">seeds</span>
        </div>
        <h1 class="-mt-3 lg:-mt-6 mb-5 text-white text-lg lg:text-xl">A very cool ChatApp</h1>
      </div>
      <Stars />      
    </Banner>

    <AboutUs></AboutUs>
    
    <Slider></Slider>

    <Features></Features>

    <div class="flex w-full py-8 light relative overflow-hidden">
      <SignInPage class="2xl:mr-36 z-[1]" />
      <Banner class="hidden 2xl:flex flex-col justify-center items-center mx-auto 2xl:mr-40 2xl:ml-0">
        <h1 class="text-center text-white text-lg font-custom">Join our community</h1>
        <div class="text-[30px] my-auto sm:my-1 sm:text-[80px] font-custom">
          <span class="text-orange-400 mr-[3px]">Star</span>
          <i class="fas fa-meteor text-orange-400"></i>
          <span class="text-yellow-400">seeds</span>
        </div>
      </Banner>
      <i class="fas fa-meteor text-orange-400 absolute bottom-8 left-[230px] opacity-60 text-[400px]"></i>
    </div>

    <Subscribe></Subscribe>

    <scrollToTopButton></scrollToTopButton>

  </div>
</template>

<script setup>
import SignInPage from "../components/SignInPage.vue"
import Banner from "../components/Banner.vue"
import Slider from "../components/Slider.vue"
import Subscribe from "../components/Subscribe.vue"
import AboutUs from "../components/AboutUs.vue"
import Features from "../components/Features.vue"
import Stars from "../components/Stars.vue"
import scrollToTopButton from "../components/ScrollToTopButton.vue"

</script>

<style scoped>
.font-custom {
  font-family: 'Yatra One', cursive;
}
.light {
  background: #1488CC;
  background: -webkit-linear-gradient(to top right, #1488CC, #2B32B2, #302b63, #24243e, #0f0c29);
  background: linear-gradient(to top right, #1488CC, #2B32B2, #302b63, #24243e, #0f0c29);
}
.title {
  @apply text-3xl p-2 text-yellow-400 font-custom
}
.paragraph {
  @apply p-2 sm:text-sm
}
</style>

