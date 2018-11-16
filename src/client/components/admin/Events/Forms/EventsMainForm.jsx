import React, { Component } from "react";
import { Link } from "react-router-dom";

// import { fetchData, updateField } from "./Helpers";

class EventEditForm extends Component {
  state = {
    data: {
      event_name: "",
      event_type: "",
      event_address: "",
      event_postal_code: "",
      event_city: "",
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
    this.setState({
      data: this.props.data
    });
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

    const { id } = this.props;
    let method = "PUT";

    // fetchData(id, method)

    fetch(`/api/events/${id}`, {
      method,
      body: JSON.stringify(this.state.data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.text())
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error("Error:", error));
  };

  render() {
    const { data } = this.state;
    const eventsData = data;
    debugger;
    return (
      <>
        <div className="divider">
          <span className="edit-title">{eventsData.event_name}</span>
        </div>
        <div className="page-content edit-content">
          <section
            className={`cards-list-container cards-list-container-events`}
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
                    <label>
                      <p>Event name</p>
                      <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="event_name"
                        value={eventsData.event_name}
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
                        value={eventsData.event_type}
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
                        value={eventsData.event_address}
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
                        value={eventsData.event_postal_code}
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
                        value={eventsData.event_city}
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
                        value={eventsData.event_start_date}
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
                        value={eventsData.event_end_date}
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
                        value={eventsData.event_start_hour}
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
                        value={eventsData.event_end_hour}
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
                        value={eventsData.event_agenda}
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
                        value={eventsData.max_participants}
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
                        value={eventsData.event_URL}
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
                        value={eventsData.event_theme_image}
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
                        value={eventsData.contact_person}
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
                        value={eventsData.contact_email}
                        onChange={this.updateField}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <p className="card-status">Status</p>
                      <select
                        name="active"
                        value={eventsData.active}
                        onChange={this.updateField}
                      >
                        <option
                          value="1"
                          {...(eventsData.active == 1 ? "selected" : "")}
                        >
                          Active
                        </option>
                        <option
                          value="0"
                          {...(eventsData.active == 0 ? "selected" : "")}
                        >
                          Archived
                        </option>
                      </select>
                      {/* <input
                        autoComplete="off"
                        className="edit-form-input"
                        name="active"
                        value={eventsData.active}
                        onChange={this.updateField}
                      /> */}
                    </label>
                  </div>
                  <div className="form-btns">
                    <button id="confirm" className="readmore" type="submit">
                      {" "}
                      Submit
                    </button>
                    <Link id="cancel" className="readmore " to={`/admin`}>
                      Cancel
                    </Link>
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

export default EventEditForm;
