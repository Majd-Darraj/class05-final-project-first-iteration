import React, { Component } from "react";

import InternshipMainForm from "./InternshipMainForm";

class InternshipEdit extends Component {
  state = {
    isLoading: true,
    data: null
  };

  componentDidMount() {
    const paramsID = this.props.match.params.id;
    const { internshipsData } = this.props;

    let currentEvent = internshipsData.find(internship => {
      return internship.id == paramsID;
    });
    // debugger;

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
      <InternshipMainForm
        {...this.props}
        data={this.state.data}
        id={this.props.match.params.id}
        addForm={false}
      />
    );
  }
}

export default InternshipEdit;
