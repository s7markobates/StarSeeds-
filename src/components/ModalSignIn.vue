<template>
  <Transition name="back-slide">
    <div v-show="modalActive" class="absolute p-6 z-50 w-screen h-screen bg-black bg-opacity-60">
      <Transition name="slide">
        <div v-if="modalActive" class="w-[500px] h-[760px]  mx-auto border-4 rounded-2xl border-orange-400 light">
          <div class="flex justify-end">
            <i class="fas fa-times mr-3 mt-1 text-2xl text-orange-400 cursor-pointer" @click="$emit('close-modal')"></i> 
          </div>
          <div class="flex justify-center mt-1">
            <p class="font-style text-orange-400">Welcome to</p>
          </div>
          <div class="flex justify-center mt-[2px]">
            <p class="text-4xl font-style">
                <span class="text-orange-400 mr-[3px]">Star</span>
                <i class="fas fa-meteor text-orange-400"></i>
                <span class="text-yellow-400">seeds</span>
            </p>
          </div>
          <form class="flex flex-col w-[380px] m-auto mt-9">
            <h2 class="self-center text-4xl uppercase font-style text-yellow-400 mb-3 tracking-tight">Log in</h2>
            <div>
              <label for="name" class="ml-3 text-orange-400 font-semibold">Name:</label>
              <input v-model="formData.name" id="name" type="text" class="input-field" placeholder="Enter your full name" required >
            </div>
            <div class="mt-2">
              <label for="email" class="ml-3 text-orange-400 font-semibold">Email address:</label>
              <input v-model="formData.email" id="email" type="email" class="input-field" placeholder="Enter your email" required >
            </div>
            <div class="mt-2">
              <label for="password" class="ml-3 text-orange-400 font-semibold">Password:</label>
              <input v-model="formData.password" id="password" type="password" class="input-field-gray" placeholder="••••••" required>
            </div>  
            <button class="yellow-button" @click.prevent="signIn" title="Sign in with existing member">SIGN IN</button>
            <button class="yellow-button-forget" @click.prevent="forgotPassword" title="Don't forget your password">FORGOT YOUR PASSWORD?</button>
            <div class="mt-5">
              <div class="flex items-center justify-center border-t border-gray-300 w-full pt-5">
                <p class="mr-10 font-semibold text-orange-400">Don't have an account?</p>
                <button @click.prevent="submitFormSignUp" class="signup-button" title="Sign up with new member">
                  <p><span class="pr-2">SIGN UP</span><i class="fas fa-rocket fa-spin"></i></p>
                </button>
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

const forgotPassword = () => {
  console.log('Tek treba ovo da naučim. :)');
}

const saveStatus = () => {
  if (statusInput.value) {
    const newStatus = { text: statusInput.value }

    if (profile.value) {
      profile.value.statuses.push(newStatus)
      updateProfileOnServer(profile.value)
    } else {
      localStatuses.value.push(newStatus) // Sačuvajte status lokalno ako nema prijavljenog profila
    }

    statusInput.value = ""
  }
}

const updateProfileOnServer = (profileData) => {
  fetch(`http://localhost:3000/profile/${profileData.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ statuses: profileData.statuses })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Profile updated:', data)
    })
    .catch(error => {
      console.error('Error updating profile:', error)
    })
}

</script>

<style scoped>
.yellow-button {
  @apply mt-5 w-full p-3 border-2 rounded-3xl border-orange-400 bg-orange-400 text-white hover:bg-white hover:text-orange-400 font-bold cursor-pointer
}
.yellow-button-forget {
  @apply mt-5 w-full p-3 border-2 rounded-3xl border-orange-400 bg-transparent text-orange-400 hover:bg-white hover:text-orange-400 font-bold cursor-pointer
}
.input-field {
  @apply mt-2 w-full p-3 border border-gray-400 light text-black rounded-3xl
}
.input-field-gray {
  @apply mt-2 w-full p-3 border border-gray-400 light text-black rounded-3xl
}
.signup-button {
  @apply bg-orange-400 text-white hover:bg-orange-500  font-bold border-4 border-orange-400 rounded-3xl cursor-pointer px-9 py-3
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
.light {
  background: #1488CC;
  background: -webkit-linear-gradient(to left, #2B32B2, #1488CC);
  background: linear-gradient(to left, #2B32B2, #1488CC); 
}
.font-style {
    font-family: 'Yatra One', cursive;
}
</style>