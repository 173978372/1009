import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import LayoutView from '@/views/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LayoutView,
      children: [
        {
          path: 'home',
          component: HomeView
        }
      ]
    },
    // {
    //   path: '/layout',
    //   component: LayoutView
    // },
    {
      path: '/login',
      component: LoginView
    }
  ]
})

export default router
