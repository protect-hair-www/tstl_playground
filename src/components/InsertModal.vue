<template>
  <a-button type="secondary" @click="handleClick">
    <!-- <template #icon>
      <icon-plus v-if="icon === 'Plus'"/>
      <icon-minus v-if="icon === 'Minus'"/>
    </template> -->
    <template #default>{{ text }}</template>
  </a-button>

  <a-modal v-model:visible="visible" :title="title" @cancel="handleCancel" @ok="handleSubmit">
    <a-form :model="form">
      <a-form-item v-if="type !== 'val'" field="pos" label="位置">
        <a-input v-model="form.pos" type="number" placeholder="插入元素位置" />
      </a-form-item>
      <a-form-item field="val" label="值">
        <a-input v-model="form.val" type="number" placeholder="输入新增元素" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs, defineEmits, defineComponent, defineProps, withDefaults } from 'vue';
import { IconPlus, IconDelete, IconMinus } from '@arco-design/web-vue/es/icon';
const emit = defineEmits<{ (e: 'submit', ele: number): void }>();

interface Props {
  title: string;
  text: string;
  type?: string;
  icon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: '插入元素',
  text: 'insert',
  type: 'both',
  icon: 'Plus',
}); 

// const { title, icon } = toRefs(props);
const visible = ref(false);
const form = reactive({
  pos: '',
  val: '',
})

const handleClick = () => {
  visible.value = true;
}

const handleCancel = () => {
  visible.value = false;
}

const handleSubmit = () => {
  emit('submit', form);
}
</script>
