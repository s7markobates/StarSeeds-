<template>
  <div>

    <div class="text-gray-600 text-lg mt-[96px] h-[100%] flex justify-between items-center">
      <div v-if="profile" class="text-xl font-bold flex-1 justify-start items-center ml-6 mt-4">
        <div class="flex items-center">
          <RouterLink :to="{ name: 'chat'}">
            <i class="fas fa-arrow-left text-orange-400 text-2xl cursor-pointer mr-3"></i>
            <span class="hover:text-orange-400">{{ getFirstName }}'s CHATS</span>
          </RouterLink>
        </div>
      </div>
      <div v-if="currentPerson" class="text-xl font-bold flex-1 mt-4 ">
        <h1 class="flex justify-center items-center text-orange-400">CHAT: {{currentPerson.name}}</h1>
      </div>
      <div class="flex-1 mr-6 ">
      </div>
    </div>

    <div v-if="profile" class="w-[96%] mt-5 mx-auto">
      <div class="bg-gray-200 w-full h-[580px] rounded-3xl flex justify-evenly items-end">
        <div class="pb-10">
          <img v-if="currentPerson" :src="currentPerson.image" class="img-class" alt="CurrentPersonImage" />
        </div>
        <div class="flex flex-col overflow-y-scroll h-[580px] w-[70%] text-white">
          <span class="current-person-message">Hellooooooooooooooooooo!</span>
          <span class="profile-message">Hello to you, too.</span>
          <span class="current-person-message">Hellooooooooooooooooooo!</span>
          <span class="profile-message ">Hello to you, too.</span>
          <span class="current-person-message">Hellooooooooooooooooooo!</span>
          <span class="profile-message">Hello to you, too.</span>
          <span class="current-person-message">Hellooooooooooooooooooo!</span>
          <span class="current-person-message">Hellooooooooooooooooooo!</span>
          <span class="current-person-message">Hellooooooooooooooooooo!</span>
          <span class="profile-message ">Hello to you, too.</span>
        </div>
        <div class="pb-10">
          <img v-if="profile && profile.image" :src="profile.image" class="img-class" alt="Profile Image" />
        </div>
      </div>

      <div class="flex justify-start items-start p-3">
        <input v-model="messageInput" @keyup.enter="sendMessage" type="text" class="input-class">
        <button @click="sendMessage" class="bttn-class">
          <i class="fas fa-paper-plane text-xl"></i>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const profile = ref(null)
const people = ref(null)
const route = useRoute()
const currentPerson = ref(null)
const messageInput = ref('')


onMounted(() => {
  const localProfile = JSON.parse(localStorage.getItem('formData'))
  if (localProfile) {
    fetchProfile(localProfile)
  }
  fetchPeople()
})

const fetchProfile = (localProfile) => {
  fetch('http://localhost:3000/profile')
  .then(response => response.json())
  .then(data => {
    const loggedInProfile = data.find(profile => profile.name === localProfile.name && profile.email === localProfile.email)
    if (loggedInProfile) {
      profile.value = loggedInProfile
    }
  })
  .catch(err => {
    console.log(err.message)
  })
}

const fetchPeople = () => {
  fetch('http://localhost:3000/profile')
  .then(response => response.json())
  .then(data => {
    people.value = data

    const personId = route.params.id
    const selectedPerson = people.value.find(person => person.id == personId)
    currentPerson.value = selectedPerson
  })
  .catch(err => {
    console.log(err.message)
  })
}

const getFirstName = computed(() => {
  if (profile.value) {
    const fullName = profile.value.name
    const firstName = fullName.split(' ')[0]
    return firstName
  }
})

const sendMessage = () => {
  const message = messageInput.value
  if (message) {
    const messageElement = document.createElement('span')
    messageElement.textContent = message
    messageElement.classList.add('bg-orange-300', 'p-3', 'my-2', 'ml-16', 'rounded-b-xl', 'rounded-tl-xl', 'text-right')

    const overflowDiv = document.querySelector('.overflow-y-scroll')
    overflowDiv.appendChild(messageElement)

    // Scroll goes up when enter new message
    overflowDiv.scrollTop = 0
    setTimeout(() => {
      overflowDiv.scrollTop = overflowDiv.scrollHeight
    }, 0)

    messageInput.value = ''
  }
}
</script>

<style>
.profile-message {
  @apply bg-orange-300 p-3 my-2 ml-16 rounded-b-xl rounded-tl-xl text-right
}
.current-person-message {
  @apply bg-red-300 p-3 my-2 mr-16 rounded-b-xl rounded-tr-xl
}
.img-class {
  @apply h-24 w-24 rounded-full border-2 border-orange-400
}
.input-class {
  @apply w-[80%] h-[55px] pl-6 ml-6 rounded-2xl border-2 border-gray-100 focus:outline-none
}
.bttn-class {
  @apply w-[80px] px-2 py-1 bg-gradient-to-tr from-orange-400 to-orange-600 border-2 border-orange-400 text-white rounded-full ml-5
}
</style>