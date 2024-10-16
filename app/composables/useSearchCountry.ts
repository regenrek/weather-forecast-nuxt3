import { ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'

export function useSearchCountry() {
  const loading = ref(false)

  const search = useDebounceFn(async (query: string) => {
    if (!query) return []
    loading.value = true
    try {
      const response = await $fetch('/api/countries', {
        params: { q: query },
      })

      return response
    } finally {
      loading.value = false
    }
  }, 300)

  return {
    loading,
    search,
  }
}