import React from "react";
import { Link } from "react-router-dom";

import NetworkingCard from "./NetworkingCard";

class NetworkingView extends React.Component {
  componentDidMount = () => {
    const { networkingData } = this.props;
    if (networkingData.length > 0 || networkingData !== undefined) {
      this.setState({
        isLoading: false
      });
    } else {
      return null;
    }
  };

  render() {
    const { networkingData } = this.props;

    return (
      <>
        <div className="divider">
          <span>Networking</span>
        </div>
        <div className="page-content edit-content">
          <section
            className={`cards-list-container cards-list-container-events`}
          >
            <div className="add-btn-con">
              <Link
                className="readmore add-card active-admin-link"
                to="/admin/networking/add"
              >
                Add Networking
              </Link>
            </div>
            <div className="events-main-container">
              <div className="cards-list">
              {networkingData.length > 0 
              ? networkingData.map(networking => {
                return (
                        <NetworkingCard
                          {...this.props}
                          networkingData={networking}
                          key={`networking_${networking.id}`}
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

export default NetworkingView;
