import { defineNuxtPlugin } from '#app'
import { useAppDataStore } from '~/store/appData'

export default defineNuxtPlugin(async (nuxtApp) => {
  const appDataStore = useAppDataStore()

  // Check if we're on the server side
  if (import.meta.server) {
    await appDataStore.fetchInitialData()
    
    // Make the state available to the client
    nuxtApp.payload.appData = appDataStore.$state
  } else if (nuxtApp.payload.appData) {
    // On client side, initialize the store with the data from SSR
    appDataStore.$state = nuxtApp.payload.appData
  }
})
