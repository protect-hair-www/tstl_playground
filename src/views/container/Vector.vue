<!--
 * @Author: hzheyuan
 * @Date: 2022-03-04 17:01:41
 * @LastEditTime: 2022-05-16 19:28:42
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\views\container\Vector.vue
-->
<template>
  <div class="Vector-test">
    <div class="op">
      <a-space>
        <a-button type="primary">
          <template #icon>
            <icon-plus />
          </template>
          <template #default>push_back</template>
        </a-button>

        <a-button type="primary">
          <template #icon>
            <icon-plus />
          </template>
          <template #default>front</template>
        </a-button>

        <a-button type="primary">
          <template #icon>
            <icon-plus />
          </template>
          <template #default>back</template>
        </a-button>

        <a-button type="primary">
          <template #icon>
            <icon-delete />
          </template>
          <template #default>pop_back</template>
        </a-button>
      </a-space>
      <AddModal @onSumbit="onPushBack"/>
    </div>
    <Chart type="Vector" :cntr="vecRefs"/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Vector } from 'tstl'
import { testAllIterators, traverseCntr,  Person} from '@/helper'
import Chart from '@/components/chart.vue'
import { IconPlus, IconDelete } from '@arco-design/web-vue/es/icon';
import AddModal from "@/components/addModal.vue";

let vecCntr: Vector<string> = new Vector<string>()
let vecRefs = ref<Vector<string>>(vecCntr);
let vec = vecRefs.value;

const onPushBack = (e: any) => {
  console.log(e)
  // vec.push_back(v)
}

const onPopBack = () => {
  vec.pop_back()
}

const onGetFront = () => {
  console.log(vec.front())
}

const onGetBack = () => {
  console.log(vec.back())
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
const testPrimitive = () => {
  vec.push_back('1')
  vec.push_back('2')
  vec.push_back('3')
  vec.push_back('4')
  vec.push_back('5')
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
