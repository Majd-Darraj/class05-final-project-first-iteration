import React, { Component } from "react";
import "./MapComponent.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";


class MapComponent extends Component {

  state = {
    isInfoWindowvisible: false
  };

  handleClick=() =>  {
    console.log('haha')
    this.setState({isInfoWindowvisible:true})
  }

 

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
            ? this.props.coords.map(coords => (
                <Marker onClick={this.handleClick} key={Math.random()} position={coords}>
              {this.state.isInfoWindowvisible &&  <InfoWindow onCloseClick={() => {} }><div> Info </div></InfoWindow> }
                </Marker>
              ))
            : ""}
        </GoogleMap>
      ))
    );

    return (
      <div className="map-container">
        <GoogleMapComponent
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
