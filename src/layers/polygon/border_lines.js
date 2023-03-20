//this file "border_lines" should create a border layer that is present only when data is being presented that is specific to boroughs, or the borough checkboxes are selected.
// This file does not perform many operations on the data or visualize data  itself, but is simply the information about the actual lines
import { PolygonLayer } from '@deck.gl/layers';

const initialViewState = {
    longitude: -73.982302,
    latitude: 40.760306,
    zoom: 12,
    pitch: 0,
    bearing: 0
};

const layerOptions = (selectedBoroughs) => ({
    id: 'polygon-border-layer',
    data: 'https://data.cityofnewyork.us/resource/7t3b-ywvw.json',
    pickable: true,
    stroked: true,
    filled: true,
    wireframe: true,
    lineWidthMinPixels: 3,
    getPolygon: d => d.contour,
    getElevation: d => d.population / d.area / 10,
    getFillColor: d => [d.population / d.area / 60, 140, 0],
    getLineColor: [80, 80, 80],
    getLineWidth: 1,
    visible: true,
    filter: (d) => selectedBoroughs.includes(d.properties.boro_name)
});

export const BorderLayer = {
    layerOptions,
    initialViewState,
    LayerClass: PolygonLayer,
    title: 'Your polygon layer title',
    description: 'Your polygon layer description',
    source: 'Your data source',
    sourceLink: 'Your data source link'
};
