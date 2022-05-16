<!--
 * @Author: hzheyuan
 * @Date: 2022-03-04 17:01:41
 * @LastEditTime: 2022-05-16 17:37:12
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\views\adapter\Stack.vue
-->
<template>
  <div class="stack-test">
    <div class="op">
      <div>
        <label for="insert">push</label>
        <input type="number" @keyup.enter="onPush" />
      </div>
      <div>
        <button @click="onGetTop">top</button>
        <button @click="onPop">pop</button>
      </div>
    </div>
    <Chart type="Stack" :cntr="sRefs"/>
  </div>
</template>

<script setup lang="ts">
import Chart from '@/components/chart.vue'
import { ref, onMounted } from 'vue'
import { Stack } from 'tstl'
import { testAllIterators, traverseCntr } from '@/helper'

let sCntr: Stack<string> = new Stack<string>()
let sRefs = ref<Stack<string>>(sCntr);
let s = sRefs.value;

const onPush = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = target.value
  s.push(v)
}

const onPop = () => {
  s.pop()
}

const onGetTop = () => {
  console.log(s.top())
}

const test = () => {
  s.push('1')
  s.push('2')
  s.push('3')
  s.push('4')
  s.push('5')

  console.log('=====Iterator=====')
  // traverseCntr(q, 'iterator')

  console.log('=====Capacity=====')
  console.log('empty', s.empty())
  console.log('size', s.size())

  console.log('=====Element Access=====')
  console.log('front', s.top())
  console.log('=====Modifiers=====')
}

onMounted(test)

</script>
<style lang="css" scoped>
</style>


