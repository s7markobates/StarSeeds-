<template>
  <div class="text-blue-500 bg-white  mx-auto">

    <Banner class="light relative overflow-hidden">
      <div class="flex flex-col justify-center items-center py-[300px]">
        <div class="text-[30px] my-auto sm:mt-1 sm:text-[120px] font-custom">
          <span class="text-orange-400 mr-[5px]">Star</span>
          <i class="fas fa-meteor text-orange-400"></i>
          <span class="text-yellow-400 ">seeds</span>
        </div>
        <h1 class="-mt-6 mb-5 text-white text-xl">A very cool ChatApp</h1>
      </div>
      <i class="fas fa-globe-europe fa-flip-horizontal text-green-500 text-[700px] absolute -bottom-[500px] opacity-80 left-1"></i>
      <i class="fab fa-galactic-senate text-white text-[60px] absolute top-40 opacity-50 right-40"></i>
      <i class="fas fa-vihara text-yellow-400 text-[30px] absolute bottom-[175px] left-[260px] opacity-80"></i>

      <i class="fas fa-seedling text-green-700 text-[20px] absolute bottom-[140px] left-[480px]"></i>
      <i class="fas fa-seedling text-green-700 text-[20px] absolute bottom-[140px] left-[280px]"></i>
      <i class="fas fa-seedling text-green-700 text-[20px] absolute bottom-[100px] left-[400px]"></i>
      <i class="fas fa-seedling text-green-700 text-[20px] absolute bottom-[25px] left-[510px]"></i>
      <i class="fas fa-street-view text-gray-100 text-[25px] opacity-90 absolute bottom-[175px] left-[320px] hover:text-[30px] duration-100"></i>
      <i class="fas fa-street-view text-yellow-600 text-[25px] opacity-90 absolute bottom-[150px] left-[430px] hover:text-[30px] duration-100"></i>
      <i class="fas fa-street-view text-red-700 text-[25px] opacity-90 absolute bottom-[100px] left-[460px] hover:text-[30px] duration-100"></i>
      <i class="fas fa-street-view text-amber-900 text-[25px] opacity-90 absolute bottom-[90px] left-[530px] hover:text-[30px] duration-100"></i>
      <i class="fas fa-street-view text-gray-800 text-[25px] opacity-90 absolute bottom-[40px] left-[560px] hover:text-[30px] duration-100"></i>
      <i class="fas fa-tree text-green-700 text-[31px] absolute bottom-[150px] left-[380px]"></i>
      <i class="fas fa-tree text-green-900 text-[28px] absolute bottom-[100px] left-[150px]"></i>
      <i class="fas fa-tree text-green-800 text-[31px] absolute bottom-[65px] left-[500px]"></i>
      <i class="fas fa-sun fa-spin text-yellow-500 text-[19px] opacity-80 absolute top-[100px] right-[65px]"></i>
      <i class="fas fa-sun fa-spin text-yellow-500 text-[11px] opacity-80 absolute top-[110px] right-[205px]"></i>
      <i class="fas fa-sun fa-spin text-yellow-500 text-[8px] opacity-80 absolute top-[95px] right-[250px]"></i>
      <i class="fas fa-sun fa-spin text-yellow-500 text-[8px] opacity-80 absolute top-[105px] right-[400px]"></i>
      <i class="fas fa-sun fa-spin text-yellow-500 text-[8px] absolute top-[280px] right-[60px]"></i>
      <i class="fas fa-sun fa-spin text-yellow-500 text-[10px] opacity-80 absolute top-[300px] right-[40px]"></i>
      <i class="fas fa-sun fa-spin text-yellow-500 text-[18px] opacity-80 absolute top-[150px] right-[300px]"></i>
      <i class="fas fa-sun fa-spin text-yellow-500 text-[22px] absolute top-[300px] right-[140px]"></i>
      <i class="fas fa-sun fa-spin text-yellow-500 text-[10px] opacity-80 absolute top-[380px] right-[120px]"></i>
      <i class="fas fa-sun fa-spin text-yellow-500 text-[8px] opacity-90 absolute top-[100px] left-[240px]"></i>
      <i class="fas fa-sun fa-spin text-yellow-500 text-[8px] absolute top-[90px] left-[290px]"></i>
      <i class="fas fa-sun fa-spin text-yellow-500 text-[10px] opacity-80 absolute top-[110px] left-[340px]"></i>
      <i class="fas fa-sun fa-spin text-yellow-500 text-[10px] opacity-90 absolute bottom-[110px] right-[340px]"></i>

      <!-- <i class="fas fa-dice-d20 text-white text-[100px] opacity-60 absolute bottom-[300px] right-[320px]"></i> -->
    </Banner>

    <AboutUs></AboutUs>

    <!-- <div>
      <h1 class="title">Connect with us</h1>
      <img class="w-[100%] h-[100%] md:w-[80%] md:h-[80%] mx-auto"  src="../assets/All.png" alt="">
    </div> -->
    
    <Slider></Slider>

    <Features></Features>

    <div class="flex w-full py-8 light relative">
      <SignInPage class="mr-36 z-[1]" />
      <Banner class="flex flex-col justify-center items-center mr-40">
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

  </div>
</template>

<script setup>
import SignInPage from "../components/SignInPage.vue"
import Banner from "../components/Banner.vue"
import Slider from "../components/Slider.vue"
import Subscribe from "../components/Subscribe.vue"
import AboutUs from "../components/AboutUs.vue"
import Features from "../components/Features.vue"

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

