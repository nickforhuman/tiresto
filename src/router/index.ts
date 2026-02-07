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
      name: 'restourants',
      path: '/restourants',
      component: RestourantView,
    },
  ],
})

export default router
