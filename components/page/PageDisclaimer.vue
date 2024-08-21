<template>
  <div class="rounded-lg bg-slate-200 my-4 p-4 dark:bg-slate-800">
    <span class="text-slate-500 text-sm">
      <b>{{ t('labels.disclaimer') }}:</b> {{ t('footer.disclaimer') }}
    </span>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>