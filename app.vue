<script setup lang="ts">
const localePath = useLocalePath()
const { primaryColor } = useAppConfig()

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: primaryColor },
    { hid: 'keywords', name: 'keywords', content: 'startups, microstartups, opensource, apps, websites' }
  ],
  link: [
    { hid: 'apple-touch-icon', rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'mask-icon', color: '#2C2C2C', href: '/safari-pinned-tab.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'shortcut icon', href: '/favicon.ico' }
  ],
  script: [{
    children: `
    const nuxtColorMode = localStorage.getItem('nuxt-color-mode')
    const isDarkMode = ['dark'].includes(nuxtColorMode) || (!(nuxtColorMode) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    if(isDarkMode){
      document.documentElement.setAttribute("class", "dark")
    }`}
  ]
})

useSeoMeta({
  titleTemplate: '%s - 1hakr',
  ogImage: '/feature_graphic.jpg',
  twitterImage: '/feature_graphic.jpg',
  twitterCard: 'summary_large_image'
})

function getNavLinks() {
  const links = [{
    label: 'Products',
    to: computed(() => localePath('/products'))
  }, {
    label: 'Designs',
    to: computed(() => localePath('/designs'))
  }]
  return links
}
useState('commonData', () => shallowRef({
  links: {
    company: computed(() => getNavLinks())
  }
}))
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
  </div>
</template>
