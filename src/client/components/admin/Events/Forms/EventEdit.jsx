import React, { Component } from "react";

import EventEditForm from "./EventEditForm";

class EventEdit extends Component {
  state = {
    isLoading: true,
    data: null
  };

  componentDidMount() {
    const paramsID = this.props.match.params.id;
    const { eventsData } = this.props;

    let currentEvent = eventsData.find(event => {
      return event.id == paramsID;
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
      <EventEditForm
        {...this.props}
        data={this.state.data}
        id={this.props.match.params.id}
      />
    );
  }
}

export default EventEdit;
