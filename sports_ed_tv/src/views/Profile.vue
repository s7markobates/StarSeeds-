<template>
  <div class="text-gray-600 mt-[70px] h-[100%]">
    <div class="text-xl font-bold flex justify-start">
      <div @click="goToProfiles" class="ml-7 cursor-pointer flex items-center" title="View all the members">
        <i class="fas fa-arrow-left text-orange-400 text-2xl mr-2"></i>
        <div class="flex justify-center items-center hover:text-orange-400 filter-none hue-rotate-90 hover:filter">
          <img src="../assets/logo-main.png" class="h-6" alt="">
          <h1 class="ml-1">members</h1>
        </div>
      </div>
    </div>
    <div class="w-[50%] mx-auto mt-10 bg-gray-200 px-4 py-3 rounded-lg shadow-md">
      <div class="flex justify-between items-end">
        <div v-if="profile">
          <h1><span class="font-bold">Name: </span><span class="font-semibold">{{ profile.name }}</span></h1>
          <p v-if="profile.email !== matchedEmail" ><span class="font-bold">Email: </span><span class="underline text-blue-500 cursor-pointer" title="Send an email">{{ profile.email }}</span></p>
          <p v-else><span class="font-bold">Email: </span><span>{{ profile.email }}</span></p>
          <button v-if="profile.name !== matchedName" @click="openChat(profile.id)" class="button" :title="'Chat with ' + profile.name ">Chat with {{ profile.name }}<i class="fas fa-paper-plane text-sm ml-2"></i></button>
          <button v-else class="button" @click="goToChat" title="Go to my Chat page">Go to my Chats<i class="fas fa-paper-plane text-sm ml-2"></i></button>
          <button class="button-icon" title="GitHub"><i class="fab fa-github pl-[1px]"></i></button>
          <button class="button-icon" title="Facebook" ><i class="fab fa-facebook pl-[1px]"></i></button>
          <button class="button-icon" title="Instagram"><i class="fab fa-instagram pl-[1px]"></i></button>
          <button class="button-icon" title="Twitter"><i class="fab fa-twitter pl-[1px]"></i></button>
        </div>        
        <img v-if="profile.image" :src="profile.image" class="h-36 w-36 rounded-full shadow-2xl border-2 border-gray-300 mx-5 -mt-14" alt="Profile Image" />
        <img v-else src="../assets/avatar.jpg" class="h-36 w-36 rounded-full shadow-2xl border-2 border-gray-300 mx-5 -mt-14" alt="Profile Image" />
      </div>
      <div class="text-justify mt-4">
        <p v-if="profile && profile.description"><span class="font-bold">Description: </span>{{ profile.description }}</p>
        <p v-else><span class="font-bold">Description: </span>Profile has no description entered.</p>
      </div>
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
      matchedEmail: ''
    }
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
    }
  },
  mounted() {
    const formData = JSON.parse(localStorage.getItem('formData'))
    this.matchedName = formData.name
    this.matchedEmail = formData.email
    
    fetch('http://localhost:3000/profile/' + this.id)
    .then(res => res.json())
    .then(data => this.profile = data)
    .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
.button {
  @apply mt-4 h-8 px-4 border-2 rounded-3xl bg-orange-400 border-orange-400 text-white font-semibold hover:bg-white hover:text-orange-400 cursor-pointer
}
.button-icon {
  @apply mt-4 ml-2 py-[2px] px-[6px] border-2 rounded-3xl bg-orange-400 border-orange-400 text-white font-semibold hover:bg-white hover:text-orange-400 active:bg-red-500 active:text-white active:border-red-500 cursor-pointer
}
</style>
