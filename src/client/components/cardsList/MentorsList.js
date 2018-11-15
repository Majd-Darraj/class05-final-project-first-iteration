import React, { Component } from "react";
import MentorCard from "../cards/MentorCard";
import { Link, Switch, Route } from "react-router-dom";
import MentorForms from "../mentor-form";

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
            <Link className="readmore mentor-add-button" to="/Mentors/add">
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
        <Switch>
          <Route
            exact
            path={`/Mentors/edit/:id`}
            component={MentorForms.EditMentor}
          />
          <Route exact path="/Mentors/add" component={MentorForms.AddMentor} />
        </Switch>
      </>
    );
  }
}

export default MentorsList;
