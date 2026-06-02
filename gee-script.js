Map.centerObject(highVeg, 11);
Map.addLayer(highVeg, {color: 'green'}, 'High Vegetation');
Map.addLayer(moderateVeg, {color: 'orange'}, 'Moderate Vegetation');
Map.addLayer(lowVeg, {color: 'red'}, 'Low Vegetation');

// 2. Set time period
var startDate = '2024-11-01';
var endDate = '2025-04-30';

// 3. Load and process Sentinel-2
var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
          .filterDate(startDate, endDate)
          .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
          .map(function(img) {
            var cloudMask = img.select('QA60').bitwiseAnd(1 << 10).eq(0)
                                .and(img.select('QA60').bitwiseAnd(1 << 11).eq(0));
            return img.updateMask(cloudMask)
                      .copyProperties(img, ["system:time_start"]);
          });

// 4. Calculate NDVI
var addNDVI = function(image) {
  return image.addBands(image.normalizedDifference(['B8', 'B4']).rename('NDVI'));
};

var s2NDVI = s2.map(addNDVI);

// 5. Generate NDVI time series charts for each AOI
var makeChart = function(region, name) {
  var chart = ui.Chart.image.series({
    imageCollection: s2NDVI.select('NDVI'),
    region: region,
    reducer: ee.Reducer.mean(),
    scale: 20,
    xProperty: 'system:time_start'
  }).setOptions({
    title: 'NDVI Time Series - ' + name,
    vAxis: {title: 'NDVI'},
    hAxis: {title: 'Date'},
    lineWidth: 2,
    pointSize: 3
  });
  print(chart);
};

makeChart(highVeg, 'High Vegetation Area');
makeChart(moderateVeg, 'Moderate Vegetation Area');
makeChart(lowVeg, 'Low Vegetation Area');

// 6. Median NDVI for each AOI for comparison
var medianNDVI = s2NDVI.select('NDVI').median();

var meanHigh = medianNDVI.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: highVeg,
  scale: 20,
  maxPixels: 1e9
});

var meanModerate = medianNDVI.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: moderateVeg,
  scale: 20,
  maxPixels: 1e9
});

var meanLow = medianNDVI.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: lowVeg,
  scale: 20,
  maxPixels: 1e9
});

print("Mean NDVI (High Vegetation Area):", meanHigh.get('NDVI'));
print("Mean NDVI (Moderate Vegetation Area):", meanModerate.get('NDVI'));
print("Mean NDVI (Low Vegetation Area):", meanLow.get('NDVI'));

// 7. Visualize median NDVI
var vis = {
  min: 0,
  max: 1,
  palette: ['red', 'yellow', 'green']
};

Map.addLayer(medianNDVI.clip(highVeg), vis, 'NDVI - High Veg');
Map.addLayer(medianNDVI.clip(moderateVeg), vis, 'NDVI - Moderate Veg');
Map.addLayer(medianNDVI.clip(lowVeg), vis, 'NDVI - Low Veg');
