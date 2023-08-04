<template>
    <div class="py-24 relative overflow-hidden">
        <div class="w-[60%] mx-auto">
            <h1 class="title">Subscribe to our newsletter</h1>
            <p class="paragraph">"After a while, finding that nothing more happened, she decided on going into the garden at once, but, alas for poor Alice. When she got to the door, she found she had forgotten the little golden key, and when she went back..."</p>
        </div>
        <div class="flex justify-center items-center mx-auto pt-6">
            <input v-model="subscriber.email" type="email" placeholder="Enter your email" class="input-class">
            <button @click.prevent="subscribe" class="button-subscribe">Dive into the rabbit hole <i class="fas fa-carrot pl-1"></i></button>
        </div>
        <i class="fas fa-meteor meteor-class bottom-[-30px] lg:bottom-5 left-[-100px] lg:left-16 text-[250px]"></i>
        <i class="fas fa-meteor meteor-class bottom-12 right-[-300px] md:right-[-100px] lg:right-12 text-[470px]"></i>
    </div>

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-[5]">
        <div class="light p-14 rounded-2xl border-4 border-orange-400">
            <p class="text-center text-xl text-orange-400">{{ modalText }}</p>
            <button @click="closeModal" class="button-modal">Close</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const modalText = ref("")

const subscriber = ref({
    email: ""
})

const subscribe = () => {
    if (subscriber.value.email && subscriber.value.email.includes('@')) {
        // Proveri da li mejl već postoji na serveru
        fetch('http://localhost:3000/subscribers')
        .then(response => response.json())
        .then(data => {
            const existingSubscriber = data.find(item => item.email === subscriber.value.email)
            if (existingSubscriber) {
                showModal.value = true;
                modalText.value = "This email is already subscribed. Please enter a different email."
            } else {
                // Ako mejl ne postoji, izvrši slanje
                fetch('http://localhost:3000/subscribers', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(subscriber.value)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Successfully subscribed:', data);
                    showModal.value = true;
                    modalText.value = "You have successfully subscribed to the mailing list. Congratulations!"
                })
                .catch(err => {
                    console.log(err.message)
                })
            }
        })
        .catch(err => {
            console.log(err.message)
        })
    } else {
        showModal.value = true;
        modalText.value = "You have entered an invalid email. Please try again."
    }
}

const closeModal = () => {
    showModal.value = false;
    modalText.value = "";
}
</script>

<style scoped>
.light {
  background: #1488CC;
  background: -webkit-linear-gradient(to top right, #1488CC, #2B32B2, #302b63, #24243e, #0f0c29);
  background: linear-gradient(to top right, #1488CC, #2B32B2, #302b63, #24243e, #0f0c29);
}
.font-custom {
  font-family: 'Yatra One', cursive;
}
.title {
  @apply text-2xl md:text-4xl lg:text-5xl text-orange-400 text-center font-custom 
}
.paragraph {
  @apply py-4 text-[15px] md:text-base opacity-100 text-blue-500 text-center z-[1]
}
.input-class {
  @apply light py-5 md:py-2 pl-3 w-[150px] md:w-[350px] placeholder-yellow-400 text-yellow-400 focus:outline-none border-4 border-orange-400 z-[1] rounded-s-xl
}
.button-subscribe {
  @apply bg-orange-400 py-2 pr-3 border-4 border-l-0 -ml-1 text-right border-[#2B32B2] w-[150px] md:w-[270px] text-white z-[1] hover:bg-orange-500 rounded-e-xl
}
.meteor-class{
  @apply text-orange-400 absolute opacity-20
}
.button-modal {
  @apply mt-5 block mx-auto bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500
}
</style>
