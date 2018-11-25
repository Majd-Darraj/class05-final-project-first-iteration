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
            <div className="mentors-cat">
              <h1 className="mentors-cat-head">
                <span className="bold">Internships,</span> jobs and more!
              </h1>
              <p className="mentors-cat-p">
                Here you can find internships related to .....
              </p>
              <FontAwesomeIcon icon={faArrowDown} className="down-arrow" />
              <section className="mentors-offers internships-div" />
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
