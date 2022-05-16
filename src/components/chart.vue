<template>
    <div id="chart"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Chart } from './chart'
import { testAllIterators, traverseCntr } from '@/helper'

let chart:any;
const props = withDefaults(defineProps<{
    type: string;
    opCnt: number;
    cntr: any;
}>(), {opCnt: 0})

const draw = (type: string, cntr: any) => {
    if(type === 'Vector' || type === 'Deque' || type === "Queue" || type === 'Stack') {
        chart.drawVector(cntr)
    }
    if(type === 'RBTree' || type === 'Set' || type === 'Map' || type === "MultiSet" || type === "MultiMap") {
        chart.drawTree(cntr)
    }
    if(type === 'List') {
        chart.drawList(cntr)
    }
    if(type === 'Heap' || type === "PriorityQueue") {
        chart.drawHeap(cntr)
    }
}

watch(() => props.cntr, (first, second) => {
    console.log('watch draw type', props.type)
    draw(props.type, props.cntr)
}, {deep: true})

watch(() => props.opCnt, (first, second) => {
    console.log('watch draw type of associative', props.type)
    const { type, cntr } = props;
    if(type === 'RBTree') {
        draw(type, cntr)
    }
    if(type === 'Set' || type === 'Map' || type === "MultiSet" || type === "MultiMap") {
        draw(props.type, props.cntr._t)
    }
}, {deep: true})

// watch(() => ct, (first, second) => {
//     console.log('watch', props.type)
//     draw(props.type, props.cntr)
// }, {deep: true})


onMounted(() => {
    chart = new Chart('chart')
})

</script>

<style lang="css" scoped>
#chart {
    width: 80%;
    margin: 0 auto;
    height: 500px;
}
</style>

