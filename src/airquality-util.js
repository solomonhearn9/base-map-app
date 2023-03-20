
// Fetch the data from the API
export async function fetchData() {
    const response = await fetch("https://data.cityofnewyork.us/resource/c3uy-2p5r.json?geo_place_name=Coney Island");
    const data = await response.json();
    return data.features;
}

// Get the radius and color based on the data value
export function getRadiusAndColor(value) {
    const radius = value;
    const color = value >= 50 ? [255, 0, 0] : value >= 25 ? [255, 165, 0] : [0, 255, 0];

    return { radius, color };
}
