<script setup lang="ts">
</script>

<template>
  <BaseFooter>
    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © 1hakr - {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <ThemeSwitcher class="w-[120px]" />
    </template>
  </BaseFooter>
</template>
