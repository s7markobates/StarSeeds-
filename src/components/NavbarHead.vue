<template>
  <div ref="root">
    <div :class="navbarClass" class="w-full h-14 flex justify-between fixed top-0 z-[1]">
      <BurgerMenu :is-open="isOpen" @click="toggleMenu" title="Open menu"/>
      <Logo/>
      <div>
        <div v-if="isOnFeed" v-show="!isOpen" >
          <Avatar :is-avatar-open="isAvatarOpen" @toggle-avatar="toggleAvatar" />
        </div>
        <div v-else v-show="!isOpen" @click="toggleModal" class="absolute top-[2px] right-[2px]" title="Click to Log in">
          <button class="m-1 h-10 w-28 border-2 rounded-full border-orange-400 bg-transparent text-orange-400 bg-[#2B32B2] hover:bg-orange-400 hover:text-white ">
            <p><span class="font-medium text-md pr-2">Sign In</span><i class="fas fa-rocket fa-spin"></i></p> 
          </button>
        </div>
      </div>
      <ModalSignIn :modalActive="modalActive" @close-modal="toggleModal" />
    </div>
  </div>
  <div v-show="!isOpen && !shouldShowNav" v-if="!modalActive" >
    <nav class="fixed top-[56px] w-full flex justify-between items-center h-10 nav-color p-2 border-b-4 border-t border-orange-400">
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
    </nav>
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
.light, .nav-color {
  background: #1488CC;
  background: -webkit-linear-gradient(to left, #2B32B2, #1488CC);
  background: linear-gradient(to left, #2B32B2, #1488CC); 
  color: white;
}

.font-style {
  font-family: 'Yatra One', cursive;
}
</style>
