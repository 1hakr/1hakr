<template v-bind="attrs">
  <div class="px-4 sm:px-4 lg:px-0">
    <slot name="header" />

    <UPageBody :ui="{ wrapper: 'mt-8 pb-8', }">
      <slot />
    </UPageBody>
    <div v-if="links" class="mb-4">
      <UBreadcrumb :links="links" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Button } from '#ui/types'

defineOptions({
  inheritAttrs: false
})

defineProps({
  title: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    default: undefined
  },
  links: {
    type: Array as PropType<(Button & { click?: Function })[]>,
    default: () => []
  }
})

</script>