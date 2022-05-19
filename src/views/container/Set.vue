<template>
  <Space class="content rbtree" size="large" direction='vertical'>
    <Space class="modifiers" size='middle' direction='vertical'>

      <!-- Capacity -->
      <Space align="start">
        <!-- <Divider>loading fixed width</Divider> -->
        <AccessBtn @click="() => onCapacity('size')" text="size" />
        <AccessBtn @click="() => onCapacity('empty')" text="empty" />
      </Space>

      <!-- Element access -->
      <Space>
        <EraseModal @submit="onFind" title="查找" type="val" label2="查找" placeholder2="输入要查找元素的key" text="find" />
        <InsertModal @submit="onGetLowerBound" type="val" title="查询" text="lower_bound" />
        <InsertModal @submit="onGetUpperBound" type="val" title="查询" text="upper_bound" />
      </Space>

      <!-- Modifiers -->
      <Space>
        <InsertModal @submit="onInsert" title="插入" type="val" text="insert" />
        <EraseModal @submit="onErase" title="删除" type="val" label2="删除" placeholder2="输入要删除元素的key" text="erase"/>
      </Space>
    </Space>
    <TreeChart :size="opCnt" :cntr="state.cntr._t"></TreeChart>
  </Space>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch, computed } from 'vue'
import { Set, List, advance, distance, reverse } from 'tstl'
import { IconPlus, IconDelete } from '@arco-design/web-vue/es/icon'
import { Notification, Divider, Space } from '@arco-design/web-vue'
import { randomNum, testAllIterators, traverseCntr,  Person} from '@/helper'
import TreeChart from "@/components/charts/TreeLike.vue"

const opCnt = ref<number>(0)
const cntr = new Set<number, number>()
const state = reactive({cntr})

const onInsert = (form) => {
  const k = Number(form.val)
  const n = state.cntr.insert(k);
  opCnt.value++
}

const onErase = (form) => {
  const key = Number(form.end)
  state.cntr.erase(key);
  opCnt.value++
}

const onFind = () => {

}

const onGetUpperBound = (val) => {

}

const onGetLowerBound = (val) => {

}

const getRanddomTestData = (num: number) => {
  let c = num;
  const test = new Set();
  while (c >= 0) {
    test.add(randomNum(1, 1001));
    --c;
  }
  return Array.from(test);
}

const getResultOf = (type: string) => {
  if (type === 'size') return state.cntr.size
  if (type === 'empty') return `${state.cntr.empty}`
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

const test = () => {
  // const array = getRanddomTestData(100)
  const array = [11, 2, 14, 1, 7, 15, 5, 8, 4, 9, 12, 17, 10, 20, 22]
  array.forEach((key: number) => {
    state.cntr.insert(key, key)
  });
  opCnt.value++
}

onMounted(test)

</script>
<style lang="css" scoped>
</style>
