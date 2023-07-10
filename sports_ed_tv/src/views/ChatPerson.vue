<template>
  <div>
    <div class="w-[96%] mx-auto text-gray-600 text-lg mt-[70px] flex justify-between items-center">
      <div v-if="profile" class=" text-xl font-bold flex-1 justify-start items-center">
        <div class="flex items-center" :title="'Go to ' + getFirstName + '\'s chat page'">
          <RouterLink :to="{ name: 'chat'}">
            <i class="fas fa-arrow-left text-orange-400 text-2xl cursor-pointer mr-2"></i>
            <span class="hover:text-orange-400">{{ getFirstName }}'s CHATS</span>
          </RouterLink>
        </div>
      </div>
      <div v-if="currentPerson" class="text-xl font-bold flex-1">
        <h1 class="flex justify-center items-center text-orange-400">CHAT: {{currentPerson.name}}</h1>
      </div>
      <div class="flex-1 ">
      </div>
    </div>
    <div v-if="profile" class="w-[96%] mx-auto mt-10">
      <div class="bg-gray-200 w-full h-[580px] rounded-3xl flex justify-evenly items-end">
        <div class="pb-10">
          <img v-if="currentPerson && currentPerson.image" :title="'Go to ' + currentPerson.name + ' profile'"  :src="currentPerson.image" @click="goToProfile(currentPerson.id)" class="img-class-current" alt="CurrentPersonImage" />
          <img v-if="currentPerson && !currentPerson.image" :title="'Go to ' + currentPerson.name + ' profile'"  src="../assets/avatar.jpg" @click="goToProfile(currentPerson.id)" class="img-class-current" alt="CurrentPersonImage" />
        </div>
        <div class="flex flex-col-reverse overflow-y-scroll hide-scrollbar h-[580px] w-[70%] text-white">
          <span v-for="message in reversedFilteredMessages" :key="message.id" :class="messageClass(message)">{{ message.content }}</span>
        </div>
        <div class="pb-10">
          <img v-if="profile && profile.image" title="Go to my profile" :src="profile.image" @click="goToProfile(profile.id)" class="img-class-profile" alt="Profile Image" />
          <img v-if="profile && !profile.image" title="Go to my profile" src="../assets/avatar.jpg" @click="goToProfile(profile.id)" class="img-class-profile" alt="Profile Image" />
        </div>
      </div>
      <div class="flex justify-start items-start p-3">
        <input v-model="messageInput" @keyup.enter="sendMessage" type="text" title="Write a new message" class="input-class">
        <button @click="sendMessage" class="bttn-class" title="Send message">
          <i class="fas fa-paper-plane text-xl"></i>
        </button>
      </div>
    </div>    
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const profile = ref(null)
const people = ref(null)
const route = useRoute()
const currentPerson = ref(null)
const messageInput = ref('')
const messages = ref([])
const router = useRouter()

onMounted(() => {
  const localProfile = JSON.parse(localStorage.getItem('formData'))
  if (localProfile) {
    fetchProfile(localProfile)
  }
  
  fetchPeople()

  const savedMessages = localStorage.getItem('messages')
  if (savedMessages) {
    messages.value = JSON.parse(savedMessages)
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

const fetchPeople = () => {
  fetch('http://localhost:3000/profile')
  .then(response => response.json())
  .then(data => {
    people.value = data

    const personId = route.params.id
    const selectedPerson = people.value.find(person => person.id == personId)
    currentPerson.value = selectedPerson
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

const sendMessage = () => {
  const message = messageInput.value
  if (message) {
    const newMessage = {
      id: generateUniqueId(),
      content: message,
      sender: profile.value.id,
      recipient: currentPerson.value.id
    }
    messages.value.push(newMessage)

    const overflowDiv = document.querySelector('.overflow-y-scroll')
    overflowDiv.scrollTop = overflowDiv.scrollHeight

    messageInput.value = ''

    localStorage.setItem('messages', JSON.stringify(messages.value))
  }
}
const messageClass = (message) => {
  return message.sender === profile.value.id ? 'profile-message' : 'current-person-message'
}

const generateUniqueId = () => {
  return Math.random().toString(36).substring(2, 9)
}

const filteredMessages = computed(() => {
  const selectedSenderId = profile.value ? profile.value.id : null
  const selectedRecipientId = currentPerson.value ? currentPerson.value.id : null

  return messages.value.filter(message => {
    const isSender = message.sender === selectedSenderId
    const isRecipient = message.recipient === selectedRecipientId
    const isReverseSenderRecipient = message.sender === selectedRecipientId && message.recipient === selectedSenderId

    return isSender && isRecipient || isReverseSenderRecipient
  })
})

const reversedFilteredMessages = computed(() => {
  return filteredMessages.value.slice().reverse()
})

const goToProfile = (personId) => {
  router.push({ name: 'profileDetails', params: { id: personId } })
}

</script>

<style scoped>
.profile-message {
  @apply bg-orange-400 p-3 my-2 ml-16 rounded-b-xl rounded-tl-xl text-right 
}
.current-person-message {
  @apply bg-red-400 p-3 my-2 mr-16 ml-2 rounded-b-xl rounded-tr-xl
}
.img-class-profile {
  @apply h-32 w-32 rounded-full border-4 border-orange-400 hover:scale-105 hover:shadow-2xl cursor-pointer active:cursor-crosshair
}
.img-class-current {
  @apply h-32 w-32 rounded-full border-4 border-red-400 hover:scale-105 hover:shadow-2xl cursor-pointer active:cursor-crosshair
}
.input-class {
  @apply w-[80%] h-[55px] pl-6 ml-6 rounded-2xl border-2 border-gray-100 focus:outline-none
}
.bttn-class {
  @apply w-[80px] px-2 py-1 bg-gradient-to-tr from-orange-400 to-orange-600 border-2 border-orange-400 text-white rounded-full ml-5
}

.hide-scrollbar::-webkit-scrollbar {
  width: 0.5rem; /* Promenite širinu skrol trake po potrebi */
}

.hide-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.hide-scrollbar::-webkit-scrollbar-thumb {
  background-color: transparent;
}
</style>
