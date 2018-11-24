import React from "react";
import CardItem from "../cards/cardItem";

class CardListView extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount = () => {
    this.props.data !== 0
      ? this.setState({
          isLoading: false
        })
      : this.setState({
          ...this.state
        });
  };

  render() {
    const { data } = this.props;
    const { isLoading } = this.state;

    return (
      <>
        <div className="page-content">
          <section
            className={`cards-list-container ${isLoading ? "is-loading" : ""}`}
          >
          {/*  <div className="mentors-cat">
              <h1 className="mentors-cat-head">
                Our mentors offer help free of charge, with a smile!
              </h1>
              <p className="mentors-cat-p">
                Choose the help you need, or scroll down to check all the
                mentors!
              </p>
              <section className="mentors-offers">
                <button className="mentors-offers-item readmore active">
                  All
                </button>
                <button className="mentors-offers-item readmore">
                  Networking
                </button>
                <button className="mentors-offers-item readmore">CV</button>
                <button className="mentors-offers-item readmore">
                  Job Application
                </button>
                <button className="mentors-offers-item readmore">
                  Support
                </button>
                <button className="mentors-offers-item readmore">
                  Networking
                </button>
                <button className="mentors-offers-item readmore">
                  Internship Application
                </button>
                <button className="mentors-offers-item readmore">
                  Danish Culture
                </button>
                <button className="mentors-offers-item readmore">
                  Danish History
                </button>
              </section>
           */ }
            <div className="cards-list not-events-list">
              {data && isLoading == false
                ? data.map(data => {
                    return (
                      <CardItem {...this.props} key={data.id} data={data} />
                    );
                  })
                : null}
            </div>
            <div className="loader">
              <div className="icon" />
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default CardListView;
