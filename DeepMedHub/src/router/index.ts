import { createRouter, createWebHistory } from 'vue-router'
import OpenView from '../view/Open.vue'
import HomeView from '../view/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Open',
      component: OpenView,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },
  ],
})

export default router
