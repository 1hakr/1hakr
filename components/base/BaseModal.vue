<template>
  <UModal v-model="isOpen" :ui="{ strategy: 'override', width: '' }">
    <slot />
  </UModal>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>
