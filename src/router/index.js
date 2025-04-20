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
    path: '/iletisim',
    name: 'İletisim',
    component: () => import('../views/İletisim.vue')
  },
  {
    path: '/urunler',
    name: 'Urunler',
    component: () => import('../views/Urunler.vue')
  },
  {
    path: '/premium',
    name: 'Premium',
    component: () => import('../views/Premium.vue')
  },
  {
    path: '/elite',
    name: 'Elite',
    component: () => import('../views/Elite.vue')
  },
  {
    path: '/star',
    name: 'Star',
    component: () => import('../views/Star.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router 