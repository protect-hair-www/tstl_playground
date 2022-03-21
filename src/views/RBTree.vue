<!--
 * @Author: hzheyuan
 * @Date: 2022-02-17 15:19:12
 * @LastEditTime: 2022-03-21 15:53:33
 * @LastEditors: hzheyuan
 * @Description: 
 * @FilePath: \tstl_playground\src\views\RBTree.vue
-->
<template>
  <div class="red-black-tree">
    <div class="op">
      <div>
        <label for="insert">insert</label>
        <input type="number" @keyup.enter="onEnter" />
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
    <div id="chart" style="width: 100vw;height:100vh;"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Chart } from '../lib/chart'
import { _RBTree, Vector } from 'tstl'
import { randomNum, testAllIterators, traverseCntr,  Person} from '../helper'

let chart: any = ref(null)
let tr: _RBTree<number, string> = ref<any>(null)

const onEnter = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const k = Number(target.value)
  const n = tr.insert_unique(k, k.toString());
  console.log(n);
  chart.updateChart(tr);
}

const onDelete = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = Number(target.value)
  tr.erase(v);
  chart.updateChart(tr);
}

const onRotateLeft = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = Number(target.value)
  const n = tr.find(v).getNode();
  tr.leftRotate(n);
  chart.updateChart(tr);
}

const onRotateRight = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const v = Number(target.value)
  const n = tr.find(v).getNode();
  tr.rightRotate(n);
  chart.updateChart(tr);
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
  // const array = []
  tr = new _RBTree<number, string>();
  array.forEach((key: number) => {
    tr.insert_unique(key, `${key}`)
    // console.log('verify', tr._verify())
  });
  console.log('verify', tr._verify())

  // 可视化整颗树
  chart = new Chart('chart')
  chart.drawTree(tr)

  // this.tr.inorderWalk(node => console.log(node.key), 14);
  console.log('tree instance: ', tr)
  console.log('size', tr.size);
  console.log('empty', tr.empty);
  console.log('lower_bound', tr.lower_bound(3).value)
  console.log('upper_bound', tr.upper_bound(5).value)

  // begin迭代器
  let beginItr = tr.begin();
  console.log('begin iterator', beginItr.value);
  let bstr = ''
  for (let item of beginItr) {
    bstr += ` ${item}`
  }
  console.log('begin loop', bstr)

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

  testAllIterators(tr.begin())
}
onMounted(test)

</script>
<style lang="css" scoped>
</style>