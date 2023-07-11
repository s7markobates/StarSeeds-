<template>
    <div class="text-gray-600 mt-[70px]">
        <div class="text-xl font-bold flex justify-between </div> w-[96%] mx-auto">
            <div class="flex justify-center items-center">
                <i class="fas fa-user-tie text-xl mr-[11px]"></i>
                <div class="flex justify-center items-center">
                    <img src="../assets/logo-main.png" class="h-6" alt="">
                    <h1 class="ml-1">members:</h1>
                </div>
            </div>
            <div class="">
                <RouterLink :to="{ name: 'feed' }" title="Go to your feed">
                    <div class="flex items-center">
                        <span class=" hover:text-orange-400">Go to your feed</span>
                        <i class="fas fa-arrow-right text-orange-400 text-2xl ml-2" ></i>
                    </div>
                </RouterLink>
            </div>
        </div>
        <div class="w-[96%] mx-auto mt-10 mb-24 bg-gray-200 p-2 rounded-lg shadow-md">
            <div v-for="profile in profiles" :key="profile.id" >
                <RouterLink :to="{ name: 'profileDetails', params: { id: profile.id } }">
                    <div :title="'Go to ' + profile.name + ' profile'" class="flex flex-col items-start justify-center bg-gray-100 hover:bg-slate-50 p-1 m-3 rounded-md shadow-md">
                        <ul class="">
                            <li class="p-2 text-lg">
                                <h1 class="font-semibold">{{ profile.name }}</h1>
                                <p>{{ profile.email }}</p>
                            </li>                        
                        </ul>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    data() {
        return {
            profiles: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/profile')
        .then(res => res.json())
        .then(data => this.profiles = data)
        .catch(err => console.log(err.message))
    }
}

</script>

<style scoped>
</style>