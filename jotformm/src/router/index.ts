import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Cart from '../views/Cart.vue'
import Favorites from '../views/Favorites.vue'
import OrderSuccess from '../views/OrderSuccess.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'productDetail',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites
  },
  {
    path: '/order-success',
    name: 'orderSuccess',
    component: OrderSuccess,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
