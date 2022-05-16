<template>
  <a-button type="primary" @click="handleClick">
    <template #icon>
      <icon-plus />
    </template>
    <template #default>push_back</template>
  </a-button>

  <a-modal v-model:visible="visible" title="新增元素" @cancel="handleCancel" @ok="handleSubmit">
    <a-form :model="form">
      <a-form-item field="ele" label="元素">
        <a-input v-model="form.ele" type="number" placeholder="输入新增元素" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { reactive, ref, defineEmits, defineComponent } from 'vue';
import { IconPlus, IconDelete } from '@arco-design/web-vue/es/icon';
const emit = defineEmits<{ (e: 'submit', ele: number): void }>();

export default defineComponent({
  setup(props: any, context: any) {
    const visible = ref(false);
    const form = reactive({
      ele: '',
    });

    const handleClick = () => {
      visible.value = true;
    };

    const handleCancel = () => {
      visible.value = false;
    }

    const handleSubmit = () => {
      emit('submit', Number(form.ele));
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