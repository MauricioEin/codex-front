import { createRouter, createWebHashHistory } from 'vue-router'

import home from '../views/home.vue'
import lobby from '../views/lobby.vue'
import about from '../views/about.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/code',
      name: 'app',
      component: lobby,
    },

    {
      path: '/about',
      name: 'about',
      component: about,
    },
  ],
})

export default router
