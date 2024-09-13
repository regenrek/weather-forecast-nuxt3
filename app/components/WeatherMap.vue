<template>
  <div class="h-[600px] w-full relative rounded-lg overflow-hidden">
    <ClientOnly>
      <LMap
        ref="map"
        :zoom="zoom"
        :center="[lat, lon]"
        :use-global-leaflet="false"
        class="h-full w-full"
      >
        <LTileLayer
          :url="mapUrl"
          :attribution="attribution"
          layer-type="base"
          name="OpenStreetMap"
        />
        <LMarker :lat-lng="[lat, lon]">
          <template #default>
            <div class="pin"/>
          </template>
        </LMarker>
      </LMap>
    </ClientOnly>
    <!-- <div v-if="currentWeatherIcon" class="weather-icon">
      <UIcon :name="currentWeatherIcon" class="w-12 h-12 text-yellow-200 shadow-2xl" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { useWeatherData } from '~/composables/useWeatherData'

const zoom = ref(13)
const { lat, lon, currentWeatherIcon } = useWeatherData()
const config = useRuntimeConfig()
const colorMode = useColorMode()

const mapUrl = computed(() => {
  return colorMode.value === 'dark'
    ? `https://api.maptiler.com/maps/toner-v2/{z}/{x}/{y}.png?key=${config.public.maptilerApiKey}`
    : `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${config.public.maptilerApiKey}`
})

const attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
</script>

<style scoped>
.pin {
  width: 24px;
  height: 24px;
  background-color: red;
  border-radius: 50%;
}

.weather-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 999;
}
</style>