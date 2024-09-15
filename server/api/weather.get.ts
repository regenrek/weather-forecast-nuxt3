import { defineEventHandler, getQuery, createError } from 'h3'
import { ofetch } from 'ofetch'

const RATE_LIMIT_WINDOW = 10 // 10 seconds
let lastRequestTime: number | null = null

export default defineEventHandler(async (event) => {
  const { lat, lon } = getQuery(event)
  const config = useRuntimeConfig()
  const openWeatherApiKey = config.public.openWeatherApiKey

  if (!openWeatherApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'API key is missing'
    })
  }

  if (!lat || !lon) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Latitude and Longitude are required'
    })
  }

  const now = Date.now()
  if (lastRequestTime && now - lastRequestTime < RATE_LIMIT_WINDOW * 1000) {
    const timeToWait = Math.ceil((RATE_LIMIT_WINDOW * 1000 - (now - lastRequestTime)) / 1000)
    throw createError({
      statusCode: 429,
      statusMessage: `Too Many Requests. Please try again in ${timeToWait} seconds.`
    })
  }

  lastRequestTime = now

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherApiKey}`

  const data = await ofetch(url)

  return data
})