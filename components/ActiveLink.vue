<template>
  <NuxtLink :to="href" :target="target" class="font-bold no-underline hover:underline" :class="`text-${color}`">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  },
  color: {
    type: String,
    default: 'primary',
    required: false
  }
})
</script>