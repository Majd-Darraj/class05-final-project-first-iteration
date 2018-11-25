import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faFemale, faMale } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MentorCard extends Component {
  render() {
    const { mentorsData } = this.props;
    const data = this.props.mentorsData;

    return (
      <>
        <Link to={`/admin/mentors/edit/${mentorsData.id}`}>
          <div className="card-item event-item">
            <div className="card-container event-item-container">
              <div className="card-info-container">
                <div className="card-image-container">
                  <div
                    className="card-image event-theme-image"
                    style={{
                      backgroundImage: `url(${mentorsData.profile_picture})`
                    }}
                  />
                </div>
                <article className="card-info mentor-info">
                  <div className="card-information  mentor-card-informatio">
                    <div className="name-gender">
                      <h1 className="mentor-first-name">
                        {data.first_name} {data.last_name}
                      </h1>
                      <p className="mentor-gender">
                        {data.gender == "Female" ? (
                          <FontAwesomeIcon icon={faFemale} />
                        ) : data.gender == "Male" ? (
                          <FontAwesomeIcon icon={faMale} />
                        ) : null}
                      </p>
                    </div>
                    <p className="mentor-languages">
                      <span className="card-bold">Languages:</span>
                      <br />
                      {data.languages}
                    </p>
                    <p className="mentor-offering">
                      <span className="card-bold">Offering:</span>
                      <br />
                      {data.offering}
                    </p>
                    <p className="preferred_meeting_place">
                      <span className="card-bold">Meeting Address:</span>
                      <br />
                      {data.preferred_meeting_place}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  }
}

export default MentorCard;
