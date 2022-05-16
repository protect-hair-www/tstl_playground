<!--
 * @Author: hzheyuan
 * @Date: 2022-03-12 12:10:21
 * @LastEditTime: 2022-05-16 17:39:45
 * @LastEditors: kalai
 * @Description: heap
 * @FilePath: \tstl_playground\src\views\algorithms\Heap.vue
-->
<template>
    <div class="heap-test">
        <div class="op">
            <div>
                <label for="insert">push_heap</label>
                <input type="number" @keyup.enter="onPushHeap" />
            </div>
            <div>
                <button @click="onPopHeap">pop_heap</button>
                <button @click="onSortHeap">sort_heap</button>
                <button @click="onGetFront">front</button>
                <button @click="onGetBack">back</button>
            </div>
        </div>
        <Chart type="Heap" :cntr="vecRefs"/>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Vector, makeHeap, popHeap, pushHeap, sortHeap, isHeap, isHeapUntil } from 'tstl'
import Chart from '@/components/chart.vue'
import { testAllIterators, traverseCntr } from '@/helper'

let vecCntr: Vector<number> = new Vector<number>()
let vecRefs = ref<Vector<number>>(vecCntr);
let vec = vecRefs.value;

const onGetFront = () => {
    console.log(vec.front())
}

const onGetBack = () => {
    console.log(vec.back())
}

const onPushHeap = (e: Event) => {
    const target = (<HTMLInputElement>e.target)
    const v = Number(target.value)
    vec.push_back(v)
    pushHeap(vec.begin(), vec.end())
    traverseCntr(vec, `push heap ${v}`)
}

const onPopHeap = () => {
    let popValue = popHeap(vec.begin(), vec.end())
    vec.pop_back()
    console.log(vec);
    traverseCntr(vec, `pop heap ${popValue}`);
}

const onSortHeap = () => {
    sortHeap(vec.begin(), vec.end());
    traverseCntr(vec, `heap sort`);
} 

const test = () => {
    // vec.push_back(10)
    // vec.push_back(20)
    // vec.push_back(30)
    // vec.push_back(5)
    // vec.push_back(15)
    const arr = [1, 8, 3, 6, 5, 7, 2, 4, 10, 9];
    for(let n of arr) {
        vec.push_back(n);
    }
    traverseCntr(vec, 'vec')

    makeHeap(vec.begin(), vec.end())
    traverseCntr(vec, 'make_heap with [10, 20, 30, 5, 15]');

    // makeHeap(vec.begin(), vec.end())

    // vec.push_back(100)
    // pushHeap(vec.begin(), vec.end())
    // traverseCntr(vec, 'push heap 100')

    // let popValue = popHeap(vec.begin(), vec.end())
    // vec.pop_back() // origin container element shoud remove 
    // traverseCntr(vec, `pop heap ${popValue}`);
}

onMounted(test)

</script>
<style lang="css" scoped>
</style>

