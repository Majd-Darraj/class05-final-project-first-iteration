import React, { Component } from "react";
import MentorCard from "../cards/MentorCard";
import Header from "../Header";
import Search from "../search/Search";

class MentorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentorsData: []
    };
  }

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
      })
      .catch(err => {
        console.log("caught error!", err);
      });
  };

  render() {
    const { mentorsData } = this.state;
    return (
      <>
        <div className="page-content">
          <section className="cards-list-container">
            <div className="mentors-main-container">
              <div className="cards-list">
                {mentorsData.length > 0
                  ? mentorsData.map(mentor => {
                      return <MentorCard {...mentor} />;
                    })
                  : null}
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default MentorsList;
