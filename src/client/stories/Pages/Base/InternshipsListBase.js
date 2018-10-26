import React, { Component } from "react";
import InternshipCard from "../../Cards/InternshipCard";
import Header from "../../Headers/Header";

class InternshipsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      internshipsData: []
    };
  }

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData() {
    fetch(
      "https://raw.githubusercontent.com/paredesrichard/commandline/master/internships.json"
    )
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.map(internship => ({
          id: `${internship.id}`,
          title: `${internship.internship_title}`,
          category: `${internship.internship_category}`,
          department: `${internship.department}`,
          description: `${internship.internship_description}`
        }))
      )
      .then(internshipsData =>
        this.setState({
          internshipsData,
          isLoading: false
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    // JSON.stringify(this.state.InternshipData);
    const { isLoading, internshipsData } = this.state;
    return (
      <>
        <Header />
        <div
          className={`cards-list-container ${isLoading ? "is-loading" : ""}`}
        >
          <div className="cards-list">
            {!isLoading && internshipsData.length > 0
              ? internshipsData.map(internship => {
                  const {
                    id,
                    title,
                    category,
                    department,
                    description
                  } = internship;
                  return (
                    <InternshipCard
                      title={title}
                      id={id}
                      key={id}
                      department={department}
                      category={category}
                      organisation_description={description}
                    />
                  );
                })
              : null}
          </div>
          <div className="loader">
            <div className="icon" />
          </div>
        </div>
      </>
    );
  }
}

export default InternshipsList;
