import { ref, watchEffect, computed } from 'vue'

import { useState } from '#app'

interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

interface WeatherData {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: {
    dt: number
    sunrise: number
    sunset: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    weather: Weather[]
  }
  minutely: { dt: number, precipitation: number }[]
}

interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

interface WeatherData {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: {
    dt: number
    sunrise: number
    sunset: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    weather: Weather[]
  }
  minutely: { dt: number, precipitation: number }[]
}

export function useWeatherData() {
  const lat = ref(48.208176)
  const lon = ref(16.373819)
  const data = useState<WeatherData | null>('weatherData', () => null)
  const pending = ref(true)
  const error = ref(null)

  const weatherIcons = {
    200: 'i-fluent:weather-thunderstorm-48-filled',
    300: 'i-fluent:weather-drizzle-48-filled',
    500: 'i-fluent:weather-rain-48-filled',
    600: 'i-fluent:weather-snow-48-filled',
    701: 'i-fluent:weather-mist-48-filled',
    800: 'i-fluent:weather-clear-48-filled',
    801: 'i-fluent:weather-few-clouds-48-filled',
    802: 'i-fluent:weather-scattered-clouds-48-filled',
    803: 'i-fluent:weather-broken-clouds-48-filled',
    804: 'i-fluent:weather-overcast-clouds-48-filled',
    // Add more mappings as needed
  }

  watchEffect(async () => {
    if (data.value) {
      pending.value = false
      return
    }

    pending.value = true
    error.value = null
    try {
      const { data: fetchedData, error: fetchError } = await $fetch("/api/weather-test", {
        method: 'GET',
        params: {
          lat: lat.value,
          lon: lon.value
        }
      })

      console.log("fetchedData", fetchedData)

      if (fetchError) throw fetchError
      data.value = fetchedData
    } catch (err) {
      console.error("error", err)
      error.value = err
    } finally {
      console.log("info", false)
      pending.value = false
    }
  })

  const currentWeatherIcon = computed(() => {
    if (data.value && data.value.current.weather.length > 0) {
      const weatherId = data.value.current.weather[0].id
      return weatherIcons[weatherId] || 'default-icon'
    }
    return 'default-icon'
  })

  return { data, pending, error, lat, lon, currentWeatherIcon }
}