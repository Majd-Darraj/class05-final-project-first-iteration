import React from "react";
import MapComponent from "../../../map-component/MapComponent";
import CardItem from "../cards/cardItem";

class ListView extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount = () => {
    const { eventsData } = this.props;
    if (eventsData.length > 0 || eventsData !== undefined) {
      this.setState({
        isLoading: false
      });
    } else {
      return null;
    }
  };

  render() {
    const { eventsData, eventCoords } = this.props;
    const { isLoading } = this.state;

    // debugger;
    return (
      <>
        <div className="page-content">
          <MapComponent
            mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
            setMarker
            Zoom={11}
            coords={eventCoords}
            key="events"
          />
          <section
            className={`cards-list-container cards-list-container-events ${
              isLoading ? "is-loading" : ""
            }`}
          >
            <div className="events-main-container">
              <div className="cards-list">
                {eventsData.length > 0
                  ? eventsData.map(event => {
                      return <CardItem {...event} key={event.id} />;
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

export default ListView;
