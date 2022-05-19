<!--
 * @Author: hzheyuan
 * @Date: 2022-03-04 17:01:41
 * @LastEditTime: 2022-05-19 15:29:06
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\views\container\Deque.vue
-->
<template>
  <Space class="content deque" size="large" direction='vertical'>

    <Space class="modifiers" size='middle' direction='vertical'>
      <!-- Capacity -->
      <Space align="start">
        <!-- <Divider>loading fixed width</Divider> -->
        <AccessBtn @click="() => onCapacity('size')" text="size" />
        <AccessBtn @click="() => onCapacity('empty')" text="empty" />
      </Space>

      <!-- Element access -->
      <Space>
        <!-- <Divider>loading fixed width</Divider> -->
        <AccessBtn @click="() => onAccess('front')" text="front" />
        <AccessBtn @click="() => onAccess('back')" text="back" />
        <AccessBtn @click="onPopBack" text="pop_back" icon="Minus" />
      </Space>

      <!-- Modifiers -->
      <Space>
        <PushModal @submit="onPushBack" text="push_back" icon="Plus" />
        <InsertModal @submit="onInsert" title="插入" text="insert" icon="Plus" />
        <EraseModal @submit="onErase" title="删除" text="erase" icon="Minus" />
        <AccessBtn @click="onReset" text="reset" icon="Minus" />
        <AccessBtn @click="onSort" text="sort" icon="Minus" />
      </Space>

    </Space>
    <Linear :cntr="deqRefs" />
  </Space>
</template>

<script setup lang="ts">
import Chart from '@/components/chart.vue'
import { ref, onMounted } from 'vue'
import { Deque } from 'tstl'
import { testAllIterators, traverseCntr, Person } from '@/helper'

import Linear from "@/components/charts/ArrayList.vue";
import AccessBtn from "@/components/AccessBtn.vue";
import PushModal from "@/components/PushModal.vue";
import InsertModal from "@/components/InsertModal.vue";
import EraseModal from "@/components/EraseModal.vue";
import { Notification, Divider, Space } from '@arco-design/web-vue';

const deqCntr: Deque<number> = new Deque<number>()
const deqRefs = ref<Deque<number>>(deqCntr);
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

const orginArray = [1, 3, 5, 6, 7, 8, 2, 3, 6, 8, 9, 10, 11];
const initContainer = () => {
  for (let num of orginArray) {
    deq.push_back(num);
  }
}

const onReset = () => {
  deq.clear();
  for (let num of orginArray) {
    vec.push_back(num);
  }
}

const test = () => {
  initContainer()
}

onMounted(test)

</script>
<style lang="css" scoped>
</style>

