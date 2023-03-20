import { ScatterplotLayer } from '@deck.gl/layers';

const initialViewState = {
    longitude: -73.982302,
    latitude: 40.760306,
    zoom: 12,
    pitch: 0,
    bearing: 0
};

const layerOptions = {
    id: 'scatterplot-poll-layer',
    data: 'https://data.cityofnewyork.us/resource/utqd-4534.json',
    getPosition: d => [Number(d.longitude), Number(d.latitude)], // use latitude and longitude fields for position
    getFillColor: d => [0, 0, 255],
    getLineColor: d => [0, 22, 2],
    opacity: .6,
    stroked: true,
    filled: true,
    radiusScale: 4,
    radiusMinPixels: 4,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 2
};


export const VotingPollLayer = {
    layerOptions,
    initialViewState,
    LayerClass: ScatterplotLayer,
    title: 'Voting Locations',
    description: 'Locations of voting/poll sites through the city. Last updated May 2022',
    source: 'NYC OpenData',
    sourceLink: 'https://data.cityofnewyork.us/City-Government/Voting-Poll-Sites-Map/utqd-4534'
};
