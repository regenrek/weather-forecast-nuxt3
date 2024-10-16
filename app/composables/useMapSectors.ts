// composables/useMapSectors.ts

import { ref } from 'vue';
import * as L from 'leaflet';

// Type definitions for better TypeScript support
interface TileRange {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

interface MapSector {
  x: number;
  y: number;
  z: number;
  bounds: any;
}

export function useMapSectors() {
  const sectors = useState<MapSector[]>('mapSectors', () => [])
  const error = ref<string | null>(null);

  // Function to calculate tile ranges
  function getTileRange(bounds: L.LatLngBounds, zoom: number): TileRange {
    const northWestTile = tileXY(bounds.getNorthWest(), zoom);
    const southEastTile = tileXY(bounds.getSouthEast(), zoom);

    const minX = Math.min(northWestTile.x, southEastTile.x);
    const maxX = Math.max(northWestTile.x, southEastTile.x);

    const minY = Math.min(northWestTile.y, southEastTile.y);
    const maxY = Math.max(northWestTile.y, southEastTile.y);

    const tileRange = { minX, maxX, minY, maxY };

    console.log("Computed tileRange:", tileRange);
    return tileRange;
  }

  // Helper function to convert lat/lng to tile X/Y at a given zoom level
  function tileXY(latlng: L.LatLng, zoom: number): { x: number; y: number } {
    const latRad = (latlng.lat * Math.PI) / 180;
    const n = 2 ** zoom;
    const x = Math.floor(((latlng.lng + 180) / 360) * n);
    const y = Math.floor(
      ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n
    );
    return { x, y };
  }

  // Function to convert tile coordinates to geographic bounds
  function tileToLatLngBounds(x: number, y: number, z: number): [number, number][] {
    const n = 2 ** z;
    const lon_deg_min = (x / n) * 360 - 180;
    const lat_rad_max = Math.atan(Math.sinh(Math.PI * (1 - 2 * y / n)));
    const lat_deg_max = (lat_rad_max * 180) / Math.PI;

    const lon_deg_max = ((x + 1) / n) * 360 - 180;
    const lat_rad_min = Math.atan(Math.sinh(Math.PI * (1 - 2 * (y + 1) / n)));
    const lat_deg_min = (lat_rad_min * 180) / Math.PI;

    return [
      [lat_deg_min, lon_deg_min], // SouthWest
      [lat_deg_max, lon_deg_max], // NorthEast
    ];
  }

  // Update the main function to accept boundingbox with validation
  async function calculateSectors(
    countryName: string,
    zoom: number,
    boundingbox: number[]
  ) {
    sectors.value = [];
    error.value = null;

    console.log("calculateSectors called with:", { countryName, zoom, boundingbox });

    if (
      !boundingbox ||
      !Array.isArray(boundingbox) ||
      boundingbox.length < 4 ||
      boundingbox.some((coord) => typeof coord !== 'number')
    ) {
      error.value = 'Invalid boundingbox provided.';
      console.error('Invalid boundingbox:', boundingbox);
      return;
    }

    try {
      const bounds = L.latLngBounds(
        L.latLng(boundingbox[1], boundingbox[0]), // [minLat, minLng]
        L.latLng(boundingbox[3], boundingbox[2])  // [maxLat, maxLng]
      );

      console.log("Latitude/Longitude Bounds:", bounds);

      const tileRange = getTileRange(bounds, zoom);
      console.log("Calculated Tile Range:", tileRange);

      for (let x = tileRange.minX; x <= tileRange.maxX; x++) {
        for (let y = tileRange.minY; y <= tileRange.maxY; y++) {
          console.log("Processing tile - x:", x, "y:", y);
          const sectorBounds = tileToLatLngBounds(x, y, zoom);
          sectors.value.push({ x, y, z: zoom, bounds: sectorBounds });
        }
      }

      console.log("Final sectors:", sectors.value);
    } catch (err) {
      error.value = 'Error calculating sectors.';
      console.error('Error in calculateSectors:', err);
    }
  }

  return {
    sectors,
    error,
    calculateSectors,
  };
}
