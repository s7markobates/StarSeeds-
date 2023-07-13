<template>
    <hr>
    <div class="flex justify-center">
        <img src="../assets/logo-footer.png" class="h-16 mt-5" alt="">
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
</script>

<style scoped>
.button-icon {
    @apply mx-2 h-12 w-12 py-[2px] px-[6px] border rounded-full bg-white border-gray-300 text-orange-400 cursor-pointer
  }
</style>