import { defineEventHandler, getQuery, createError } from 'h3'
import { ofetch } from 'ofetch'

// Use KV storage for rate limiting
const KV_KEY_PREFIX = 'weather_rate_limit:'
const RATE_LIMIT_WINDOW = 60 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 1

export default defineEventHandler(async (event) => {
  const { lat, lon } = getQuery(event)
  const config = useRuntimeConfig()
  const openWeatherApiKey = config.public.openWeatherApiKey
  const kv = useStorage('kv')

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
  const key = `${KV_KEY_PREFIX}${lat},${lon}`
  const now = Math.floor(Date.now() / 1000) // Current time in seconds

  const storedValue = await kv.get(key) as string | null
  const requestCount = storedValue ? parseInt(storedValue.split(':')[0], 10) : 0
  const lastRequestTime = storedValue ? parseInt(storedValue.split(':')[1], 10) : 0

  if (now - lastRequestTime >= RATE_LIMIT_WINDOW) {
    // Reset if outside the window
    await kv.set(key, `1:${now}`, { ex: RATE_LIMIT_WINDOW })
  } else if (requestCount >= MAX_REQUESTS_PER_WINDOW) {
    const timeToWait = RATE_LIMIT_WINDOW - (now - lastRequestTime)
    throw createError({
      statusCode: 429,
      statusMessage: `Too Many Requests. Please try again in ${timeToWait} seconds.`
    })
  } else {
    // Increment the counter
    await kv.set(key, `${requestCount + 1}:${lastRequestTime}`, { ex: RATE_LIMIT_WINDOW })
  }

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherApiKey}`

  const data = await ofetch(url)

  return data
})