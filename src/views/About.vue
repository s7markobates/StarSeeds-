<template>
  <div class="text-gray-600 mt-[170px] h-screen">
    <div class="fixed top-[96px] bg-white w-full ml-3 flex items-center -z-10">
      <i class="fas fa-om text-orange-400 text-2xl" @click="goBack"></i>
      <span class="text-lg font-bold uppercase ml-3 ">About</span>
    </div>
    <div v-for="item in aboutLinks" class="md-container mx-[170px]">
      <ul>
        <li :href="item.link" class="py-[10px] text-[20px]">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutLinks: [
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