<template>
  <Transition name="back-slide">
    <div v-show="modalActive" class="absolute p-6 z-50 w-screen h-screen bg-black bg-opacity-60">
      <Transition name="slide">
        <div v-if="modalActive" class="w-[500px] h-[580px] mx-auto border rounded-md border-gray-100 bg-white">
          <div class="flex justify-end">
            <i class="fas fa-times mr-2 text-xl text-gray-600 cursor-pointer" @click="$emit('close-modal')"></i> 
          </div>
          <form class="flex flex-col bg-white w-[380px] m-auto">
            <h2 class="self-center text-5xl uppercase text-gray-500 mt-1 mb-4 tracking-tight">Log in</h2>
            <div>
              <label for="name" class="ml-3 text-gray-500 font-semibold">Name</label>
              <input v-model="formData.name" id="name" type="text" class="input-field" placeholder="Enter your full name" required >
            </div>
            <div class="mt-2">
              <label for="email" class="ml-3 text-gray-500 font-semibold">Email address</label>
              <input v-model="formData.email" id="email" type="email" class="input-field" placeholder="Enter your email" required >
            </div>
            <div class="mt-2">
              <label for="password" class="ml-3 text-gray-500 font-semibold">Password</label>
              <input v-model="formData.password" id="password" type="password" class="input-field-gray" placeholder="••••••" required>
            </div>  
            <button class="yellow-button" @click.prevent="signIn" title="Sign in with existing member">SIGN IN</button>
            <button class="yellow-button" @click.prevent="forgotPassword" title="Don't forget your password">FORGOT YOUR PASSWORD?</button>
            <div class="mt-3">
              <div class="flex items-center border-t border-gray-300 w-full pt-5">
                <p class="mr-10 font-semibold text-gray-500">Don't have an account?</p>
                <button @click.prevent="submitFormSignUp" class="signup-button" title="Sign up with new member">SIGN UP</button>
              </div>
            </div>
          </form>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

defineEmits(["close-modal"])

const props = defineProps({
  modalActive: {
    type: Boolean,
    default: false
  }
})

const formData = ref({
  name: "",
  email: "",
  password: ""
})

const submitFormSignUp = () => {
  fetch('http://localhost:3000/profile')
  .then(response => response.json())
  .then(data => {
    const existingProfile = data.find(profile => profile.name === formData.value.name && profile.email === formData.value.email && profile.password === formData.value.password)

    if (existingProfile) {
      alert('An account with the same name, email and password already exists. Please choose different credentials.')
    } else {
      fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData.value)
      })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('formData', JSON.stringify(formData.value))
        formData.value.name = ""
        formData.value.email = ""
        formData.value.password = ""
        formData.value.description = ""
        router.push('/feed')
      })
      .catch(err => {
        console.log(err.message)
      })
    }
  })
  .catch(err => {
    console.log(err.message)
  })
}

const signIn = () => {
  fetch('http://localhost:3000/profile')
  .then(response => response.json())
  .then(data => {
    const existingProfile = data.find(profile => profile.name === formData.value.name && profile.email === formData.value.email)

    if (existingProfile) {
      localStorage.setItem('formData', JSON.stringify(formData.value))
      formData.value.name = ""
      formData.value.email = ""
      formData.value.password = ""
      formData.value.description = ""
      router.push('/feed')
    } else {
      alert('Incorrect name, email, or password. Please try again.')
    }
  })
  .catch(err => {
    console.log(err.message)
  })
}

const forgotPassword = () => {
  console.log('Tek treba ovo da naučim. :)');
}

</script>

<style scoped>
.yellow-button {
  @apply mt-5 w-full p-2 border rounded-3xl border-orange-400 bg-orange-400 text-white hover:bg-white hover:text-orange-400 font-bold cursor-pointer
}
.input-field {
  @apply mt-2 w-full p-3 border border-gray-400 bg-white text-black rounded-3xl
}
.input-field-gray {
  @apply mt-2 w-full p-3 border border-gray-400 bg-gray-200 text-black rounded-3xl
}
.signup-button {
  @apply bg-white text-orange-300 hover:bg-orange-400 hover:text-white font-bold border-2 border-orange-400 rounded-3xl cursor-pointer px-12 py-2
}
.slide-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-enter-active {
  transition: all ease-out 0.3s;
}
.slide-enter-to {
  transform: translateY(0%);
  opacity: 1;
}
.slide-leave-from, .back-slide-leave-from  {
  transform: translateY(0%);
  opacity: 1;
}
.slide-leave-active, .back-slide-leave-active {
  transition: all linear 0.1s;
}
.slide-leave-to, .back-slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>