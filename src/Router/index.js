
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/View/HomeView.vue'
import ProductView from '@/components/View/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductView
  }

]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
