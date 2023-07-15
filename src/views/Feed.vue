<template>
  <template v-if="profile">
    <div v-if="profile" class="text-gray-600 text-lg mt-[70px] mb-40">
      <div class="w-[96%] mx-auto text-xl font-bold flex justify-between">
        <div class="flex-1">
          <div class="flex justify-start items-center">
            <RouterLink :to="{ name: 'profiles'}" title="View all the members">
              <div class="flex justify-center items-center hover:text-orange-400 ">
                <i class="fas fa-om text-orange-400 text-2xl cursor-pointer mr-2 "></i>
                <p class="text-xl font-custom -mb-1">
                  <span class="text-orange-400 mr-[3px]">Star</span>
                  <i class="fas fa-meteor text-orange-400"></i>
                  <span class="text-yellow-400">seeds</span>
                </p>
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
              <i class="fas fa-om text-orange-400 text-2xl cursor-pointer ml-2"></i>
            </RouterLink>
          </div>
        </div>
      </div>

        <div v-if="profile" class="w-[60%] mx-auto mt-10 bg-gray-300 p-5 rounded-xl shadow-md text-lg">
          <div class="flex">
            <div class="flex-1">
              <h1><span class="font-bold">Name: </span><span class="font-semibold">{{ profile.name }}</span></h1>
              <p><span class="font-bold">Email: </span>{{ profile.email }}</p>
            </div>
            <div class="flex-1 text-center">
              <button @click="goToProfiles" title="See all the members"><i class="fas fa-users button-profiles"></i></button>
              <button @click="goToProfile(profile.id)" title="Go to your profile"><i class="fas fa-user-astronaut button-profile"></i></button>
              <button @click="goToChat" title="Go to your chat"><i class="fas fa-rocket button-chat"></i></button>
            </div>
            <div class="flex-1 text-end justify-end">
              <i class="fab fa-old-republic text-orange-400 text-5xl mx-1 mt-2" :title="profile.name + ' - Member of The Jedi Order'"></i>
              <i class="fab fa-galactic-republic text-orange-400 text-5xl mx-1 mt-2" :title="profile.name + ' - Citizen of the Galactic Republic'"></i>
            </div>
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
            <textarea
              v-model="descriptionInput"
              class="textarea-style"
              rows="5"
              placeholder="Enter profile description here..."
              title="Update your description">
            </textarea>
          </div>
        </div>
        <div v-if="profile" class="w-[60%] mx-auto mt-5 bg-gray-300 p-5 rounded-xl shadow-md text-lg">
          <div class="flex flex-col">
            <di class="mb-2">
              <h1 class="font-bold">Status:</h1>
            </di>
            <div>
              <textarea
                v-model="statusInput"
                name="status-enter"
                @keydown.enter.prevent="handleEnter"
                class="w-full rounded-lg p-2 focus:outline-none"
                placeholder="What's on your mind right now?"
                title="Write new status"
                rows="4">
              </textarea>
            </div>
            <div class="flex justify-end mt-1">
              <button @click="saveStatus" class="button-status" title="Submit new status">
                <p>Submit new status</p>
                <i class="fas fa-bullhorn ml-2"></i>
              </button>
            </div>

            <div v-for="status in sortedStatuses.slice().reverse()" :key="status.id" class="mt-3 flex justify-between items-center w-full">
              
              <div class="bg-gray-100 hover:bg-orange-100 rounded-lg p-2 w-full flex justify-between items-center">
                
                <!-- Provera da li se status trenutno uređuje -->
                <template v-if="editingStatus && editingStatus.id === status.id">
                  <textarea
                    v-model="editingStatus.text"
                    class="w-full rounded-lg p-2 focus:outline-none"
                    rows="2"
                    placeholder="Edit your status..."
                    title="Edit status">
                  </textarea>
                </template>

                <template v-else>
                  <p class="text-justif ">{{ status.text }}</p>
                </template>

                <span class="w-[20px] mx-2 text-xs text-gray-500 text-right">{{ formatTimestamp(status.id) }}</span>
              </div>

              <i
                v-if="!editingStatus || editingStatus.id !== status.id"
                class="fas fa-edit text-orange-400 hover:text-gray-600 text-md ml-3 cursor-pointer"
                @click="startEditingStatus(status)"
                title="Edit status">
              </i>
              <i
                v-if="!editingStatus || editingStatus.id !== status.id"
                class="fas fa-trash-alt text-orange-400 hover:text-gray-600 text-md ml-3 cursor-pointer"
                @click="deleteStatus(status.id)"
                title="Delete status">
              </i>
              <i
                v-if="editingStatus && editingStatus.id === status.id"
                class="far fa-check-circle text-green-500 hover:text-gray-600 text-md ml-3 cursor-pointer"
                @click="saveEditedStatus"
                title="Save changes">
              </i>
              <i
                v-if="editingStatus && editingStatus.id === status.id"
                class="fas fa-times-circle text-red-500 hover:text-gray-600 text-md ml-3 cursor-pointer"
                @click="cancelEditingStatus"
                title="Cancel editing">
              </i>
            </div>

          </div>
        </div>
    </div>
  </template>
  <template v-else>
    <div class="flex justify-center items-center h-[500px] mt-44 mb-64">
        <i class="fas fa-meteor fa-spin text-[100px] text-orange-400"></i>
    </div>
  </template>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const profile = ref(null)
const descriptionInput = ref('')
const statusInput = ref('')
const router = useRouter()
const descriptionEditMode = ref(false)
const editingStatus = ref(null)

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

const goToProfiles = () => {
  router.push({ name: 'profiles' })
}

const goToProfile = (personId) => {
  router.push({ name: 'profileDetails', params: { id: personId } })
}

const goToChat = () => {
  router.push({ name: 'chat' })
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
      id: Date.now(), // Generiše jedinstveni id na osnovu trenutnog vremena
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
      // console.log('Status saved:', data)
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
    return profileStatuses.sort((a, b) => a.id - b.id)
  }
  return []
})

const handleEnter = () => {
  if (statusInput.value.trim() !== '') {
    saveStatus()
  }
}

const deleteStatus = (statusId) => {
  if (profile.value) {
    const statusIndex = profile.value.statuses.findIndex(status => status.id === statusId)
    if (statusIndex !== -1) {
      profile.value.statuses.splice(statusIndex, 1)

      fetch(`http://localhost:3000/profile/${profile.value.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ statuses: profile.value.statuses })
      })
      .then(response => response.json())
      .then(data => {
        // console.log('Status deleted:', data)
      })
      .catch(error => {
        console.error('Error deleting status:', error)
      })
    }
  }
}

const startEditingStatus = (status) => {
  editingStatus.value = { ...status };
}

const saveEditedStatus = () => {
  if (editingStatus.value && editingStatus.value.text.trim() !== '') {
    editStatus(editingStatus.value);
    editingStatus.value = null;
  }
}

const cancelEditingStatus = () => {
  editingStatus.value = null;
}

const editStatus = (status) => {
  if (profile.value) {
    const statusIndex = profile.value.statuses.findIndex((s) => s.id === status.id);
    if (statusIndex !== -1) {
      profile.value.statuses[statusIndex] = status;

      fetch(`http://localhost:3000/profile/${profile.value.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ statuses: profile.value.statuses }),
      })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Status updated:', data);
      })
      .catch((error) => {
        console.error('Error updating status:', error);
      })
    }
  }
};


const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes} ${day}.${month}.`
}

</script>

<style scoped>
.button-profile {
  @apply mx-1 mt-2 px-[12px] py-[11px] border-2 rounded-full bg-orange-400 border-orange-400 text-white hover:bg-white hover:text-orange-400 cursor-pointer
}
.button-profiles {
  @apply mx-1 mt-2 px-[9.5px] py-[11.6px] border-2 rounded-full bg-orange-400 border-orange-400 text-white hover:bg-white hover:text-orange-400 cursor-pointer
}
.button-chat {
  @apply mx-1 mt-2 pl-[10.8px] pr-[11.8px] py-[11px] border-2 rounded-full bg-orange-400 border-orange-400 text-white hover:bg-white hover:text-orange-400 cursor-pointer
}
.button-status {
  @apply text-white bg-orange-400 hover:bg-white hover:text-orange-400 font-semibold text-base border-2 border-orange-400 rounded-full py-[2px] px-3 flex justify-center items-center
}
.textarea-style {
  @apply border border-gray-200 bg-gray-50 w-[101%] -ml-[7px] px-[6px] -mt-[1px] rounded-lg text-justify focus:outline-none
}
.font-custom {
  font-family: 'Yatra One', cursive;
}
</style>
  