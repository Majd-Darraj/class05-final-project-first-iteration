import React, { Component } from "react";
import MentorCard from "../cards/MentorCard";
import { Link } from "react-router-dom";

class MentorsList extends Component {
  state = {
    isLoading: true,
    mentorsData: []
  };

  componentDidMount = () => {
    fetch("/api/mentors", {
      method: "GET"
    })
      .then(response => response.json())
      .then(mentorsData => {
        // debugger;
        this.setState({
          isLoading: false,
          mentorsData: mentorsData
        });
      });
    /* .catch(err => {
        console.log("caught error!", err);
      }); */
  };

  render() {
    const { isLoading, mentorsData } = this.state;
    return (
      <>
        <div className="page-content">
          <section className="cards-list-container">
            <Link
              className="btn btn-outline-danger btn-lg btn-block mentor-add-button"
              to="/MentorsList/add"
            >
              Add New Mentor
            </Link>
            <div className="mentors-main-container">
              <div className="cards-list">
                {!isLoading && mentorsData.length > 0
                  ? mentorsData.map(mentor => {
                      return <MentorCard {...mentor} key={mentor.id} />;
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

export default MentorsList;
