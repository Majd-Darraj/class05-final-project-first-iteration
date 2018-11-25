import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

// import { fetchData, updateField } from "./Helpers";

class EventsMainForm extends Component {
  state = {
    res: [],
    data: {
      event_name: "",
      event_type: "",
      event_address: "",
      event_postal_code: "",
      event_city: "",
      event_geo_lat: "",
      event_geo_lng: "",
      event_start_date: "",
      event_end_date: "",
      event_start_hour: "",
      event_end_hour: "",
      event_agenda: "",
      event_language: "",
      max_participants: "",
      event_URL: "",
      event_theme_image: "",
      contact_person: "",
      contact_phone: "",
      contact_email: "",
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
      url = `/api/events`;
      method = "POST";
    } else {
      url = `/api/events/${this.props.match.params.id}`;
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
          <span className="edit-title">{data.event_name}</span>
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
                      <p>Event name</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="event_name"
                        value={data.event_name}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Type</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="event_type"
                        value={data.event_type}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p>Address</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="event_address"
                        value={data.event_address}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Postal code
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="event_postal_code"
                        value={data.event_postal_code}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      GEO lat
                      <textarea
                        autoComplete="off"
                        className="edit-form-input text-area"
                        name="event_geo_lat"
                        value={data.event_geo_lat}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      GEO lng
                      <textarea
                        autoComplete="off"
                        className="edit-form-input text-area"
                        name="event_geo_lng"
                        value={data.event_geo_lng}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      City
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="event_city"
                        value={data.event_city}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Start date
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="event_start_date"
                        value={data.event_start_date}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>

                  <div>
                    <label>
                      End date
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="event_end_date"
                        value={data.event_end_date}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Start hour
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="event_start_hour"
                        value={data.event_start_hour}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      End hour
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="event_end_hour"
                        value={data.event_end_hour}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Agenda
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="event_agenda"
                        value={data.event_agenda}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Max participants
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="max_participants"
                        value={data.max_participants}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      URL
                      <textarea
                        autoComplete="off"
                        className="edit-form-input text-area"
                        name="event_URL"
                        value={data.event_URL}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>

                  <div>
                    <label>
                      Image
                      <textarea
                        autoComplete="off"
                        className="edit-form-input text-area"
                        name="event_theme_image"
                        value={data.event_theme_image}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Contact person name
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
                      Contact Email
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="contact_email"
                        value={data.contact_email}
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
