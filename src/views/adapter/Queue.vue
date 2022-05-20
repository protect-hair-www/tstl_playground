<!--
 * @Author: kalai
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\views\adapter\Queue.vue
-->
<template>
  <Space class="content rbtree" size="large" direction='vertical'>
    <Space class="modifiers" size='middle' direction='vertical'>

      <!-- Modifiers -->
      <Space>
        <AccessBtn @click="() => onCapacity('size')" text="size" />
        <AccessBtn @click="() => onCapacity('empty')" text="empty" />

        <AccessBtn @click="() => onAccess('top')" text="top" />
        <InsertModal @submit="onPush" title="push" type="val" text="push" />
        <AccessBtn @click="onPop" text="pop" />
        <AccessBtn @click="onReset" text="reset"/>
      </Space>
    </Space>
    <HeapChart :size="opCnt" :cntr="state.cntr"></HeapChart>
  </Space>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch, computed } from 'vue'
import { PriorityQueue, Queue, less, advance, distance, reverse } from 'tstl'
import { IconPlus, IconDelete } from '@arco-design/web-vue/es/icon'
import { Notification, Divider, Space } from '@arco-design/web-vue'
import { randomNum, testAllIterators, traverseCntr,  Person} from '@/helper'
import HeapChart from "@/components/charts/HeapLike.vue"

const opCnt = ref<number>(0)
const cntr = new Queue<number>();
const state = reactive({cntr})

const onPush = (form) => {
  const k = Number(form.val)
  const n = state.cntr.push(k);
  opCnt.value++
}

const onPop = () => {
  state.cntr.pop();
  opCnt.value++
}

const getResultOf = (type: string) => {
  if (type === 'size') return `${state.cntr.size()}`
  if (type === 'empty') return `${state.cntr.empty()}`
  if (type === 'top') return `${state.cntr.top()}`
}

const onCapacity = (type: string) => {
  const res = getResultOf(type);
  Notification.info({
    title: `Capacity of the container`,
    content: `The Result is ${res}`
  })
}

const onAccess = (type: string) => {
  const res = getResultOf(type);
  Notification.info({
    title: `Access element of ${type}`,
    content: `The Result is ${res}`
  })
}

const onReset = () => {
    // console.log(state.cntr)
  state.cntr.cntr.clear();
  for (let num of orginArray) {
    state.cntr.push(num)
  }
}

const orginArray = [1, 3, 5, 6, 7, 8, 2, 3, 6, 8, 9, 10, 11];
const initContainer = () => {
  for (let num of orginArray) {
    state.cntr.push(num)
  }
}

onMounted(initContainer)

</script>
<style lang="css" scoped>
</style>

