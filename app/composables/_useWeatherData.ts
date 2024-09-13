import { useState, computed } from '#imports'
import type { UseFetchOptions } from 'nuxt/app'

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

interface WeatherState {
  data: WeatherData | null
  pending: boolean
  error: Error | null
}

interface WeatherComposable {
  ready: ComputedRef<boolean>
  data: ComputedRef<WeatherData | null>
  pending: ComputedRef<boolean>
  error: ComputedRef<Error | null>
  currentWeatherIcon: ComputedRef<string>
  fetch: (lat: number, lon: number) => Promise<void>
  clear: () => void
}

const useWeatherState = () => useState<WeatherState>('nuxt-weather', () => ({
  data: null,
  pending: true,
  error: null
}))

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
}

export function useWeatherData(): WeatherComposable {
  const weatherState = useWeatherState()

  const currentWeatherIcon = computed(() => {
    if (weatherState.value.data && weatherState.value.data.current.weather.length > 0) {
      const weatherId = weatherState.value.data.current.weather[0].id
      return weatherIcons[weatherId] || 'default-icon'
    }
    return 'default-icon'
  })

  return {
    ready: computed(() => !weatherState.value.pending),
    data: computed(() => weatherState.value.data),
    pending: computed(() => weatherState.value.pending),
    error: computed(() => weatherState.value.error),
    currentWeatherIcon,
    fetch,
    clear
  }
}

async function fetch(lat: number, lon: number) {
  const weatherState = useWeatherState()
  weatherState.value.pending = true
  weatherState.value.error = null

  console.log("fetching weather data", lat, lon)

  try {
    const options: UseFetchOptions<WeatherData> = {
      method: 'GET',
      params: { lat, lon }
    }
    const { data } = await $fetch('/api/weather-test', options)

    console.log("data2", data.value.current, lat, lon)

    if (error.value) throw error.value
    weatherState.value.data = data.value
  } catch (err) {
    console.error("Error fetching weather data:", err)
    weatherState.value.error = err as Error
  } finally {
    weatherState.value.pending = false
  }
}

function clear() {
  const weatherState = useWeatherState()
  weatherState.value = {
    data: null,
    pending: true,
    error: null
  }
}