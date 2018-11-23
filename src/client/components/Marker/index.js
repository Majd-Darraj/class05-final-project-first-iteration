import React, { Component } from "react";
import {
  Marker,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  InfoWindow
} from "react-google-maps";
import { withRouter } from "react-router-dom";

class MarkerComponent extends Component {
  state = {
    isInfoWindowvisible: false
  };

  handleHover = () => {
    this.setState({ isInfoWindowvisible: !this.state.isInfoWindowvisible });
    debugger;
  };

  handleClick = () => {
    const eventId = this.props.mapData.id;
    this.props.history.push("/Events/preview/" + eventId);
  };

  render() {
    let lat = Number(this.props.mapData.coords.lat);
    let lng = Number(this.props.mapData.coords.lng);
    let coordsNu = { lat, lng };

    return (
      <Marker
        onClick={this.handleClick}
        // onDblClick={this.handleBlur}

        key={this.props.mapData.id}
        animation={google.maps.Animation.DROP}
        position={coordsNu}
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHover}
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

export default withRouter(MarkerComponent);
