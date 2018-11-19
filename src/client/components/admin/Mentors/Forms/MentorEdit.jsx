import React, { Component } from "react";

import MentorsMainForm from "./MentorsMainForm";

class MentorEdit extends Component {
  state = {
    isLoading: true,
    data: null
  };

  componentDidMount() {
    const paramsID = this.props.match.params.id;
    const { mentorsData } = this.props;

    let currentMentor = mentorsData.find(mentor => {
      return mentor.id == paramsID;
    });
    // debugger;

    this.setState({
      isLoading: false,
      data: currentMentor
    });
  }

  render() {
    return this.state.isLoading ? (
      <div>
        <p>Getting your data...</p>
      </div>
    ) : (
      <MentorsMainForm
        {...this.props}
        data={this.state.data}
        id={this.props.match.params.id}
        status={false}
      />
    );
  }
}

export default MentorEdit;
