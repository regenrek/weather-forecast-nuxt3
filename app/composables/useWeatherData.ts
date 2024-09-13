import { ref, watch, computed } from 'vue'
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
  minutely: { dt: number; precipitation: number }[]
}

export function useWeatherData() {
  const lat = useState<number>('weatherLat', () => 48.208176)
  const lon = useState<number>('weatherLon', () => 16.373819)
  const data = useState<WeatherData | null>('weatherData', () => null)
  const pending = useState<boolean>('weatherPending', () => false)
  const error = useState<any>('weatherError', () => null)

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

  const fetchWeatherData = async () => {
    pending.value = true
    error.value = null

    try {
      const fetchedData = await $fetch("/api/weather", {
        method: 'GET',
        params: {
          lat: lat.value,
          lon: lon.value
        }
      })

      data.value = fetchedData as WeatherData
    } catch (err) {
      console.error("Error fetching weather data:", err)
      error.value = err
    } finally {
      pending.value = false
    }
  }

  // Watch for changes in lat or lon
  watch([lat, lon], () => {
    fetchWeatherData()
  }, { immediate: true })

  const currentWeatherIcon = computed(() => {
    if (data.value?.current?.weather?.[0]?.id) {
      const weatherId = data.value.current.weather[0].id
      return weatherIcons[weatherId as keyof typeof weatherIcons] || 'i-fluent:weather-partly-cloudy-day-48-filled'
    }
    return 'i-fluent:weather-partly-cloudy-day-48-filled' // Default icon
  })

  return {
    data,
    pending,
    error,
    lat,
    lon,
    currentWeatherIcon,
    fetchWeatherData
  }
}