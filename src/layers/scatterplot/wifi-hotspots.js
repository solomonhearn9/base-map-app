import { ScatterplotLayer } from '@deck.gl/layers';

const initialViewState = {
    longitude:  -73.982302,
    latitude: 40.760306,
    zoom: 12,
    pitch: 0,
    bearing: 0
};

const layerOptions = {
    id: 'scatterplot-la-business-layer',
    data: 'https://data.cityofnewyork.us/resource/varh-9tsp.json',
    getPosition: d => d.the_geom.coordinates,
    getFillColor: d => [255, 0, 100],
    getLineColor: d => [25, 25, 25],
    opacity: .5,
    stroked: true,
    filled: true,
    radiusScale: 4,
    radiusMinPixels: 4,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 2
}
export const WifiHotspotLayer = {
    layerOptions,
    initialViewState,
    LayerClass: ScatterplotLayer,
    title: 'Public WiFi Hotspots',
    description: 'Locations of WiFi hotspots free for public access in New York City. Providers include LinkNYC, NYC Parks, libraries, and private companies like Chelsea Wi-Fi and Transit Wireless.',
    source: 'NYC OpenData',
    sourceLink: 'https://data.cityofnewyork.us/Social-Services/NYC-Wi-Fi-Hotspot-Locations/a9we-mtpn'
};