<!--
 * @Author: hzheyuan
 * @Date: 2022-03-04 17:01:41
 * @LastEditTime: 2022-05-16 17:38:58
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\views\container\List.vue
-->
<template>
  <div class="List-test">
    <div class="op">
      <div>
        <label for="insert">push_back</label>
        <input type="number" @keyup.enter="onPushBack" />
      </div>

      <div>
        <label for="insert">push_front</label>
        <input type="number" @keyup.enter="onPushFront" />
      </div>

      <div>
        <button @click="onGetFront">front</button>
        <button @click="onGetBack">back</button>
      </div>

      <div>
        <button @click="onPopFront">pop_front</button>
        <button @click="onPopBack">pop_back</button>
      </div>
    </div>
    <Chart type="List" :cntr="listRefs"/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { List } from 'tstl'
import { testAllIterators, traverseCntr } from '@/helper'
import Chart from '@/components/chart.vue'
const listCntr: List<string> = new List<string>();
const listRefs = ref<List<string>>(listCntr);
let list = listRefs.value;

const onPushBack = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = target.value
  list.push_back(v)
}

const onPushFront = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = target.value 
  list.push_front(v)
}

const onGetFront = () => {
  console.log(list.front())
}

const onGetBack = () => {
  console.log(list.back())
}

const onPopFront = () => {
  list.pop_front()
}

const onPopBack = () => {
  list.pop_back()
}

const test = () => {
  list.push_back('1')
  list.push_back('2')
  list.push_back('3')
  list.push_back('4')
  list.push_back('5')

  // // 测试3种迭代器
  // testAllIterators(list)

  console.log('=====Iterator=====')
  traverseCntr(list)

  console.log('=====Capacity=====')
  console.log('empty', list.empty())
  console.log('size', list.size())

  console.log('=====Element Access=====')
  console.log('front', list.front())
  console.log('back', list.back())


  console.log('=====Modifiers=====')
  let itr = list.begin();
  itr.next();
  list.insert(itr, '5')
  traverseCntr(list, 'insert 5 at begin next')

  list.insert(list.end(), 2, '20')
  traverseCntr(list, 'insert 2 of 20 at end')

  list.assign(5, '11')
  traverseCntr(list, 'assign 5 11')

  list.erase(list.begin())
  traverseCntr(list, 'erase at begin')

  list.resize(5, '5')
  traverseCntr(list, 'resize 5 5')

  list.push_back('4')
  list.push_back('5')
  list.push_back('5')
  list.push_back('5')
  list.unique()
  traverseCntr(list, 'unique list')

  list.resize(2, '5')
  traverseCntr(list, 'resize 2 5')

  list.clear()
  traverseCntr(list, 'clear')

  console.log('=====Operations=====')
  list.push_back('1')
  list.push_back('2')
  list.push_back('3')
  list.push_back('4')
  list.push_back('5')

  const list2 = new List<string>()
  list2.push_back('6')
  list2.push_back('7')
  list2.push_back('8')
  list2.push_back('9')

  traverseCntr(list, 'list')
  itr = list.begin()
  itr.next()
  list.splice(itr, list2)

  traverseCntr(list, 'splice list2 of  6,7,8,9')
  traverseCntr(list2, 'after splice list2')

  list2.splice(list2.begin(), (list as List<string>), itr)
  traverseCntr(list, 'splice one element list')
  traverseCntr(list2, 'splice one element list2')

  itr = list.begin(); itr.next(); itr.next()
  list.splice(list.begin(), (list as List<string>), itr, list.end())
  traverseCntr(list, 'splice self range [7, end) to begin')

  list.remove('8')
  traverseCntr(list, 'list remove value = 8')
  list.remove_if((v) => v > '5')
  traverseCntr(list, 'list remove if value > 5')

  list.push_back('6')
  list.push_back('6')
  list.push_back('7')
  list.push_back('7')
  list.push_back('7')
  list.push_back('8')
  list.push_back('8')
  list.push_back('9')
  traverseCntr(list, 'list push_back 6 6 7 7 7 8 8 9')

  list.unique()
  traverseCntr(list, 'list unique')

  list.clear()
  console.log('clear list');
  
  list.push_back('1')
  list.push_back('2')
  list.push_back('3')
  list.push_back('5')

  list2.clear()
  list2.push_back('2')
  list2.push_back('3')
  list2.push_back('4')
  list2.push_back('6')
  list2.push_back('8')

  list.merge(list2)
  traverseCntr(list, 'list merge with [1, 2, 3, 5] and [2, 3, 4, 6,8]')

  list.clear()
  list.push_back('1')
  list.push_back('2')
  list.push_back('3')
  list.push_back('5')

  list2.clear()
  list2.push_back('4')
  list2.push_back('6')
  list2.push_back('8')
  traverseCntr(list, 'list')
  traverseCntr(list2, 'list2')

  list.swap(list2)
  traverseCntr(list, 'list swap')
  traverseCntr(list2, 'list2 swap')

  list.clear()
  // list.push_back('1')
  // list.push_back('5')
  // list.push_back('3')
  // list.push_back('9')
  list.push_back('7')
  list.push_back('5')
  list.push_back('8')
  list.push_back('1')
  // list.push_back('2')
  // list.sort()
  traverseCntr(list, 'list sort')

  list.reverse()
  traverseCntr(list, 'list reverse')

  // list.clear()
  // list.push_back('1')
  // list.push_back('2')
  // list.push_back('3')
  // list.push_back('4')
  // list.push_back('5')
}

onMounted(test)

</script>
<style lang="css" scoped>
</style>