interface NominatimResponse {
  display_name: string
  lat: string
  lon: string
}

export default defineEventHandler(async (event) => {
  const { addr } = getQuery(event)

  if (!addr || typeof addr !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request: Missing or invalid city query parameter',
    })
  }

  const url = 'https://nominatim.openstreetmap.org/search'

  const response = await $fetch<NominatimResponse[]>(url, {
    params: {
      q: addr,
      format: 'json',
      limit: 4,
    },
    headers: {
      'User-Agent': 'YourAppName/1.0 (your.email@example.com)',
    },
  })

  if (!response || !response.length) {
    throw createError({
      statusCode: 404,
      statusMessage: 'City not found',
    })
  }

  return response.map(({ display_name, lat, lon }) => ({
    city: display_name,
    latitude: parseFloat(lat),
    longitude: parseFloat(lon),
  }))
})
