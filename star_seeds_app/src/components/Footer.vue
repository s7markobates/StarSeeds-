<template>
    <div :class="footerClass">
        <hr>
        <div class="flex justify-center mt-10">
            <p class="text-4xl font-style">
                <span class="text-orange-400 mr-[3px]">Star</span>
                <i class="fas fa-meteor text-orange-400"></i>
                <span class="text-yellow-400">seeds</span>
            </p>
        </div>
        <div class="flex justify-center mt-5 text-lg font-semibold">
            <p>Contact Us</p>
            <p class="mx-10">Terms and Conditions</p>
            <p>Privacy Policy</p> 
        </div>
        <div class="flex justify-center mt-5 pb-5">
            <button class="button-icon" title="GitHub"><i class="fab fa-linkedin-in text-2xl pl-[1px]"></i></button>
            <button class="button-icon" title="Facebook"><i class="fab fa-facebook-f text-2xl pl-[1px]"></i></button>
            <button class="button-icon" title="Twitter"><i class="fab fa-twitter text-2xl pl-[1px]"></i></button>
            <button class="button-icon" title="Instagram"><i class="fab fa-instagram text-2xl pl-[1px]"></i></button>
            <button class="button-icon" title="GitHub"><i class="fab fa-github text-2xl pl-[1px]"></i></button>
        </div>
        <div class="flex flex-col items-center text-sm font-light pb-5">
            <h1>© 2023 Star Seeds | All Rights Reserved | Powered by bts ©</h1>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const footerClass = computed(() => {
  const currentRoute = useRoute()
  return (
    currentRoute.name === 'profiles' ||
    currentRoute.name === 'profileDetails' ||
    currentRoute.name === 'feed' ||
    currentRoute.name === 'chat' ||
    currentRoute.name === 'chatPerson'
    ? 'dark' : 'light'
  )
})

</script>

<style scoped>
.button-icon {
    @apply mx-2 h-12 w-12 py-[2px] px-[6px] border-2 rounded-full border-orange-400  cursor-pointer
}
.font-style {
    font-family: 'Yatra One', cursive;
}
.dark {
    background-image: url('../assets/night_sky.jpg');
    background-size: cover;
    background-position: center;
    color: white;
}
.dark button {
    color: #F97316;
}
.dark button:hover{
    background-color: white;
}
.light {
    background-color: white;
    color: gray;
}
.light button {
    color: #F97316;
}
.light button:hover {
    background-color: #F97316;
    color: white;
}
</style>