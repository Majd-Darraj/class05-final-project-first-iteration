import React, { Component } from "react";

class NetworkingCard extends Component {
  render() {
    return (
      <div className="card-item internship-item">
        <div className="card-container internship-item-container">
          <div
            className="card-image internship-theme-image"
            style={{
              backgroundImage: `url(${this.props.organisation_logo})`
            }}
          />
          <article className="card-info">
            <h1 className="internship-title">{this.props.organisation_name}</h1>
            <h2 className="internship-category">
              {this.props.organisation_description}
            </h2>
            <h2 className="internship-organisation">
              {this.props.sector_activity}
            </h2>
            
            <p className="organisation-description">
              {this.props.organisation_description}
            </p>
            <p className="application-requirements">
              {this.props.organisation_address}
            </p>
            <p className="internship-availabiltiy-schedule">
              {this.props.organisation_city}
            </p>
            <p className="internship-add-date">
              {this.props.organisation_postal_code}
            </p>
            <p className="contact_person">{this.props.contact_person}</p>
            <p className="phone_contact">{this.props.contact_email}</p>
            <p className="email_contact">{this.props.contact_phone}</p>
            <p className="organisation_website">
              {this.props.organisation_url}
            </p>
          </article>
        </div>
      </div>
    );
  }
}

export default NetworkingCard;
