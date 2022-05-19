<template>
  <a-button type="secondary">
    <template #icon>
      <!-- <icon-plus v-if="icon === 'Plus'" />
      <icon-minus v-if="icon === 'Minus'" />
      <icon-share-external v-if="icon === 'Access'" /> -->
    </template>
    <template #default>{{text}}</template>
  </a-button>
</template>

<script setup lang="ts">
import { reactive, ref, defineEmits, defineComponent } from 'vue'
import { IconPlus, IconMinus, IconDelete, IconShareExternal } from '@arco-design/web-vue/es/icon'
const emit = defineEmits<{ (e: 'submit', ele: number): void }>()

const props = defineProps<{
  text?: string
  icon?: string 
}>()

const { text = 'Access', icon = 'Access'} = props;

</script>

