import React from "react";
import { Link } from "react-router-dom";

import MentorCard from "./MentorCard";

class MentorsView extends React.Component {
  render() {

    const { mentorsData } = this.props;

    return (
      <>
        <div className="divider">
          <span>Mentors</span>
        </div>
        <div className="page-content edit-content">
          <section
            className={`cards-list-container cards-list-container-events`}
          >
            <div className="add-btn-con">
              <Link
                className="readmore add-card active-admin-link"
                to="/admin/mentors/add"
              >
                Add New Mentors
              </Link>
            </div>
            <div className="events-main-container">
              <div className="cards-list">
                {mentorsData.length > 0
                  ? mentorsData.map(mentor => {
                      return (
                        <MentorCard
                          {...this.props}
                          mentorsData={mentor}
                          key={`mentor_${mentor.id}`}
                        />
                      );
                    })
                  : null}
              </div>
              <div className="loader">
                <div className="icon" />
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default MentorsView;
