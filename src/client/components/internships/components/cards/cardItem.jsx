import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

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
              src={data.internship_theme_image}
              alt="Mentor"
              className="card-image mentor-profile-picture"
            />
            <article className="card-info mentor-info">
              <div className="card-information mentor-card-informatio">
                <p className="mentor-languages">
                  <span className="card-bold">Title:</span>
                  <br />
                  {data.internship_title}
                </p>
                <p className="mentor-offering">
                  <span className="card-bold">Organisation:</span>
                  <br />
                  {data.organisation_name}
                </p>
                <p className="preferred_meeting_place">
                  <span className="card-bold">Department:</span>
                  <br />
                  {data.department}
                </p>
                <p className="preferred_meeting_place">
                  <span className="card-bold">Category:</span>
                  <br />
                  {data.internship_category}
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
