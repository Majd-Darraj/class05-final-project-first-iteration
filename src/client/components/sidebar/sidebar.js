import React from "react";
import sidebar from "./sidebar.css";

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Forsyth_Barr_Building%2C_Christchurch_02.JPG/800px-Forsyth_Barr_Building%2C_Christchurch_02.JPG"
          className="image"
        />
        {this.props.text}
      </div>
    );
  }
}

export default SideBar;
