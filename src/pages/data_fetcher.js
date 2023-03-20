//this file was recommmended by you to be able to gather the demographic data for each borough specifically. It seems to perform some of the calculations
//involved in the choropleth and GeoLayer visualizaton
async function fetchAndAggregateData() {
    const response = await fetch('https://data.cityofnewyork.us/resource/6khm-nrue.json');
    const demographicData = await response.json();
    const aggregatedData = {};

    demographicData.forEach((item) => {
        if (item.boroughname) {
            if (!aggregatedData[item.boroughname]) {
                aggregatedData[item.boroughname] = {
                    count: 1,
                    maleCount: item.male_count,
                    femaleCount: item.female_count,
                    // Add other demographic fields here
                };
            } else {
                aggregatedData[item.boroughname].count += 1;
                aggregatedData[item.boroughname].maleCount += item.male_count;
                aggregatedData[item.boroughname].femaleCount += item.female_count;
                // Add other demographic fields here
            }
        }
    });

    return aggregatedData;
}

export { fetchAndAggregateData };
