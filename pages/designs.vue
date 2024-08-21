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
  <PageContainer :links="links">
    <template #header>
      <PageTitle :title="page.title" :description="page.description" />
    </template>
    <section>
      <UCarousel :items="page.designs" :ui="{ item: 'w-full xl:w-1/2' }" class="rounded-lg overflow-hidden" arrows
        indicators>
        <template #default="{ item }">
          <div class="text-center mx-auto">
            <UCard
              :ui="{ strategy: 'override', header: { padding: '' }, body: { padding: 'p-10', }, footer: { padding: '' } }"
              class="bg-primary-50 dark:bg-primary-50 mb-12">
              <div class="min-w-[280px] sm:min-w-[400px] h-full min-h-[300px] sm:h-[400px]">
                <img :src="`/media/${item.image}`" class="h-full sm:h-[400px] rounded-lg" draggable="false">
              </div>
              <template #footer>
                <div v-if="item.caption" class="bg-gray-400 dark:bg-gray-400 py-5 rounded-b-lg">
                  {{ item.caption }}
                  <ActiveLink :href="item.link" target="_blank" color="amber-500">
                    {{ item.link_text }}
                  </ActiveLink>
                </div>
              </template>
            </UCard>
          </div>
        </template>

        <template #indicator="{ onClick, page, active }">
          <UButton variant="solid"
            :class="active ? 'bg-primary-500 dark:bg-primary-400' : 'bg-gray-600 dark:bg-gray-600'" size="xs"
            class="rounded-full h-3 w-3" @click="onClick(page)" />
        </template>
      </UCarousel>
    </section>
  </PageContainer>
</template>