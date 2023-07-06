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

    <div class="w-[96%] mt-5 mx-auto">
      <div class="bg-gray-100 w-full h-[580px] rounded-3xl">
        <div class="bg-gray-100 w-full h-[580px] rounded-3xl">
          <div class="px-20 py-8 flex flex-col w-[80%] mx-auto text-white">
            <span class="bg-red-300 p-4 mr-7 mb-2 rounded-b-xl rounded-tr-xl">Chat started, say "Hello!"</span>
            <span class="bg-orange-300 p-4 ml-7 mb-2 rounded-b-xl rounded-tl-xl">Hello to you, too...</span>
          </div>
          <img v-if="profile && profile.image" :src="profile.image" class="h-24 w-24 rounded-full shadow-2xl border-2 border-gray-300 ml-auto mr-20" alt="Profile Image" />
        </div>
      </div>
      <div class="flex justify-start items-start p-3">
        <input type="text" class="w-[80%] h-[55px] ml-6 rounded-2xl border-2 border-gray-100 focus:outline-none">
        <button class="w-[80px] px-4 py-[7px] bg-orange-500 text-white rounded-full ml-5">
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
      console.log(profile.value)
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
    console.log(personId)

    const selectedPerson = people.value.find(person => person.id == personId)
    currentPerson.value = selectedPerson
    console.log(currentPerson.value)
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

</script>

<style>
    
</style>