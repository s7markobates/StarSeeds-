<template>
  <div class="text-gray-600 mt-[55px] mb-[300px]">
    <div class="xl:w-[50%] mx-auto text-xl font-bold flex justify-center xl:justify-start">
      <div @click="goToProfiles" class="hidden xl:flex items-center mt-2 cursor-pointer" title="View all the members">
        <i class="fas fa-om text-orange-400 text-2xl mr-2"></i>
        <div class="flex justify-center items-center hover:text-orange-400">
          <p class="font-custom -mb-1">
            <span class="text-orange-400 mr-[3px]">Star</span>
            <i class="fas fa-meteor text-orange-400"></i>
            <span class="text-yellow-400">seeds</span>
          </p>
          <h1 class="ml-1">members</h1>
        </div>
      </div>
      <div class="fixed bg-white w-full flex justify-center py-2 xl:hidden">
        <button @click="goToProfiles" title="See all the members"><i class="fas fa-users button-phone px-[9.5px] py-[11.6px]"></i></button>
        <RouterLink :to="{ name: 'feed' }" title="Go to your feed">
          <button class="button-phone mx-2 px-[11.5px] py-[7.7px] "><i class="fas fa-meteor text-white hover:text-orange-400 text-xl"></i></button>
        </RouterLink>
        <button @click="goToChat" title="Go to your chat"><i class="fas fa-rocket button-phone pl-[10.8px] pr-[11.8px] py-[11.2px]"></i></button>
      </div>
    </div>
    <div class="mt-20 mb-5 xl:hidden">
      <img v-if="profile.image" :src="profile.image" class="img-profile-responsive" alt="Profile Image" :title="profile.name"/>
      <img v-else src="../assets/avatar.jpg" class="img-profile-responsive" alt="Profile Image" />
    </div>
    <template v-if="profile && profile.name">
      <div class="w-[90%] xl:w-[50%] mx-auto mt-2 xl:mt-10 bg-gray-300 px-3 py-2 md:px-4 md:py-3 rounded-lg shadow-md">
        <div class="flex justify-between items-end">
          <div v-if="profile">
            <h1><span class="font-bold">Name: </span><span class="font-semibold">{{ profile.name }}</span><button v-if="profile.name == matchedName" @click="goToFeed" title="Edit your profile"><i class="fas fa-edit ml-2 text-gray-500 hover:text-orange-400"></i></button></h1>
            <p v-if="profile.email !== matchedEmail" ><span class="font-bold">Email: </span><span class="underline text-blue-500 cursor-pointer" title="Send an email">{{ profile.email }}</span></p>
            <p v-else><span class="font-bold">Email: </span><span>{{ profile.email }}</span></p>
            <button v-if="profile.name !== matchedName" @click="openChat(profile.id)" class="button" :title="'Chat with ' + profile.name "><span class="hidden md:inline">Chat with</span> {{ profile.name }}<i class="fas fa-rocket text-xs md:text-sm ml-2"></i></button>
            <button v-else class="button" @click="goToChat" title="Go to my Chat page"><span class="hidden md:inline">Go to my </span>Chats<i class="fas fa-rocket text-xs md:text-sm ml-2"></i></button>
            <button class="button-icon" title="Facebook" ><i class="fab fa-facebook pl-[1px]"></i></button>
            <button class="button-icon" title="Instagram"><i class="fab fa-instagram pl-[1px]"></i></button>
            <button class="button-icon" title="Twitter"><i class="fab fa-twitter pl-[1px]"></i></button>
            <button class="button-icon" title="GitHub"><i class="fab fa-github pl-[1px]"></i></button>
          </div>        
          <img v-if="profile.image" :src="profile.image" class="img-profile" alt="Profile Image" :title="profile.name"/>
          <img v-else src="../assets/avatar.jpg" class="img-profile" alt="Profile Image" />
        </div>
        <div class="text-justify mt-4">
          <p class="text-sm sm:text-base xl:text-lg" v-if="profile && profile.description"><span class="font-bold">Description: </span>{{ profile.description }}</p>
          <p class="text-sm sm:text-base xl:text-lg" v-else><span class="font-bold">Description: </span>Profile has no description entered.</p>
        </div>
      </div>
      <div v-if="statuses && statuses.length > 0" class="w-[90%] xl:w-[50%] mx-auto mt-5 bg-gray-300 px-4 py-1 rounded-lg shadow-md">
        <div v-for="status in statuses.slice().reverse()" :key="status.text" class="my-1 md:my-3 flex justify-start items-center">
          <img v-if="profile.image" :src="profile.image" class="img-status" :title="profile.name"/>
          <img v-else src="../assets/avatar.jpg" class="img-status" :title="profile.name"/>
          <p class="bg-gray-100 hover:bg-orange-100 rounded-lg px-2 py-1 w-full text-justify text-sm sm:text-base xl:text-lg">{{ status.text }}</p>
          <span class="w-[20px] mx-2 text-xs text-gray-500 text-right">{{ formatTimestamp(status.id) }}</span>
        </div>
      </div>
      <div v-else class="w-[90%] xl:w-[50%] mx-auto mt-5 bg-gray-300 px-4 py-4 rounded-lg shadow-md flex justify-start items-center">
        <img v-if="profile.image" :src="profile.image" class="img-status" :title="profile.name"/>
        <img v-else src="../assets/avatar.jpg" class="img-status" :title="profile.name"/>
        <p class="bg-gray-100 hover:bg-orange-100 rounded-lg p-2 w-full text-sm sm:text-base xl:text-lg">Member didn't enter any status yet.</p>
      </div>     
    </template>
    <template v-else>
      <div class="flex justify-center items-center h-[350px] mt-48 mb-[280px]">
          <i class="fas fa-meteor fa-spin text-[100px] text-orange-400"></i>
      </div>
    </template>
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
  @apply text-sm sm:text-base xl:text-lg mt-4 py-1 px-2 sm:py-[2px] sm:px-4 border-2 rounded-3xl bg-orange-400 border-orange-400 text-white font-semibold hover:bg-white hover:text-orange-400 cursor-pointer
}
.button-icon {
  @apply xl:text-lg ml-2 py-[2px] px-[6px] xl:py-[3px] xl:px-[8px] border-2 rounded-full bg-orange-400 border-orange-400 text-white font-semibold hover:bg-white hover:text-orange-400 active:bg-red-500 active:text-white active:cursor-no-drop active:border-red-500 cursor-pointer
}
.img-profile {
  @apply sm:h-44 sm:w-44 rounded-full shadow-2xl border-2 border-gray-300 mx-6 sm:-mt-20 hidden xl:block
}
.img-profile-responsive{
  @apply h-64 w-64 rounded-full shadow-xl border-4 border-gray-300 mx-auto
}
.img-status{
  @apply h-10 w-10 rounded-full border-2 border-gray-300 mr-2
}
.font-custom {
  font-family: 'Yatra One', cursive;
}
.button-phone {
  @apply border-2 rounded-full bg-orange-400 border-orange-400 text-white hover:bg-white hover:text-orange-400 cursor-pointer
}
</style>
