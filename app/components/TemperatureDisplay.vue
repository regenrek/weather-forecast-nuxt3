<template>
  <ClientOnly>
    <div class="flex gap-x-2">
      <div class="flex justify-center items-center gap-x-2">
        <UIcon :name="currentWeatherIcon" class="text-2xl"/>
        <div>
        <span class="block leading-none">Current</span>
          <span class="block text-gray-600 leading-none">Temperature</span>
        </div>
      </div>
      <div v-if="pending">Loading...</div>
      <div v-else-if="error">Error loading data</div>
      <div v-else>
        <p class="text-4xl">{{ currentTemp }}°C</p>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const { data, pending, error, currentWeatherIcon } = useWeatherData()

const currentTemp = computed(() => data.value?.current?.temp ?? '--')
</script>