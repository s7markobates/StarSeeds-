<template>
  <div @click="$emit('toggle-avatar')" :class="`avatar-frame ${!isAvatarOpen ? 'bg-[#F6893B]' : 'bg-gray-400'}`" >
    <span class="text-xs font-bold text-center text-white py-1 px-0 leading-4" title="View profile details">{{ getInitials }}</span>
  </div>
  <div v-if="isAvatarOpen" class="bg-white h-screen w-screen absolute top-14 left-0 text-gray-600 text-lg">
    <div v-if="avatarProfile" class="mt-4 ">
      <div class="ml-4 flex items-center cursor-pointer" @click="$emit('toggle-avatar')">
        <i class="fas fa-arrow-left text-orange-400 text-2xl" ></i>
        <span class="text-lg font-bold ml-3 ">{{ avatarProfile.name }} MENU</span>
      </div>
      <div class="ml-10 mt-2 flex items-center">
        <img v-if="avatarProfile.image" :src="avatarProfile.image" class="img-class" alt="Profile Image" title="Change profile picture" @click="uploadImage"/>
        <img v-else src="../assets/avatar.jpg" class="img-class" alt="Profile Image" title="Change profile picture" @click="uploadImage"/>
        <button @click="handleLogout" class="logout-button">
          <span class="text-sm font-semibold" :title="'Log out from the ' + avatarProfile.name + ' profile'">Logout</span>
        </button>
      </div>
      <p class="text-[12px] ml-10 mt-2">(click image to update profile)</p>
      <div class="ml-10 mt-1">
        <p class="font-bold">{{ avatarProfile.name }}</p>
        <p class="text-[15px]">{{ avatarProfile.email }}</p>
        <p class="font-bold text-[15px] text-gray-400">Lifetime Member</p>
      </div>
      <div class="ml-12 mt-4">
        <ul class="text-gray-500">
          <li class="pt-4 pl-4 pb-2 font-semibold">Alerts</li>
          <RouterLink :to="{ name: 'chat'}" class="font-semibold">
            <li class="hover:text-orange-400 hover:bg-slate-50 pt-4 pl-4 pb-2">Messages</li>
          </RouterLink>
          <li class="pt-4 pl-4 pb-2 font-semibold">Friends</li>
          <li class="pt-4 pl-4 pb-2 font-semibold">Groups</li>
          <li class="pt-4 pl-4 pb-2 font-semibold">Playlists</li>
          <li class="pt-4 pl-4 pb-2 font-semibold">Settings..</li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
  
const router = useRouter()

defineEmits(['toggle-avatar', 'is-avatar-open'])

defineProps({
  isAvatarOpen: {
    type: Boolean,
    default: false
  }
})

const getInitials = computed(() => {
  if (avatarProfile.value) {
    const name = avatarProfile.value.name || ''
    const words = name.trim().split(' ')
    const initials = words.map(word => word.charAt(0).toUpperCase()).join('')
    return initials
  } else {
    return ''
  }
})

const avatarProfile = ref(null)

onMounted(() => {
  const formData = JSON.parse(localStorage.getItem('formData'))
  if (formData) {
    fetch('http://localhost:3000/profile')
    .then(response => response.json())
    .then(data => {
    const existingProfile = data.find(profile => profile.name === formData.name && profile.email === formData.email && profile.password === formData.password)
    if (existingProfile) {
      avatarProfile.value = existingProfile
    } else {
      alert('Profile not found on the server.')
    }
    })
    .catch(err => {
    console.log(err.message)
    })
  }
})

const handleLogout = () => {
  localStorage.removeItem('formData')
  router.push('/')
  if (router.currentRoute.value.path === '/') {
    window.location.reload()
  }
}

const uploadImage = () => {
  const fileInput = document.createElement('input')
  fileInput.type = 'file'
  fileInput.accept = 'image/*'
  fileInput.addEventListener('change', handleImageUpload)
  fileInput.click()
}

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  const reader = new FileReader()
  reader.onloadend = () => {
    const imageData = reader.result
    saveImageOnServer(imageData)
  }
  reader.readAsDataURL(file)
}

const saveImageOnServer = (imageData) => {
  const updatedProfile = { ...avatarProfile.value, image: imageData }

  fetch(`http://localhost:3000/profile/${avatarProfile.value.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedProfile),
  })
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      avatarProfile.value = updatedProfile
      // Ažuriranje slike profila na frontend-u
      avatarProfile.value.image = imageData
      alert('Profile image updated successfully!')
    }
  })
  .catch((err) => {
    console.log(err.message)
  })
}

</script>

<style scoped>
.avatar-frame {
  @apply relative top-[15px] right-[15px] w-[26px] h-[26px] rounded-full flex justify-center items-center cursor-pointer
}
.img-class {
  @apply h-24 w-24 rounded-full shadow-xl border border-gray-200 cursor-pointer
}
.logout-button {
  @apply ml-6 h-8 w-20 border-2 rounded-3xl bg-orange-400 border-orange-400 text-white hover:bg-white hover:text-orange-400 cursor-pointer
}
</style>