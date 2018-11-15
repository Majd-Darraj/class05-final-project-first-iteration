import React, { Component } from "react";

class form extends Component {
  render() {
    const { data, UpdateField, SubmitField } = this.props;
    debugger;
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
          <div>
            <label>
              Languages
              <input
                name="Languages"
                value={data.languages}
                onChange={this.updateField}
              />
            </label>
          </div>
          <div>
            <label>
              Offering
              <input
                name="Offering"
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
    );
  }
}

export default form;
