# NDVI Time Series Analysis using Sentinel-2 and Google Earth Engine

## Overview

This project focuses on the temporal analysis of vegetation dynamics using Sentinel-2 satellite imagery and Google Earth Engine. The study evaluates vegetation health variations across High Vegetation, Moderate Vegetation, and Low Vegetation regions using the Normalized Difference Vegetation Index (NDVI).

Time series analysis was performed from November 2024 to April 2025 to understand seasonal vegetation changes and compare NDVI behavior across different vegetation density zones.

The generated NDVI profiles and statistical analysis provide insights into vegetation health, seasonal variation, and land surface conditions across the study regions.

---

## Problem Statement

Vegetation monitoring is essential for understanding ecosystem health, agricultural productivity, environmental sustainability, and land surface dynamics. Satellite-based NDVI analysis provides an efficient approach for monitoring temporal vegetation changes over large geographical regions.

This project aims to analyze and compare NDVI trends across regions with varying vegetation density using Sentinel-2 imagery and Google Earth Engine.

---

## Objectives

* Calculate NDVI using Sentinel-2 imagery
* Analyze vegetation dynamics over time
* Compare NDVI trends across different vegetation density regions
* Generate NDVI time series charts
* Evaluate vegetation health using statistical analysis

---

## Study Areas

The study includes three vegetation density regions:

* High Vegetation Area
* Moderate Vegetation Area
* Low Vegetation Area

---

## Dataset Used

* Sentinel-2 Surface Reflectance Harmonized Data
* NDVI Derived Products
* Google Earth Engine datasets

---

## Tools & Technologies

* Google Earth Engine
* JavaScript
* Remote Sensing
* GIS
* Sentinel-2 Imagery

---

# Methodology

1. Definition of Areas of Interest (AOIs)
2. Sentinel-2 image collection filtering
3. Cloud masking using QA60 band
4. NDVI calculation using NIR and Red bands
5. Time series chart generation
6. Median NDVI computation
7. Statistical comparison across vegetation regions
8. Spatial visualization and analysis

---

# NDVI Formula

The Normalized Difference Vegetation Index (NDVI) was calculated using the following formula:

```text id="y0r7cx"
NDVI = (NIR - Red) / (NIR + Red)
```

Where:

* NIR = Near Infrared Band (B8)
* Red = Red Band (B4)

---

# Time Period Used

| Start Date    | End Date   |
| ------------- | ---------- |
| November 2024 | April 2025 |

---

# Results

The NDVI time series analysis revealed clear differences in vegetation density and seasonal variation across the three study regions.

### Mean NDVI Values

* Mean NDVI (High Vegetation Area): **0.4186**
* Mean NDVI (Moderate Vegetation Area): **0.2999**
* Mean NDVI (Low Vegetation Area): **0.2273**

---

### High Vegetation Area Analysis

The High Vegetation Area consistently exhibited the highest NDVI values throughout the study period, indicating dense and healthy vegetation cover. Although a gradual decline in NDVI was observed between January and April 2025, the region maintained relatively strong vegetation health compared to the other study areas.

---

### Moderate Vegetation Area Analysis

The Moderate Vegetation Area showed intermediate NDVI values with moderate fluctuations over time. Seasonal vegetation variation and possible changes in soil moisture and environmental conditions influenced the observed NDVI trends.

---

### Low Vegetation Area Analysis

The Low Vegetation Area consistently recorded the lowest NDVI values, indicating sparse vegetation cover and reduced vegetation health. Temporal fluctuations were relatively minor compared to the High Vegetation region.

---

### Temporal Vegetation Trend

The overall time series analysis demonstrated a gradual reduction in NDVI values from late 2024 to early 2025 across all study regions. This trend may be associated with seasonal environmental variation, vegetation stress, or changing climatic conditions.

---

# Key Observations

* High vegetation regions showed stronger NDVI signatures.
* Low vegetation regions consistently exhibited reduced NDVI values.
* Seasonal NDVI variation was observed across all study regions.
* Sentinel-2 imagery effectively captured temporal vegetation dynamics.
* Time series analysis provided clear visualization of vegetation health variation.

---

# Future Improvements

* Multi-year vegetation trend analysis
* Integration of rainfall and climate datasets
* Crop health monitoring applications
* Machine learning-based vegetation classification
* Drought assessment and environmental monitoring

---

# Conclusion

The project successfully demonstrated the application of Sentinel-2 satellite imagery and Google Earth Engine for NDVI-based vegetation monitoring and temporal analysis. The generated time series profiles and statistical results effectively highlighted vegetation density differences and seasonal vegetation dynamics across the study regions.

---

## Google Earth Engine Script

https://code.earthengine.google.com/3861a18702eec2ab00f14242bb8c91fa

---

## Author

Kashika Venkatesan
B.E. Geoinformatics | Anna University CEG
