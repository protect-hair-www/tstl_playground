<!--
 * @Author: hzheyuan
 * @Date: 2022-03-04 17:01:41
 * @LastEditTime: 2022-04-05 20:14:34
 * @LastEditors: hzheyuan
 * @Description: 
 * @FilePath: /tstl_playground/src/views/ArrayList.vue
-->
<template>
  <div class="Vector-test">
    <div class="op">
      <div>
        <label for="insert">push_back</label>
        <input type="number" @keyup.enter="onPushBack" />
      </div>

      <div>
        <button @click="onGetFront">front</button>
        <button @click="onGetBack">back</button>
      </div>

      <div>
        <button @click="onPopBack">pop_back</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ArrayList } from 'tstl'
import { testAllIterators, traverseCntr,  Person} from '../helper'
import Chart from '../components/chart.vue'

let arrayListCntr: ArrayList<string> = new ArrayList<string>()
let arrayListRefs = ref<ArrayList<string>>(arrayListCntr);
let arrayList = arrayListRefs.value;

const onPushBack = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = target.value
  arrayList.push_back(v)
}

const onPopBack = () => {
  arrayList.pop_back()
}

const onGetFront = () => {
  console.log(arrayList.front())
}

const onGetBack = () => {
  console.log(arrayList.back())
}

// test js primitive type
const testPrimitive = () => {
  arrayList.add('1')
  arrayList.add('2')
  arrayList.add('3')
  arrayList.add('4')
  arrayList.add('5')

  console.log('=====Iterator=====')
  console.log(arrayList)
  let itr = arrayList.iterator
  console.log(itr, itr.hasNext())
  while(itr.hasNext()) {
      console.log(itr.next())
  }
  console.log(itr.hasNext())
  // vec.emplace<String>(vec.begin(), String, '3')
  // vec.emplace_back<String>(String, '5')
  // traverseCntr(vec, 'emplace')
}

const test = () => {
  // 可视化整颗树
  //   chart = new Chart('list-box')
  //   chart.drawList(list)
  // testObject()
  testPrimitive()
}

onMounted(test)

</script>
<style lang="css" scoped>
</style>

