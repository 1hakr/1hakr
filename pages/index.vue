<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
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
    <ULandingSection class="max-h-fit py-10">
      <div class="text-center flex flex-col items-center">
        <UAvatar size="4xl" src="/icon.png" alt="logo" class="rounded-full h-40 w-40 text-3xl mb-10" />
        <div class="text-2xl font-medium tracking-tight text-secondary max-w-[500px]">
          <div>Hello, I’m HaKr</div>
          <br>
          <div>
            Building microstartups @ <ActiveLink href="https://dworks.io?referrer=1hakr" target="_blank">
              DWorkS
            </ActiveLink>, mentoring budding indie makers and looking to invest in promising things
            <span v-if="false">
              running <ActiveLink href="https://t.me/aussiemakers" target="_blank">
                Aussie Makers
              </ActiveLink> community
            </span>
          </div>
          <br>
          <div>
            I made ✈️ <ActiveLink href="https://visalist.io?referrer=1hakr" target="_blank">
              Visa List
            </ActiveLink>, 🖥️ <ActiveLink href="https://simpleops.io?referrer=1hakr" target="_blank">
              Simple Ops
            </ActiveLink>,
            💱 <ActiveLink href="https://acrypto.io?referrer=1hakr" target="_blank">
              ACrypto
            </ActiveLink>,
            📁 <ActiveLink href="https://anexplorer.io?referrer=1hakr" target="_blank">
              AnExplorer
            </ActiveLink>
            <br><br>
            See more of my work
            <ActiveLink to="/products">
              products
            </ActiveLink> and
            <ActiveLink to="/designs">
              designs
            </ActiveLink>
          </div>
        </div>
        <UButton label="Mentorship" icon="i-heroicons-academic-cap-solid" trailing
          to="https://mentorcruise.com/mentor/HariDulipudi/apply?referrer=1hakr" target="_blank"
          class="my-10 text-xl font-bold" />
        <div class="mb-20">
          <UButton size="xl" color="amber" to="https://twitter.com/1hakr" target="_blank" icon="i-simple-icons-twitter"
            aria-label="GitHub" variant="soft" class="mx-2" />
          <UButton size="xl" color="amber" to="https://www.linkedin.com/in/1hakr" target="_blank"
            icon="i-simple-icons-linkedin" aria-label="GitHub" variant="soft" class="mx-2" />
          <UButton size="xl" color="amber" to="https://github.com/dworks" target="_blank" icon="i-simple-icons-github"
            aria-label="GitHub" variant="soft" class="mx-2" />
          <UButton size="xl" color="amber" to="http://t.me/OneHaKr" target="_blank" icon="i-simple-icons-telegram"
            aria-label="GitHub" variant="soft" class="mx-2" />
          <UButton size="xl" color="amber" to="/media/resume.pdf" target="_blank" icon="i-heroicons-link"
            aria-label="GitHub" variant="soft" class="mx-2" />
          <UButton size="xl" color="amber" to="https://dworks.io/?referrer=dworks" target="_blank"
            icon="i-simple-icons-devdotto" aria-label="GitHub" variant="soft" class="mx-2" />
        </div>
      </div>
    </ULandingSection>
  </div>
</template>

<style scoped></style>
