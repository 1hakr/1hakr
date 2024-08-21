<template>
  <div>
    <div v-bind="attrs" class="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center" :class="rounded"
      :style="`background-image: url('${background}'); height: ${height}px`">
      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.3)">
        <div class="flex h-full content-end items-end">
          <NuxtLink v-if="to" :to="to" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          <p v-if="title || $slots.title" :class="ui.title" class="mx-4 my-2">
            <slot name="title">
              {{ title }}
            </slot>
          </p>

          <p v-if="description || $slots.description" :class="ui.description">
            <slot name="description">
              {{ description }}
            </slot>
          </p>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nuxtLinkProps } from '#ui/utils'

const config = {
  wrapper: 'relative group',
  to: 'hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50',
  icon: {
    wrapper: 'mb-6 flex',
    base: 'w-10 h-10 flex-shrink-0 text-primary'
  },
  body: {
    base: 'flex-1'
  },
  title: 'text-white text-start text-xl font-bold flex items-center gap-1.5',
  description: 'text-[15px] text-gray-500 dark:text-gray-400 mt-1'
}


defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  ...nuxtLinkProps,
  title: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    default: undefined
  },
  background: {
    type: String,
    default: undefined
  },
  slug: {
    type: String,
    default: undefined
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined
  },
  ui: {
    type: Object as PropType<Partial<typeof config>>,
    default: () => ({})
  }
})

const { slug } = props
const isPassport = slug === 'passport'
const height = ref(isPassport ? 350 : 120)
const rounded = ref(isPassport ? 'rounded-r-lg' : 'rounded-lg')
const { ui, attrs } = useUI('page.card', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>
