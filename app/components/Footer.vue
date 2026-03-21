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
  <UFooter>
    <template #left>
      <!-- Year is fixed at SSG build time; v-once skips re-evaluation on hydration -->
      <p v-once class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © 1hakr - {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #center v-if="links?.length">
      <UNavigationMenu :items="links" />
    </template>

    <template #right>
      <UColorModeSelect class="w-[120px]" />
    </template>
  </UFooter>
</template>
