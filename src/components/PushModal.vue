<!--
 * @Author: kalai
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\components\PushModal.vue
-->
<template>
  <a-button type="secondary" @click="handleClick">
    <!-- <template #icon>
      <icon-plus />
    </template> -->
    <template #default>{{text}}</template>
  </a-button>

  <a-modal v-model:visible="visible" title="新增元素" @cancel="handleCancel" @ok="handleSubmit">
    <a-form :model="form">
      <a-form-item field="val" label="元素">
        <a-input v-model="form.val" type="number" placeholder="输入新增元素" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { reactive, ref, defineEmits, defineComponent } from 'vue';
import { IconPlus, IconDelete } from '@arco-design/web-vue/es/icon';
const emit = defineEmits<{ (e: 'submit', ele: number): void }>();

const props = defineProps<{
  text?: string
  icon?: string 
}>()

const { text = 'push_back', icon = 'Access'} = props;

const visible = ref(false);
const form = reactive({
  val: '',
});

const handleClick = () => {
  visible.value = true;
};

const handleCancel = () => {
  visible.value = false;
}

const handleSubmit = () => {
  emit('submit', Number(form.val));
}
</script>
