<template>
  <div class="text-gray-600 mt-[130px] h-screen">
    <div class="fixed top-[96px] bg-white w-full ml-3 flex items-center -z-10">
      <i class="fas fa-om text-orange-400 text-2xl" @click="goBack"></i>
      <span class="text-lg font-bold ml-3 ">Video</span>
    </div>
    <div v-for="video in videosLinks" class="md-container mx-[170px]">
      <ul>
        <li :href="video.link" class="py-[10px] text-[20px]">{{ video.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videosLinks: [
        {
          name: 'Basketball',
          link: ''
        },
        {
          name: 'Golf',
          link: ''
        },
        {
          name: `'Football - Soccer'`,
          link: ''
        },
        {
          name: 'Pickleball',
          link: ''
        },
        {
          name: 'Taekwondo',
          link: ''
        },
        {
          name: 'Tennis',
          link: ''
        },
        {
          name: 'Volleyball',
          link: ''
        },
        {
          name: 'Weightlifting',
          link: ''
        }
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>