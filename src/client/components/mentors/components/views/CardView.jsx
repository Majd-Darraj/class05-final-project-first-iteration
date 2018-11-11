import React from "react";
import CardFull from "../cards/cardFull";
class CardView extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount = () => {
    const { data } = this.props;
    if (data.length > 0 || data !== undefined) {
      this.setState({
        isLoading: false
      });
    } else {
      return null;
    }
  };

  render() {
    const { data } = this.props;
    const { isLoading } = this.state;
    // debugger;
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
                {<CardFull {...data} key={data.id} />}
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

export default CardView;
