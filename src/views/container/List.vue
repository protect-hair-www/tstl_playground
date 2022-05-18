<!--
 * @Author: hzheyuan
 * @Date: 2022-03-04 17:01:41
 * @LastEditTime: 2022-05-18 17:32:57
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\views\container\List.vue
-->
<template>
  <Space class="content list" size="large" direction='vertical'>
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
        <AccessBtn @click="onPopFront" text="pop_front" icon="Minus" />
      </Space>

      <!-- Modifiers -->
      <Space>
        <PushModal @submit="onPushBack" text="push_back" icon="Plus" />
        <PushModal @submit="onPushFront" text="push_front" icon="Plus" />
        <InsertModal @submit="onInsert" title="插入" text="insert" icon="Plus" />
        <EraseModal @submit="onErase" title="删除" text="erase" icon="Minus" />
        <AccessBtn @click="onReset" text="reset" icon="Minus" />
        <AccessBtn @click="onSort" text="sort" icon="Minus" />
      </Space>
    </Space>

    <LinkList :cntr="listRefs"></LinkList>
  </Space>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { List, advance, distance } from 'tstl'
import { IconPlus, IconDelete } from '@arco-design/web-vue/es/icon';
import { Notification, Divider, Space } from '@arco-design/web-vue';
import LinkList from "@/components/charts/LinkList.vue";
import { testAllIterators, traverseCntr } from '@/helper'

const listCntr: List<number> = new List<number>();
const listRefs = ref<List<number>>(listCntr);
let list = listRefs.value;

const getResultOf = (type: string) => {
  if (type === 'front') return list.front()
  if (type === 'back') return list.back()
  if (type === 'size') return list.size()
  if (type === 'empty') return `${list.empty()}`
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

const onPopFront = () => {
  list.pop_front()
}

const onPopBack = () => {
  list.pop_back()
}

const onPushBack = (v: number) => {
  list.push_back(v)
}

const onPushFront = (v: number) => {
  list.push_front(v)
}

const onInsert = (v: { pos: number, val: number }) => {
  const pos = Number(v.pos)
  const val = Number(v.val)
  let begin = list.begin()
  advance(begin, pos)
  list.insert(begin, val)
}

const onErase = (v: { begin: number, end: number }) => {
  const first = Number(v.begin)
  const begin = list.begin()
  const end = list.begin()
  advance(begin, first)

  const last = Number(v.end)
  if (last) {
    advance(end, last)
  }
  if (last) {
    list.erase(begin, end)
  } else {
    list.erase(begin)
  }
}

const onSort = () => {
  sort(list.begin(), list.end());
}

const onReset = () => {
  list.clear();
  for (let num of orginArray) {
    list.push_back(num);
  }
}

const orginArray = [1, 3, 5, 6, 7, 8, 2, 3, 6, 8, 9, 10, 11];
const initContainer = () => {
  for (let num of orginArray) {
    list.push_back(num);
  }
}

onMounted(() => {
  initContainer()
})

</script>
<style lang="css" scoped>
</style>