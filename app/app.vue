<script setup lang="ts">
const localePath = useLocalePath()
const { primaryColor } = useAppConfig()

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: (primaryColor as string) ?? '#000000' },
    { key: 'keywords', name: 'keywords', content: 'startups, microstartups, opensource, apps, websites' }
  ],
  link: [
    { key: 'apple-touch-icon', rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { key: 'mask-icon', rel: 'mask-icon', color: '#2C2C2C', href: '/safari-pinned-tab.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'shortcut icon', href: '/favicon.ico' }
  ]
})

useSeoMeta({
  titleTemplate: '%s - 1hakr',
  ogImage: '/feature_graphic.jpg',
  twitterImage: '/feature_graphic.jpg',
  twitterCard: 'summary_large_image'
})

// Build nav links once; computed refs resolve locale lazily without
// rebuilding the array on every locale-change tick.
const companyLinks = [
  { label: 'Products', to: computed(() => localePath('/products')) },
  { label: 'Designs', to: computed(() => localePath('/designs')) },
]
useState('commonData', () => shallowRef({
  links: { company: companyLinks }
}))
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
