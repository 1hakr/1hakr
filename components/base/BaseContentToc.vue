<template>
  <nav :class="ui.wrapper" v-bind="attrs">
    <div :class="[links?.length ? ui.container.base : ui.container.empty]">
      <slot name="top" />

      <UButton color="gray" variant="link" v-if="links?.length" tabindex="-1" @click="open = !open"
        :ui="{ rounded: 'rounded-none', color: { gray: { link: 'hover:no-underline' } } }" :padded="false">
        <span :class="ui.button.label">{{ title }}</span>

        <UIcon :name="ui.button.trailingIcon.name"
          :class="[ui.button.trailingIcon.base, open ? ui.button.trailingIcon.active : ui.button.trailingIcon.inactive]" />
      </UButton>

      <UContentTocLinks :links="links" :ui="ui.links" :class="[open ? '' : 'hidden']" />

      <slot name="bottom" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { TocLink } from '@nuxt/content/dist/runtime/types'

const appConfig = useAppConfig()

const config = computed(() => ({
  wrapper: 'sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]',
  container: {
    base: 'border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3',
    empty: 'lg:py-8 space-y-3'
  },
  button: {
    base: 'flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group',
    label: 'font-bold text-sm/6 truncate',
    trailingIcon: {
      name: appConfig.ui.icons.chevron,
      base: 'w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5',
      active: 'text-gray-700 dark:text-gray-200',
      inactive: 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90'
    }
  },
  links: {}
}))

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  title: {
    type: String,
    default: 'Table of Contents'
  },
  links: {
    type: Array as PropType<TocLink[]>,
    default: () => []
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined
  },
  open: {
    type: Boolean,
    default: false
  },
  ui: {
    type: Object as PropType<Partial<typeof config.value>>,
    default: () => ({})
  }
})

const { ui, attrs } = useUI('content.toc', toRef(props, 'ui'), config, toRef(props, 'class'), true)

const open = ref(false)

watch(() => props.open, (newVal) => {
  open.value = newVal
}, { immediate: true })
</script>
