<template>
  <a-button type="primary" @click="handleClick">
    <template #icon>
      <icon-plus />
    </template>
    <template #default>insert</template>
  </a-button>

  <a-modal v-model:visible="visible" title="新增元素" @cancel="handleCancel" @ok="handleSubmit">
    <a-form :model="form">
      <a-form-item field="pos" label="位置">
        <a-input v-model="form.pos" type="number" placeholder="插入元素位置" />
      </a-form-item>
      <a-form-item field="val" label="值">
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
      pos: '',
      val: '',
    });

    const handleClick = () => {
      visible.value = true;
    };

    const handleCancel = () => {
      visible.value = false;
    }

    const handleSubmit = () => {
      context.emit('submit', form);
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
