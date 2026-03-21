<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  links: {
    type: Array as PropType<any[]>,
    default: () => []
  }
})
</script>

<template>
  <UHeader>
    <template #left>
      <ULink to="/" aria-label="logo" class="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5">
        <Logo class="w-auto h-6" />
      </ULink>
    </template>
    
    <template #default v-if="links?.length">
      <UNavigationMenu :items="links" />
    </template>

    <template #right>
      <slot name="right" />
    </template>
  </UHeader>
</template>
