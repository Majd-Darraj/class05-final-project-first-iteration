import React, { Component } from "react";
import { Link } from "react-router-dom";

class MentorCard extends Component {
  render() {
 
    const { mentorsData } = this.props;
  
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
                <article className="card-info">
                  <div className="card-date">
                    <h1 className="mentor-first-name">{mentorsData.first_name}</h1>
                    <h1 className="mentor-last-name">{mentorsData.last_name}</h1>
                  </div>
                  <div className="card-information">  
                  <p className="mentor-description">
                    {mentorsData.mentor_description}
                  </p>
                   <p className="mentor-email">{mentorsData.email}></p>
                    <p className="mentor-gender">{mentorsData.gender}</p>
                  <p className="mentor-language"> {mentorsData.languages}
                  </p>
                    <p className="mentor-availability">{mentorsData.availability}</p>
                    <p className="mentor-offering">{mentorsData.offering}</p>
                    <p className="mentor-adress">{mentorsData.area_location},{mentorsData.preferred_meeting_place}</p>

                    <p className="mentor-affiliation">{mentorsData.affiliation}</p>
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
