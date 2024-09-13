<script setup lang="ts">
import { reactive, defineEmits } from 'vue'
import { useSearchCity } from '~/composables/useSearchCity'
import type { FormSubmitEvent } from '#ui/types'

const { loading, search } = useSearchCity()

const state = reactive({
  selectedCity: null,
  latitude: null,
  longitude: null
})

state.latitude = 48.210033
state.longitude = 16.363449

const emit = defineEmits<{
  (e: 'submit', lat: number, lon: number): void
}>()

function onSelect(city) {
  state.latitude = city.latitude
  state.longitude = city.longitude
}

async function onSubmit(event: FormSubmitEvent<unknown>) {
  event.preventDefault()
  emit('submit', state.latitude, state.longitude)
}
</script>

<template>
    <div class="py-8">
  <UForm :state="state" class="flex gap-x-4" @submit="onSubmit">
    <UInputMenu
      v-model="state.selectedCity"
      :search="search"
      :loading="loading"
      placeholder="Search for a city..."
      option-attribute="city"
      by="place_id"
      class="w-full"
      size="xl"
      @select="onSelect"
    />
    <input v-model="state.latitude" type="hidden" >
    <input v-model="state.longitude" type="hidden" >
    <UButton type="submit" size="xl" icon="fluent:search-24-filled" :trailing="true">Search Current Weather</UButton>
  </UForm>
</div>
</template>
