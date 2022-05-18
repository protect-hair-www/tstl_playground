<!--
 * @Author: kalai
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\components\charts\LinkList.vue
-->
<template>
  <div class="chart-container">
    <div id="chart" ref="chartRef"></div>
  </div>
</template>

<script setup lang="ts">
import { List } from 'tstl'
import * as echarts from 'echarts/core';
import { ref, onMounted, watch } from 'vue'
import { testAllIterators, traverseCntr } from '@/helper'
import { ECOption } from './base'

const getData = <T>(list: any) => {
  let data = [], links = []
  // 处理header部分
  data.push({ name: 'header', value: 'header' })

  let pre = -1, idx = 0, next = 0;
  let cur = list.begin()
  while (cur.hasNext()) {
    data.push({ name: `${cur.getValue()}-${idx}`, value: cur.getValue() })
    pre++; idx++;
    cur.next();

    links.push({
      source: pre,
      target: idx,
      lineStyle: {
        curveness: 0.05
      }
    })
  }

  cur = list.begin()
  idx = -1; next = 0;
  while (cur.hasNext()) {
    cur.next()
    idx++; next++;
    links.push({
      source: next,
      target: idx,
      lineStyle: {
        curveness: -0.05
      }
    })
  }

  links.push({
    source: 'header',
    target: list.size(),
    lineStyle: {
      curveness: -0.05
    }
  }, {
    source: list.size(),
    target: 'header',
    lineStyle: {
      curveness: 0.05
    }
  })

  return { data, links }
}

const getOption = <T>(list: List<T>): ECOption => {
  const { data, links } = getData(list)
  let option: ECOption = {
    title: {
      text: ''
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'circular',
        symbolSize: 50,
        roam: true,
        label: {
          show: true,
          formatter: '{c}'
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20
        },
        data: data,
        links: links,
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        }
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
