<!--
 * @Author: kalai
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\components\charts\ArrayList.vue
-->
<template>
  <div class="chart-container">
    <div id="chart" ref="chartRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core';
import { ref, onMounted, watch } from 'vue'
import { testAllIterators, traverseCntr } from '@/helper'
import { ECOption } from './base'

const getVectorData = <T>(vec: Vector<T>) => {
  // console.log(vec)
  let len = vec.size(), i: number = 0;
  let indexs = [], data: any[] = []
  while (i < len) {
    indexs.push(i);
    let v = vec.at(i);
    let s = {
      name: v,
      value: 1,
      label: {
        show: true,
        // with: 100,
        formatter: '{b}'
      },
      emphasis: {
        focus: 'series'
      }
    };
    data.push(s)
    i++;
  }
  return { data, indexs }
}

const getOption = <T>(vec: Vector<T>): ECOption => {
  const { data, indexs } = getVectorData(vec);
  let option: ECOption = {
    xAxis: {
      axisTick: {
        show: false
      },
      data: indexs
    },
    grid: {
      // left: '0',
      height: '12%',
    },
    yAxis: {
      show: false
    },
    series: [{
      name: "Vector",
      type: "bar",
      barCategoryGap: '0%',
      // barWidth: '30',
      data: data,
    }]
  };
  return option
}

const chartRef = ref(null)
let chart = ref(null)

const draw = (cntr) => {
  const option: ECOption = getOption(props.cntr);
  chart.setOption(option)
}

const props = withDefaults(defineProps<{
  opCnt: number;
  cntr: any;
}>(), { opCnt: 0 })

onMounted(() => {
  const chartDom = chartRef.value; 
  chart = echarts.init(chartDom);
  draw(props.cntr)
})

watch(() => props.cntr, (first, second) => {
  console.log('watch draw type', props.type)
  draw(props.cntr)
}, { deep: true })

watch(() => props.opCnt, (first, second) => {
  console.log('watch draw type of associative', props.type)
}, { deep: true })

</script>

<style lang="css" scoped>
</style>


