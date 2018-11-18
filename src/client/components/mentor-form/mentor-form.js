import React, { Component } from "react";
// import { updateField, submitForm } from "./helpers";
// import Form from "./form";

class MentorForm extends Component {
  state = {
    data: {
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      profile_picture: "",
      mentor_description: "",
      languages: "",
      availability: "",
      offering: "",
      area_location: "",
      preferred_meeting_place: "",
      affiliation: "",
      active: 1
    }
  };

  componentDidMount = () => {
    if (this.props.isEditing) {
      debugger;
      this.setState({
        data: this.props.data
      });
    } else if (this.props.isAdding) {
      return null;
    }
  };

  updateField = e => {
    const { name, value } = e.target;
    // debugger;
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    });
  };

  submitForm = e => {
    e.preventDefault();

    let url = "",
      method = "";
    if (this.props.isEditing) {
      url = `/api/mentors/${this.props.match.params.id}`;
      method = "PUT";
    } else {
      url = `/api/mentors`;
      method = "POST";
    }

    fetch(url, {
      method,
      body: JSON.stringify(this.state.data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.text())
      .then(response => {
        alert("Success:", response);
      })
      .catch(error => console.error("Error:", error));
  };

  // updateField = e => {
  //   debugger;
  //   updateField(e);
  // };

  // submitField(e) {
  //   submitForm(e);
  // }

  render() {
    // let url = this.props.match.url;
    // let api = url.substring(0, url.indexOf("/"));

    // debugger;
    const { data } = this.state;
    // debugger;
    return (
      <form onSubmit={this.submitForm}>
        <h2>{`${this.props.isEditing ? "Edit" : "Add"} Mentor`}</h2>
        <div>
          <label>
            First Name
            <input
              name="first_name"
              value={data.first_name}
              onChange={this.updateField}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input
              name="last_name"
              value={data.last_name}
              onChange={this.updateField}
            />
          </label>
        </div>
        <div>
          <label>
            Gender
            <input
              name="gender"
              value={data.gender}
              onChange={this.updateField}
            />
          </label>
        </div>
        <div>
          <label>
            Profile Picture
            <input
              name="profile_picture"
              value={data.profile_picture}
              onChange={this.updateField}
            />
          </label>
        </div>
        <div>
          <label>
            Mentor Description
            <input
              name="mentor_description"
              value={data.mentor_description}
              onChange={this.updateField}
            />
          </label>
        </div>
        <div>
          <label>
            languages
            <input
              name="languages"
              value={data.languages}
              onChange={this.updateField}
            />
          </label>
        </div>

        <div>
          <label>
            Offering
            <input
              name="offering"
              value={data.offering}
              onChange={this.updateField}
            />
          </label>
        </div>
        <div>
          <label>
            Area Location
            <input
              name="area_location"
              value={data.area_location}
              onChange={this.updateField}
            />
          </label>
        </div>
        <div>
          <label>
            Preferred Meeting Place
            <input
              name="preferred_meeting_place"
              value={data.preferred_meeting_place}
              onChange={this.updateField}
            />
          </label>
        </div>
        <div>
          <label>
            Affiliation
            <input
              name="affiliation"
              value={data.affiliation}
              onChange={this.updateField}
            />
          </label>
        </div>
        <button type="submit"> Submit</button>
        <button> Cancel </button>
      </form>
      // <Form
      //   data={this.state.data}
      //   UpdateField={this.UpdateField}
      //   submitField={this.SubmitField}
      // />
    );
  }
}

export default MentorForm;