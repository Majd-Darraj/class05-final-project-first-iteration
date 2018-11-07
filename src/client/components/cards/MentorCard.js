import React, { Component } from "react";

class MentorCard extends Component {
  render() {
    return (
      <div className="card-item event-item">
        <div className="card-container event-item-container">
          <div className="card-info-container">
            <div className="card-image-container">
              <div
                className="card-image mentor-profile-picture"
                style={{
                  backgroundImage: `url(${this.props.profile_picture})`
                }}
              />
            </div>
            <article className="card-info">
              <h1 className="mentor-first-name">{this.props.first_name}</h1>
              <h2 className="mentor-last-name">{this.props.last_name}</h2>
              <p className="mentor-email">{this.props.email}</p>
              <p className="mentor-gender">{this.props.gender}</p>
              <p className="mentor-description">
                {this.props.mentor_description}
              </p>
              <p className="mentor-languages">{this.props.languages}</p>
              <p className="mentor-availability">{this.props.availability}</p>
              <p className="mentor-offering">{this.props.offering}</p>
              <p className="area_location">{this.props.area_location}</p>
              <p className="preferred_meeting_place">
                {this.props.preferred_meeting_place}
              </p>
              <p className="mentor-affiliation">{this.props.affiliation}</p>
            </article>
          </div>
          <button className="readmore">Read More</button>
        </div>
      </div>
    );
  }
}
export default MentorCard;
