import { isValidServiceToken } from '~/server/utils/tokenValidation'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const token = query.token

  if (!isValidServiceToken(token, 'maptiler')) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Forbidden',
    })
  }

  // Construct the real MapTiler URL
  const maptilerUrl = `https://api.maptiler.com/maps${event.context.params._.join('/')}?key=${process.env.MAPTILER_API_KEY}`

  // Proxy the request to MapTiler
  return proxyRequest(event, maptilerUrl)
})