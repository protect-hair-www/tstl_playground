<!--
 * @Author: hzheyuan
 * @Date: 2022-03-12 12:10:21
 * @LastEditTime: 2022-03-22 15:18:32
 * @LastEditors: hzheyuan
 * @Description: priority queue
 * @FilePath: \tstl_playground\src\views\PriorityQueue.vue
-->
<template>
    <div class="priorityqueue-test">
        <div class="op">
            <div>
                <label for="insert">push_heap</label>
                <input type="number" @keyup.enter="onPush" />
            </div>
            <div>
                <button @click="onPop">pop</button>
                <button @click="onGetTop">top</button>
            </div>
        </div>
        <Chart type="PriorityQueue" :cntr="pqRefs"/>
    </div>
</template>

<script setup lang="ts">
import Chart from '../components/chart.vue'
import { ref, onMounted, queuePostFlushCb } from 'vue'
import { Vector, PriorityQueue, less, greater } from 'tstl'
import { testAllIterators, traverseCntr } from '../helper'

let pqCntr = new PriorityQueue<number>(Vector, less, true);
let pqRefs = ref<PriorityQueue<number>>(pqCntr);
let pq = pqRefs.value;

const onGetTop = () => {
    console.log(pq.top())
}

const onPush = (e: Event) => {
    const target = (<HTMLInputElement>e.target)
    const v = Number(target.value)
    pq.push(v)
    console.log(pq.top(), 'top')
}

const onPop = () => {
    console.log(pq.top(), 'pop')
    pq.pop()
}

const test = () => {
    pq.push(10)
    pq.push(20)
    pq.push(30)
    pq.push(5)
    pq.push(15)

    console.log(pq.top(), 'top')
    pq.push(50)
    console.log('push 50')
    console.log(pq.top(), 'top')
    pq.push(19)
    console.log('push 19')
    console.log(pq.top(), 'top')
    console.log('pop all of pq: ')
    // while(pq.size() > 0) {
    //     console.log(pq.top());
    //     pq.pop()
    // }

    // draw the chart
    // chart.drawHeap(pq)
}

onMounted(test)

</script>
<style lang="css" scoped>
</style>

