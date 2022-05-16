<!--
 * @Author: hzheyuan
 * @Date: 2022-03-04 17:01:41
 * @LastEditTime: 2022-05-16 17:39:32
 * @LastEditors: kalai
 * @Description: playground for none modifying algorithms
 * @FilePath: \tstl_playground\src\views\algorithms\NoneModifying.vue
-->
<template>
  <div class="operators">
    <div class="op">
      <div>
        <button @click="onAllOf">test every element smaller than 6</button>
        <button @click="onAnyOf">test any element smaller than 6</button>
      </div>
    </div>
    <Chart type="Vector" :cntr="vecRefs"/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Vector, all_of, any_of, none_of, find, find_if, find_first_of, find_end } from 'tstl'
import { testAllIterators, traverseCntr,  Person} from '@/helper'
import Chart from '@/components/chart.vue'

let vecCntr: Vector<string> = new Vector<string>()
let vecRefs = ref<Vector<string>>(vecCntr);
let vec = vecRefs.value;

const onAllOf = () => {
  let begin = vec.begin(), end = vec.end();
  let r = all_of(begin, end, (v) => v < '6')
  console.log(r)
}

const onAnyOf = () => {
  let begin = vec.begin(), end = vec.end();
  let r = any_of(begin, end, (v) => v > '6')
  console.log(r)
}

// test js primitive type
const testPrimitive = () => {
  vec.push_back('1')
  vec.push_back('2')
  vec.push_back('3')
  vec.push_back('4')
  vec.push_back('5')
  let begin = vec.begin();
  let end = vec.end();
  // console.log(begin++)
  console.log(begin.cur)
  function test(itr: any) {
    console.log(begin.cur)
    begin.next()
    console.log(begin.cur)
  }
  test(begin.cur)
  console.log(begin.cur)
  // let x = begin
  // console.log(x)
  // let r = all_of(begin, end, (v) => v < '6')
  // console.log('all of < 6', r)

  // r = any_of(begin, end, (v) => v < '6')
  // console.log('any of < 6', r)

  // r = none_of(begin, end, (v) => v < '6')
  // console.log('none of < 6', r)

  // r = find(begin, end, '2');
  // console.log('find if === 2', r)

  // r = find_if(begin, end, (v) => v > '2');
  // console.log('find if > 2', r)
}

const test = () => {
  testPrimitive()
}

onMounted(test)

</script>
<style lang="css" scoped>
</style>

