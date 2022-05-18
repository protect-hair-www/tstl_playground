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
import '@arco-design/web-vue/dist/arco.css';
import "./assets/css/global.css"
import { i18n } from './i18n';
import * as echarts from 'echarts/core';
import {
  BarChart,
  LineChart,
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app')

export default app;
