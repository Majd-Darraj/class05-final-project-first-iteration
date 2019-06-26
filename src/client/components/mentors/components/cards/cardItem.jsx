import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { faFemale, faMale } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CardItem extends Component {
  render() {
    const { data } = this.props;
    // debugger;
    const previewUrl = `/mentors/preview/${data.id}`;

    return (
      <>
        <div className="card-item event-item">
          <div className="card-container mentor-container">
            <img
              src={data.profile_picture}
              alt="Mentor"
              className="card-image mentor-profile-picture"
            />
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
            <Link to={previewUrl} className="readmore mentor-more">
              Read More{" "}
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(CardItem);
