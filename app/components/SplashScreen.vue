<template>
  <div v-if="loading == true"
    class="bg-white dark:bg-black fixed w-full h-screen z-[9999] left-0 top-0 flex flex-col justify-center items-center">
    <img class="animate-fadein" :src="src" :width="width">
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: 'logo.png',
    required: false
  },
  time: {
    type: Number,
    default: 100,
    required: false
  },
  width: {
    type: String,
    default: '80px',
    required: false
  }
})
const { time } = toRefs(props)
const loading = ref(true)
setTimeout(() => loading.value = false, time)
</script>