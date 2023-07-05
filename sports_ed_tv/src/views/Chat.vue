<template>
  <div class="text-gray-600 text-lg mt-[96px] h-[100%] flex justify-start items-center">
    <div v-if="profile" class="text-xl font-bold flex justify-start items-center ml-6 mt-4">
      <RouterLink :to="{ name: 'feed'}">
        <div class="flex items-center">
          <i class="fas fa-arrow-left text-orange-400 text-2xl cursor-pointer mr-3"></i>
          <span class="hover:text-orange-400">{{ getFirstName }}'s FEED</span>
        </div>
      </RouterLink>
    </div>
    <div class="text-xl font-bold flex justify-start items-center ml-[540px] mt-4">
      <h1>{{ getFirstName }}'s CHATS</h1>
    </div>
  </div>

  <div class="w-[95%] mx-auto mt-3 flex flex-col mb-24">
    <div class="h-[72px] w-full bg-slate-100 mx-auto flex justify-center items-center rounded-t-2xl">
      <div class="bg-white flex items-center justify-between h-8 w-[300px] p-5 rounded-full cursor-pointer">
        <input type="text" v-model="searchInput" class="w-full focus:outline-none" placeholder="Search profile...">
        <i class="fas fa-search text-orange-400 text-2xl "></i>
      </div>
    </div>
    <div class="w-full bg-slate-50">
      <ul>
        <li v-for="person in filteredPeople" :key="person.id">
          <div class="flex justify-between items-center py-4">
            <div class="flex justify-between items-center">
              <img :src="person.image" class="h-[60px] w-[60px] p-1 rounded-full border border-gray-600 ml-4" alt="Profile Image" />
              <h1 class="text-[22px] text-gray-600 font-semibold ml-4">{{ person.name }}</h1>
            </div>
            <i class="fas fa-trash-alt text-orange-400 hover:text-gray-600 text-md mr-4 cursor-pointer" @click="deletePerson(person.id)"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-md w-[500px]">
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
import { RouterLink } from 'vue-router'

const profile = ref(null)
const people = ref([])
const searchInput = ref('')

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

const deletePerson = (personId) => {
  personToDelete.value = personId
  showModal.value = true
  console.log(personId)
}

const showModal = ref(false);
const personToDelete = ref(null);

const confirmDelete = () => {
  if (personToDelete.value) {
    const index = people.value.findIndex(person => person.id === personToDelete.value);
    if (index !== -1) {
      people.value.splice(index, 1);
    }
    console.log(`Deleted person with ID: ${personToDelete.value}`);
  }
  showModal.value = false;
}

const cancelDelete = () => {
  showModal.value = false;
}


</script>

<style>
    
</style>
