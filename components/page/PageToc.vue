<template>
  <div>
    <BaseContentToc :links="toc" :open="open" :title="t('sections.toc')" />
  </div>
</template>


<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types'
const { t } = useI18n()

const props = defineProps({
  open: {
    type: Boolean,
    default: true
  },
  showh3: {
    type: Boolean,
    default: true
  }
})

const toc = ref<TocLink[]>([])

const parseContent = () => {
  const matches = document.querySelectorAll('h2, h3, h4')
  matches.forEach(value => {
    if (value.tagName === 'H2' && value.id) {
      const tocLink: TocLink = {
        id: `${value.id}`,
        text: value.textContent,
        depth: 2
      }
      toc.value.push(tocLink)
    }
    if (props.showh3 && value.tagName === 'H3' && value.id) {
      const tocLink: TocLink = {
        id: `${value.id}`,
        text: value.textContent,
        depth: 3
      }
      toc.value.push(tocLink)
    }
  })
}

onMounted(() => {
  nextTick(() => {
    parseContent()
  })
})

</script>
