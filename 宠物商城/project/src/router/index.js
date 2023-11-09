import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Addshops from '../views/Addshops.vue'

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/addshops',//默认路径
			component: Addshops//设置当前路径要跳转的页面
		}
	]
})
