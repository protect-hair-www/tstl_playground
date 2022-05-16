<!--
 * @Author: hzheyuan
 * @Date: 2022-03-04 17:01:41
 * @LastEditTime: 2022-05-16 17:36:55
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\views\adapter\Queue.vue
-->
<template>
  <div class="queue-test">
    <div class="op">
      <div>
        <label for="insert">push</label>
        <input type="number" @keyup.enter="onPush" />
      </div>
      <div>
        <button @click="onGetFront">front</button>
        <button @click="onGetBack">back</button>
        <button @click="onPop">pop</button>
      </div>
    </div>
    <Chart type="Queue" :cntr="qRefs"/>
  </div>
</template>

<script setup lang="ts">
import Chart from '@/components/chart.vue'
import { ref, onMounted } from 'vue'
import { testAllIterators, traverseCntr } from '@/helper'
import { Queue } from 'tstl'

let qCntr: Queue<string> = new Queue<string>()
let qRefs = ref<Queue<string>>(qCntr);
let q = qRefs.value;

const onPush = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = target.value
  q.push(v)
}

const onPop = () => {
  q.pop()
}

const onGetFront = () => {
  console.log(q.front())
}

const onGetBack = () => {
  console.log(q.back())
}

const test = () => {
  q.push('1')
  q.push('2')
  q.push('3')
  q.push('4')
  q.push('5')
  console.log(q)

  // 可视化  
  // chart.drawList(list)

  console.log('=====Iterator=====')
  // traverseCntr(q, 'iterator')

  console.log('=====Capacity=====')
  console.log('empty', q.empty())
  console.log('size', q.size())

  console.log('=====Element Access=====')
  console.log('front', q.front())
  console.log('back', q.back())

  console.log('=====Modifiers=====')
}

onMounted(test)

</script>
<style lang="css" scoped>
</style>


