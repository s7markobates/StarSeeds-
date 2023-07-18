<template>
    <div class="text-gray-600 mt-[65px] mb-16">
        <div class="text-xl font-bold flex justify-between w-[60%] mx-auto">
            <div class="flex justify-center items-center">
                <i class="fas fa-user-astronaut text-xl mr-[14px]"></i>
                <div class="flex justify-center items-center">
                    <p class="text-xl font-custom -mb-1">
                        <span class="text-orange-400 mr-[3px]">Star</span>
                        <i class="fas fa-meteor text-orange-400"></i>
                        <span class="text-yellow-400">seeds</span>
                    </p>
                    <h1 class="ml-1">members:</h1>
                </div>
            </div>
            <div>
                <div class="flex items-center">
                <RouterLink :to="{ name: 'feed' }" title="Go to your feed">
                    <span class="hover:text-orange-400">Go to your feed</span>
                    <i class="fas fa-om text-orange-400 text-2xl ml-2"></i>
                </RouterLink>
                </div>
            </div>
        </div>
        <div class="h-[70px] flex justify-center items-center">
            <div class="h-8 w-[300px] bg-gray-200 flex justify-between items-center p-5 rounded-full cursor-pointer" title="Enter member name">
            <input v-model="searchText" type="text" class="w-full focus:outline-none bg-gray-200" placeholder="Search members...">
            <i class="fas fa-search text-orange-400 text-2xl "></i>
            </div>
        </div>

        <template v-if="profiles.length > 0">
            <template v-if="profiles && filteredProfiles.length > 0">
                <div class="w-[70%] mx-auto mt-5">
                    <div class="grid grid-cols-3 gap-x-2 gap-y-12">
                        <div v-for="profile in filteredProfiles" :key="profile.id" class="flex justify-center items-center">
                            <ul>
                                <li class="p-2 text-lg hover:text-orange-400 hover:text-xl duration-300" :title="'Go to ' + profile.name + ' profile'">
                                <RouterLink :to="{ name: 'profileDetails', params: { id: profile.id } }">
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
            </template>
            <template v-else-if="profiles && filteredProfiles.length === 0">
                <div class="flex flex-col items-center mt-7" title="There is no one to be found">
                    <img src="../assets/alien-avatar.jpg" class="img-profile" alt="Profile Image" />
                    <div class="flex items-center mb-2">
                        <h1 class="text-lg font-semibold mt-4">There is no one to be found.</h1>
                        <i class="fas fa-satellite-dish text-2xl ml-2 -mb-1"></i>
                    </div>
                </div>
            </template>
        </template>
        <template v-else>
            <div class="flex justify-center items-center h-[500px] mt-3 mb-[280px]">
                <i class="fas fa-meteor fa-spin text-[100px] text-orange-400"></i>
            </div>
        </template>
    </div>
    <div class="bg-transparent border-4 border-gray-300 hover:bg-white hover:scale-110 duration-100 flex items-center justify-center h-9 w-9 mx-auto mb-32 p-7 rounded-full cursor-pointer" @click="scrollToTop" title="Top">
        <div class="focus:outline-none">
            <i class="fas fa-angle-up text-gray-400 text-2xl py-1 px-2 hover:-mt-1 hover:text-orange-400"></i>
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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.img-profile {
    @apply h-52 w-52 rounded-full border-4 border-gray-300 shadow-md hover:shadow-lg hover:border-orange-400 hover:scale-110 duration-300 
}
.font-custom {
    font-family: 'Yatra One', cursive;
}
</style>
