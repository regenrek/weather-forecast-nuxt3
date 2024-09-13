// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/plausible',
    'nuxt-og-image',
    '@nuxtjs/leaflet',
    '@pinia/nuxt',
  ],

  plausible: {
    // Prevent tracking on localhost
    ignoredHostnames: ['localhost'],
  },
  runtimeConfig: {
    public: {
      openWeatherApiKey: process.env.OPENWEATHER_API_KEY || '',
    }
  },
  typescript: {
    strict: false
  },

  future: {
    compatibilityVersion: 4,
  },
  
  compatibilityDate: "2024-05-14",
})