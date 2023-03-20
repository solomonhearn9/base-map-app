import { ScatterplotLayer } from '@deck.gl/layers';

const initialViewState = {
    longitude:  -73.982302,
    latitude: 40.760306,
    zoom: 12,
    pitch: 0,
    bearing: 0
};

const layerOptions = {
    id: 'scatterplot-subway-layer',
    data: 'https://data.cityofnewyork.us/resource/he7q-3hwy.json',
    getPosition: d => d.the_geom.coordinates,
    getFillColor: d => [255, 255, 133],
    getLineColor: d => [0, 25, 55],
    opacity: .5,
    stroked: true,
    filled: true,
    radiusScale: 4,
    radiusMinPixels: 4,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 2
};

export const SubwayEntranceLayer = {
    layerOptions,
    initialViewState,
    LayerClass: ScatterplotLayer,
    title: 'Subway Entrances',
    description: 'Map of entrances to the subway throughout the city  ',
    source: 'NYC OpenData',
    sourceLink: 'https://data.cityofnewyork.us/Transportation/Subway-Entrances/drex-xx56'
};