import { isValidServiceToken } from '~/server/utils/tokenValidation'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const token = query.token

  if (!isValidServiceToken(token, 'openweather')) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Forbidden',
    })
  }

  // Construct the real OpenWeatherMap URL
  const openweatherUrl = `https://tile.openweathermap.org/map${event.context.params._.join('/')}?appid=${process.env.OPENWEATHER_API_KEY}`

  // Proxy the request to OpenWeatherMap
  return proxyRequest(event, openweatherUrl)
})
