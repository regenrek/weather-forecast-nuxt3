import { createHash } from 'crypto'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const userToken = query.token

  // Validate user token (implement your own auth logic)
  if (!isValidToken(userToken)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Forbidden',
    })
  }

  // Generate short-lived, single-use tokens for each service
  const maptilerToken = generateServiceToken('maptiler')
  const openweatherToken = generateServiceToken('openweather')

  return {
    mapTilerUrl: `/api/proxy/maptiler/{style}/{z}/{x}/{y}.png?token=${maptilerToken}`,
    rainLayerUrl: `/api/proxy/openweather/precipitation_new/{z}/{x}/{y}.png?token=${openweatherToken}`
  }
})

function isValidToken(token) {
  // Implement your token validation logic here
  // This could involve checking against a database, validating a JWT, etc.
  return true // Placeholder
}

function generateServiceToken(service) {
  const timestamp = Date.now()
  return createHash('sha256')
    .update(`${service}-${timestamp}-${process.env.SECRET_KEY}`)
    .digest('hex')
}