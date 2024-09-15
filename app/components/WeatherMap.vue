<template>
  <div class="h-[600px] w-full relative rounded-lg overflow-hidden">
    <ClientOnly>
      <LMap
        ref="map"
        :zoom="zoom"
        :center="[lat, lon]"
        :use-global-leaflet="false"
        class="h-full w-full"

      @ready="onMapReady"
      >
        <LTileLayer
          v-if="showRainLayer"
          :url="rainLayerUrl"
          :opacity="0.5"
          layer-type="overlay"
          name="Rain"
        />
        <LTileLayer
          :url="mapUrl"
          :attribution="attribution"
          layer-type="base"
          name="OpenStreetMap"
        />
        <LControl v-if="isMapReady" position="topright">
          <button class="leaflet-control-button" @click="toggleRainLayer">
            {{ showRainLayer ? 'Hide Rain' : 'Show Rain' }}
          </button>
        </LControl>      
      </LMap>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { useWeatherData } from '~/composables/useWeatherData'

const zoom = ref(13)
const { lat, lon } = useWeatherData()
const config = useRuntimeConfig()
const colorMode = useColorMode()
const showRainLayer = ref(false)
const isMapReady = ref(false)
const map = ref(null);

const mapUrl = computed(() => {
  return colorMode.value === 'dark'
    ? `https://api.maptiler.com/maps/toner-v2/{z}/{x}/{y}.png?key=${config.public.maptilerApiKey}`
    : `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${config.public.maptilerApiKey}`
})

const attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'

const rainLayerUrl = computed(() => {
  return `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${config.public.openWeatherApiKey}`
})

const toggleRainLayer = () => {
  showRainLayer.value = !showRainLayer.value
}

const onMapReady = () => {
  const leafletMap = map.value?.leafletObject;
  if (!leafletMap) {
    console.error('Leaflet map instance is not available.');
    return;
  } else {
    console.log("ready",map.value.leafletObject)
    isMapReady.value = true
  }
}
</script>

<style scoped>
.leaflet-control-button {
  background-color: black;
  border: 2px solid rgba(0,0,0,0.2);
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  z-index: 800;
}
</style>