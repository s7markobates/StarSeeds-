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
            <div class="text-xl font-bold flex-1 mt-4 ">
              <h1 class="flex justify-center items-center">OBELEŽENA_OSOBA 's CHAT</h1>
            </div>
            <div class="flex-1 mr-6 "></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'

const profile = ref(null)

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

</script>

<style>
    
</style>