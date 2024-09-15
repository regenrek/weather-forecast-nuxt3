<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useSearchCity } from '~/composables/useSearchCity'
import type { FormSubmitEvent } from '#ui/types'
import { useTimeoutFn } from '@vueuse/core'

const { loading, search } = useSearchCity()

const state = reactive({
  selectedCity: null,
  latitude: null,
  longitude: null
})

const emit = defineEmits<{
  (e: 'submit', lat: number, lon: number): void
}>()

function onSelect(city) {
  state.latitude = city.latitude
  state.longitude = city.longitude
  console.log("onSelect", city)
}

const isButtonDisabled = ref(false)
const submitCount = ref(0)
const buttonText = ref('Search Current Weather')
const disableRateLimit = ref(true)

async function onSubmit(event: FormSubmitEvent<unknown>) {
  event.preventDefault()
  if (isButtonDisabled.value && !disableRateLimit.value) return

  emit('submit', state.latitude, state.longitude)
  
  if (disableRateLimit.value) return

  submitCount.value++
  isButtonDisabled.value = true
  buttonText.value = 'Search Current Weather'

  let timeout = 3000
  if (submitCount.value === 2) timeout = 5000
  if (submitCount.value >= 3) timeout = 10000

  useTimeoutFn(() => {
    isButtonDisabled.value = false
    buttonText.value = 'Search Current Weather'
  }, timeout)
}
</script>

<template>
    <div class="py-8">
  <UForm :state="state" class="flex flex-col gap-y-4" @submit="onSubmit">
    <div class="flex gap-x-4">
      <UInputMenu
        v-model="state.selectedCity"
        :search="search"
        :loading="loading"
        placeholder="Search for a city..."
        option-attribute="city"
        by="place_id"
        class="w-full"
        size="xl"
        @update:model-value="onSelect"
      />
      <input v-model="state.latitude" type="hidden">
      <input v-model="state.longitude" type="hidden">
      <UButton 
        type="submit" 
        size="xl" 
        :icon="isButtonDisabled && !disableRateLimit ? 'i-heroicons-no-symbol' : 'i-heroicons-magnifying-glass-20-solid'"
        :trailing="true"
        :disabled="isButtonDisabled && !disableRateLimit"
      >
        {{ buttonText }}
      </UButton>
    </div>
  </UForm>
</div>
</template>
