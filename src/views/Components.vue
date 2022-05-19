<template>
  <a-layout class="components-container">
    <a-layout-sider collapsible breakpoint="xl">
      <!-- <div class="logo" /> -->
      <a-menu :default-open-keys="['container', 'sequences']" :default-selected-keys="['/container/vector']"
        :style="{ width: '100%' }" @menu-item-click="onClickMenuItem">
        <a-sub-menu key="container">
          <template #title>
            <IconCalendar></IconCalendar>容器
          </template>
          <a-sub-menu key="sequences" title="序列式容器">
            <a-menu-item key="/container/vector">Vector</a-menu-item>
            <a-menu-item key="/container/list">LikedList</a-menu-item>
            <a-menu-item key="/container/deque">Deque</a-menu-item>
            <a-menu-item key="/container/slist">Slist</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="associative" title="关联式容器">
            <a-menu-item key="/container/set">TreeSet</a-menu-item>
            <a-menu-item key="/container/map">TreeMap</a-menu-item>
            <a-menu-item key="/container/multiset">multiSet</a-menu-item>
            <a-menu-item key="/container/multimap">multiMap</a-menu-item>
            <a-menu-item key="/container/hashset">hashSet</a-menu-item>
            <a-menu-item key="/container/hashmap">hashMap</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="datastructor" title="树">
            <a-menu-item key="/datastructor/RBTree">RedBlackTree</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>

        <a-sub-menu key="adapter">
          <template #title>
            <IconCalendar></IconCalendar>适配器
          </template>
          <a-menu-item key="/adapter/queue">queue</a-menu-item>
          <a-menu-item key="/adapter/priorityQueue">priorityQueue</a-menu-item>
          <a-menu-item key="/adapter/stack">stack</a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="algorithms">
          <template #title>
            <IconCalendar></IconCalendar>算法
          </template>
          <a-sub-menu key="binary_search" title="二分">
            <a-menu-item key="lower_bound">lower_bound</a-menu-item>
            <a-menu-item key="upper_bound">upper_bound</a-menu-item>
            <a-menu-item key="binary_search">binary_search</a-menu-item>
            <a-menu-item key="equal_range">equal_range</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="heap" title="堆">
            <a-menu-item key="makeHeap">makeHeap</a-menu-item>
            <a-menu-item key="popHeap">popHeap</a-menu-item>
            <a-menu-item key="pushHeap">pushHeap</a-menu-item>
            <a-menu-item key="sortHeap">sortHeap</a-menu-item>
            <a-menu-item key="isHeap">isHeap</a-menu-item>
            <a-menu-item key="isHeapUtil">isHeapUntil</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="partition" title="分割">
            <a-menu-item key="partition">partition</a-menu-item>
            <a-menu-item key="stable_partition">stable_partition</a-menu-item>
            <a-menu-item key="is_partitioned">is_partitioned</a-menu-item>
            <a-menu-item key="partition_copy">partition_copy</a-menu-item>
            <a-menu-item key="partition_point">partition_point</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="none_modifying" title="不修改原数据">
            <a-menu-item key="partition">partition</a-menu-item>
            <a-menu-item key="stable_partition">stable_partition</a-menu-item>
            <a-menu-item key="is_partitioned">is_partitioned</a-menu-item>
            <a-menu-item key="partition_copy">partition_copy</a-menu-item>
            <a-menu-item key="partition_point">partition_point</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="modifying" title="修改原数据">
            <a-menu-item key="partition">partition</a-menu-item>
            <a-menu-item key="stable_partition">stable_partition</a-menu-item>
            <a-menu-item key="is_partitioned">is_partitioned</a-menu-item>
            <a-menu-item key="partition_copy">partition_copy</a-menu-item>
            <a-menu-item key="partition_point">partition_point</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sorting" title="排序">
            <a-menu-item key="partition">partition</a-menu-item>
            <a-menu-item key="stable_partition">stable_partition</a-menu-item>
            <a-menu-item key="is_partitioned">is_partitioned</a-menu-item>
            <a-menu-item key="partition_copy">partition_copy</a-menu-item>
            <a-menu-item key="partition_point">partition_point</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>

      <!-- trigger -->
      <template #trigger="{ collapsed }">
        <IconCaretRight v-if="collapsed"></IconCaretRight>
        <IconCaretLeft v-else></IconCaretLeft>
      </template>
    </a-layout-sider>

    <a-layout>
      <a-layout style="padding: 0 24px;">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <a-breadcrumb-item>Components</a-breadcrumb-item>
          <a-breadcrumb-item>{{ subName }}</a-breadcrumb-item>
          <a-breadcrumb-item>{{ curName }}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content class="main-box">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent } from 'vue';
import { Message } from '@arco-design/web-vue';
import {
  IconCaretRight,
  IconCaretLeft,
  IconHome,
  IconCalendar,
} from '@arco-design/web-vue/es/icon';

export default defineComponent({
  components: {
    IconCaretRight,
    IconCaretLeft,
    IconHome,
    IconCalendar,
  },
  methods: {
    onClickMenuItem(key) {
      this.$router.push({ path: key })
      // Message.info({ content: `You select ${key}`, showIcon: true });
    }
  },
  computed: {
    subName() {
      const path = this.$route.path;
      const subs = path.split('/');
      return subs[1]
    },
    curName() {
      const path = this.$route.path;
      const subs = path.split('/');
      return subs[2];
    }
  }
});
</script>
<style scoped>
.components-container {
  /* height: 500px; */
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}

.components-container :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}

.components-container :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}

.components-container :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}

.components-container :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}

.components-container :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}

.components-container :deep(.arco-layout-footer),
.components-container :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  /* text-align: center; */
}

.components-container .main-box {
  max-height: 100%;
  justify-content: flex-start;
}
</style>
