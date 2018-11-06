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
    this.setState({isInfoWindowvisible:!this.state.isInfoWindowvisible})
    console.log(this.props)

  }


  render() {
      return (
          
           <Marker onClick={this.handleClick} onDblClick={this.handleBlur} key={this.props.data.id} animation={google.maps.Animation.DROP} position={this.props.data.coord}>
             {this.state.isInfoWindowvisible &&  <InfoWindow onCloseClick={() => {} }><div> {this.props.data.name} </div></InfoWindow> }
                </Marker>
    )
   
 }
};

export default MarkerComponent;
