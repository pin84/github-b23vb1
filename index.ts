/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example creates a simple polygon representing the Bermuda Triangle. Note
// that the code specifies only three LatLng coordinates for the polygon. The
// API automatically draws a stroke connecting the last LatLng back to the first
// LatLng.
let x = 24.886;
let y = -70.268;
let r = 5;

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 5,
      center: { lat: x, lng: y },
      mapTypeId: 'terrain',
    }
  );

  // Define the LatLng coordinates for the polygon's path. Note that there's
  // no need to specify the final coordinates to complete the polygon, because
  // The Google Maps JavaScript API will automatically draw the closing side.

  const triangleCoords = [
    { lat: x, lng: y + r },
    { lat: x + r, lng: y },
    { lat: x, lng: y - r },
    { lat: x - r, lng: y },
  ];

  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    draggable: true,
    // geodesic: true,
    editable: true,
  });

  bermudaTriangle.setMap(map);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
