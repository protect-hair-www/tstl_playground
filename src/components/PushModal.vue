<!--
 * @Author: kalai
 * @LastEditors: kalai
 * @Description: 
 * @FilePath: \tstl_playground\src\components\PushModal.vue
-->
<template>
  <a-button type="primary" @click="handleClick">
    <template #icon>
      <icon-plus />
    </template>
    <template #default>push_back</template>
  </a-button>

  <a-modal v-model:visible="visible" title="新增元素" @cancel="handleCancel" @ok="handleSubmit">
    <a-form :model="form">
      <a-form-item field="val" label="元素">
        <a-input v-model="form.val" type="number" placeholder="输入新增元素" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { reactive, ref, defineEmits, defineComponent } from 'vue';
import { IconPlus, IconDelete } from '@arco-design/web-vue/es/icon';
const emit = defineEmits<{ (e: 'submit', ele: number): void }>();

export default defineComponent({
  components: {
    IconPlus
  },

  setup(props: any, context: any) {
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
      context.emit('submit', Number(form.val));
    }

    return {
      visible,
      form,
      handleClick,
      handleSubmit,
      handleCancel
    }
  }
})
</script>
