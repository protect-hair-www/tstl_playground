<!--
 * @Author: hzheyuan
 * @Date: 2022-03-17 17:25:05
 * @LastEditTime: 2022-03-17 21:30:21
 * @LastEditors: hzheyuan
 * @Description: 
 * @FilePath: /tstl_playground/src/App.vue
-->
<template>
	<el-config-provider :locale="locale">
		<div id="nav">
			<router-link to="/">{{ $t("nav.home") }}</router-link> |
			<router-link to="/RBTree">{{ $t("nav.rbtree") }}</router-link> | 
			<router-link to="/Vector">{{ $t("nav.vector") }}</router-link> | 
			<router-link to="/List">{{ $t("nav.list") }}</router-link> | 
			<router-link to="/Deque">{{ $t("nav.deque") }}</router-link> | 
			<router-link to="/Queue">{{ $t("nav.queue") }}</router-link> | 
			<router-link to="/PriorityQueue">{{ $t("nav.priorityQueue") }}</router-link> | 
			<router-link to="/Stack">{{ $t("nav.stack") }}</router-link> | 
			<router-link to="/Set">{{ $t("nav.set") }}</router-link> | 
			<router-link to="/Map">{{ $t("nav.set") }}</router-link> | 
			<router-link to="/MultiSet">{{ $t("nav.multiSet") }}</router-link> | 
			<router-link to="/MultiMap">{{ $t("nav.multiMap") }}</router-link> | 
			<router-link to="/Heap">{{ $t("nav.heap") }}</router-link> | 
			<!-- <router-link to="/Algorithms">{{ $t("nav.Al") }}</router-link> |  -->
			<!-- <a href="src/pages/test.html" target="_blank">访问多入口</a> -->
		</div>
		<router-view />
	</el-config-provider>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { i18n } from "./i18n";
let locale = computed(() => (i18n.global.messages as any)![i18n.global.locale]);
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav { padding: 30px; }
#nav a { font-weight: bold; color: #2c3e50; }
#nav a.router-link-exact-active { color: #42b983; }
</style>
