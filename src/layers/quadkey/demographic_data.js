//this file "demographic_data" gathers the demographic data from the api, incuding all the columns and specific datapoints needed for the representation.
//I am not sure if this or the chorol file should do the actual mapping of datapoints to the geoJsonLayer, but since it doesnt have coordinates I must use
//another method to visualizae it. Multiple boxes should be able to be selected at once, so the code needs to accomodater for this so that all the data is visible on top of eachother
import { GeoJsonLayer } from '@deck.gl/layers';

const initialViewState = {
    longitude: -73.982302,
    latitude: 40.760306,
    zoom: 12,
    pitch: 0,
    bearing: 0,
};

const getColor = (properties) => {
    // Define your color logic based on the demographic data
    const malePercentage = properties.male_count / properties.count;
    if (malePercentage > 0.6) {
        return [255, 0, 0];
    } else if (malePercentage > 0.4) {
        return [0, 255, 0];
    } else {
        return [0, 0, 255];
    }
};


const layerOptions = (selectedBoroughs) => ({
    id: 'geojson-demographic-data-layer',
    data: 'https://data.cityofnewyork.us/resource/6khm-nrue.geojson',
    pickable: true,
    stroked: true,
    filled: true,
    extruded: false,
    lineWidthMinPixels: 1,
    getFillColor: (d) => getColor(d.properties),
    getLineColor: [13, 4, 99],
    getLineWidth: 1,
    visible: true,
    filter: (d) => !selectedBoroughs || selectedBoroughs.includes(d.properties.boroughname),
});

export const DemographicLayer = {
    initialViewState,
    LayerClass: GeoJsonLayer,
    createLayer: (selectedBoroughs) => new GeoJsonLayer(layerOptions(selectedBoroughs)),
    title: 'Demographics by Borough',
    description:
        'This dataset provides a Demographic breakdown of only DYCD-funded participants within a Borough of NYC. The data displays the counts, and percentages of the participants in each of the following categories: Gender, Ethnicity, and Race.',
    source: 'NYC OpenData',
    sourceLink:
        'https://data.cityofnewyork.us/Social-Services/Demographics-by-Borough/6khm-nrue',
};
