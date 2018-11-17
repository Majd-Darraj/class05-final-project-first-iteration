import React, { Component } from "react";

import NetworkingMainForm from "./NetworkingMainForm";

class NetworkingEdit extends Component {
  state = {
    isLoading: true,
    data: null
  };

  componentDidMount() {
    const paramsID = this.props.match.params.id;
    const { NetworkingData } = this.props;

    let currentEvent = NetworkingData.find(networking => {
      return networking.id == paramsID;
    });
    debugger;

    this.setState({
      isLoading: false,
      data: currentEvent
    });
  }

  render() {
    return this.state.isLoading ? (
      <div>
        <p>Getting your data...</p>
      </div>
    ) : (
      <NetworkingMainForm
        {...this.props}
        data={this.state.data}
        id={this.props.match.params.id}
        addForm={false}
      />
    );
  }
}

export default NetworkingEdit;

