import React, { Component } from "react";
import "./MapComponent.css";
import MarkerComponent from "../Marker";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  InfoWindow
} from "react-google-maps";

class MapComponent extends Component {
  render() {
    if (this.props.coords);
    const GoogleMapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultCenter={
            this.props.mapCenter
              ? this.props.mapCenter
              : { lat: 55.676098, lng: 12.568337 }
          }
          defaultZoom={this.props.Zoom ? this.props.Zoom : 13}
        >
          {this.props.setMarker && this.props.coords
            ? this.props.coords.map(data => (
                <MarkerComponent coords={data.coord} data={data} />
              ))
            : ""}
        </GoogleMap>
      ))
    );

    return (
      <div className="map-container">
        <GoogleMapComponent
          key="events"
          className="map-style"
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: "100%", width: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default MapComponent;
