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
              <div className="name-gender">
                <h1 className="mentor-first-name">
                  <span className="card-bold">Name:</span> {data.first_name}{" "}
                  {data.last_name}
                </h1>
                <p className="mentor-gender full-gender">
                  {data.gender == "Female" ? (
                    <FontAwesomeIcon icon={faFemale} />
                  ) : data.gender == "Male" ? (
                    <FontAwesomeIcon icon={faMale} />
                  ) : null}
                </p>
              </div>
              <p className="mentor-email">
                <span className="card-bold">Email:</span> {data.email}
              </p>
              <p className="mentor-description">
                <span className="card-bold">Description:</span>{" "}
                {data.mentor_description}
              </p>
              <p className="mentor-languages">
                <span className="card-bold">Languages:</span> {data.languages}
              </p>
              <p className="mentor-availability">
                <span className="card-bold">Availability:</span>{" "}
                {data.availability}
              </p>
              <p className="mentor-offering">
                <span className="card-bold">Offering:</span> {data.offering}
              </p>
              <p className="area_location">
                <span className="card-bold">Area:</span> {data.area_location}
              </p>
              <p className="preferred_meeting_place">
                <span className="card-bold">Meeting Address:</span>{" "}
                {data.preferred_meeting_place}
              </p>
              <p className="mentor-affiliation">
                <span className="card-bold">Affiliation:</span>{" "}
                {data.affiliation}
              </p>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardFull);
