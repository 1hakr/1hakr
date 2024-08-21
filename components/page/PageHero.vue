<template>
  <div>
    <div class="relative mx-auto h-56 w-full overflow-hidden rounded-2xl md:h-72">
      <NuxtImg :src="image"
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-placeholder-card"
        loading="eager" :alt="title" format="webp" @error="onImageError" />
      <div class="absolute inset-0 z-10 h-full w-full bg-black opacity-60"></div>
      <div class="absolute inset-0 z-20 flex h-full w-full flex-col place-items-center justify-center text-white">
        <div class="flex flex-1 flex-col place-items-center justify-center">
          <h1 v-if="title" class="mt-2 px-4 text-center text-3xl font-bold [text-wrap:balance] sm:text-4xl">
            {{ title }}
          </h1>
        </div>
      </div>
    </div>
    <p class="mt-4 text-slate-400 text-sm" v-if="date">{{ t('labels.last_updated') }} :
      {{ formatDate('2020-02-01 12:05:25') }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const props = defineProps({
  title: {
    type: String,
    default: undefined
  },
  date: {
    type: String,
    default: undefined
  },
  image: {
    type: String,
    default: undefined
  }
})
</script>