import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/home/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
	path: '/index',
	component: Index
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
