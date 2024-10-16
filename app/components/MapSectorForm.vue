<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useSearchCountry } from '~/composables/useSearchCountry'
import type { FormSubmitEvent } from '#ui/types'
import { useTimeoutFn } from '@vueuse/core'

const { loading, search } = useSearchCountry()

const state = reactive({
  selectedCountry: null,
  latitude: null,
  longitude: null,
  boundingbox: null,
  zoom: 8,
})

const emit = defineEmits<{
  (e: 'submit', country: string, zoom: number, boundingbox: number[]): void
}>()

function onSelect(country) {
  state.latitude = country.latitude
  state.longitude = country.longitude
  state.boundingbox = country.boundingbox
  console.log("onSelect", country)
}

const isButtonDisabled = ref(false)
const submitCount = ref(0)
const buttonText = ref('Calculate Map Sectors')
const disableRateLimit = ref(false)

const zoomLevels = [
  { label: 'Country', value: 5 },
  { label: 'City', value: 12 },
  { label: 'Region', value: 8 },
]

async function onSubmit(event: FormSubmitEvent<unknown>) {
  event.preventDefault()
  if (isButtonDisabled.value && !disableRateLimit.value) return

  if (!state.selectedCountry || !state.boundingbox) {
    console.error('No country selected')
    return
  }

  emit('submit', state.selectedCountry.country, state.zoom, state.boundingbox)
  
  if (disableRateLimit.value) return

  submitCount.value++
  isButtonDisabled.value = true
  buttonText.value = 'Calculating...'

  let timeout = 3000
  if (submitCount.value === 2) timeout = 5000
  if (submitCount.value >= 3) timeout = 10000

  useTimeoutFn(() => {
    isButtonDisabled.value = false
    buttonText.value = 'Calculate Map Sectors'
  }, timeout)
}
</script>

<template>
  <div class="py-8">
    <UForm :state="state" class="flex flex-col gap-y-4" @submit="onSubmit">
      <div class="flex gap-x-4">
        <UInputMenu
          v-model="state.selectedCountry"
          :search="search"
          :loading="loading"
          placeholder="Search for a country..."
          option-attribute="country"
          by="country"
          class="w-full"
          size="xl"
          @update:model-value="onSelect"
        />
        <USelect
          v-model="state.zoom"
          :options="zoomLevels"
          option-attribute="label"
          size="xl"
        />
        <UButton 
          type="submit" 
          size="xl" 
          :icon="isButtonDisabled && !disableRateLimit ? 'i-heroicons-no-symbol' : 'i-heroicons-map'"
          :trailing="true"
          :disabled="isButtonDisabled && !disableRateLimit || !state.selectedCountry"
        >
          {{ buttonText }}
        </UButton>
      </div>
    </UForm>
  </div>
</template>
