/*
 * @Author: kalai
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Components from "../views/Components.vue";
import Home from "../views/Home.vue";
import Index from "../App.vue";

function getRoutes() {
	const { routes } = loadRouters();
	return routes;
}

const router = createRouter({
	history: createWebHashHistory(),
	routes: getRoutes()
})

// router.beforeEach((to, from, next) => {
// 	next()
// })

export default router;

/** 以下代码不要修改 */
function loadRouters() {

	const routes: RouteRecordRaw[] = [];
	// 入口
	routes.push({ path: '/', component: Home })
	// 首页
	routes.push({ path: '/home', component: Home })
	// 组件路由
	const context = import.meta.globEager("../views/**/*.vue");
	const children: any [] = [];
	Object.keys(context).forEach((key: any) => {
		if (key === "./index.ts") return;
		if (key === "../views/Components.vue") return;
		let name = key.replace(/(\.\.\/views\/|\.vue)/g, '');
		let path = "/" + name.toLowerCase();
		if (name === "Index") path = "/";
		children.push({
			path,
			component: () => import(`../views/${name}.vue`)
		})
	});
	// console.log(children)
	routes.push({ path: '/components', component: Components, children: children})

	return { context, routes }
}
