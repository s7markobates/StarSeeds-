<template>
    <div class="w-[80%] sm:w-[450px] sm:h-[520px] mx-auto border-4 rounded-2xl border-orange-400 light opacity-90">
        <div class="flex justify-center mt-6">
            <p class="text-4xl font-style">
                <span class="text-orange-400 mr-[3px]">Star</span>
                <i class="fas fa-meteor text-orange-400"></i>
                <span class="text-yellow-400">seeds</span>
            </p>
        </div>
        <form class="flex flex-col sm:w-[380px] m-auto mt-2 sm:mt-3">
            <div class="flex flex-col sm:flex-hidden">
                <label for="name" class="mx-auto sm:ml-3 text-orange-400 text-sm sm:text-base font-semibold">Name:</label>
                <input v-model="formData.name" id="name" type="text" class="input-field" placeholder="Enter your full name" required >
            </div>
            <div class="mt-2 flex flex-col sm:flex-hidden">
                <label for="email" class="mx-auto sm:ml-3 text-orange-400 text-sm sm:text-base font-semibold">Email address:</label>
                <input v-model="formData.email" id="email" type="email" class="input-field" placeholder="Enter your email" required >
            </div>
            <div class="mt-2 flex flex-col sm:flex-hidden">
                <label for="password" class="mx-auto sm:ml-3 text-orange-400 text-sm sm:text-base font-semibold">Password:</label>
                <input v-model="formData.password" id="password" type="password" class="input-field-gray" placeholder="••••••" required>
            </div>  
            <button class="yellow-button" @click.prevent="signIn" title="Sign in with existing member">SIGN IN</button>
            <div class="my-3 sm:my-5">
                <div class="flex items-center justify-center border-t border-gray-300 w-full pt-3 sm:pt-5">
                    <button @click.prevent="submitFormSignUp" class="signup-button" title="Sign up with new member">
                        <p><span class="pr-2">SIGN UP</span><i class="fas fa-rocket"></i></p>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = ref({
  name: "",
  email: "",
  password: ""
})

const localStatuses = ref([])

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
        localStatuses.value = []
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
      localStatuses.value.forEach(status => {
          existingProfile.statuses.push(status) // Dodajte lokalno sačuvane statuse u profil prilikom sign-in-a
        })
        localStatuses.value = []
      router.push('/feed')
    } else {
      alert('Incorrect name, email, or password. Please try again.')
    }
  })
  .catch(err => {
    console.log(err.message)
  })
}
</script>

<style scoped>
.input-field {
    @apply mt-2 w-[85%] mx-auto sm:w-full p-2 sm:p-3 border border-gray-400 light text-white rounded-3xl
}
.input-field-gray {
    @apply mt-2 w-[85%] mx-auto sm:w-full p-2 sm:p-3 border border-gray-400 light text-white rounded-3xl
}
.yellow-button {
    @apply w-[85%] sm:w-full mt-5 mx-auto p-2 sm:p-3 border-2 rounded-3xl border-orange-400 bg-orange-400 text-white hover:bg-white hover:text-orange-400 duration-300 font-bold cursor-pointer
}
.yellow-button-forget {
    @apply w-[85%] sm:w-full mt-5 mx-auto p-2 sm:p-3 border-2 rounded-3xl border-orange-400 bg-transparent text-orange-400 hover:bg-white hover:text-orange-400 font-bold cursor-pointer
}
.signup-button {
    @apply px-3 py-1 sm:px-7 bg-orange-400 text-white hover:bg-orange-500 font-bold border-4 border-orange-400 rounded-3xl duration-300 cursor-pointer
}
.light {
  background: #1488CC;
  background: -webkit-linear-gradient(to top right, #1488CC, #2B32B2, #302b63, #24243e, #0f0c29);
  background: linear-gradient(to top right, #1488CC, #2B32B2, #302b63, #24243e, #0f0c29);
}
.font-style {
    font-family: 'Yatra One', cursive;
}
</style>