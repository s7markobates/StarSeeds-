<template>
  <template v-if="profile">
    <div>
      <div class="xl:w-[70%] mx-auto text-gray-600 text-lg xl:mt-[55px] flex justify-between items-center">
        
        <div v-if="profile" class="hidden text-xl font-bold flex-1 xl:flex justify-start items-center mt-3">
          <div class="flex items-center" :title="'Go to ' + getFirstName + '\'s chat page'">
            <RouterLink :to="{ name: 'chat'}">
              <i class="fas fa-om text-orange-400 text-2xl cursor-pointer mr-2"></i>
              <span class="hover:text-orange-400">{{ getFirstName }}'s CHATS</span>
            </RouterLink>
          </div>
        </div>
        <div v-if="currentPerson" class="text-xl font-bold flex-1 mt-3">
          <h1 class="hidden xl:flex justify-center items-center text-orange-400">CHAT with: {{currentPerson.name}}</h1>
        </div>
        <div class="hidden xl:block flex-1 ">
        </div>
        
        <div class="fixed bg-white w-full flex justify-center mt-[165px] py-3 xl:hidden">
          <RouterLink :to="{ name: 'profiles' }">
            <button><i class="fas fa-users button-phone px-[9.5px] py-[11.6px]"></i></button>
          </RouterLink>
          <RouterLink :to="{ name: 'feed' }" title="Go to your feed">
            <button class="button-phone mx-2 px-[11px] py-[7px] "><i class="fas fa-meteor text-white hover:text-orange-400 text-xl"></i></button>
          </RouterLink>
          <RouterLink :to="{ name: 'chat' }">
            <button><i class="fas fa-rocket button-phone pl-[11px] pr-[12px] py-[12px]"></i></button>
          </RouterLink>
        </div>
      </div>

      <!-- Chat window -desktop -->
      <div v-if="profile" class="hidden xl:block w-[70%] mx-auto mt-3">
        <div class="bg-gray-200 w-full h-[715px] rounded-t-3xl flex justify-evenly items-end">
          <div class="pb-10">
            <img v-if="currentPerson && currentPerson.image" :title="'Go to ' + currentPerson.name + ' profile'"  :src="currentPerson.image" @click="goToProfile(currentPerson.id)" class="img-current" alt="CurrentPersonImage" />
            <img v-if="currentPerson && !currentPerson.image" :title="'Go to ' + currentPerson.name + ' profile'"  src="../assets/avatar.jpg" @click="goToProfile(currentPerson.id)" class="img-current" alt="CurrentPersonImage" />
          </div>
          <div class="flex flex-col-reverse overflow-y-scroll hide-scrollbar h-[715px] w-[50%] text-white">
            <span v-for="message in reversedFilteredMessages" :key="message.id" :class="messageClass(message)">{{ message.content }}</span>
          </div>
          <div class="pb-10">
            <img v-if="profile && profile.image" title="Go to my profile" :src="profile.image" @click="goToProfile(profile.id)" class="img-profile" alt="Profile Image" />
            <img v-if="profile && !profile.image" title="Go to my profile" src="../assets/avatar.jpg" @click="goToProfile(profile.id)" class="img-profile" alt="Profile Image" />
          </div>
        </div>
        <div class="flex items-center p-3 bg-gray-300 rounded-b-2xl">
          <input v-model="messageInput" @keyup.enter="sendMessage" type="text" title="Write a new message" class="input-class">
          <button @click="sendMessage" class="bttn-class" title="Send message">
            <i class="fas fa-rocket text-xl"></i>
          </button>
        </div>
      </div>

      <!-- Chat window - mobile -->
      <div v-if="profile" class=" xl:hidden w-full mx-auto mt-28 text-xs  bg-gray-200">
        <div class="bg-gray-200 w-full h-full mb-[75px] flex justify-evenly items-end">
          <div class="flex flex-col-reverse overflow-y-scroll hide-scrollbar h-full w-[95%] text-white">
            <span v-for="message in reversedFilteredMessages" :key="message.id" :class="messageClass(message)">
              <div class="flex items-center justify-start">
                <img v-if="message.sender === currentPerson.id && currentPerson.image" :src="currentPerson.image" class="img-message-mobile mr-3" alt="CurrentPersonImage" />
                <img v-if="message.sender === currentPerson.id && !currentPerson.image" src="../assets/avatar.jpg" class="img-message-mobile mr-3" alt="CurrentPersonImage" />
                <span v-if="message.sender === currentPerson.id">{{ message.content }}</span>
              </div>
              <div class="flex items-center justify-end">
                <span v-if="message.sender === profile.id">{{ message.content }}</span>
                <img v-if="message.sender === profile.id && profile.image" :src="profile.image" class="img-message-mobile ml-3" alt="ProfileImage" />
                <img v-if="message.sender === profile.id && !profile.image" src="../assets/avatar.jpg" class="img-message-mobile ml-3" alt="ProfileImage" />
              </div>
            </span>
          </div>
        </div>
        <div class="fixed flex items-center p-3 w-full bg-gray-300 bottom-0 ">
          <input v-model="messageInput" @keyup.enter="sendMessage" type="text" title="Write a new message" class="input-class">
          <button @click="sendMessage" class="bttn-class" title="Send message">
            <i class="fas fa-rocket text-xl"></i>
          </button>
        </div>
      </div>

    </div>
  </template>
  <template v-else>
    <div class="flex justify-center items-center h-[400px] sm:h-[500px] mt-44 mb-[280px]">
        <i class="fas fa-meteor fa-spin text-[100px] text-orange-400"></i>
    </div>
  </template>
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

    scrollToBottom()
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
  @apply bg-orange-400 p-3 my-2 ml-16 rounded-b-xl rounded-tl-xl text-right hover:bg-opacity-90 text-sm sm:text-base
}
.current-person-message {
  @apply bg-[#0f0c29] bg-opacity-60 p-3 my-2 mr-16 ml-2 rounded-b-xl rounded-tr-xl hover:bg-opacity-50 text-sm sm:text-base
}
.img-profile {
  @apply h-40 w-40 rounded-full border-4 border-orange-400 hover:scale-105 hover:shadow-2xl cursor-pointer duration-300
}
.img-current {
  @apply h-40 w-40 rounded-full border-4 border-[#0f0c29] border-opacity-60 hover:scale-105 hover:shadow-2xl cursor-pointer duration-300
}
.img-message-mobile {
  @apply h-10 w-10 rounded-full border-2 cursor-pointer
}
.input-class {
  @apply w-[80%] h-[55px] pl-6 ml-6 rounded-2xl border-2 border-orange-200 focus:outline-none
}
.bttn-class {
  @apply w-[80px] px-2 py-1 bg-gradient-to-tr from-orange-400 to-orange-600 border-2 border-orange-400 text-white rounded-full ml-5
}
.button-phone {
  @apply border-2 rounded-full bg-orange-400 border-orange-400 text-white hover:bg-white hover:text-orange-400 cursor-pointer
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
