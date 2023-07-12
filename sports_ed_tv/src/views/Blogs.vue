<template>
  <div class="text-gray-600 mt-[130px] mb-40">
    <div class="fixed top-[96px] bg-white w-full ml-3 flex items-center -z-10">
      <i class="fas fa-arrow-left text-orange-400 text-2xl" @click="goBack"></i>
      <span class="text-lg font-bold ml-3 ">Blog/SPORT</span>
    </div>
    <div v-for="blog in blogsLinks" class="md-container mx-[170px] -z-50">
      <ul>
        <li :href="blog.link" class="py-[10px] text-[20px]">{{ blog.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogsLinks: [
        {
          name: 'All',
          link: ''
        },
        {
          name: 'Athletic Training',
          link: ''
        },
        {
          name: 'Baseball',
          link: ''
        },
        {
          name: 'Basketball',
          link: ''
        },
        {
          name: 'Boxing',
          link: ''
        },
        {
          name: 'Concussion',
          link: ''
        },
        {
          name: 'Cycling',
          link: ''
        },
        {
          name: 'Equipment Management',
          link: ''
        },
        {
          name: 'Football - American',
          link: ''
        },
        {
          name: 'Golf',
          link: ''
        },
        {
          name: 'Gymnastics',
          link: ''
        },
        {
          name: 'Health',
          link: ''
        },
        {
          name: 'Kinesiology',
          link: ''
        },
        {
          name: 'Lacrosse',
          link: ''
        },
        {
          name: 'Learn To Win',
          link: ''
        },
        {
          name: 'Martial Arts',
          link: ''
        },
        {
          name: 'Media',
          link: ''
        },
        {
          name: 'Mental Health',
          link: ''
        },
        {
          name: 'Mental Toughness',
          link: ''
        },
        {
          name: 'Must-own Sports Books',
          link: ''
        },
        {
          name: 'NIL',
          link: ''
        },
        {
          name: 'Nutrition',
          link: ''
        },
        {
          name: 'On The Heart Beat',
          link: ''
        },
        {
          name: 'Orthopedics',
          link: ''
        },
        {
          name: 'Padel',
          link: ''
        },
        {
          name: 'Physical Education',
          link: ''
        },
        {
          name: 'Physical Therapy',
          link: ''
        },
        {
          name: 'Pickleball',
          link: ''
        },
        {
          name: 'POP Tennis',
          link: ''
        },
        {
          name: 'Psychology',
          link: ''
        },
        {
          name: 'Recruiting',
          link: ''
        },
        {
          name: 'Regeneration',
          link: ''
        },
        {
          name: 'Rehab',
          link: ''
        },
        {
          name: 'Running',
          link: ''
        },
        {
          name: 'Scholarship',
          link: ''
        },
        {
          name: 'Skateboarding',
          link: ''
        },
        {
          name: 'Skiing',
          link: ''
        },
        {
          name: 'Snowboarding',
          link: ''
        },
        {
          name: 'Soccer',
          link: ''
        },
        {
          name: 'Speed Skating',
          link: ''
        },
        {
          name: 'Sports Agency',
          link: ''
        },
        {
          name: 'Sports Medicine',
          link: ''
        },
        {
          name: 'Sports Parenting',
          link: ''
        },
        {
          name: 'Sports Psychology',
          link: ''
        },
        {
          name: 'SportsEdTV Tutorials',
          link: ''
        },
        {
          name: 'Strength And Conditioning',
          link: ''
        },
        {
          name: 'Surfing',
          link: ''
        },
        {
          name: 'Swimming',
          link: ''
        },
        {
          name: 'Table Tennis',
          link: ''
        },
        {
          name: 'Taekwondo',
          link: ''
        },
        {
          name: 'Team Management',
          link: ''
        },
        {
          name: 'Technology',
          link: ''
        },
        {
          name: 'Tennis',
          link: ''
        },
        {
          name: 'Travel',
          link: ''
        },
        {
          name: 'Vision',
          link: ''
        },
        {
          name: 'Volleyball',
          link: ''
        },
        {
          name: 'Weightlifting',
          link: ''
        },
        {
          name: 'Winter Sports',
          link: ''
        },
        {
          name: 'Yoga',
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