<template>
  <div class="rounded-xl w-full min-w-[100px] h-[350px] bg-gray-300 dark:bg-gray-900">
    <ClientOnly>
      <LMap ref="map" :zoom="zoom" :center="latLng" class="rounded-xl">
        <LTileLayer :url="tileLayer" :attribution="attribution" layer-type="base" name="OpenStreetMap" />
        <LMarker :lat-lng="latLng" />
      </LMap>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { LMap, LMarker, LTileLayer } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'

const zoom = 2
const attribution = ''
const colorMode = useColorMode()
const latLng = [-34.000162, 150.750186]
const tileLayer = computed(() => colorMode.value !== 'dark' ? 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png')

</script>
<style>
.leaflet-container .leaflet-control-attribution {
    visibility: hidden;
}
</style>