<!--
 * @Author: hzheyuan
 * @Date: 2022-02-17 15:19:12
 * @LastEditTime: 2022-05-16 17:38:04
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\views\datastructor\RBTree.vue
-->
<template>
  <div class="red-black-tree">
    <div class="op">
      <div>
        <label for="insert">insert</label>
        <input type="number" @keyup.enter="onInsert" />
      </div>
      <div>
        <label for="insert">insert_unique</label>
        <input type="number" @keyup.enter="onInsertUnique" />
      </div>
      <div>
        <label for="delete">delete</label>
        <input type="number" @keyup.enter="onDelete" />
      </div>
      <div>
        <label for="rotate">rotateLeft</label>
        <input type="number" @keyup.enter="onRotateLeft" />
      </div>
      <div>
        <label for="rotate">rotateRight</label>
        <input type="number" @keyup.enter="onRotateRight" />
      </div>
    </div>
    <Chart type="RBTree" :cntr="trRefs" :opCnt="opCnt"/>
  </div>
</template>

<script setup lang="ts">
import Chart from '@/components/chart.vue'
import { ref, onMounted, reactive, watch } from 'vue'
import { _RBTree } from 'tstl'
import { randomNum, testAllIterators, traverseCntr,  Person} from '@/helper'
const opCnt = ref<number>(0)
const rbtreeCntr = new _RBTree<number, string>();
const trRefs = ref<_RBTree<number, string>>(rbtreeCntr)
const tr = trRefs.value;

const onInsert = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const k = Number(target.value)
  const n = tr.insert_equal(k, k.toString());
  opCnt.value++
}

const onInsertUnique = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const k = Number(target.value)
  const n = tr.insert_unique(k, k.toString());
  opCnt.value++
}

const onDelete = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = Number(target.value)
  tr.erase(v);
  opCnt.value++
}

const onRotateLeft = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = Number(target.value)
  const n = tr.find(v).getNode();
  tr.leftRotate(n);
  opCnt.value++
}

const onRotateRight = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = Number(target.value)
  const n = tr.find(v).getNode();
  tr.rightRotate(n);
  opCnt.value++
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

const test = () => {
  // const array = getRanddomTestData(100)
  const array = [11, 2, 14, 1, 7, 15, 5, 8, 4, 9, 12, 17, 10, 20, 22]
  console.log(tr)
  // const array = []
  array.forEach((key: number) => {
    tr.insert_unique(key, `${key}`)
    // console.log('verify', tr._verify())
  });
  console.log('verify', tr._verify())
  opCnt.value++

  // this.tr.inorderWalk(node => console.log(node.key), 14);
  console.log('tree instance: ', tr)
  console.log('size', tr.size);
  console.log('empty', tr.empty);
  console.log('lower_bound', tr.lower_bound(3).value)
  console.log('upper_bound', tr.upper_bound(5).value)

  // begin迭代器
  // let beginItr = tr.begin();
  // console.log('begin iterator', beginItr.value);
  // let bstr = ''
  // for (let item of beginItr) {
  //   bstr += ` ${item}`
  // }
  // console.log('begin loop', bstr)

  // entries
  // let entriesItr = tr.begin();
  // for(let e of entriesItr.entries()) {
  //   console.log(e)
  // }
  // // keys
  // let keysItr = tr.begin();
  // for(let k of keysItr.keys()) {
  //   console.log(k)
  // }
  // // values
  // let valuesItr = tr.begin();
  // for(let k of valuesItr.values()) {
  //   console.log(k)
  // }
  // testAllIterators(tr.begin())
}
onMounted(test)

</script>
<style lang="css" scoped>
</style>