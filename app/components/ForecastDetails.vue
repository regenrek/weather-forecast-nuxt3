<template>
  <div class="my-4">
    <h2 class="text-2xl font-bold text-center">7-Day Forecast</h2>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error loading data</div>
    <div v-else>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <li v-for="day in forecast" :key="day.dt" class="p-4 bg-gray-500 rounded shadow">
          <p class="font-bold">{{ formatDate(day.dt) }}</p>
          <img
            :src="getIconUrl(day.weather[0].icon)"
            alt="Weather icon"
            width="50"
            height="50"
            loading="lazy"
          >
          <p>Temp: {{ day.temp.day }}°C</p>
          <p>Weather: {{ day.weather[0].description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWeatherData } from '~/composables/useWeatherData'
import { format } from 'date-fns'

const { data, pending, error } = useWeatherData()

const forecast = computed(() => data.value?.daily?.slice(0, 7) ?? [])

function formatDate(timestamp: number): string {
  return format(new Date(timestamp * 1000), 'EEEE, MMM d')
}

function getIconUrl(iconCode: string): string {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}
</script>