<template>
  <div class="h-[600px] w-full relative rounded-lg">
    <LMap
      ref="map"
      :zoom="zoom"
      :center="[lat, lon]"
      :use-global-leaflet="false"
      class="h-full w-full"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker :lat-lng="[lat, lon]">
        <template #default>
          <div class="pin"/>
        </template>
      </LMarker>
    </LMap>
    <div v-if="currentWeatherIcon" class="weather-icon">
        {{  currentWeatherIcon }}
      <UIcon :name="currentWeatherIcon" class="w-12 h-12 text-blue-500" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useWeatherData } from '~/composables/useWeatherData'

const { lat, lon, currentWeatherIcon } = useWeatherData()

const zoom = ref(10)
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