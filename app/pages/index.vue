<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData('index', () => queryCollection('content').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})


definePageMeta({
  layout: 'home',
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
  <div v-if="page">
    <UContainer class="py-10">
      <div class="text-center flex flex-col items-center">
        <UAvatar size="3xl" src="/icon.png" alt="logo" class="rounded-full h-40 w-40 text-3xl mb-10" />
        <div v-once class="text-2xl font-medium tracking-tight text-neutral-500 dark:text-neutral-400 max-w-[500px]">
          <div>Hello, I’m HaKr</div>
          <br>
          <div>
            Building microstartups @ <ULink href="https://dworks.io?referrer=1hakr" target="_blank"
              inactive-class="text-primary hover:text-primary-600">
              DWorkS
            </ULink>, mentoring budding indie makers and looking to invest in promising things
            <span v-if="false">
              running <ULink href="https://t.me/aussiemakers" target="_blank"
                inactive-class="text-primary hover:text-primary-600">
                Aussie Makers
              </ULink> community
            </span>
          </div>
          <br>
          <div>
            I made ✈️ <ULink href="https://visalist.io?referrer=1hakr" target="_blank"
              inactive-class="text-primary hover:text-primary-600">
              Visa List
            </ULink>, 🖥️ <ULink href="https://simpleops.io?referrer=1hakr" target="_blank"
              inactive-class="text-primary hover:text-primary-600">
              Simple Ops
            </ULink>,
            💱 <ULink href="https://acrypto.io?referrer=1hakr" target="_blank"
              inactive-class="text-primary hover:text-primary-600">
              ACrypto
            </ULink>,
            📁 <ULink href="https://anexplorer.io?referrer=1hakr" target="_blank"
              inactive-class="text-primary hover:text-primary-600">
              AnExplorer
            </ULink>
            <br><br>
            See more of my
            <ULink to="/products" inactive-class="text-primary hover:text-primary-600">
              products
            </ULink> and
            <ULink to="/designs" inactive-class="text-primary hover:text-primary-600">
              designs
            </ULink>
          </div>
        </div>
        <UButton label="Mentorship" icon="i-heroicons-academic-cap-solid" trailing
          to="https://mentorcruise.com/mentor/HariDulipudi/apply?referrer=1hakr" target="_blank"
          class="my-10 text-xl font-bold" />
        <div class="mb-20">
          <UButton size="xl" color="warning" to="https://twitter.com/1hakr" target="_blank"
            icon="i-simple-icons-twitter" aria-label="GitHub" variant="soft" class="mx-2" />
          <UButton size="xl" color="warning" to="https://www.linkedin.com/in/1hakr" target="_blank"
            icon="i-simple-icons-linkedin" aria-label="GitHub" variant="soft" class="mx-2" />
          <UButton size="xl" color="warning" to="https://github.com/dworks" target="_blank" icon="i-simple-icons-github"
            aria-label="GitHub" variant="soft" class="mx-2" />
          <UButton size="xl" color="warning" to="http://t.me/OneHaKr" target="_blank" icon="i-simple-icons-telegram"
            aria-label="GitHub" variant="soft" class="mx-2" />
          <UButton size="xl" color="warning" to="/media/resume.pdf" target="_blank" icon="i-heroicons-link"
            aria-label="GitHub" variant="soft" class="mx-2" />
          <UButton size="xl" color="warning" to="https://dworks.io/?referrer=dworks" target="_blank"
            icon="i-simple-icons-devdotto" aria-label="GitHub" variant="soft" class="mx-2" />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
