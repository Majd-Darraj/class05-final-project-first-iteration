import React, { Component } from "react";
import MentorCard from "../cards/MentorCard";
import Header from "../Header";
// import InternshipData from "../../database/InternshipData.json";
import { Link } from "react-router-dom";

class MentorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      mentorsData: []
    };
  }

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData() {
    fetch("/api/mentors")
      .then(response => response.json())
     
      .then(Data =>
        this.setState({
          mentorsData:Data,
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    // JSON.stringify(this.state.InternshipData);
    const { isLoading, mentorsData } = this.state;
    return (
      <div>
              <Header />
        <section  className={`cards-list-container `}>
          <div className="cards-list">
          <Link  to="/Mentors/add">Add New Mentor</Link>

            {mentorsData.map(mentor => {
                return (
                    <MentorCard {...mentor} />
                  );
                })
              }
          </div>
          <div className="loader">
            <div className="icon" />
          </div>
        </section>
        </div>

    );
  }
}

export default MentorsList;
