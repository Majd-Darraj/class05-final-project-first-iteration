import React from "react";
import "./MapComponent.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class MapComponent extends React.Component {
  render() {
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
          {this.props.setMarker && this.props.mapCenter ? (
            <Marker position={this.props.mapCenter} />
          ) : (
            ""
          )}
        </GoogleMap>
      ))
    );

    return (
      <div className="map-container">
        <GoogleMapComponent
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
