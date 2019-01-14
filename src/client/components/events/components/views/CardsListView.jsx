import React from "react";
import MapComponent from "../../../map-component/MapComponent";
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
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default CardListView;
