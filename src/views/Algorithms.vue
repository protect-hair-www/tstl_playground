<!--
 * @Author: hzheyuan
 * @Date: 2022-03-21 18:25:38
 * @LastEditTime: 2022-05-15 23:00:00
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: /tstl_playground/src/views/Algorithms.vue
-->
<template>
    <div class="intro docs">
        <h3 id="算法" tabindex="-1">
            <a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法
        </h3>

        <p>算法主要的目的是，以有限的步骤，解决逻辑和数学上的问题。STL主要集中一些有复用价值的算法，比如：排序(sort)，查找(search)，排列组合(premutation)，以及用于数据移动，复制，删除，比较，组合，运算等常用算。</p>
        <p>特定的算法往往需要搭配特定的数据结构，比如BST，red_black_tree，hashtable能快速查找。heap可以完成堆排序等。</p>
        <p>为了能和容器独立开来，STL设计了迭代器，所有STL的算法都作用在由迭代器[first, last)所标示出来的区间上</p>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    msg: string;
}>(), {})
</script>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>