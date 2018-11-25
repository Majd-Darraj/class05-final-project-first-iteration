import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  faFemale,
  faMale,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CardFull extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="card-item event-item full-card">
        <div className="card-container event-item-container">
          <div className="card-info-container">
            <div className="card-image-container">
              <div
                className="card-image mentor-profile-picture"
                style={{
                  backgroundImage: `url(${data.profile_picture})`
                }}
              />
            </div>
            <button
              className="readmore back"
              onClick={this.props.history.goBack}
            >
              <FontAwesomeIcon icon={faChevronLeft} /> BACK
            </button>
            <article className="card-info full-info">
              <h1 className="mentor-first-name">
                <span className="card-bold">Internship Title:</span>{" "}
                {data.internship_title}
              </h1>
              <p className="mentor-first-name internship-org">
                <span className="card-bold">Organisation Name:</span>{" "}
                {data.organisation_name}
              </p>
              <p className="mentor-email">
                <span className="card-bold">Organisation Description:</span>{" "}
                {data.organisation_description}
              </p>
              <p className="mentor-email">
                <span className="card-bold">Department:</span> {data.department}
              </p>
              <p className="mentor-description">
                <span className="card-bold">Internship Description:</span>{" "}
                {data.internship_description}
              </p>
              <p className="mentor-languages">
                <span className="card-bold">Availability Schedule:</span>{" "}
                {data.internship_availabiltiy_schedule}
              </p>
              <p className="mentor-offering">
                <span className="card-bold">Travel expenses:</span>{" "}
                {data.travel_expenses}
              </p>
              <p className="area_location">
                <span className="card-bold">Deadline:</span>{" "}
                {data.internship_deadline}
              </p>
              <p className="mentor-availability">
                <span className="card-bold">Location:</span>{" "}
                {data.organisation_address}, {data.location}
              </p>
              <p className="preferred_meeting_place">
                <span className="card-bold">Contact Person:</span>{" "}
                {data.contact_person}
              </p>
              <p className="mentor-affiliation">
                <span className="card-bold">Phone:</span> {data.phone_contact}
              </p>
              <a
                className="readmore full-website-btn"
                href={data.organisation_website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {data.organisation_name}
              </a>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardFull);
