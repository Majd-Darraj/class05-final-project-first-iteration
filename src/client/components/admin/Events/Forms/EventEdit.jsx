import React, { Component } from "react";

import EventsMainForm from "./EventsMainForm";

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
      <EventsMainForm
        {...this.props}
        data={this.state.data}
        id={this.props.match.params.id}
        addForm={false}
      />
    );
  }
}

export default EventEdit;
