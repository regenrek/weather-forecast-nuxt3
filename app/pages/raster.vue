<template>
  <div>
    <RasterMap />
    <MapSectorForm @submit="handleMapSectorSubmit" />
  </div>
</template>

<script setup lang="ts">
import { useMapSectors } from '~/composables/useMapSectors'

const { sectors, error, calculateSectors } = useMapSectors()

async function handleMapSectorSubmit(country: string, zoom: number, boundingbox: number[]) {
  console.log("handleMapSectorSubmit", country, zoom, boundingbox)
  await calculateSectors(country, zoom, boundingbox)
  // Handle the calculated sectors here
}

onMounted(async () => {
  console.log("onMounted")
  calculateSectors("Austria", 10, [46.3722987, 49.0205249, 9.5307487, 17.1607728])
})
</script>