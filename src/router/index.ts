import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import BrowsemenuView from '@/views/BrowsemenuView.vue'
import HomeView from '@/views/HomeView.vue'
import RestourantView from '@/views/RestourantView.vue'
import SpecialoffersView from '@/views/SpecialoffersView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomeView,
    },
    {
      name: 'Browse Menu',
      path: '/browse-menu',
      component: BrowsemenuView,
    },
    {
      name: 'Special Offers',
      path: '/special-offers',
      component: SpecialoffersView,
    },
    {
      name: 'restaurants',
      path: '/restaurants',
      component: RestourantView,
    },
    // authentications

    {
      name: 'login',
      path: '/auth/login',
      component: LoginView,
    },
    {
      name: 'register',
      path: '/auth/register',
      component: RegisterView,
    },
  ],
})

export default router
