<template>
    <div class="py-24 relative overflow-hidden">
        <div class="w-[60%] mx-auto">
            <h1 class="title">Subscribe to our newsletter</h1>
            <p class="paragraph">"After a while, finding that nothing more happened, she decided on going into the garden at once, but, alas for poor Alice.<br> When she got to the door, she found she had forgotten the little golden key, and when she went back..."</p>
        </div>
        <div class="flex justify-center items-center mx-auto pt-6">
            <input type="email" placeholder="Enter your email" class="input-class">
            <button class="button">Dive into the rabbit hole <i class="fas fa-carrot pl-1"></i></button>
        </div>
        <i class="fas fa-meteor meteor-class bottom-5 left-16 text-[250px]"></i>
        <i class="fas fa-meteor meteor-class bottom-12 right-12  text-[470px]"></i>
    </div>
</template>
<script>

</script>

<style scoped>
.font-custom {
    font-family: 'Yatra One', cursive;
}
.title {
    @apply text-4xl text-orange-400 text-center font-custom 
}
.paragraph {
    @apply py-3 sm:text-base opacity-100 text-blue-500 text-center z-[1]
}
.input-class {
    @apply light py-2 pl-3 w-[350px] placeholder-white text-white focus:outline-none border-4 border-orange-400 z-[1] rounded-s-xl
}
.button {
    @apply bg-orange-400 py-2 pr-3 border-4 border-l-0 -ml-1 text-right border-blue-600 w-[270px] text-white z-[1] hover:bg-orange-500 rounded-e-xl
}
.meteor-class{
    @apply text-orange-400 absolute opacity-20
}
.light {
  background: #1488CC;
  background: -webkit-linear-gradient(to top right, #1488CC, #2B32B2, #302b63, #24243e, #0f0c29);
  background: linear-gradient(to top right, #1488CC, #2B32B2, #302b63, #24243e, #0f0c29);
}
</style>