import Vue from 'vue'
import VueRouter from 'vue-router'

import menuRouter from './menu_router.js'
import Index from '../views/Index.vue'
import Home from '../views/home/Home.vue'
Vue.use(VueRouter)

const baseRoutes = [];

const main_router = [
	{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index,
	redirect: 'index/home',
	children: menuRouter
  }
]
// const routes = [{
// 	path: '/',
// 	redirect: '/index',
// }, {
// 	path: '/index',
// 	component: Home,
// 	children: [{
// 		path: 'hotArticle',
// 		component: HotArticle
// 	}, {
// 		path: 'hotProject',
// 		component: HotProject
// 	}]
// }]

// const routes = baseRoutes.concat(menuRouter,main_router);

const router = new VueRouter({
	routes:main_router,
	mode: 'history'
})

console.log(router);
export default router
