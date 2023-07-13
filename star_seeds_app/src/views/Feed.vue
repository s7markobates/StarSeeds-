<template>
  <div v-if="profile" class="text-gray-600 text-lg mt-[70px] mb-64">
    <div class="w-[96%] mx-auto text-xl font-bold flex justify-between">
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
      <div class="flex">
        <div class="flex-1">
          <h1><span class="font-bold">Name: </span><span class="font-semibold">{{ profile.name }}</span></h1>
          <p><span class="font-bold">Email: </span>{{ profile.email }}</p>
        </div>
        <div class="flex-1 text-center">
          <button @click="goToProfile(profile.id)" title="Go to your profile"><i class="fas fa-user-tie button-profile"></i></button>
          <button @click="goToChat" title="Go to your chat"><i class="fas fa-paper-plane button-chat"></i></button>
        </div>
        <div class="flex-1"></div>
      </div>
      <div v-if="!descriptionEditMode" class="text-justify">
        <div v-if="profile.description">
          <span class="font-bold">Description:
            <button @click="toggleDescriptionEditMode" title="Update description">
              <i class="fas fa-edit text-gray-500 hover:text-orange-400"></i>
            </button>
          </span>
          <p>{{ profile.description }}</p>
        </div>
        <div v-else class="text-justify">
          <span class="font-bold">Description:
            <button @click="toggleDescriptionEditMode" title="Add description">
              <i class="fas fa-edit text-gray-500 hover:text-orange-400"></i>
            </button>
          </span>
          <p>Profile has no description entered.</p>
        </div>
      </div>
      <div v-if="descriptionEditMode" class="mx-auto flex flex-col items-start">
        <p class="font-bold">Description:
          <button @click="updateDescription" class="" title="Save description">
            <i class="far fa-edit text-gray-500 hover:text-orange-400"></i>
            <span class="italic font-thin text-xs ml-1">(save description)</span>
          </button>
        </p>
        <textarea v-model="descriptionInput" class="textarea-style" rows="5" placeholder="Enter profile description here..." title="Update your description"></textarea>
      </div>
    </div>

    <div v-if="profile" class="w-[40%] mx-auto mt-5 bg-gray-200 p-5 rounded-xl shadow-md text-lg">
      <div class="flex flex-col">
        <div>
          <textarea
            v-model="statusInput"
            @keydown.enter.prevent="handleEnter"
            class="w-full rounded-lg p-2 focus:outline-none"
            rows="5"
            name="status-enter"
            placeholder="What's on your mind right now?"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button @click="saveStatus" class="text-orange-400 hover:text-amber-800 text-xl">
            <i class="fas fa-poop"></i>
            <i class="fas fa-poop"></i>
            <i class="fas fa-poop"></i>
            <i class="fas fa-poop"></i>
            <i class="fas fa-poop"></i>
          </button>
        </div>
        <div v-for="status in sortedStatuses.slice().reverse()" :key="status.id" class="mt-3">
          <p class="bg-gray-100 rounded-lg p-2">{{ status.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const profile = ref(null)
const descriptionInput = ref('')
const statusInput = ref('')
const router = useRouter()
const descriptionEditMode = ref(false)

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

const getFirstName = computed(() => {
  if (profile.value) {
    const fullName = profile.value.name
    const firstName = fullName.split(' ')[0]
    return firstName
  }
})

const goToChat = () => {
  router.push({ name: 'chat' })
}

const goToProfile = (personId) => {
  router.push({ name: 'profileDetails', params: { id: personId } })
}

const toggleDescriptionEditMode = () => {
  descriptionEditMode.value = !descriptionEditMode.value
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
        toggleDescriptionEditMode()
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}

const saveStatus = () => {
  if (statusInput.value && profile.value) {
    const newStatus = {
      text: statusInput.value
    }
    if (!profile.value.statuses) {
      profile.value.statuses = [] // Inicijalizujte niz ako ne postoji
    }

    profile.value.statuses.push(newStatus)

    fetch(`http://localhost:3000/profile/${profile.value.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ statuses: profile.value.statuses })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Status saved:', data)
      statusInput.value = ''
    })
    .catch(error => {
      console.error('Error saving status:', error)
    })
  }
}

const sortedStatuses = computed(() => {
  if (profile.value) {
    const profileStatuses = profile.value.statuses || []
    return profileStatuses.sort((a, b) => b.id - a.id)
  }
  return []
})

const handleEnter = () => {
  if (statusInput.value.trim() !== '') {
    saveStatus()
  }
};

</script>

  
<style scoped>
.button-profile {
  @apply mx-1 mt-2 px-[12px] py-[11px] border-2 rounded-full bg-orange-400 border-orange-400 text-white hover:bg-white hover:text-orange-400 cursor-pointer
}
.button-chat {
  @apply mx-1 mt-2 pl-[11px] pr-[12px] py-[11px] border-2 rounded-full bg-orange-400 border-orange-400 text-white hover:bg-white hover:text-orange-400 cursor-pointer
}
.textarea-style {
  @apply border border-gray-200 bg-gray-50 w-[101%] -ml-[7px] px-[6px] -mt-[1px] rounded-lg text-justify focus:outline-none
}
</style>
  