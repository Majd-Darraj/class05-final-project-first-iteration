import React from "react";
import MapComponent from "../../../map-component/MapComponent";
import CardItem from "../cards/cardItem";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6

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
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <div className="page-content">
            {/* <div className="mentors-cat">
            <h1 className="mentors-cat-head">
              <span className="bold">Internships,</span> jobs and more!
            </h1>
            <p className="mentors-cat-p">
              Here you can find internships related to .....
            </p>
            <FontAwesomeIcon icon={faArrowDown} className="down-arrow" />
            <section className="mentors-offers internships-div" />
          </div> */}
            {data && isLoading == false ? (
              <MapComponent
                mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
                setMarker
                Zoom={11}
                mapData={data}
                key="events"
              />
            ) : null}
            <section
              className={`cards-list-container events-cards-list ${
                this.props.match.url === "/Events"
                  ? "cards-list-container-events "
                  : ""
              } ${isLoading ? "is-loading" : ""}`}
            >
              <div className="events-main-container">
                <div className="cards-list ">
                  {data && isLoading == false ? (
                    data.map(data => {
                      return (
                        <CardItem {...this.props} key={data.id} data={data} />
                      );
                    })
                  ) : (
                    <div className="lds-css ng-scope">
                      <div
                        style={{ height: "100%", width: "100%" }}
                        className="lds-double-ring"
                      />
                    </div>
                  )}
                </div>
                <div className="loader">
                  <div className="icon" />
                </div>
              </div>
            </section>
          </div>
        </ReactCSSTransitionGroup>
      </>
    );
  }
}

export default CardListView;
