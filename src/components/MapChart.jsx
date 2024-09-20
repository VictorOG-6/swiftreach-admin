import React from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'


const highlightedCountries = [
  "USA", "IND", "CHN", "BRA", "AUS", "CAN", "RUS", "FRA", "DEU", "ESP"
];

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";


const MapChart = () => {
  return (
    <ComposableMap>
      <ZoomableGroup>
      <Geographies geography={geoUrl}>
  {({ geographies }) => 
    geographies.map((geo) => {
      const isHighlighted = highlightedCountries.includes(geo.properties.ISO_A3);
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          fill={isHighlighted ? "#80FFBA" : "#E0E0E0"}
          stroke="#FFFFFF"
          strokeWidth={0.5}
          style={{
            default: { outline: "none" },
            hover: { outline: "none" },
            pressed: { outline: "none" },
          }}
        />
      );
    })
  }
</Geographies>
      </ZoomableGroup>
    </ComposableMap>
  )
}

export default MapChart