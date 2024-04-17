<script setup lang="ts">
import type { NuxtError } from '#app'

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

</script>

<template>
  <div>
    <Header />

    <UMain>
      <UContainer>
        <UPage>
          <Error :error="error" message="You have travalled here through our secret time machine. Go back!" />
        </UPage>
      </UContainer>
    </UMain>

    <Footer />

    <UNotifications />
  </div>
</template>
