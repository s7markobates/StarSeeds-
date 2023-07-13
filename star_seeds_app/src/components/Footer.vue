<template>
    <hr>
    <div class="flex justify-center mt-10">
        <p class="text-4xl font-style">
            <span class="text-orange-400 mr-[3px]">Star</span>
            <i class="fas fa-meteor text-orange-400"></i>
            <span class="text-yellow-400">seeds</span>
        </p>
    </div>
    <div class="flex justify-center mt-5 text-lg text-gray-500 font-semibold">
        <p>Contact Us</p>
        <p class="mx-10">Terms and Conditions</p>
        <p>Privacy Policy</p> 
    </div>
    <div class="flex justify-center mt-5 mb-12">
        <button class="button-icon" title="GitHub"><i class="fab fa-linkedin-in text-2xl pl-[1px]"></i></button>
        <button class="button-icon" title="Facebook"><i class="fab fa-facebook-f text-2xl pl-[1px]"></i></button>
        <button class="button-icon" title="Twitter"><i class="fab fa-twitter text-2xl pl-[1px]"></i></button>
        <button class="button-icon" title="Instagram"><i class="fab fa-instagram text-2xl pl-[1px]"></i></button>
        <button class="button-icon" title="GitHub"><i class="fab fa-github text-2xl pl-[1px]"></i></button>
    </div>
</template>

<script setup>
import Logo from './Logo.vue'
</script>

<style scoped>
.button-icon {
    @apply mx-2 h-12 w-12 py-[2px] px-[6px] border rounded-full bg-white border-gray-300 text-orange-400 cursor-pointer
}
.font-style {
    font-family: 'Yatra One', cursive;
}
</style>