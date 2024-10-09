import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/CodeView.vue'
import LoginView from '@/views/LoginView.vue'
import LayoutView from '@/views/LayoutView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: LayoutView,
      children: [
        {
          path: 'code',
          component: HomeView
        }
      ]
    },
    {
      path: '/login',
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.fullPath.startsWith('/login')) {
    const access_token = localStorage.getItem('access_token')
    if (access_token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
