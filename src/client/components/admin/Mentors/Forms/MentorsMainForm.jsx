import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

// import { fetchData, updateField } from "./Helpers";

class MentorsMainForm extends Component {
  state = {
    res: [],
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
    if (this.props.status) {
      // debugger;
      return null;
    } else {
      // debugger;
      this.setState({
        data: this.props.data
      });
    }
  };

  updateField = e => {
    const { name, value } = e.target;
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    });
  };

  submitForm = e => {
    e.preventDefault();

    // fetchData(id, method)

    // const { id } = this.props;
    let url = "",
      method = "";
    if (this.props.status) {
      url = `/api/mentors`;
      method = "POST";
    } else {
      url = `/api/mentors/${this.props.match.params.id}`;
      method = "PUT";
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
        alert(`Server response: ${response}`);
        this.setState({
          res: response
        });
      })
      .catch(error => console.error("Error:", error));
  };

  render() {
    const { data } = this.state;

    // debugger;
    return (
      <>
        <div className="divider">
          <span className="edit-title">{data.first_name}</span>
        </div>

        <div className="page-content edit-content">
          <section
            className={`cards-list-container cards-list-container-events admin-container`}
            id={`edit-container`}
          >
            <div className="card-info-container">
              <article className="card-info">
                <form
                  onSubmit={this.submitForm}
                  className="edit-form"
                  autoComplete="off"
                >
                  <div>
                    <label className="stat-container">
                      <p className="card-status-title">Status</p>
                      <select
                        className={`edit-form-input 
                        ${data.active == 1 ? "active-stat" : "arch-stat"}
                      `}
                        name="active"
                        value={data.active}
                        onChange={this.updateField}
                      >
                        <option
                          value="1"
                          {...(data.active == 1 ? "selected" : "")}
                        >
                          Active
                        </option>
                        <option
                          value="0"
                          {...(data.active == 0 ? "selected" : "")}
                        >
                          Archived
                        </option>
                      </select>
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>First Name</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="first_name"
                        value={data.first_name}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Last Name</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="last_name"
                        value={data.last_name}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Email</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="email"
                        value={data.email}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Gender
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="gender"
                        value={data.gender}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Description
                      <textarea
                        autoComplete="off"
                        className="edit-form-input text-area"
                        name="mentor_description"
                        value={data.mentor_description}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Languages
                      <textarea
                        autoComplete="off"
                        className="edit-form-input text-area"
                        name="languages"
                        value={data.languages}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Availability
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="availability"
                        value={data.availability}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Offering
                      <input
                        autoComplete="off"
                        className="edit-form-input"
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
                        autoComplete="off"
                        className="edit-form-input"
                        name="area_location"
                        value={data.area_location}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Preferred meeting place
                      <input
                        autoComplete="off"
                        className="edit-form-input"
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
                        autoComplete="off"
                        className="edit-form-input"
                        name="affiliation"
                        value={data.affiliation}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div className="form-btns">
                    <button id="confirm" className="readmore" type="submit">
                      {" "}
                      Submit
                    </button>
                    <a
                      href="/admin"
                      id="cancel"
                      className="readmore"
                      onClick={this.props.history.goBack}
                    >
                      Cancel
                    </a>
                  </div>
                </form>
              </article>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default withRouter(MentorsMainForm);
