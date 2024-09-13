<template>
  <div>
    <WeatherMap />
    <CitySearchForm @submit="handleCitySubmit" />
    <ForecastDetails />
  </div>
</template>

<script setup lang="ts">
import { useWeatherData } from '~/composables/useWeatherData'

// const { lat, lon } = toRefs(useWeatherData())

// async function handleCitySubmit(latp: number, lonp: number) {
//   lat.value = latp
//   lon.value = lonp
// }

const weatherData = useWeatherData()

async function handleCitySubmit(latp: number, lonp: number) {
  console.log("handleCitySubmit", latp)
  weatherData.lat.value = latp
  weatherData.lon.value = lonp
}

// await fetch(48.210033, 16.363449)
</script>