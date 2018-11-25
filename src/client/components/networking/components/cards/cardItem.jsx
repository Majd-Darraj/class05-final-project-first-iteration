import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import { faFemale, faMale } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CardItem extends Component {
  render() {
    const { data } = this.props;
    // debugger;
    const previewUrl = `${this.props.match.path}/preview/${data.id}`;

    return (
      <>
        <div className="card-item event-item">
          <div className="card-container mentor-container">
            <img
              src={data.organisation_logo}
              alt="Networking"
              className="card-image mentor-profile-picture"
            />
            <article className="card-info mentor-info">
              <div className="card-information mentor-card-information">
                <div className="name-gender">
                  <h1 className="organisation-name">
                    {data.organisation_name}
                  </h1>
                <p className="organisation-description">
                <span className="card-bold">Sector: </span>
                <br/>
                {data.sector_activity}
              </p>
              <p className="mentor-offering">
                <span className="card-bold">Address: </span>{" "}
                <br/>
                {data.organisation_address}, {data.organisation_postal_code}
              </p>
                </div>
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
