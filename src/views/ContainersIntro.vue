<!--
 * @Author: hzheyuan
 * @Date: 2022-03-21 18:25:38
 * @LastEditTime: 2022-03-21 18:33:15
 * @LastEditors: hzheyuan
 * @Description: 
 * @FilePath: \tstl_playground\src\views\ContainersIntro.vue
-->
<template>
    <div class="intro docs">
        <h3 id="容器" tabindex="-1">
            <a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器
        </h3>
        <p>容器就是数据结构，比如array bst red_black_tree等。任何特定的数据结构都是为了实现特定的算法。根据STL的划分，我们可以把容器分为两大类：</p>
        <h4 id="_1-序列式容器" tabindex="-1">
            <a class="header-anchor" href="#_1-序列式容器" aria-hidden="true">#</a> 1. 序列式容器
        </h4>
        <p>
            所谓序列式容器，其中的元素都可序（ordered），但未必有序（sorted）。本项目提供：vector, list, deque, stack, queue, priority_queue等序列式容器（stack, queue实现上其实是一种配接器，但我们可以直接将其视为一种容器）。其中
            各个容器主要的区别与特点有：
        </p>
        <ol>
            <li>
                <p>
                    <strong>vector</strong>：vector是一个可以动态调整大小的数组（这里的数组是指C++这类的静态数组，但其实JS数组本身就可以动态分配，所以内部实现就是基于一个数组），其存储空间是连续的（因为V8对JS数组实现上，数组可能实质上是一个hash_map，所以不一定空间连续，但对用户方来说，完全不影响，这样讲只为更严谨一些）。
                </p>
            </li>
            <li>
                <p>
                    <strong>list</strong>: list相比于vector的连续空间，实现上是一个循环双端链表，这样可以每次删除或插入都是O(1)的复杂度，同时空间复杂度更低。
                </p>
            </li>
            <li>
                <p>
                    <strong>deque</strong>: vector是一个单向开口的连续性空间，deque则是一种双向开口的连续性空间。所谓双向开口，意思就是可以在头尾两端分别做元素的插入和删除。当然也可以在vector头部做操作，但从技术上讲，效率太低。
                </p>
            </li>
            <li>
                <p>
                    <strong>stack</strong>: stack是一种先进后出的数据结构。他只有一个口运行元素操作。实现上只需要以一个deque作为基础数据结构，并关闭deque的尾端的操作，变可以实现。而只是修改容器接口，就可以实现的方式，我们称为adapter（配接器）。
                </p>
            </li>
            <li>
                <p>
                    <strong>queue</strong>: queue是中先进先出的数据结构，它有两个出口。但只能从尾部加入（推入），头部取出（推出）。没有其他方式存取queue的其他元素。换言之，queue不允许有遍历行为。将元素推入的操作称为 push, 推出称为pop。实现上仍可以基于deque，也就是说queue是一种配接器。
                </p>
            </li>
            <li>
                <p>
                    <strong>priority_queue</strong>: priority_queue是一个拥有权值概念的queue，由于是一个queue，所以操作还是只能在容器的两头。priority_queue带有权值，其内部的元素并非依照被推入的次序排列，而是自动按照元素的权值排列。默认权值高者在前。
                </p>
            </li>
            <li>
                <p>
                    <strong>slist</strong>: list是一个双向链表，同时也提供一个单向链表slist。主要的区别就是slist的迭代器是单向的，而后者是双向的。
                </p>
            </li>
        </ol>
        <h4 id="_2-关联式容器" tabindex="-1">
            <a class="header-anchor" href="#_2-关联式容器" aria-hidden="true">#</a> 2. 关联式容器
        </h4>
        <p>所谓关联式容器，观念上类似观念数据库。每个元素都有一个键值(key)和实值(value)， 当元素被插入关联容器中时，容器内部结构便依照其键值的大小，以某种特定规则将这个元素放置于适当的位置。关联容器没有所谓的头尾（只有最大元素和最小元素）。</p>
        <p>
            标准的STL的关联容器分为set(集合)和map(映射表)两大类，以及这两大类衍生体multiset(多键集合)和multimap(多键映射表)。这些容器的底层机制均以red_black_tree(红黑树)完成。red_black_tree也是一个独立容器，但是是内部实现。
            此外，STL还提供一个关联式容器: hash_table(散列表)，以及以此hash_table为底层机制实现的hash_set(散列集合)和hash_map(散列映射表)，hash_multiset(散列多键集合)，hash_multimap(散列多键映射)。
        </p>
        <p>值得注意的是，STL的hash_table与js的map是有区别的，js的map是insertsorted，也就是按插入排序的，STL的hash_map则没有排序。</p>
        <ol>
            <li>
                <p>
                    <strong>set</strong>: set的特性是，所有元素都会根据元素的键值自动排序。set的元素不像map那样可以同时拥有实值(value)和键值(key)，set元素的键值就是实值。
                </p>
            </li>
            <li>
                <p>
                    <strong>map</strong>: map的特性是，所有元素都会根据键值自动被排序，map的所有元素都同时拥有实值(value)和键值(key)。
                </p>
            </li>
            <li>
                <p>
                    <strong>multiset</strong>: mulitset和set特性完全一致，唯一区别在于它允许键值重复。
                </p>
            </li>
            <li>
                <p>
                    <strong>multimap</strong>: mulitmap和map特性完全一致，唯一区别在于它允许键值重复。
                </p>
            </li>
            <li>
                <p>
                    <strong>hashtable</strong>: map，set都是基于红黑树的，所以操作有log(n)的复杂度。而hashtable结构在主要操作上有常数级别的复杂度。
                </p>
            </li>
            <li>
                <p>
                    <strong>hashset</strong>: hashset是基于hashtable的set结构，使用方式与set完全一致，与set的区别是set的元素有自动排序功能而hashset没有。
                </p>
            </li>
            <li>
                <p>
                    <strong>hashmap</strong>: hashmap是基于hashtable的map结构，使用方式与map完全一致，与set的区别是set的元素有自动排序功能而hashset没有。
                </p>
            </li>
            <li>
                <p>
                    <strong>hash_multiset</strong>:hash_multiset是基于hashtable的multiset结构，使用方式与multiset完全一致，与hash_set的区别是可以有重复的键值。
                </p>
            </li>
            <li>
                <p>
                    <strong>hash_multismap</strong>:hash_multimap是基于hashtable的multimap结构，使用方式与multimap完全一致，与hash_map的区别是可以有重复的键值。
                </p>
            </li>
        </ol>
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