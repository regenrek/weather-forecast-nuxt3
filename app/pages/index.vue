<template>
  <div>
    <WeatherMap />
    <CitySearchForm @submit="handleCitySubmit" />
    <ForecastDetails />
  </div>
</template>

<script setup lang="ts">
import { useWeatherData } from '~/composables/useWeatherData'

const weatherData = useWeatherData()

async function handleCitySubmit(latp: number, lonp: number) {
  console.log("handleCitySubmit", latp, lonp)
  weatherData.fetchWeatherData(latp, lonp)
}

onMounted(async () => {
  weatherData.fetchWeatherData(48.210033, 16.363449)
})

</script>