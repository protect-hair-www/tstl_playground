<!--
 * @Author: hzheyuan
 * @Date: 2022-03-04 17:01:41
 * @LastEditTime: 2022-05-18 16:20:40
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\views\container\Vector.vue
-->
<template>
  <Space class="content vector" size="large" direction='vertical'>
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

    <linear :cntr="vecRefs"></linear>
  </Space>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Vector, advance, sort } from 'tstl'
import { IconPlus, IconDelete } from '@arco-design/web-vue/es/icon';
import { Notification, Divider, Space } from '@arco-design/web-vue';
import Linear from "@/components/charts/ArrayList.vue";

import AccessBtn from "@/components/AccessBtn.vue";
import PushModal from "@/components/PushModal.vue";
import InsertModal from "@/components/InsertModal.vue";
import EraseModal from "@/components/EraseModal.vue";
import { testAllIterators, traverseCntr, Person } from '@/helper'

const vecCntr: Vector<number> = new Vector<number>()
const vecRefs = ref<Vector<number>>(vecCntr);
let vec = vecRefs.value;

const onPushBack = (v: number) => {
  vec.push_back(v)
}

const onInsert = (v: { pos: number, val: number }) => {
  const pos = Number(v.pos)
  const val = Number(v.val)
  let begin = vec.begin()
  advance(begin, pos)
  vec.insert(begin, val)
}

const onErase = (v: { begin: number, end: number }) => {
  const first = Number(v.begin)
  const begin = vec.begin()
  const end = vec.begin()
  advance(begin, first)

  const last = Number(v.end)
  if (last) {
    advance(end, last)
  }
  if (last) {
    vec.erase(begin, end)
  } else {
    vec.erase(begin)
  }
}

const onPopBack = () => {
  vec.pop_back()
}

const onSort = () => {
  sort(vec.begin(), vec.end());
}

const getResultOf = (type: string) => {
  if (type === 'front') return vec.front()
  if (type === 'back') return vec.back()
  if (type === 'size') return vec.size()
  if (type === 'empty') return `${vec.empty()}`
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

const testObject = () => {
  // let vec: Vector<Person<string>> = new Vector<Person<string>>();
  let vec: Vector<string> = new Vector<string>();
  // 创建一个list容器
  ['nick', 'jack', 'kalai'].forEach(name => {
    // let ins: Person<string> = new Person<string>(name)
    vec.push_back(name)
  })

  const front = vec.front()
  // vec.resize()
  const b = vec.begin()
  // console.log(front.say())

  let c = new Array<Person<string>>();
  ['nick', 'jack', 'kalai'].forEach(name => {
    let ins = new Person<string>(name)
    c.push(ins)
  })

  let d: Vector<Person<string>> = new Vector<Person<string>>();
  // 创建一个list容器
  ['nick', 'jack', 'kalai'].forEach(name => {
    let ins: Person<string> = new Person<string>(name)
    d.push_back(ins)
  })
  let k = d.back()
  // k.say()
}

// test js primitive type
const orginArray = [1, 3, 5, 6, 7, 8, 2, 3, 6, 8, 9, 10, 11];
const testPrimitive = () => {
  for (let num of orginArray) {
    vec.push_back(num);
  }
}

const onReset = () => {
  vec.clear();
  for (let num of orginArray) {
    vec.push_back(num);
  }
}

onMounted(() => {
  testPrimitive()
})

</script>
<style lang="css" scoped>
</style>
