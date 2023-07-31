import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('../views/Videos.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('../views/Blogs.vue')
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('../views/Discover.vue')
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: () => import('../views/Profiles.vue'),
      meta: {
        darkMode: true
      }
    },
    {
      path: '/profile/:id',
      name: 'profileDetails',
      component: () => import('../views/Profile.vue'),
      props: true,
      meta: {
        darkMode: true
      }
    },
    {
      path: '/feed',
      name: 'feed',
      component: () => import('../views/Feed.vue'),
      meta: {
        darkMode: true
      }
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/Chat.vue'),
      meta: {
        darkMode: true
      }
    },
    {
      path: '/chat/:id',
      name: 'chatPerson',
      props: true,
      component: () => import('../views/ChatPerson.vue'),
      meta: {
        darkMode: true
      }
    },
    {
      path: '/avatar',
      name: 'avatar',
      component: () => import('../components/Avatar.vue')
    }
  ]
})

export default router
