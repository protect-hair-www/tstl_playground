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
      <a-form-item field="pos" label="起始位置">
        <a-input v-model="form.begin" type="number" placeholder="删除元素起始位置" />
      </a-form-item>
      <a-form-item field="val" label="结束位置">
        <a-input v-model="form.end" type="number" placeholder="删除元素结束位置，不填只删除起始位置元素" />
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
  icon: string;
}
const props = defineProps<Props>()
// const { title, icon } = toRefs(props);
const visible = ref(false);
const form = reactive({
  begin: '',
  end: '',
});

const handleClick = () => {
  visible.value = true;
};

const handleCancel = () => {
  visible.value = false;
}

const handleSubmit = () => {
  emit('submit', form);
}
</script>
