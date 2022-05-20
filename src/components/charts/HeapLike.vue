<!--
 * @Author: kalai
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\components\charts\HeapLike.vue
-->
<template>
  <div class="chart-container">
    <div id="chart" ref="chartRef"></div>
  </div>
</template>

<script setup lang="ts">
import { _RBTree } from 'tstl'
import * as echarts from 'echarts/core';
import { ref, onMounted, watch } from 'vue'
import { testAllIterators, traverseCntr } from '@/helper'
import { ECOption } from './base'

const getData = (cntr: any) => {
  const n = cntr.size()
  const dfs = (idx: any) => {
    if (idx >= n) return { name: 'nil', itemStyle: { color: '#000' }, children: [] };
    let data: any = {
      name: `${cntr.at(idx)}`,
      itemStyle: {
        color: '#f00'
      },
      children: []
    };
    let left = (idx * 2) + 1, right = 2 * idx + 2;
    let ld: any = dfs(left); data.children.push(ld);
    let rd = dfs(right); data.children.push(rd);
    return data;
  }
  let data = dfs(0)
  return data
}

const getOption = (cntr: any): ECOption => {
  const data = getData(cntr)
  let option: ECOption = {
    series: [
      {
        type: 'tree',
        data: [data],
        left: '2%',
        right: '2%',
        top: '8%',
        bottom: '20%',
        symbolSize: 32,
        symbol: 'circle',
        orient: 'vertical',
        initialTreeDepth: -1,
        label: {
          position: 'inside',
          verticalAlign: 'middle',
          align: 'middle',
          fontSize: 14
        },
        lineStyle: {
          curveness: 0
        },
        leaves: {
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          }
        },
        animationDurationUpdate: 750
      }
    ]
  }
  return option
}

const chartRef = ref(null)
let chart = ref(null)

const draw = (cntr) => {
  const option: ECOption = getOption(props.cntr);
  chart.setOption(option)
}

const props = withDefaults(defineProps<{
  size: number;
  cntr: any;
}>(), { size: 0 })

onMounted(() => {
  const chartDom = chartRef.value;
  chart = echarts.init(chartDom);
  draw(props.cntr)
})

watch(() => props.cntr, (first, second) => {
  // console.log('watch draw type', props.size)
  draw(props.cntr)
}, { deep: true })

watch(() => props.size, (first, second) => {
  // console.log('watch draw type of associative', props.size)
  draw(props.cntr)
  // traverseCntr(props.cntr)
}, { deep: true })

</script>

<style lang="css" scoped>
</style>


