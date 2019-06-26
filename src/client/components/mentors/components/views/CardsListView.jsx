import React from "react";
import CardItem from "../cards/cardItem";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            {/* <div className="mentors-cat mentors-about">
              <section className="mentors-offers">
                <p className="mentors-cat-p">
                  THREAD is a dynamic and innovative collaboration of diverse
                  partners from business, design, education, research and
                  refugee support agencies aiming to achieve life-changing
                  results for women who are forging new lives in Denmark.
                </p>
                <button className="mentors-offers-item readmore">
                  Read More
                </button>
              </section>
            </div> */}
            <div className="mentors-cat">
              <h1 className="mentors-cat-head">
                Our <span className="bold">mentors</span> offer help{" "}
                <span className="bold">free</span> of charge, with a smile!
              </h1>
              <p className="mentors-cat-p">
                Choose the help you need, or scroll down to check all the
                mentors!
              </p>
              <FontAwesomeIcon icon={faArrowDown} className="down-arrow" />
              <section className="mentors-offers men-mer">
                <button className="mentors-offers-item readmore active">
                  #All
                </button>
                <button className="mentors-offers-item readmore">
                  #Networking
                </button>
                <button className="mentors-offers-item readmore">#CV</button>
                <button className="mentors-offers-item readmore">
                  #Job Application
                </button>
                <button className="mentors-offers-item readmore">
                  #Support
                </button>
                <button className="mentors-offers-item readmore">
                  #Internship Application
                </button>
                <button className="mentors-offers-item readmore">
                  #Danish Culture
                </button>
                <button className="mentors-offers-item readmore">
                  #Danish History
                </button>
              </section>
            </div>
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
