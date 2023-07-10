<template>
  <div class="text-gray-600 text-lg mt-[70px]">
    <div v-if="profile" class="w-[96%] mx-auto text-xl font-bold flex justify-between">
      <div class="flex-1">
        <div class="flex justify-start items-center">
          <RouterLink :to="{ name: 'profiles'}" title="View all the members">
            <div class="flex justify-center items-center hover:text-orange-400 ">
              <i class="fas fa-arrow-left text-orange-400 text-2xl cursor-pointer mr-2 "></i>
              <img src="../assets/logo-main.png" class="h-6">
              <h1 class="ml-1">members</h1>
            </div>
          </RouterLink>
        </div>
      </div>
      <div class="flex-1">
        <span class="flex justify-center">{{ getFirstName }}'s FEED</span>
      </div>
      <div class="flex-1">
        <div class="flex justify-end items-center">
          <RouterLink :to="{ name: 'chat'}" :title="'Go to ' + getFirstName + '\'s chat page'">
            <span class="hover:text-orange-400">{{ getFirstName }}'s CHATS</span>
            <i class="fas fa-arrow-right text-orange-400 text-2xl cursor-pointer ml-2"></i>
          </RouterLink>
        </div>
      </div>
    </div>
    <div v-if="profile" class="w-[96%] mx-auto mt-10 bg-gray-200 p-5 rounded-xl shadow-md text-lg">
      <h1><span class="font-bold">Name: </span><span class="font-semibold">{{ profile.name }}</span></h1>
      <p><span class="font-bold">Email: </span>{{ profile.email }}</p>
      <p v-if="profile.description" class="text-justify"><span class="font-bold">Description: </span>{{ profile.description }}</p>
      <p v-else class="text-justify"><span class="font-bold">Description: </span>Profile has no description entered.</p>
    </div>
    <div v-if="profile" class="w-[98%] mx-auto mt-4 flex flex-col items-center ">
      <h1 class="mb-4">Update your description:</h1>
      <textarea v-model="descriptionInput" class="textarea-style" rows="5" placeholder="Enter profile description" title="Update your description"></textarea>
      <button @click="updateDescription" class="update-button" title="Update your description">Update Description</button>
    </div>
  </div>
</template>
  
<script setup>

import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'

const profile = ref(null)
const descriptionInput = ref('')
  
onMounted(() => {
  const localProfile = JSON.parse(localStorage.getItem('formData'))
  if (localProfile) {
    fetchProfile(localProfile)
  }
})
  
const fetchProfile = (localProfile) => {
  fetch('http://localhost:3000/profile')
  .then(response => response.json())
  .then(data => {
    const loggedInProfile = data.find(profile => profile.name === localProfile.name && profile.email === localProfile.email)
    if (loggedInProfile) {
      profile.value = loggedInProfile
      descriptionInput.value = loggedInProfile.description
    }
  })
  .catch(err => {
    console.log(err.message)
  })
}
  
const updateDescription = () => {
  if (profile.value) {
    profile.value.description = descriptionInput.value
    fetch(`http://localhost:3000/profile/${profile.value.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: profile.value.description })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Description updated:', data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}

const getFirstName = computed(() => {
  if (profile.value) {
    const fullName = profile.value.name
    const firstName = fullName.split(' ')[0]
    return firstName
  }
})

</script>
  
<style scoped>
.update-button {
  @apply mt-5 px-3 h-9 w-[200px] border-2 rounded-3xl border-orange-400 bg-orange-400 text-white hover:bg-white hover:text-orange-400 font-bold cursor-pointer
}
.textarea-style {
  @apply border-4 border-gray-200 bg-gray-50 w-[70%] rounded-lg p-3 text-justify focus:outline-none
}
</style>
  