// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  css: ['~/assets/css/main.css'],

  extends: [
    '@zunderai/ui',
  ],

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
      maptilerApiKey: process.env.MAPTILER_API_KEY || '',
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