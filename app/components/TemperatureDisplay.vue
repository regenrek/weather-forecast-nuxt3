<template>
  <div class="text-center my-4">
    <h2 class="text-2xl font-bold">Current Temperature</h2>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error loading data</div>
    <div v-else>
      <p class="text-4xl">{{ currentTemp }}°C</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWeatherData } from '~/composables/useWeatherData'

const { data, pending, error } = useWeatherData()

  console.log("data", data.value)

const currentTemp = computed(() => data.value?.current?.temp ?? '--')
</script>