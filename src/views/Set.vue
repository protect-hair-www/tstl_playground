<!--
 * @Author: hzheyuan
 * @Date: 2022-02-22 09:50:15
 * @LastEditTime: 2022-03-22 15:44:26
 * @LastEditors: hzheyuan
 * @Description: 迭代器测试
 * @FilePath: \tstl_playground\src\views\Set.vue
-->
<template>
  <div class="Set-test">
    <div class="op">
      <div>
        <label for="insert">insert</label>
        <input type="text" @keyup.enter="onInsert" />
      </div>
      <div>
        <label for="delete">delete</label>
        <input type="text" @keyup.enter="onDelete" />
      </div>
      <div>
        <label for="delete">lower_bound</label>
        <input type="text" @keyup.enter="getLowerBound" />
      </div>
      <div>
        <label for="delete">upper_bound</label>
        <input type="text" @keyup.enter="getUpperBound" />
      </div>
    </div>
    <Chart type="Set" :cntr="setRefs" :opCnt="opCnt"/>
  </div>
</template>

<script setup lang="ts">
import Chart from '../components/chart.vue'
import { onMounted, ref } from 'vue'
import { _RBTree ,Set } from 'tstl'

const opCnt = ref<number>(0)
const setCntr = new Set<string>();
const setRefs = ref<Set<string>>(setCntr)
const s = setRefs.value;

const onInsert = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const k = target.value
  const n = s.insert(k);
  opCnt.value++
}

const onDelete = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = target.value

  s.erase(v);
  opCnt.value++
}

const getLowerBound = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = target.value
  console.log('lower_bound', s.lower_bound(v).value)
}

const getUpperBound = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = target.value
  console.log('upper_bound', s.upper_bound(v).value)
}

const test = () => {
  s.insert('a')
  s.insert('c')
  s.insert('x')
  s.insert('y')
  s.insert('z')
  s.insert('d')
  s.insert('b')
  s.insert('d')
  opCnt.value++;

  console.log('empty', s.empty())
  console.log('size', s.size())

  // console.log('find', s.find('cc').key(), s.find('cc').value)
  // console.log('find', s.find('eeee').key())

  // console.log('count', s.count('cc'))
  // console.log('count', s.count('xx'))

  // console.log('lower_bound', s.lower_bound('xx').value)
  // console.log('upper_bound', s.upper_bound('xx').value)
  // console.log('equal_range', s.equal_range('yy'))

  // // 删除
  // console.log('erase', s.erase('cc'))
  // console.log('erase', s.erase('kkkk'))

  // console.log('===keys====')
  // let keys = s.begin().keys();
  // for(let k of keys) {
  //   console.log(k)
  // }

  // console.log('===values====')
  // let values = s.begin().values();
  // for (let item of values) {
  //   console.log(item)
  // }

  // console.log('===entries====')
  // let entries = s.begin().entries();
  // for (let item of entries) {
  //   console.log(item)
  // }

}
onMounted(test)

</script>
<style lang="css" scoped>
</style>