<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
const links = page.value.links
</script>

<template>
  <UContainer>
    <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
      <div class="mt-8 pb-8 lg:col-span-10">

        <div class="relative border-b border-gray-200 dark:border-gray-800 py-4 mb-8">
          <div class="flex flex-col lg:flex-row items-start gap-6">
            <div class="flex-1">
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {{ page.title }}
                </h1>
              </div>
              <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
                {{ page.description }}
              </p>
            </div>
          </div>
        </div>
        <div v-for="(startup, index) in page.meta?.products" :key="index" class="break-inside-avoid my-4">
          <UCard variant="subtle" :ui="{ strategy: 'override', header: { padding: '' }, body: { padding: 'p-4', } }"
            class="min-h-fit">
            <div class="grid grid-cols-1 md:grid-cols-10 gap-6">
              <div class="md:col-span-4">
                <UCard variant="simple"
                  :ui="{ strategy: 'override', header: { padding: '' }, ring: '', divide: '', shadow: '', body: { padding: 'p-4', } }">

                  <div class="text-xl font-bold truncate">
                    {{ startup.name }}
                  </div>
                  <div class="text-base py-4">
                    {{ startup.description }}
                  </div>
                  <div class="ml-4">
                    <ul class="list-disc">
                      <li v-for="(point, i) in startup.points" :key="i">
                        {{ point.text }}
                      </li>
                    </ul>
                  </div>
                  <div v-for="(action, index2) in startup.actions" :key="index2">
                    <UButton size="sm" color="primary" variant="outline" class="my-2" :to="action.url" target="_blank"
                      external>
                      {{ action.caption }}
                    </UButton>
                  </div>
                </UCard>
              </div>
              <div class="md:col-span-6">
                <UCarousel :items="startup.pages" arrows dots class="rounded-lg w-full max-w-full sm:max-w-xl mx-auto">
                  <template #default="{ item }">
                    <div class="text-center mx-auto">
                      <UCard :ui="{ strategy: 'override', header: { padding: '' }, body: { padding: 'p-4', } }"
                        class="bg-primary-50 dark:bg-primary-50">
                        <div class="w-full h-[300px] sm:h-[400px] flex items-center justify-center"
                          :class="`${item.device_frame === 'desktop' ? 'sm:w-[550px]' : ''}`">
                          <NuxtImg :src="`/media/${item.image}`" class="h-full w-auto object-contain rounded-lg"
                            draggable="false" format="webp" loading="lazy" sizes="sm:550px 300px" />
                        </div>
                      </UCard>
                    </div>
                  </template>

                  <template #indicator="{ onClick, page, active }">
                    <UButton variant="solid"
                      :class="active ? 'bg-primary-500 dark:bg-primary-400' : 'bg-gray-600 dark:bg-gray-600'" size="xs"
                      class="rounded-full h-3 w-3" @click="onClick(page)" />
                  </template>
                </UCarousel>
              </div>
            </div>
          </UCard>
        </div>
        <div v-if="links" class="mt-6 mb-2">
          <UBreadcrumb :items="links" />
        </div>
      </div>
    </div>
  </UContainer>
</template>