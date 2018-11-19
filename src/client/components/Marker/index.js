import React, { Component } from "react";
import {
  Marker,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  InfoWindow
} from "react-google-maps";

class MarkerComponent extends Component {
  state = {
    isInfoWindowvisible: false
  };

  handleClick = () => {
    this.setState({ isInfoWindowvisible: !this.state.isInfoWindowvisible });
    // console.log(this.props);
  };

  render() {
    let lat = Number(this.props.mapData.coords.lat);
    let lng = Number(this.props.mapData.coords.lng);
    let coordsNu = { lat, lng };

    debugger;

    return (
      <Marker
        // onClick={this.handleClick}
        onDblClick={this.handleBlur}
        key={this.props.mapData.id}
        animation={google.maps.Animation.DROP}
        position={coordsNu}
        onMouseOver={this.handleClick}
        onMouseOut={this.handleClick}
      >
        {this.state.isInfoWindowvisible && (
          <InfoWindow onCloseClick={() => {}}>
            <div>
              {" "}
              {this.props.mapData.event_name} <br />{" "}
              {this.props.mapData.event_type}{" "}
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default MarkerComponent;
