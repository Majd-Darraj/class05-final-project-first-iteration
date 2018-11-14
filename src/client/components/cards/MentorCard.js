import React, { Component } from "react";

class MentorCard extends Component {
  render() {
    return (
      <div className="card-item internship-item">
        <div className="card-container internship-item-container">
          <div
            className="card-image internship-theme-image"
            style={{
              backgroundImage: `url(${this.props.profile_picture})`
            }}
          />
          <article className="card-info">
            <h1 className="internship-title">{this.props.first_name}</h1>
            <h2 className="internship-category">
              {this.props.last_name}
            </h2>
            <h2 className="internship-organisation">
              {this.props.availbility}
            </h2>
            <p className="internship-description">
              {this.props.mentor_description}
            </p>
            <p className="organisation-description">
              {this.props.languages}
            </p>
            <p className="application-requirements">
              {this.props.offering}
            </p>
            <p className="internship-availabiltiy-schedule">
              {this.props.area_location}
            </p>
            <p className="internship-add-date">
              {this.props.preferred_meeting_place}
            </p>
            <p className="closing-date">{this.props.affiliation}</p>
            
            <p className="phone_contact">{this.props.email}</p>
            <p className="email_contact">{this.props.gender}</p>
            
            
          </article>
        </div>
      </div>
    );
  }
}

export default MentorCard;
