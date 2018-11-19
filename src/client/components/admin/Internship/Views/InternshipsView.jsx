import React from "react";
import { Link } from "react-router-dom";

import InternshipCard from "./InternshipCard";

class InternshipsView extends React.Component {
  render() {
    const { internshipsData } = this.props;
    debugger;
    return (
      <>
        <div className="divider">
          <span>Internship</span>
        </div>
        <div className="page-content edit-content">
          <section
            className={`cards-list-container cards-list-container-events`}
          >
            <div className="add-btn-con">
              <Link
                className="readmore add-card active-admin-link"
                to="/admin/View/add"
              >
                Add New Internship
              </Link>
            </div>
            <div className="events-main-container">
              <div className="cards-list">
                {internshipsData
                  ? internshipsData.map(internship => {
                      return (
                        <InternshipCard
                          {...this.props}
                          internshipsData={internship}
                          key={`internship_${internship.id}`}
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

export default InternshipsView;
