<template>
  <div class="text-gray-600 mt-[96px] h-[100%]">
    <div class="text-xl font-bold flex justify-start">
      <div @click="goBack" class="ml-10 mt-3 cursor-pointer flex items-center">
        <i class="fas fa-arrow-left text-orange-400 text-2xl"></i>
        <span class="ml-2 hover:text-orange-400">{{ profile.name }} profile</span>
      </div>
    </div>
    <div class="w-[50%] mx-auto my-8 bg-gray-200 px-4 py-3 rounded-lg shadow-md">
      <div class="flex justify-between items-end">
        <div>
          <h1><span class="font-bold">Name: </span><span class="font-semibold">{{ profile.name }}</span></h1>
          <p><span class="font-bold">Email: </span>{{ profile.email }}</p>
        </div>           
        <img :src="profile.image" class="h-40 w-40 rounded-full shadow-2xl border-2 border-gray-300 mx-5 -mt-16" alt="Profile Image" />
      </div>
      <p class="text-justify mt-7">
        <span class="font-bold">Description: </span>{{ profile.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      profile: []
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  mounted() {
    fetch('http://localhost:3000/profile/' + this.id)
    .then(res => res.json())
    .then(data => this.profile = data)
    .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
    
</style>