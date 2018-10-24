import React, { Component } from "react";

class EventsCard extends Component {
  render() {
    return (
      <div className="card-item internship-item">
        <div className="card-container internship-item-container">
          <div
            className="card-image internship-theme-image"
            style={{
              backgroundImage: `url(${this.props.event_theme_image})`
            }}
          />
          <article className="card-info">
            <h1 className="internship-title">{this.props.event_name}</h1>
            <h2 className="internship-category">
              {this.props.event_type}
            </h2>
            <h2 className="internship-organisation">
              {this.props.event_address}
            </h2>
            <p className="internship-description">
              {this.props.event_postal_code}
            </p>
            <p className="organisation-description">
              {this.props.event_city}
            </p>
            <p className="application-requirements">
              {this.props.event_start_date}
            </p>
            <p className="internship-availabiltiy-schedule">
              {this.props.event_end_date}
            </p>
            <p className="internship-add-date">
              {this.props.event_start_hour}
            </p>
            <p className="internship_deadline">
              {this.props.event_end_hour}
            </p>
            <p className="internship_deadline">
              {this.props.event_agenda}
            </p>
            <p className="closing-date">
            {this.props.event_language}
            </p>
            <p className="closing-date">
            {this.props.max_participants}
            </p>
            <p className="contact_person">{this.props.contact_person}</p>
            <p className="phone_contact">{this.props.pcontact_phonehone_contact}</p>
            <p className="email_contact">{this.props.contact_email}</p>
            <p className="organisation_website">
              {this.props.event_URL}
            </p>
          </article>
        </div>
      </div>
    );
  }
}

export default EventsCard;
