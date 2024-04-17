<template>
  <USelectMenu v-bind="$attrs" v-model="preference" :leading-icon="preference.icon" :options="options"
    :ui="{ rounded: 'rounded-full' }">
    <template #label>
      <span class="truncate">{{ preference.label }}</span>
    </template>
  </USelectMenu>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

const colorMode = useColorMode()
const appConfig = useAppConfig()

const options = computed(() => [
  { label: 'System', value: 'system', icon: appConfig.ui.icons.system },
  { label: 'Light', value: 'light', icon: appConfig.ui.icons.light },
  { label: 'Dark', value: 'dark', icon: appConfig.ui.icons.dark }
])

const preference = computed({
  get() {
    return options.value.find(option => option.value === colorMode.preference) || options.value[0]
  },
  set(option) {
    colorMode.preference = option!.value
  }
})
</script>
