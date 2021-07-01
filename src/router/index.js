import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/home/Home.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('views/cart/Cart.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('views/category/Category.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('views/profile/Profile.vue')
  },
  {
    path: '/tabbar',
    name: 'TabBar',
    component: () => import('components/common/tabbar/TabBar.vue')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
