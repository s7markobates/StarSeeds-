<template>
    <div class="bg-white py-14 md:py-20 relative overflow-hidden">
        <h1 class="title">Features</h1>
        <div class="flex flex-col md:flex-row mx-20 md:mt-3">
            <div class="feature-d">
                <i class="fab fa-connectdevelop feature-icon"></i>
                <h1 class="feature-title">Instant Connectivity</h1>
                <p class="feature-p">Seamless Global Conversations: Stay connected with friends worldwide through real-time messaging, enabling instant and effortless communication across distances.</p>
            </div>
            <div class="feature-d">
                <i class="fas fa-brain feature-icon"></i>
                <h1 class="feature-title">Intelligent Communication</h1>
                <p class="feature-p">Expressive AI-Enhanced Chats: Elevate conversations with AI-powered emojis and voice-to-text capabilities, making your messages more engaging and accessible.</p>
            </div>
            <div class="feature-d">
                <i class="fas fa-fingerprint feature-icon"></i>
                <h1 class="feature-title">Enhanced Privacy and Security</h1>
                <p class="feature-p">Fortified Confidentiality: Ensure your privacy with end-to-end encryption and self-destructing messages, providing a secure space for your most sensitive discussions.</p>
            </div>
        </div>
        <i class="fas fa-meteor meteor-class bottom-5 left-[-30px] md:left-16 text-[250px]"></i>
        <i class="fas fa-meteor meteor-class bottom-[500px] md:bottom-24 right-[-200px] md:right-[-60px] lg:right-10 text-[470px]"></i>
    </div>
</template>

<script setup>

</script>

<style scoped>
.font-custom {
    font-family: 'Yatra One', cursive;
}
.title {
    @apply text-2xl md:text-4xl lg:text-5xl text-orange-400 text-center font-custom
}
.feature-d {
    @apply flex flex-col mt-5
}

.feature-icon {
    @apply text-4xl md:text-5xl text-center mb-5 mt-1 md:mt-0 text-orange-400
}
.feature-title {
    @apply text-center mb-3 font-custom text-orange-400 text-lg md:text-xl lg:text-2xl
}
.feature-p {
    @apply px-5 lg:px-12 text-center text-[15px] md:text-base
}
.meteor-class {
    @apply text-orange-400 absolute opacity-20
}
</style>