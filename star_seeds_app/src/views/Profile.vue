<template>
  <div class="text-gray-600 mt-[70px] mb-[300px]">
    <div class="w-[96%] mx-auto text-xl font-bold flex justify-start">
      <div @click="goToProfiles" class="cursor-pointer flex items-center" title="View all the members">
        <i class="fas fa-om text-orange-400 text-2xl mr-2"></i>
        <div class="flex justify-center items-center hover:text-orange-400">
          <p class="text-xl font-custom -mb-1">
            <span class="text-orange-400 mr-[3px]">Star</span>
            <i class="fas fa-meteor text-orange-400"></i>
            <span class="text-yellow-400">seeds</span>
          </p>
          <h1 class="ml-1">members</h1>
        </div>
      </div>
    </div>
    <div class="w-[50%] mx-auto mt-10 bg-gray-200 px-4 py-3 rounded-lg shadow-md">
      <div class="flex justify-between items-end">
        <div v-if="profile">
          <h1><span class="font-bold">Name: </span><span class="font-semibold">{{ profile.name }}</span><button v-if="profile.name == matchedName" @click="goToFeed" title="Edit your profile"><i class="fas fa-edit ml-2 text-gray-500 hover:text-orange-400"></i></button></h1>
          <p v-if="profile.email !== matchedEmail" ><span class="font-bold">Email: </span><span class="underline text-blue-500 cursor-pointer" title="Send an email">{{ profile.email }}</span></p>
          <p v-else><span class="font-bold">Email: </span><span>{{ profile.email }}</span></p>
          <button v-if="profile.name !== matchedName" @click="openChat(profile.id)" class="button" :title="'Chat with ' + profile.name ">Chat with {{ profile.name }}<i class="fas fa-rocket text-sm ml-2"></i></button>
          <button v-else class="button" @click="goToChat" title="Go to my Chat page">Go to my Chats<i class="fas fa-rocket text-sm ml-2"></i></button>
          <button class="button-icon" title="Facebook" ><i class="fab fa-facebook pl-[1px]"></i></button>
          <button class="button-icon" title="Instagram"><i class="fab fa-instagram pl-[1px]"></i></button>
          <button class="button-icon" title="Twitter"><i class="fab fa-twitter pl-[1px]"></i></button>
          <button class="button-icon" title="GitHub"><i class="fab fa-github pl-[1px]"></i></button>
        </div>        
        <img v-if="profile.image" :src="profile.image" class="img-profile" alt="Profile Image" />
        <img v-else src="../assets/avatar.jpg" class="img-profile" alt="Profile Image" />
      </div>
      <div class="text-justify mt-4">
        <p v-if="profile && profile.description"><span class="font-bold">Description: </span>{{ profile.description }}</p>
        <p v-else><span class="font-bold">Description: </span>Profile has no description entered.</p>
      </div>
    </div>
    <div v-if="statuses && statuses.length > 0" class="w-[50%] mx-auto mt-5 bg-gray-200 px-4 py-1 rounded-lg shadow-md">
      <div v-for="status in statuses.slice().reverse()" :key="status.text" class="my-3 flex justify-start items-center">
        <img v-if="profile.image" :src="profile.image" class="img-status"/>
        <img v-else src="../assets/avatar.jpg" class="img-status" />
        <p class="bg-gray-100 rounded-lg px-2 py-1 w-full text-justify">{{ status.text }}</p>
        <span class="w-[20px] mx-2 text-xs text-gray-500 text-right">{{ formatTimestamp(status.id) }}</span>
      </div>
    </div>
    <div v-else class="w-[50%] mx-auto mt-5 bg-gray-200 px-4 py-4 rounded-lg shadow-md flex justify-start items-center">
      <img v-if="profile.image" :src="profile.image" class="img-status"/>
      <img v-else src="../assets/avatar.jpg" class="img-status" />
      <p class="bg-gray-100 rounded-lg p-2 w-full">Member didn't enter any status yet.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      profile: {},
      matchedName: '',
      matchedEmail: '',
      statuses: []
    }
  },
  mounted() {
    const formData = JSON.parse(localStorage.getItem('formData'))
    this.matchedName = formData.name
    this.matchedEmail = formData.email
    
    fetch('http://localhost:3000/profile/' + this.id)
    .then(res => res.json())
    .then(data => {
      this.profile = data
      this.statuses = data.statuses // Ažurirajte svojstvo statuses sa statusima iz odgovora servera
    })
    .catch(err => console.log(err.message))
  },
  methods: {
    goToProfiles() {
      this.$router.push({ name: 'profiles' })
    },
    openChat(personId) {
      this.$router.push({ name: 'chatPerson', params: { id: personId } })
    },
    goToChat() {
      this.$router.push({ name: 'chat' })
    },
    goToFeed() {
      this.$router.push({ name: 'feed' })
    },
    formatTimestamp(timestamp) {
      const date = new Date(timestamp)
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const hours = date.getHours().toString().padStart(2, '0')
      const minutes = date.getMinutes().toString().padStart(2, '0')
      return `${hours}:${minutes} ${day}.${month}.`
    }
  }  
}
</script>

<style scoped>
.button {
  @apply mt-4 h-8 px-4 border-2 rounded-3xl bg-orange-400 border-orange-400 text-white font-semibold hover:bg-white hover:text-orange-400 cursor-pointer
}
.button-icon {
  @apply ml-2 py-[2px] px-[6px] border-2 rounded-full bg-orange-400 border-orange-400 text-white font-semibold hover:bg-white hover:text-orange-400 active:bg-red-500 active:text-white active:cursor-no-drop active:border-red-500 cursor-pointer
}
.img-profile{
  @apply h-36 w-36 rounded-full shadow-2xl border-2 border-gray-300 mx-6 -mt-14
}
.img-status{
  @apply h-10 w-10 rounded-full border-2 border-gray-300 mr-2
}
.font-custom {
  font-family: 'Yatra One', cursive;
}
</style>
