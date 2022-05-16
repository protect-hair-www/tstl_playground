/*
 * @Author: kalai
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from "./store";

// import "./assets/css/setting.css"
import "./assets/css/global.css"

import { i18n } from './i18n';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app')

export default app;
