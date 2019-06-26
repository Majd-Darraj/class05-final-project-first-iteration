import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

// import { fetchData, updateField } from "./Helpers";

class EventsMainForm extends Component {
  state = {
    res: [],
    data: {
      internship_title: "",
      internship_category: "",
      organisation_name: "",
      department: "",
      internship_description: "",
      organisation_description: "",
      internship_agreement: "",
      internship_requirements: "",
      application_requirements: "",
      internship_availabiltiy_schedule: "",
      travel_expenses: "",
      location: "",
      internship_add_date: "",
      closing_date: "",
      internship_deadline: "",
      contact_person: "",
      phone_contact: "",
      email_contact: "",
      organisation_address: "",
      organisation_website: "",
      internship_theme_image: "",
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
      url = `/api/internships`;
      method = "POST";
    } else {
      url = `/api/internships/${this.props.match.params.id}`;
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
          <span className="edit-title">{data.internship_title}</span>
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
                      <p>Internship title</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="internship_title"
                        value={data.internship_title}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Internship category</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="internship_category"
                        value={data.internship_category}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Organisation name</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="organisation_name"
                        value={data.organisation_name}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Department</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="department"
                        value={data.department}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Internship description</p>
                      <textarea
                        autoComplete="off"
                        className="edit-form-input text-area"
                        name="internship_description"
                        value={data.internship_description}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Organisation description</p>
                      <textarea
                        autoComplete="off"
                        className="edit-form-input text-area"
                        name="organisation_description"
                        value={data.organisation_description}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Internship agreement</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="internship_agreement"
                        value={data.internship_agreement}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Internship requirements</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="internship_requirements"
                        value={data.internship_requirements}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>

                  <div>
                    <label>
                      <p> Application requirements</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="application_requirements"
                        value={data.application_requirements}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p> Internship availabiltiy schedule</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="Internship_availabiltiy_schedule"
                        value={data.internship_availabiltiy_schedule}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Travel expenses</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="travel_expenses"
                        value={data.travel_expenses}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p> Location</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="location"
                        value={data.location}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p> Internship added date </p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="internship_add_date"
                        value={data.internship_add_date}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p> Closing date </p>
                      <textarea
                        autoComplete="off"
                        className="edit-form-input text-area"
                        name="closing_date"
                        value={data.closing_date}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>

                  <div>
                    <label>
                      <p>Internship deadline</p>
                      <textarea
                        autoComplete="off"
                        className="edit-form-input text-area"
                        name="internship_deadline"
                        value={data.internship_deadline}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Contact person</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="contact_person"
                        value={data.contact_person}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p> Phone contact </p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="phone_contact"
                        value={data.phone_contact}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p> Email contact</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="email_contact"
                        value={data.email_contact}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p> Organisation address </p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="organisation_address"
                        value={data.organisation_address}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p> Organisation website </p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="organisation_website"
                        value={data.organisation_website}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p> Internship theme image </p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="internship_theme_image"
                        value={data.internship_theme_image}
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
                      Done
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

export default withRouter(EventsMainForm);
