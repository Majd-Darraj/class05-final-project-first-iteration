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
    // debugger;
  };

  handleClick = () => {
    const eventId = this.props.mapData.id;
    this.props.history.push("/Events/preview/" + eventId);
  };

  render() {
    let lat = Number(this.props.mapData.coords.lat);
    let lng = Number(this.props.mapData.coords.lng);
    let coordsNu = { lat, lng };
    let marerIcon = {
      url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
    };

    return (
      <Marker
        onClick={this.handleClick}
        // onDblClick={this.handleBlur}

        key={this.props.mapData.id}
        animation={google.maps.Animation.DROP}
        position={coordsNu}
        icon={marerIcon}
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHover}
      >
        {this.state.isInfoWindowvisible && (
          <InfoWindow onCloseClick={() => {}}>
            <div>
              <img src={this.props.mapData.event_theme_image} alt="event" />
              {/* {this.props.mapData.event_theme_image} */}
              <br />
              {this.props.mapData.event_name}
              <br />
              {this.props.mapData.event_type}
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default withRouter(MarkerComponent);
