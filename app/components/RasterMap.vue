<template>
  <div class="h-[600px] w-full relative rounded-lg overflow-hidden">
    <ClientOnly>
      <LMap
        ref="map"
        :zoom="zoom"
        :center="[lat, lon]"
        :use-global-leaflet="false"
        class="h-full w-full"
        @ready="onMapReady"
      >
        <!-- Base Map Layer -->
        <LTileLayer
          :url="mapUrl"
          :attribution="attribution"
          layer-type="base"
          name="MapTiler"
        />

        <!-- Sectors Layer -->
        <LFeatureGroup v-if="isMapReady">
          <LRectangle
            v-for="sector in sectors"
            :key="`${sector.x}-${sector.y}-${sector.z}`"
            :bounds="sector.bounds"
            :color="'#ff7800'"
            :weight="1"
          >
            <LPopup>
              <div>
                <p>Latitude: {{ ((sector.bounds[0][0] + sector.bounds[1][0]) / 2).toFixed(4) }}</p>
                <p>Longitude: {{ ((sector.bounds[0][1] + sector.bounds[1][1]) / 2).toFixed(4) }}</p>
                <p>Zoom: {{ sector.z }}</p>
              </div>
            </LPopup>
          </LRectangle>
        </LFeatureGroup>
      </LMap>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMapSectors } from '~/composables/useMapSectors'; // Import the composable
import { LMap, LTileLayer, LRectangle, LFeatureGroup, LPopup } from '@vue-leaflet/vue-leaflet'; // Import necessary components

export interface Sector {
  bounds: [number, number][];
  x: number;
  y: number;
  z: number;
}

const zoom = ref(11); // Set initial zoom level
const lat = ref(47.5162); // Center latitude for Austria
const lon = ref(14.5501); // Center longitude for Austria
const config = useRuntimeConfig();
const colorMode = useColorMode();
const isMapReady = ref(false);
const map = ref(null);

const mapUrl = computed(() => {
  return colorMode.value === 'dark'
    ? `https://api.maptiler.com/maps/toner-v2/{z}/{x}/{y}.png?key=${config.public.maptilerApiKey}`
    : `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${config.public.maptilerApiKey}`;
});

const attribution =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

// Integrate useMapSectors composable
const { sectors } = useMapSectors();

interface SectorInfo {
  lat: number;
  lng: number;
  z: number;
}

const selectedSector = ref<SectorInfo | null>(null);
const popupPosition = ref<[number, number] | null>(null);

const onMapReady = () => {
  const leafletMap = map.value?.leafletObject;
  if (!leafletMap) {
    console.error('Leaflet map instance is not available.');
    return;
  } else {
    console.log('Map is ready:', leafletMap);
    isMapReady.value = true;
    console.log("sectors", sectors.value)
  }
};

// Remove the showSectorInfo function as it's no longer needed
</script>

<style scoped>
.leaflet-control-button {
  background-color: black;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  z-index: 800;
  color: white;
}

.leaflet-control-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
