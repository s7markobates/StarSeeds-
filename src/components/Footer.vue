<template>
    <div :class="footerClass" class="relative overflow-hidden" v-show="!shouldShowFooter">
        <hr>
        <div class="flex justify-center pt-16 sm:mt-8">
            <p class="text-2xl sm:text-5xl font-style">
                <span class="text-orange-400 mr-[3px]">Star</span>
                <i class="fas fa-meteor text-orange-400"></i>
                <span class="text-yellow-400">seeds</span>
            </p>
        </div>
        <div class="flex justify-center mt-2 sm:mt-5 text-sm sm:text-md sm:font-semibold">
            <p>Contact Us</p>
            <p class="mx-3 sm:mx-10">Terms and Conditions</p>
            <p>Privacy Policy</p> 
        </div>
        <div class="flex justify-center mt-3 sm:mt-5 pb-3 sm:pb-5">
            <button class="button-icon" title="LinkedIn"><i class="fab fa-linkedin-in text-sm sm:text-xl sm:pl-[1px]"></i></button>
            <button class="button-icon" title="Facebook"><i class="fab fa-facebook-f text-sm sm:text-xl sm:pl-[1px]"></i></button>
            <button class="button-icon" title="Instagram"><i class="fab fa-instagram text-sm sm:text-xl sm:pl-[1px]"></i></button>
            <button class="button-icon" title="GitHub"><i class="fab fa-github text-sm sm:text-xl sm:pl-[1px]"></i></button>
            <button class="button-icon" title="Viber"><i class="fab fa-viber text-sm sm:text-xl"></i></button>
        </div>
        <div class="flex justify-center text-xs sm:text-sm font-light pb-20">
            <h1>© 2023 Star Seeds | All Rights Reserved | Powered by bts ©</h1>
        </div>
        <i class="fas fa-sun fa-spin text-yellow-400 text-[20px] absolute top-[100px] right-[105px]"></i>
        <i class="fas fa-sun fa-spin text-yellow-500 text-[11px] opacity-80 absolute top-[60px] right-[205px]"></i>
        <i class="fas fa-sun fa-spin text-yellow-600 text-[8px] opacity-80 absolute top-[35px] right-[250px]"></i>
        <i class="fas fa-sun fa-spin text-yellow-500 text-[20px] opacity-80 absolute top-[150px] right-[300px]"></i>
        <i class="fas fa-sun fa-spin text-yellow-500 text-[25px] opacity-90 absolute top-[300px] right-[140px]"></i>
        <i class="fas fa-sun fa-spin text-yellow-500 text-[10px] opacity-90 absolute top-[50px] right-[120px]"></i>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

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

const shouldShowFooter = computed(() => {
  const currentRouteName = router.currentRoute.value.name;
  return (
    currentRouteName === 'chat'||
    currentRouteName === 'chatPerson'
  )
})

</script>

<style scoped>
.button-icon {
    @apply mx-1 h-8 w-8 sm:h-10 sm:w-10 sm:py-[2px] sm:px-[6px] border-2 rounded-full border-orange-400 cursor-pointer
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
.dark hr {
    border-color: #F97316;
    border-width: 2px;
}
.light hr {
    border-color: #F97316;
    border-width: 2px;
}
.light {
  background: #1488CC;
  background: -webkit-linear-gradient(to top right, #1488CC, #2B32B2, #302b63, #24243e, #0f0c29);
  background: linear-gradient(to top right, #1488CC, #2B32B2, #302b63, #24243e, #0f0c29);
  color: white;
}
.light button {
    color: #F97316;
}
.light button:hover {
    background-color: #F97316;
    color: white;
}
</style>