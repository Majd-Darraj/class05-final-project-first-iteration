import React from "react";
import CardFull from "../cards/cardFull";
class CardItemView extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount = () => {
    // debugger;
    const { data } = this.props;
    if (data.length > 0) {
      this.setState({
        isLoading: false
      });
    } else {
      return null;
    }
  };

  render() {
    const { params } = this.props.match;
    // debugger;
    const selectedEvent = this.props.data.find(dataEntry => {
      return dataEntry.id == params.id ? dataEntry : null;
    });

    const { isLoading } = this.state;

    return (
      <>
        <div className="page-content">
          <section
            className={`cards-list-container cards-list-container-events full-card ${
              isLoading ? "is-loading" : ""
            }`}
          >
            <div className="events-main-container">
              <div className="cards-list">
                {// <CardFull {...this.props} data={data} key={data.id} />
                selectedEvent ? (
                  <CardFull {...this.props} data={selectedEvent} />
                ) : null}
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

export default CardItemView;
