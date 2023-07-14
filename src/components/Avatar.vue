<template>
  <div @click="$emit('toggle-avatar')" :class="`avatar-frame ${!isAvatarOpen ? 'bg-[#F6893B]' : 'bg-gray-400'}`" >
    <span class="text-md font-semibold text-center text-white" title="View profile details">{{ getInitials }}</span>
  </div>
  <div v-if="isAvatarOpen" class="bg-white h-[470px] w-[300px] absolute top-14 right-0 text-gray-600 text-lg border-x-2 border-b-2 border-orange-400 rounded-b-2xl">
    <div v-if="avatarProfile" class="mt-4 flex flex-col items-center">
      <div class="mt-2 flex items-center">
        <img v-if="avatarProfile.image" :src="avatarProfile.image" class="img-class" alt="Profile Image" title="Change profile picture" @click="uploadImage"/>
        <img v-else src="../assets/avatar.jpg" class="img-class" alt="Profile Image" title="Change profile picture" @click="uploadImage"/>
      </div>
      <p class="text-sm italic mt-2">(click on image to update profile)</p>
      <div class="mt-5 flex flex-col items-center">
        <i class="fas fa-jedi text-4xl text-orange-400"></i>
        <p class="font-bold text-orange-400">{{ avatarProfile.name }}</p>
        <p class="text-sm ">{{ avatarProfile.email }}</p>
      </div>
      <button @click="handleLogout" class="logout-button">
        <span class="text-sm font-semibold flex justify-center items-center" :title="'Log out from the ' + avatarProfile.name + ' profile'">Logout</span>
      </button>
      <p class="mt-8 text-2xl font-custom">
        <span class="text-orange-400 mr-[3px]">Star</span>
        <i class="fas fa-meteor text-orange-400"></i>
        <span class="text-yellow-400">seeds</span>
      </p>
      <p class="text-xs">Powered by bts©</p>
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
  @apply relative top-[8px] right-[8px] w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer
}
.img-class {
  @apply h-32 w-32 rounded-full shadow-xl border border-gray-200 cursor-pointer
}
.logout-button {
  @apply mt-8 h-8 w-20 border-2 rounded-3xl bg-orange-400 border-orange-400 text-white hover:bg-white hover:text-orange-400 cursor-pointer
}
.font-custom {
  font-family: 'Yatra One', cursive;
}
</style>