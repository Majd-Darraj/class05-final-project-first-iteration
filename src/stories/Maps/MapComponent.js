import React from "react";

import { storiesOf } from "@storybook/react";
import MapComponent from "../../components/map-component/MapComponent";
//import { fetchAPIData } from "../components/Api/api";


function fetchAPIData(url) {
  return fetch(url).then(response => response.json());
}

let coords = [];

fetchAPIData(
  "https://raw.githubusercontent.com/paredesrichard/commandline/master/events.json"
).then(newData => {
  coords = newData.map(data => {
    let newCoords = {};
    newCoords = {
      lat: data.event_geo_lat,
      lng: data.event_geo_lng
    };
    return newCoords;
  });
  console.log("coordinates:", coords);
});

storiesOf("MapComponent", module)
  .add("Default setting", () => (
    <div style={{ width: `400px`, height: `400px` }}>
      <MapComponent />
    </div>
  ))
  .add("set map center to HYF", () => (
    <div style={{ width: `400px`, height: `400px` }}>
      <MapComponent
        mapCenter={{ lat: 55.661629, lng: 12.540446 }}
        setMarker
        Zoom={18}
      />
    </div>
  ))
  .add("set map to UCPH Zoom=14", () => (
    <div style={{ width: `400px`, height: `400px` }}>
      <MapComponent
        mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
        setMarker
        Zoom={14}
      />
    </div>
  ))
  .add("set map to UCPH Zoom=17", () => (
    <div style={{ width: `400px`, height: `400px` }}>
      <MapComponent
        mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
        setMarker
        Zoom={17}
      />
    </div>
  ))
  .add("Add coordinates for the markers", () => (
    <div style={{ width: `400px`, height: `400px` }}>
      <MapComponent
        mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
        setMarker
        Zoom={11}
        coords={coords}
      />
    </div>
  ));