import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import WelcomePage from '../components/WelcomePage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage
  },
  // {
  //   path: '/dog',
  //   name: 'FavoriteDog',
  //   component: FavoriteDog
  // }
  {
    path: '/favorite',
    component: () => import('@/views/FavoriteDog.vue'),
  },
  {
    path: '/saved-books',
    component: () => import('@/views/SavedBooks.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
