<template>
  <div>
    <div :class="navbarClass" class="w-full h-14 flex justify-between fixed top-0 ">
      <BurgerMenu :is-open="isOpen" @click="toggleMenu" title="Open menu"/>
      <Logo/>
      <div>
        <div v-if="isOnFeed" v-show="!isOpen" >
          <Avatar :is-avatar-open="isAvatarOpen" @toggle-avatar="toggleAvatar" />
        </div>
        <div v-else v-show="!isOpen" @click="toggleModal" class="absolute top-[2px] right-[2px]" title="Click to Log in">
          <button class="m-3 h-8 w-16 border-2 rounded-full border-orange-500 bg-transparent text-orange-400 bg-white hover:bg-orange-500 hover:text-white ">
            <p class="font-medium text-[15px] px-[5px]">Sign In</p> 
          </button>
        </div>
      </div>
      <ModalSignIn :modalActive="modalActive" @close-modal="toggleModal" />
    </div>
  </div>
  <div v-show="!isOpen && !shouldShowNav" v-if="!modalActive" >
    <nav class="fixed top-[56px] w-full flex justify-between items-center h-10 bg-white text-gray-600 p-2">
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
import { ref, computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import BurgerMenu from '../components/BurgerMenu.vue'
import Logo from '../components/Logo.vue'
import ModalSignIn from '../components/ModalSignIn.vue'
import Avatar from './Avatar.vue'

const isOpen = ref(false)
const modalActive = ref(null)
const isAvatarOpen = ref(false)

const router = useRouter()

const toggleMenu = () => {
  isOpen.value = !isOpen.value
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
  background-color: #011D57;
  color: white;
}
.light {
  background-color: white;
  color: darkslategray;
}
.font-style {
  font-family: 'Yatra One', cursive;
}
</style>
