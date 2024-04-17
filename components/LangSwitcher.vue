<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
// Get active locale and supported locales
const { locale, locales, setLocale } = useI18n()
// Cast to avoid TypeScript errors in template
const supportedLocales = locales.value as Array<LocaleObject>
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const currentLanguage = computed({
  get: () => {
    const option = getLocaleFromCode(locale.value)
    return option
  },
  set: (option: LocaleObject) => {
    const code = option.code
    router.push({ path: switchLocalePath(code) })
    setLocale(code)
  }
})

function getLocaleFromCode(code: String) {
  const localeCurrent = computed(() => {
    return supportedLocales.filter(i => i.code === code)
  })
  return localeCurrent.value[0]
}
</script>

<template>
  <ClientOnly>
    <USelectMenu v-bind="$attrs" v-model="currentLanguage" :options="supportedLocales" option-attribute="name">
      <template #label>
        <span class="truncate">{{ currentLanguage.name }}</span>
      </template>
    </USelectMenu>

    <template #fallback>
      <USelectMenu v-bind="$attrs" :model-value="locales[0]" value-attribute="code" option-attribute="name" disabled />
    </template>
  </ClientOnly>
</template>