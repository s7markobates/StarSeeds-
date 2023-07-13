<template>
<div class="text-gray-600 mt-[70px] mb-32">
    <div class="text-xl font-bold flex justify-between w-[96%] mx-auto">
        <div class="flex justify-center items-center">
            <i class="fas fa-user-astronaut text-xl mr-[11px]"></i>
            <div class="flex justify-center items-center">
                <img src="../assets/logo-main.png" class="h-6" alt="">
                <h1 class="ml-1">members:</h1>
            </div>
        </div>
        <div>
            <div class="flex items-center">
            <RouterLink :to="{ name: 'feed' }" title="Go to your feed">
                <span class="hover:text-orange-400">Go to your feed</span>
                <i class="fas fa-space-shuttle text-orange-400 text-2xl ml-2"></i>
            </RouterLink>
            </div>
        </div>
    </div>
    <div class="h-[72px] flex justify-center items-center">
        <div class="h-8 w-[300px] bg-gray-100 flex justify-between items-center p-5 rounded-full cursor-pointer" title="Enter member name">
          <input v-model="searchText" type="text" class="w-full focus:outline-none bg-gray-100" placeholder="Search members...">
          <i class="fas fa-search text-orange-400 text-2xl "></i>
        </div>
    </div>
    <div class="w-[70%] mx-auto mt-7">
        <div class="grid grid-cols-3 gap-x-2 gap-y-12">
            <div v-for="profile in filteredProfiles" :key="profile.id"  class="flex justify-center items-center">
                <ul>
                    <li class="p-2 text-lg hover:text-orange-400 hover:text-xl" :title="'Go to ' + profile.name + ' profile'">
                    <RouterLink  :to="{ name: 'profileDetails', params: { id: profile.id } }">
                        <img v-if="profile.image" :src="profile.image" class="img-profile" alt="Profile Image" />
                        <img v-else src="../assets/avatar.jpg" class="img-profile" alt="Profile Image" />
                        <div class="flex flex-col items-center mt-4">
                            <h1 class="font-semibold">{{ profile.name }}</h1>
                        </div>
                    </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref, onMounted, computed  } from 'vue'
import { RouterLink } from 'vue-router'
const searchText = ref('')
const profiles = ref([])

onMounted(() => {
fetch('http://localhost:3000/profile')
    .then(res => res.json())
    .then(data => {
    profiles.value = data
    })
    .catch(err => console.log(err.message))
})

const filteredProfiles = computed(() => {
  return profiles.value.filter(profile => profile.name.toLowerCase().includes(searchText.value.toLowerCase()))
})

</script>

<style scoped>
.img-profile {
    @apply h-52 w-52 rounded-full border-2 border-gray-300 shadow-md hover:shadow-lg hover:border-orange-400
} 
</style>
