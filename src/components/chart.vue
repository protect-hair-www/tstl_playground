<!--
 * @Author: hzheyuan
 * @Date: 2022-03-18 10:20:04
 * @LastEditTime: 2022-03-21 22:03:48
 * @LastEditors: hzheyuan
 * @Description: 
 * @FilePath: /tstl_playground/src/components/chart.vue
-->
<template>
    <div id="chart"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, reactive } from 'vue'
import { Chart } from '../lib/chart'
import { Deque } from 'tstl'
import { testAllIterators, traverseCntr } from '../helper'

let chart: any = ref(null)
const props = withDefaults(defineProps<{
    type: string;
    cntr: any;
}>(), {})

const drawVector = (cntr: any) => {
    chart.drawVector(cntr)
}

const test = () => {
    const { type, cntr } = props;
    console.log(props)
    if (cntr) {
        switch (type) {
            case 'vector':
                drawVector(cntr)
                break;

            default:
                break;
        }
    }
}

// const cntr = props.cntr
// const c = reactive(props.cntr);
    // console.log('xxx', c)
watch(props.cntr, (v, ov) => {
    console.log('xxx')
    console.log(v, ov)
}, {deep: true})

// watch(() => props.cntr, (first, second) => {
//     console.log('prop change', first, second)
// }, {deep: true})


onMounted(() => {
    chart = new Chart('chart')
    test()
})

</script>

