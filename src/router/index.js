import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/pharmacist-game',
    name: 'PharmacistGame',
    component: () => import('@/views/PharmacistGame')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('@/views/Result')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
