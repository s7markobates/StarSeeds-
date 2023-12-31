<template>
  <div class="text-gray-600 mt-[70px] flex justify-between items-center xl:w-[70%] mx-auto text-xl">
    <div v-if="profile" class="flex-1 font-bold ">
      <div class="hidden xl:flex items-center " :title="'Go to ' + getFirstName + '\'s feed'">
        <RouterLink :to="{ name: 'feed'}" >
          <i class="fas fa-om text-orange-400 text-2xl cursor-pointer mr-2"></i>
          <span class="hover:text-orange-400">{{ getFirstName }}'s FEED</span>
        </RouterLink>
      </div>
    </div>
    <div class="font-bold flex-1">
      <h1 class="hidden xl:flex justify-center items-center">{{ getFirstName }}'s CHATS</h1>
    </div>
    <div class="flex-1"></div>
  </div>
  <div class="fixed xl:hidden bg-white w-full text-center -mt-[9px] py-3">
    <RouterLink :to="{ name: 'feed' }" title="Go to your feed">
        <button class="button-phone">
            <i class="fas fa-meteor text-white hover:text-orange-400 text-xl"></i>
        </button>
    </RouterLink>
  </div>

  <!-- Chat window - desktop -->
  <template v-if="profile">
    <div class="hidden w-[70%] mx-auto mt-3 xl:flex flex-col">
      <div class="h-[8vh] w-full bg-gray-300 mx-auto flex justify-center items-center rounded-t-3xl">
        <div class="bg-white flex items-center justify-between h-[4vh] w-[300px] p-5 rounded-full cursor-pointer" title="Enter member name">
          <input type="text" v-model="searchInput" class="w-full focus:outline-none" placeholder="Search members...">
          <i class="fas fa-search text-orange-400 text-2xl "></i>
        </div>
      </div>
      <template v-if="profile && filteredPeople.length > 0">
        <div ref="peopleList" class="w-full bg-gray-200 overflow-y-scroll h-[640px] hide-scrollbar">
          <ul>
            <li v-for="person in filteredPeople" :key="person.id">
              <div class="flex justify-between items-center py-4 w-[95%] mx-auto">
                <div class="flex justify-between items-center text-gray-600 hover:text-orange-400 hover:scale-105 duration-300" @click="openChat(person.id)" :title="'Chat with ' + person.name ">
                  <img v-if="person.image" :src="person.image" class=" h-[60px] w-[60px] p-1 rounded-full border border-gray-600 ml-4 cursor-pointer" alt="Profile Image" />
                  <img v-if="!person.image" src="../assets/avatar.jpg" class=" h-[60px] w-[60px] p-1 rounded-full border border-gray-600 ml-4 cursor-pointer" alt="Profile Image" />
                  <h1 class="text-base md:text-lg font-semibold ml-10 sm:ml-4 cursor-pointer">{{ person.name }}</h1>
                </div>
                <i class="fas fa-trash-alt text-sm md:text-base text-orange-400 hover:text-gray-600 text-md mr-3 sm:mr-8 cursor-pointer" @click="deletePerson(person.id)" :title="'Delete ' + person.name "></i>
              </div>
            </li>
          </ul>
        </div>
      </template>
      <template v-else-if="profile && filteredPeople.length === 0">
        <div class="w-full bg-gray-200 h-[66vh] md:h-[70vh] xl:h-[650px]">
          <div class="flex justify-center items-center py-[29.5px] text-gray-600">
            <h1 class="text-base md:text-lg  font-semibold">There is no one to be found.</h1>
            <i class="fas fa-satellite-dish text-2xl ml-2 -mt-2"></i>
          </div>
        </div>
      </template>
      <div class="h-[8vh] w-full bg-gray-300 mx-auto sm:flex justify-center items-center xl:rounded-b-3xl">
        <div class="bg-white flex items-center justify-center h-10 w-10 p-5 rounded-full cursor-pointer" @click="scrollToTop" title="Top">
          <div class="focus:outline-none">
            <i class="fas fa-angle-up text-gray-400 text-2xl hover:-mt-1 px-[10px] py-1 hover:text-orange-400"></i>
          </div>
        </div>
      </div>
    </div>
  </template>

  <!-- Chat window - mobile -->
  <template v-if="profile">
    <div class="xl:hidden w-full mx-auto mt-[60px] xl:mt-3 flex flex-col">
      <div class="fixed h-[8vh] w-full bg-gray-300 mx-auto flex justify-center items-center">
        <div class="bg-white flex items-center justify-between h-[4vh] w-[250px] sm:w-[300px] p-5 rounded-full cursor-pointer" title="Enter member name">
          <input type="text" v-model="searchInput" class="w-full focus:outline-none" placeholder="Search members...">
          <i class="fas fa-search text-orange-400 text-2xl "></i>
        </div>
      </div>
      <template v-if="profile && filteredPeople.length > 0">
        <div ref="peopleList" class="w-full bg-gray-200 overflow-y-scroll h-[75vh] mt-[8vh] mb-[8vh] hide-scrollbar">
          <ul>
            <li v-for="person in filteredPeople" :key="person.id">
              <div class="flex justify-between items-center py-4 w-[95%] mx-auto">
                <div class="flex justify-between items-center text-gray-600 hover:text-orange-400 hover:scale-105 duration-300" @click="openChat(person.id)" :title="'Chat with ' + person.name ">
                  <img v-if="person.image" :src="person.image" class=" h-[60px] w-[60px] p-1 rounded-full border border-gray-600 ml-4 cursor-pointer" alt="Profile Image" />
                  <img v-if="!person.image" src="../assets/avatar.jpg" class=" h-[60px] w-[60px] p-1 rounded-full border border-gray-600 ml-4 cursor-pointer" alt="Profile Image" />
                  <h1 class="text-base md:text-lg font-semibold ml-10 sm:ml-4 cursor-pointer">{{ person.name }}</h1>
                </div>
                <i class="fas fa-trash-alt text-sm md:text-base text-orange-400 hover:text-gray-600 text-md mr-3 sm:mr-8 cursor-pointer" @click="deletePerson(person.id)" :title="'Delete ' + person.name "></i>
              </div>
            </li>
          </ul>
        </div>
      </template>
      <template v-else-if="profile && filteredPeople.length === 0">
        <div class="w-full bg-gray-200 h-[75vh] mt-[7.5vh]">
          <div class="flex justify-center items-center py-[29.5px] text-gray-600">
            <h1 class="text-base md:text-lg  font-semibold">There is no one to be found.</h1>
            <i class="fas fa-satellite-dish text-2xl ml-2 -mt-2"></i>
          </div>
        </div>
      </template>
      <div class="fixed bottom-0 h-[8vh] w-full bg-gray-300 mx-auto flex justify-center items-center ">
        <div class="bg-white flex items-center justify-center h-10 w-10 p-5 rounded-full cursor-pointer" @click="scrollToTop" title="Top">
          <div class="focus:outline-none">
            <i class="fas fa-angle-up text-gray-400 text-2xl hover:-mt-1 px-[10px] py-1 hover:text-orange-400"></i>
          </div>
        </div>
      </div>
    </div>
  </template>

  <template v-else>
    <div class="flex justify-center items-center h-[500px] mt-20 mb-[280px]">
      <i class="fas fa-meteor fa-spin text-[100px] text-orange-400"></i>
    </div>
  </template>

  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-md w-64 md:w-[500px]">
      <div class="p-4 flex justify-end">
        <i class="fas fa-times mr-2 text-sm text-gray-500 cursor-pointer" @click="cancelDelete"></i>
      </div>
      <hr>
      <div class="p-4 flex justify-start">
        <h2 class="text-md font-semibold text-gray-500">Are you sure you want to delete this conversation?</h2>
      </div>
      <hr>
      <div class="flex justify-end p-4">
        <button @click="cancelDelete" class="w-[70px] px-4 py-1 mr-2 bg-gray-600 text-white rounded-full uppercase">No</button>
        <button @click="confirmDelete" class="w-[70px] px-4 py-1 bg-orange-400 text-white rounded-full uppercase">Yes</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const profile = ref(null)
const people = ref([])
const searchInput = ref('')
const router = useRouter()

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
  })
  .catch(err => {
    console.log(err.message)
  })
}

const filteredPeople = computed(() => {
  if (profile.value && people.value.length > 0) {
    return people.value.filter(person => person.id !== profile.value.id && person.name.toLowerCase().includes(searchInput.value.toLowerCase()))
  }
  return []
})

const getFirstName = computed(() => {
  if (profile.value) {
    const fullName = profile.value.name
    const firstName = fullName.split(' ')[0]
    return firstName
  }
})

const showModal = ref(false)
const personToDelete = ref(null)

const deletePerson = (personId) => {
  personToDelete.value = personId
  showModal.value = true
}

const confirmDelete = () => {
  if (personToDelete.value) {
    const index = people.value.findIndex(person => person.id === personToDelete.value)
    if (index !== -1) {
      people.value.splice(index, 1)
    }
    console.log(`Deleted person with ID: ${personToDelete.value}`)
  }
  showModal.value = false
}

const cancelDelete = () => {
  showModal.value = false
}

const openChat = (personId) => {
  router.push({ name: 'chatPerson', params: { id: personId } })
}

const peopleList = ref(null)

const scrollToTop = () => {
  if (peopleList.value) {
    peopleList.value.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

</script>

<style scoped>    
.hide-scrollbar::-webkit-scrollbar {
  width: 0.5rem; /* Promenite širinu skrol trake po potrebi */
}
.hide-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.hide-scrollbar::-webkit-scrollbar-thumb {
  background-color: transparent;
}
.button-phone {
  @apply px-3 py-2 border-2 rounded-full bg-orange-400 border-orange-400 text-white hover:bg-white hover:text-orange-400 cursor-pointer
}
</style>
