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

  handleClick=() =>  {
    this.setState({isInfoWindowvisible:true})
  }

 

  render() {
      return (
           <Marker onClick={this.handleClick} key={Math.random()} position={this.props.coords}>
              {this.state.isInfoWindowvisible &&  <InfoWindow onCloseClick={() => {} }><div> {this.props.coords.lat} </div></InfoWindow> }
                </Marker>
    )
   
 }
};

export default MarkerComponent;
