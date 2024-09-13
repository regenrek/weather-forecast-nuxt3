import { defineEventHandler, getQuery, createError } from 'h3'
import { ofetch } from 'ofetch'

export default defineEventHandler(async (event) => {
  const { lat, lon } = getQuery(event)

  const config = useRuntimeConfig()
  const openWeatherApiKey = config.openWeatherApiKey

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

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherApiKey}`

  const data = await ofetch(url)

  return data
})