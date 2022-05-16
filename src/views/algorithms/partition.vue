<!--
 * @Author: hzheyuan
 * @Date: 2022-03-04 17:01:41
 * @LastEditTime: 2022-05-16 17:39:23
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\views\algorithms\partition.vue
-->
<template>
  <div class="Vector-test">
    <div class="op">
      <div>
        <label for="insert">push_back</label>
        <code>
          const bound = partition(vec.begin(), vec.end(), (v: number) => v % 2 === 1);
        </code>
      </div>
      <div>
        <button @click="onPartition">partition</button>
        <button @click="onStablePartition">stable_partition</button>
      </div>
    </div>
    <Chart type="Vector" :cntr="vecRefs"/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Vector, partition, stable_partition } from 'tstl'
import Chart from '@/components/chart.vue'
import { testAllIterators, traverseCntr,  Person} from '@/helper'

let vecCntr: Vector<number> = new Vector<number>()
let vecRefs = ref<Vector<number>>(vecCntr)
let vec = vecRefs.value

const onPartition = () => {
  const bound = partition(vec.begin(), vec.end(), (v: number) => v % 2 === 1)
}

const onStablePartition = () => {
  const bound = stable_partition(vec.begin(), vec.end(), (v: number) => v % 2 === 1)
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
  testPrimitive()
  // testObject()
}

onMounted(test)

</script>
<style lang="css" scoped>
</style>

