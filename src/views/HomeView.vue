<template>
  <div class="text-blue-500 mt-[120px] bg-white w-[70%] mx-auto">
    <div class="h-[300px] flex justify-center items-center light border-b-2 border-orange-400 rounded-md">
      <div>
        <h1 class="text-center">Join the</h1>
        <div class="text-[30px] my-auto sm:my-0 sm:text-4xl font-custom">
          <span class="text-orange-400 mr-[3px]">Star</span>
          <i class="fas fa-meteor text-orange-400"></i>
          <span class="text-yellow-400">seeds</span>
        </div>
        <h1 class="text-center">community</h1>
      </div>
    </div>
    <div class="bg-white p-2 h-40 border-b-2 border-orange-400">
      <h1>Message privatly</h1>
      <p>Simple, reliable, private messaging for free, available all over the world.</p>
      <p>With private messaging you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.</p>
    </div>
    <div class="light text-white text-right p-2 h-40 border-b-2 border-orange-400">
      <h1>Safety first</h1>
      <p>With end-to-end encryption, your personal messages are secured. Only you and the person you're talking to can read them, and nobody in between, not even StarSeeds App.</p>
    </div>
    <div class="bg-white p-2 h-40 border-b-2 border-orange-400">
      <h1>Stay connected</h1>
      <p>Whether it is planning a best friends outing or simply staying on top of your family chats, group conversations should feel effortless.</p>
    </div>
    <div class="light text-white text-right p-2 h-40 border-b-2 border-orange-400 ">
      <h1>Multiplatform. Always Synced.</h1>
      <p>Mobile, tablet and desktop - your chats on StarSeeds are 100% synced between any device you use.</p>
    </div>
    <div>
      <h1>Connect with us</h1>
      <img class="w-[100%] h-[100%] md:w-[80%] md:h-[80%] mx-auto"  src="../assets/All.png" alt="">
    </div>
    <div class="flex items-center">
      <SignInPage />
    </div>
  </div>
</template>

<script setup>
import SignInPage from "../components/SignInPage.vue"
</script>

<style scoped>
h1 {
  @apply text-3xl p-2 text-orange-400
}
p {
  @apply p-2 sm:text-sm
}
.font-custom {
  font-family: 'Yatra One', cursive;
}
.light {
  background: #1488CC;
  background: -webkit-linear-gradient(to left, #2B32B2, #1488CC);
  background: linear-gradient(to left, #2B32B2, #1488CC); 
}
</style>
