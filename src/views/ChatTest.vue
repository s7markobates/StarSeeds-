<template>
    <div class="text-gray-600 mt-[70px] flex justify-between items-center w-[70%] mx-auto text-xl">
        <div v-if="profile" class="flex-1 font-bold ">
            <div class="flex items-center " :title="'Go to ' + getFirstName + '\'s feed'">
                <RouterLink :to="{ name: 'feed'}" >
                    <i class="fas fa-om text-orange-400 text-2xl cursor-pointer mr-2"></i>
                    <span class="hover:text-orange-400">{{ getFirstName }}'s FEED</span>
                </RouterLink>
            </div>
        </div>
        <div class="font-bold flex-1">
            <h1 class="flex justify-center items-center">{{ getFirstName }}'s CHATS</h1>
        </div>
        <div class="flex-1"></div>
    </div>

    <!-- Chat TEST -->
    <template v-if="profile">
        <div class="grid grid-cols-8 gap-0 w-[95%] mx-auto mt-3">
            <div class="col-span-2">
                <div class="w-full flex flex-col">
                    <div class="h-[8vh] w-full test-color opacity-90 mx-auto flex justify-center items-center rounded-tl-xl">
                        <div class="bg-white flex items-center justify-between h-[4vh] w-[220px] p-5 rounded-full cursor-pointer" title="Enter member name">
                            <input type="text" v-model="searchInput" class="w-full focus:outline-none" placeholder="Search members...">
                            <i class="fas fa-search text-orange-400 text-2xl "></i>
                        </div>
                    </div>
                    <template v-if="profile && filteredPeople.length > 0">
                    <div ref="peopleList" class="w-full test-color opacity-80 overflow-y-scroll h-[650px] hide-scrollbar">
                        <ul>
                        <li v-for="person in filteredPeople" :key="person.id">
                            <div class="flex justify-between items-center py-4 w-[95%] mx-auto">
                            <div class="flex justify-between items-center text-gray-300 hover:text-orange-400 hover:scale-105 duration-300" @click="openChat(person.id)" :title="'Chat with ' + person.name ">
                                <img v-if="person.image" :src="person.image" class=" h-[60px] w-[60px] p-1 rounded-full border border-gray-600 ml-4 cursor-pointer" alt="Profile Image" />
                                <img v-if="!person.image" src="../assets/avatar.jpg" class=" h-[60px] w-[60px] p-1 rounded-full border border-gray-600 ml-4 cursor-pointer" alt="Profile Image" />
                                <h1 class="text-base md:text-lg font-semibold ml-10 sm:ml-4 cursor-pointer">{{ person.name }}</h1>
                            </div>
                            <i class="fas fa-trash-alt text-sm md:text-base text-orange-400 hover:text-gray-600 text-md mr-3 sm:mr-8 cursor-pointer" @click="deletePerson(person.id)" :title="'Delete ' + person.name "></i>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </template>
                    <template v-else-if="profile && filteredPeople.length === 0">
                    <div class="w-full test-color opacity-80 h-[66vh] md:h-[70vh] xl:h-[650px]">
                        <div class="flex justify-center items-center py-[29.5px] text-gray-300">
                            <h1 class="text-base md:text-lg  font-semibold">There is no one to be found.</h1>
                            <i class="fas fa-satellite-dish text-2xl ml-2 -mt-2"></i>
                        </div>
                    </div>
                    </template>
                    <div class="h-[8vh] w-full test-color opacity-90 mx-auto sm:flex justify-center items-center xl:rounded-bl-xl">
                    <div class="bg-white flex items-center justify-center h-10 w-10 p-5 rounded-full cursor-pointer" @click="scrollToTop" title="Top">
                        <div class="focus:outline-none">
                            <i class="fas fa-angle-up text-gray-400 text-2xl hover:-mt-1 px-[10px] py-1 hover:text-orange-400"></i>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="col-span-6">
                <div v-if="selectedChat !== null && currentPerson !== null" class="w-full mx-auto text-base test-color opacity-90 rounded-r-xl">
                    <div class=" w-full flex justify-evenly items-end">
                      <div class="flex flex-col-reverse h-[722px] overflow-y-scroll hide-scrollbar w-[95%] opacity-80 text-white">
                        <span v-for="message in reversedFilteredMessages" :key="message.id" :class="messageClass(message)">
                          <div class="flex items-center justify-start">
                            <img v-if="message.sender === currentPerson.id && currentPerson.image" :src="currentPerson.image" class="img-message-mobile mr-3" />
                            <img v-if="message.sender === currentPerson.id && !currentPerson.image" src="../assets/avatar.jpg" class="img-message-mobile mr-3" />
                            <span v-if="message.sender === currentPerson.id">{{ message.content }}</span>
                          </div>
                          <div class="flex items-center justify-end">
                            <span v-if="message.sender === profile.id">{{ message.content }}</span>
                            <img v-if="message.sender === profile.id && profile.image" :src="profile.image" class="img-message-mobile ml-3" />
                            <img v-if="message.sender === profile.id && !profile.image" src="../assets/avatar.jpg" class="img-message-mobile ml-3" />
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="flex items-center p-3 w-full">
                      <input v-model="messageInput" @keyup.enter="sendMessage" type="text" title="Write a new message" class="input-class">
                      <button @click="sendMessage" class="bttn-class" title="Send message">
                        <i class="fas fa-rocket text-xl"></i>
                      </button>
                    </div>
                </div>
                <div v-else>
                    <div>
                        <div class="test-color opacity-90 h-[8vh] rounded-tr-xl"></div>
                        <div class="test-color opacity-80 h-[650px]"></div>
                        <div class="test-color opacity-90 h-[8vh] rounded-br-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    </template>


    <template v-else>
        <div class="flex justify-center items-center h-[500px] mt-20 mb-[280px]">
            <i class="fas fa-meteor fa-spin text-[100px] text-orange-400"></i>
        </div>
    </template>

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white rounded-md w-64 md:w-[500px]">
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
import { RouterLink, useRouter, useRoute } from 'vue-router'

const profile = ref(null)
const people = ref([])
const searchInput = ref('')
// const router = useRouter()
const route = useRoute()
const currentPerson = ref(null)
const messageInput = ref('')
const messages = ref([])

const selectedChat = ref(null);

const openChat = (personId) => {
    selectedChat.value = personId;
    currentPerson.value = people.value.find(person => person.id === personId);
    console.log(selectedChat.value)
};


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

    const personId = selectedChat.value
    const selectedPerson = people.value.find(person => person.id == personId)
    currentPerson.value = selectedPerson
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

const showModal = ref(false)
const personToDelete = ref(null)

const deletePerson = (personId) => {
  personToDelete.value = personId
  showModal.value = true
}

const confirmDelete = () => {
  if (personToDelete.value) {
    const index = people.value.findIndex(person => person.id === personToDelete.value)
    if (index !== -1) {
      people.value.splice(index, 1)
    }
    console.log(`Deleted person with ID: ${personToDelete.value}`)
  }
  showModal.value = false
}

const cancelDelete = () => {
  showModal.value = false
}

const peopleList = ref(null)

const scrollToTop = () => {
  if (peopleList.value) {
    peopleList.value.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

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

</script>

<style scoped>    
.hide-scrollbar::-webkit-scrollbar {
  width: 0.5rem; /* Promenite širinu skrol trake po potrebi */
}
.hide-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.hide-scrollbar::-webkit-scrollbar-thumb {
  background-color: transparent;
}
.test-color {
    background-color: #24243e;
}
.input-class {
    @apply w-[80%] h-[55px] pl-6 ml-6 rounded-2xl border-2 border-orange-200 focus:outline-none
  }
.bttn-class {
    @apply w-[80px] px-2 py-1 bg-gradient-to-tr from-orange-400 to-orange-600 border-2 border-orange-400 text-white rounded-full ml-5
}
.img-current {
    @apply h-40 w-40 rounded-full border-4 border-[#0f0c29] border-opacity-60 hover:scale-105 hover:shadow-2xl cursor-pointer duration-300
}
.img-message-mobile {
    @apply h-10 w-10 rounded-full border-2 cursor-pointer
}
.profile-message {
    @apply bg-orange-400 p-3 my-2 ml-16 rounded-b-xl rounded-tl-xl text-right hover:bg-opacity-90 text-sm sm:text-base
}
.current-person-message {
    @apply bg-[#0f0c29] bg-opacity-60 p-3 my-2 mr-16 ml-2 rounded-b-xl rounded-tr-xl hover:bg-opacity-50 text-sm sm:text-base
}
</style>
