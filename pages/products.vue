<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
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
  <Container :links="links">
    <template #header>
      <PageHeader :title="page.title" :description="page.description" />
    </template>
    <div v-for="(startup, index) in page.products" :key="index" class="break-inside-avoid my-4">
      <UCard :ui="{ strategy: 'override', header: { padding: '' }, body: { padding: 'p-4', } }" class="min-h-[500px]">
        <div class="grid grid-cols-10 gap-4">
          <div class="col-span-10 md:col-span-4">
            <UCard :ui="{ strategy: 'override', header: { padding: '' }, ring: '', divide: '', shadow: '', body: { padding: 'p-4', } }">
              <template #header>
                <img :src="startup.imgUrl" class="w-full rounded-t-lg" draggable="false">
              </template>
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
                <UButton
                  size="xs" color="primary" variant="outline" class="my-2"
                  padded :trailing="true" :to="action.url" target="_blank"
                >
                  {{ action.caption }}
                </UButton>
              </div>
            </UCard>
          </div>
          <div class="col-span-10 md:col-span-6">
            <UCarousel :items="startup.pages" :ui="{ item: 'w-full' }" class="rounded-lg overflow-hidden" arrows indicators>
              <template #default="{ item }">
                <div class="text-center mx-auto">
                  <UCard :ui="{ strategy: 'override', header: { padding: '' }, body: { padding: 'p-4', } }" class="bg-primary-50 dark:bg-primary-50">
                    <div class="min-w-[220px] h-full min-h-[300px] sm:h-[400px]" :class="`${item.device_frame === 'desktop' ? 'sm:min-w-[550px]' : ''}`">
                      <img :src="`/media/${item.image}`" class="h-full sm:h-[400px] rounded-lg" draggable="false">
                    </div>
                  </UCard>
                </div>
              </template>

              <template #indicator="{ onClick, page, active }">
                <UButton variant="solid" :class="active ? 'bg-primary-500 dark:bg-primary-400' : 'bg-gray-600 dark:bg-gray-600'" size="xs" class="rounded-full h-3 w-3" @click="onClick(page)" />
              </template>
            </UCarousel>
          </div>
        </div>
      </UCard>
    </div>
  </Container>
</template>