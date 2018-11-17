import React from "react";
import { Link } from "react-router-dom";

import InternshipCard from "./InternshipCard";

class IntershipsView extends React.Component {
  componentDidMount = () => {
    const { internshipsData } = this.props;
    if (internshipsData.length > 0 || internshipsData !== undefined) {
      this.setState({
        isLoading: false
      });
    } else {
      return null;
    }
  };

  render() {
    const { internshipsData } = this.props;

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
                to="/admin/internships/add"
              >
                Add New Internship
              </Link>
            </div>
            <div className="events-main-container">
              <div className="cards-list">
                {internshipsData.length > 0
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

export default IntershipsView;
