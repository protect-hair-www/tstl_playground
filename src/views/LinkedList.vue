<!--
 * @Author: hzheyuan
 * @Date: 2022-03-04 17:01:41
 * @LastEditTime: 2022-04-07 23:54:40
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: /tstl_playground/src/views/LinkedList.vue
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
import { LinkedList } from 'tstl'
import { testAllIterators, traverseCntr, Person } from '../helper'
import Chart from '../components/chart.vue'
import { link } from 'fs';

let linkedListCntr: LinkedList<string> = new LinkedList<string>()
let linkedListRefs = ref<LinkedList<string>>(linkedListCntr);
let linkedList = linkedListRefs.value;

const onPushBack = (e: Event) => {
    const target = (<HTMLInputElement>e.target)
    const v = target.value
    linkedList.push_back(v)
}

const onPopBack = () => {
    linkedList.pop_back()
}

const onGetFront = () => {
    console.log(linkedList.front())
}

const onGetBack = () => {
    console.log(linkedList.back())
}

const print = (linkedList: LinkedList<string>) => {
    let itr = linkedList.listIterator()
    const arr = [];
    while (itr.hasNext()) {
        arr.push(itr.next().value)
    }
    console.log(arr)
} 

// test js primitive type
const testPrimitive = () => {
    linkedList.add('1')
    linkedList.add('2')
    linkedList.add('3')
    linkedList.add('4')
    linkedList.add('5')

    console.log('=====Iterator=====')
    console.log(linkedList)
    let itr = linkedList.listIterator()
    console.log(itr, itr.hasNext())
    print(linkedList);

    console.log('get 2', linkedList.get(2));
    try {
        console.log('get 10', linkedList.get(10));
    } catch (error) {
       console.log(error) 
    }
    print(linkedList);

    console.log('set 2 5', linkedList.set(2, '5'));
    print(linkedList);

    linkedList.add(1, '7');
    console.log('add 7 at 1: ');
    print(linkedList)

    console.log('list iterator previous ')
    while (itr.hasPrevious()) {
        console.log(itr.previous())
    }

    console.log('add all [8, 9, 10]')
    linkedList.addAll(['8', '9', '10']);
    print(linkedList);

    console.log('add all [8, 9, 10] at 3')
    linkedList.addAll(3, ['8', '9', '10']);
    print(linkedList);

    console.log('addFirst 12')
    linkedList.addFirst('12')
    print(linkedList);

    console.log('addLast 22')
    linkedList.addLast('22')
    print(linkedList);

    console.log('contains 12', linkedList.contains('12'))
    console.log('contains 122', linkedList.contains('122'))

    console.log('element: ',  linkedList.element());
    console.log('get first: ', linkedList.getFirst());
    console.log('get last: ', linkedList.getLast());
    console.log('indexof 3: ', linkedList.indexOf('3'))
    console.log('indexof 8: ', linkedList.indexOf('8'))
    console.log('indexof 122: ', linkedList.indexOf('122'))

    console.log('last indexof 8: ', linkedList.lastIndexOf('8'))
    console.log('last indexof 122: ', linkedList.lastIndexOf('122'))

    console.log('remove', linkedList.remove());
    print(linkedList);
    console.log('remove', linkedList.remove(3));
    print(linkedList);
    console.log('remove', linkedList.remove('3'));
    print(linkedList);
    console.log('remove', linkedList.remove('122'));
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

