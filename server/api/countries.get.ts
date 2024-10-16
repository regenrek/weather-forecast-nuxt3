interface NominatimResponse {
  display_name: string
  lat: string
  lon: string
  boundingbox: string[]
}

export default defineEventHandler(async (event) => {
  const { q } = getQuery(event)

  if (!q || typeof q !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request: Missing or invalid country query parameter',
    })
  }

  const url = 'https://nominatim.openstreetmap.org/search'

  const response = await $fetch<NominatimResponse[]>(url, {
    params: {
      q,
      format: 'json',
      limit: 5,
      countrycodes: '', // Leave empty to search all countries
      featuretype: 'country',
    },
    headers: {
      'User-Agent': 'YourAppName/1.0 (your.email@example.com)',
    },
  })

  if (!response || !response.length) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Country not found',
    })
  }

  return response.map(({ display_name, lat, lon, boundingbox }) => ({
    country: display_name,
    latitude: parseFloat(lat),
    longitude: parseFloat(lon),
    boundingbox: boundingbox.map(parseFloat),
  }))
})