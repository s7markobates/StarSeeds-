<template>
  <div ref="root">
    <div :class="navbarClass" class="w-full h-16 flex justify-between fixed top-0 z-[5] border-b-4 border-t border-orange-400">
      <BurgerMenu :is-open="isOpen" @click="toggleMenu" title="Open menu"/>
      <Logo v-if="!isOpen" />
      <div>
        <div v-if="isOnFeed" v-show="!isOpen" >
          <Avatar :is-avatar-open="isAvatarOpen" @toggle-avatar="toggleAvatar" />
        </div>
        <div v-else v-show="!isOpen" @click="toggleModal" class="absolute top-[2px] right-[2px]" title="Click to Log in">
          <button class="my-[10px] mr-2 border-2 rounded-full border-orange-400 bg-transparent text-orange-400 bg-[#2B32B2] hover:bg-orange-400 hover:text-white duration-300">
            <p class="py-1 px-2 sm:px-3"><span class="font-medium text-md sm:pr-2 hidden sm:inline">Sign In</span><i class="fas fa-rocket text-lg sm:text-base"></i></p> 
          </button>
        </div>
      </div>
      <ModalSignIn :modalActive="modalActive" @close-modal="toggleModal" />
    </div>
  </div>
  <div v-show="!isOpen && !shouldShowNav" v-if="!modalActive" >
    <!-- <nav class="fixed top-[56px] w-full text-sm sm:text-base flex justify-between items-center h-10 nav-color p-2 border-b-4 border-t border-orange-400">
      <RouterLink to="/about" class="mx-1 uppercase">About</RouterLink>
      <RouterLink to="/videos" class="mx-1 uppercase">Videos</RouterLink>
      <RouterLink to="/blogs" class="mx-1 uppercase">Blogs</RouterLink>
      <RouterLink to="/discover" class="mx-1">
        <div class="text-md font-style">
          <span class="text-orange-400 mr-[3px]">Star</span>
          <i class="fas fa-meteor text-orange-400"></i>
          <span class="text-yellow-400">seeds</span>
        </div>
      </RouterLink>
    </nav> -->
  </div>
</template>

<script setup>
import BurgerMenu from '../components/BurgerMenu.vue'
import Logo from '../components/Logo.vue'
import ModalSignIn from '../components/ModalSignIn.vue'
import Avatar from './Avatar.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const isOpen = ref(false)
const modalActive = ref(null)
const isAvatarOpen = ref(false)
const router = useRouter()

const root = ref(null)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleClickOutside = (event) => {
  if (!root.value.contains(event.target)) {
    isOpen.value = false
    isAvatarOpen.value = false
  }
}

const toggleModal = () => {
  modalActive.value = !modalActive.value
}

const navbarClass = computed(() => {
  const currentRoute = useRoute()
  return (
    currentRoute.name === 'profiles' ||
    currentRoute.name === 'profileDetails' ||
    currentRoute.name === 'feed' ||
    currentRoute.name === 'chat' ||
    currentRoute.name === 'chatPerson'
    ? 'dark' : 'light'
  )
})

const isOnFeed = computed(() => 
  router.currentRoute.value.name === 'feed' ||
  router.currentRoute.value.name === 'profiles' ||
  router.currentRoute.value.name === 'profileDetails' ||
  router.currentRoute.value.name === 'chat' ||
  router.currentRoute.value.name === 'chatPerson'
)

const shouldShowNav = computed(() => {
  const currentRouteName = router.currentRoute.value.name;
  return (
    currentRouteName === 'feed' ||
    currentRouteName === 'profiles' ||
    currentRouteName === 'profileDetails'||
    currentRouteName === 'chat'||
    currentRouteName === 'chatPerson' ||
    currentRouteName === 'avatar'
  )
})

const toggleAvatar = () => {
  isAvatarOpen.value = !isAvatarOpen.value
}

const closeModalOnFeed = () => {
  if (router.currentRoute.value.name === 'feed') {
    modalActive.value = false
  }
}

router.afterEach(() => {
  closeModalOnFeed()
})

</script>

<style scoped>
.dark {
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  color: white;
}
.light, -nav-color {
  background: #1488CC;
  background: -webkit-linear-gradient(to right, #1488CC, #2B32B2, #302b63, #24243e, #0f0c29);
  background: linear-gradient(to right, #1488CC, #2B32B2, #302b63, #24243e, #0f0c29);
  opacity: 95%;
  color: white;
}

.font-style {
  font-family: 'Yatra One', cursive;
}
</style>
