<template>
  <div>
    <WeatherMap />
    <CitySearchForm @submit="handleCitySubmit" />
    <TemperatureDisplay />
  </div>
</template>

<script setup lang="ts">
import { useWeatherData } from '~/composables/useWeatherData'

const { lat, lon } = useWeatherData()

async function handleCitySubmit(latp: number, lonp: number) {
  lat.value = latp
  lon.value = lonp
}

// await fetch(48.210033, 16.363449)
</script>