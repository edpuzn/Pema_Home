import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/hakkimizda',
    name: 'Hakkimizda',
    component: () => import('../views/Hakkimizda.vue')
  },
  {
    path: '/urunler',
    name: 'Urunler',
    component: () => import('../views/Urunler.vue')
  },
  {
    path: '/elite',
    name: 'Elite',
    component: () => import('../views/Elite.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router 