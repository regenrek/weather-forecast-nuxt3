import { defineEventHandler, getQuery, createError } from 'h3'
import { ofetch } from 'ofetch'

// Rate limiting store with sliding window
const rateLimit = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60000 // 1 minute in milliseconds
const MAX_REQUESTS_PER_WINDOW = 1

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

  // Updated rate limiting logic
  const key = `${lat},${lon}`
  const now = Date.now()
  const requestTimes = rateLimit.get(key) || []

  // Remove timestamps outside the current window
  const validRequestTimes = requestTimes.filter(time => now - time < RATE_LIMIT_WINDOW)

  if (validRequestTimes.length >= MAX_REQUESTS_PER_WINDOW) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too Many Requests'
    })
  }

  // Add current request timestamp
  validRequestTimes.push(now)
  rateLimit.set(key, validRequestTimes)

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherApiKey}`

  const data = await ofetch(url)

  return data
})