import { createRouter, createWebHashHistory } from 'vue-router'

import home from '../views/home.vue'
import lobby from '../views/lobby.vue'
import about from '../views/about.vue'
import codeBlock from '../views/code-block.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/code',
      name: 'app',
      component: lobby,
    },
    {
      path: '/code/:id',
      name: 'code-block',
      component: codeBlock,
    },
  ],
})

export default router
