<!--
 * @Author: hzheyuan
 * @Date: 2022-03-04 17:01:41
 * @LastEditTime: 2022-05-17 18:14:31
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\views\container\Vector.vue
-->
<template>
  <div class="Vector-test">
    <div class="op">
      <a-space>
        <AccessBtn @click="() => onAccess('front')" text="front"/>
        <AccessBtn @click="() => onAccess('back')" text="back"/>
        <AccessBtn @click="onPopBack" text="popBack" icon="Minus"/>
        <PushModal @submit="onPushBack" />
        <InsertModal @submit="onInsert" />
      </a-space>
    </div>
    <Chart type="Vector" :cntr="vecRefs"/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Vector, advance } from 'tstl'
import { IconPlus, IconDelete } from '@arco-design/web-vue/es/icon';
import { Notification } from '@arco-design/web-vue';

import Chart from '@/components/chart.vue'
import PushModal from "@/components/PushModal.vue";
import InsertModal from "@/components/InsertModal.vue";
import AccessBtn from "@/components/AccessBtn.vue";
import { testAllIterators, traverseCntr,  Person} from '@/helper'

const vecCntr: Vector<number> = new Vector<number>()
const vecRefs = ref<Vector<number>>(vecCntr);
let vec = vecRefs.value;

const onPushBack = (v: any) => {
  vec.push_back(v)
}

const onInsert = (v: any) => {
  const pos = Number(v.pos)
  const val = Number(v.val)
  let begin = vec.begin();
  advance(begin, pos);
  console.log(begin, pos, val);
  vec.insert(begin, val);
}

const onPopBack = () => {
  vec.pop_back()
}

const getResultOf = (type: string) => {
  if(type === 'front') return vec.front();
  if(type === 'back') return vec.back();
}

const onAccess = (type: string) => {
  const res = getResultOf(type);
  Notification.info({
    title: `Access element of ${type}`,
    content:`The Result is ${res}`
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

  let d:Vector<Person<string>> = new Vector<Person<string>>();
  // 创建一个list容器
  ['nick', 'jack', 'kalai'].forEach(name => {
    let ins: Person<string> = new Person<string>(name)
    d.push_back(ins)
  })
  let k = d.back()
  // k.say()
}

// test js primitive type
const orginArray = [1, 2, 3, 3, 5, 6, 6, 7, 8, 8, 9, 10, 11];
const testPrimitive = () => {
  for(let num of orginArray) {
    vec.push_back(num);
  }
}

const test = () => {
  // testObject()
  testPrimitive()
}

onMounted(test)

</script>
<style lang="css" scoped>
</style>
