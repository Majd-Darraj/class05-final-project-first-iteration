import React, { Component } from "react";
import MentorForm from "./mentor-form";

class EditMentor extends Component {
  state = {
    isLoading: true,
    data: null
  };

  componentDidMount() {
    const url = "/api/mentors";
    const id = this.props.match.params.id;

    fetch(`${url}/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
          isLoading: false
        });
      });
    // debugger;
  }

  render() {
    // debugger;
    return this.state.isLoading ? (
      <div>
        <p>wait</p>
      </div>
    ) : (
      <MentorForm
        {...this.props}
        data={this.state.data}
        id={this.props.match.params.id}
        isEditing={true}
      />
    );
  }
}

export default EditMentor;