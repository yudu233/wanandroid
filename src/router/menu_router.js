import Home from '../views/home/Home.vue'
import HotArticle from '../views/home/HotArticle.vue'
import HotProject from '../views/home/HotProject.vue'

export default [
 {
  	path: '/home',
  	component: Home,
	name:"首页",
  	children: [{
  		path: 'hotArticle',
  		component: HotArticle
  	}, {
  		path: 'hotProject',
  		component: HotProject
  	}]
  },{
	  path : '/square',
	  component : Home,
	  name:'广场'
  },{
	  path : '/navigation',
	  component : Home,
	  name:'导航'
  },{
	  path : '/faq',
	  component : Home,
	  name:'问答'
  },{
	  path : '/system',
	  component : Home,
	  name:'体系'
  },{
	  path : '/project',
	  component : Home,
	  name:'项目'
  },{
	  path : '/officialAccounts',
	  component : Home,
	  name:'公众号'
  },{
	  path : '/projectClassify',
	  component : Home,
	  name:'项目分类'
  },{
	  path : '/tools',
	  component : Home,
	  name:'工具'
  },{
	  path : '/collection',
	  component : Home,
	  name:'收藏'
  }
]
