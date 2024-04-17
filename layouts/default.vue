<script setup lang="ts">

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    onBeforeEnter: async () => {
      const { finalizePendingLocaleChange } = useNuxtApp().$i18n
      await finalizePendingLocaleChange()
    }
  }
})
</script>

<template>
  <div>
    <Header />

    <UMain>
      <UPage>
        <template #left />
        <slot />
        <template #right />
      </UPage>
    </UMain>

    <Footer />
  </div>
</template>
