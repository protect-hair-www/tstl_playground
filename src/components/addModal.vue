<template>
  <a-button type="primary" @click="handleClick" >
    <template #icon>
      <icon-plus />
    </template>
    <template #default>push_back</template>
  </a-button>

  <a-modal v-model:visible="visible" title="新增元素" @cancel="handleCancel"  @ok="handleSubmit">
    <a-form :model="form">
      <a-form-item field="ele" label="元素">
        <a-input v-model="form.ele" type="number" placeholder="输入新增元素" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { reactive, ref, defineEmits } from 'vue';
const emit = defineEmits(['onSubmit'])

export default {
  setup(context) {
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

    const handleSubmit = (data) => {
      emit('onSubmit', form.ele);
    }

    return {
      visible,
      form,
      handleClick,
      handleSubmit,
      handleCancel
    }
  },
}
</script>