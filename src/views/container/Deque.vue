<!--
 * @Author: hzheyuan
 * @Date: 2022-03-04 17:01:41
 * @LastEditTime: 2022-05-16 17:39:07
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\views\container\Deque.vue
-->
<template>
  <div class="Deque-test">
    <div class="op">
      <div>
        <label for="insert">push_back</label>
        <input type="number" @keyup.enter="onPushBack" />
      </div>

      <div>
        <label for="insert">push_front</label>
        <input type="number" @keyup.enter="onPushFront" />
      </div>

      <div>
        <button @click="onGetFront">front</button>
        <button @click="onGetBack">back</button>
      </div>

      <div>
        <button @click="onPopFront">pop_front</button>
        <button @click="onPopBack">pop_back</button>
      </div>
    </div>
    <Chart type="Deque" :cntr="deqRefs" />
  </div>
</template>

<script setup lang="ts">
import Chart from '@/components/chart.vue'
import { ref, onMounted } from 'vue'
import { Deque } from 'tstl'
import { testAllIterators, traverseCntr } from '@/helper'

const deqCntr: Deque<string> = new Deque<string>()
const deqRefs = ref<Deque<string>>(deqCntr);
let deq = deqRefs.value;

const onPushBack = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = target.value
  deq.push_back(v)
}

const onPushFront = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = target.value
  deq.push_front(v)
}

const onGetFront = () => {
  console.log(deq.front())
}

const onGetBack = () => {
  console.log(deq.back())
}

const onPopFront = () => {
  deq.pop_front()
}

const onPopBack = () => {
  deq.pop_back()
}

const test = () => {
  deq.push_back('1')
  deq.push_back('2')
  deq.push_back('3')
  deq.push_back('4')
  deq.push_back('5')
  console.log(deq)

  // 可视化  
  // chart.drawList(list)

  // console.log('=====Iterator=====')
  // traverseCntr(deq, 'iterator')
  // testAllIterators(deq)

  // console.log('=====Capacity=====')
  // console.log('empty', deq.empty())
  // console.log('size', deq.size())

  // console.log('=====Element Access=====')
  // console.log('front', deq.front())
  // console.log('back', deq.back())

  // console.log('=====Modifiers=====')
  // let itr = deq.begin()
  // itr.next()
  // deq.insert(itr, '5')
  // traverseCntr(deq, 'begin next insert 5')

  // deq.insert(deq.end(), '2')
  // traverseCntr(deq, 'insert at en with 2')

  // itr = deq.begin()
  // itr.next(); itr.next()
  // deq.insert(itr, 5, '7')
  // traverseCntr(deq, 'insert at begin.next with 5 7')

  // itr = deq.begin()
  // itr.next()
  // deq.insert(itr, deq.begin(), deq.end())
  // traverseCntr(deq, 'inset a range of iterator')

  // deq.erase(deq.begin())
  // traverseCntr(deq, 'erase begin')

  // deq.resize(10, '1')
  // traverseCntr(deq, 'resize of 10 1')
  // deq.resize(15, '1')
  // traverseCntr(deq, 'resize of 15 1')

  // deq.resize(5, '5')
  // traverseCntr(deq, 'resize 5 5')

  // console.log('=====Operations=====')
  // deq.assign(6, '5')
  // traverseCntr(deq, 'assign 6 5')

  // let arr = ['1', '2', '4', '3']
  // deq.assign(arr)
  // traverseCntr(deq, 'assign iterable cntr')

  // let deq2 = new Deque<string>();
  // deq2.push_back('3')
  // deq2.push_back('5')
  // deq2.push_back('2')
  // deq.assign(deq2.begin(), deq2.end())
  // traverseCntr(deq, 'assign with iterator')

  // deq2.clear()
  // deq2.push_back('8')
  // deq2.push_back('9')
  // deq2.push_back('10')
  // deq.swap(deq2)
  // traverseCntr(deq, 'swap two deq')
  // traverseCntr(deq2, 'swap two deq')

  // deq.clear()
  // traverseCntr(deq, 'clear')

  // deq.emplace<String>(deq.begin(), String, '3')
  // deq.emplace_back<String>(String, '5')
  // traverseCntr(deq, 'emplace')
}

onMounted(test)

</script>
<style lang="css" scoped>
</style>

