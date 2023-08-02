<template>
  <div class="text-blue-500 mt-[60px] bg-white  mx-auto">

    <Banner class="light">
      <div class="flex flex-col justify-center items-center py-20">
        <div>
          <h1 class="text-center text-white text-lg font-custom">Join our community</h1>
          <div class="text-[30px] my-auto sm:my-1 sm:text-[100px] font-custom">
            <span class="text-orange-400 mr-[3px]">Star</span>
            <i class="fas fa-meteor text-orange-400"></i>
            <span class="text-yellow-400">seeds</span>
          </div>
        </div>
      </div>
    </Banner>

    <div class="bg-white p-2 h-40 border-b-2 border-orange-400">
      <h1 class="title">Message privatly</h1>
      <p class="paragraph">
        Simple, reliable, private messaging for free, available all over the world.<br/>
        With private messaging you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.
      </p>
    </div>

    <Banner>
      <div class="light text-white text-right p-2 h-40 border-b-2 border-orange-400">
        <h1 class="title">Safety first</h1>
        <p class="paragraph">With end-to-end encryption, your personal messages are secured. Only you and the person you're talking to can read them, and nobody in between, not even StarSeeds App.</p>
      </div>
    </Banner>

    <div class="bg-white p-2 h-40 border-b-2 border-orange-400">
      <h1 class="title">Stay connected</h1>
      <p class="paragraph">Whether it is planning a best friends outing or simply staying on top of your family chats, group conversations should feel effortless.</p>
    </div>

    <Banner>
      <div class="light text-white text-right p-2 h-40 border-b-2 border-orange-400 ">
        <h1 class="title">Multiplatform. Always Synced.</h1>
        <p class="paragraph">Mobile, tablet and desktop - your chats on StarSeeds are 100% synced between any device you use.</p>
      </div>
    </Banner>

    <!-- <div>
      <h1 class="title">Connect with us</h1>
      <img class="w-[100%] h-[100%] md:w-[80%] md:h-[80%] mx-auto"  src="../assets/All.png" alt="">
    </div> -->
    
    <Slider />

    <div class="flex w-full mt-12 py-8 light">
      <SignInPage class="mr-36" />
      <Banner class="flex flex-col justify-center items-center mr-40">
        <h1 class="text-center text-white text-lg font-custom">Join our community</h1>
        <div class="text-[30px] my-auto sm:my-1 sm:text-[80px] font-custom">
          <span class="text-orange-400 mr-[3px]">Star</span>
          <i class="fas fa-meteor text-orange-400"></i>
          <span class="text-yellow-400">seeds</span>
        </div>
      </Banner>
    </div>

    <Subscribe></Subscribe>

  </div>
</template>

<script setup>
import SignInPage from "../components/SignInPage.vue"
import Banner from "../components/Banner.vue"
import Slider from "../components/Slider.vue"
import Subscribe from "../components/Subscribe.vue"

</script>

<style scoped>
.font-custom {
  font-family: 'Yatra One', cursive;
}
.light {
  background: #1488CC;
  background: -webkit-linear-gradient(to left, #2B32B2, #1488CC);
  background: linear-gradient(to left, #2B32B2, #1488CC); 
}
.title {
  @apply text-3xl p-2 text-yellow-400 font-custom
}
.paragraph {
  @apply p-2 sm:text-sm
}
</style>

