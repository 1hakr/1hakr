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
        <section>
          <UCarousel :items="page.meta?.designs" dots class="rounded-lg w-full max-w-full sm:max-w-md mx-auto" arrows>
            <template #default="{ item }">
              <UCard class="bg-primary-50 dark:bg-primary-50 mb-12 min-w-87.5 sm:min-w-100">
                <div class="flex flex-col h-full md:h-100">
                  <NuxtImg :src="`/design/${item.image}`" class="min-h-87.5 sm:min-h-100 rounded-lg" draggable="false"
                    format="webp" loading="lazy" sizes="400px" density="1" />
                </div>
                <template #footer>
                  <div class="text-center mx-auto">
                    <div v-if="item.caption" class="bg-gray-400 dark:bg-gray-400 py-5 rounded-b-lg">
                      {{ item.caption }}
                      <ULink :to="item.link" target="_blank"
                        inactive-class="text-primary-900 hover:text-primary-600 font-bold no-underline hover:underline">
                        {{ item.link_text }}
                      </ULink>
                    </div>
                  </div>
                </template>
              </UCard>
            </template>

            <template #indicator="{ onClick, page, active }">
              <UButton variant="solid"
                :class="active ? 'bg-primary-500 dark:bg-primary-400' : 'bg-gray-600 dark:bg-gray-600'" size="xs"
                class="rounded-full h-3 w-3" @click="onClick(page)" />
            </template>
          </UCarousel>
        </section>
        <div v-if="links" class="mt-6 mb-2">
          <UBreadcrumb :items="links" />
        </div>
      </div>
    </div>
  </UContainer>
</template>