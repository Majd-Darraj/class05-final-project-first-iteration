import React, { Component } from "react";
import MentorForm from "./mentor-form";

/*export default (props) => {
    return (
        <MentorForm {...props} isEditing={true} />
    )
}*/

class EditMentor extends Component {
  state = {
    isloading: true,
    mentorData: null
  };

  componentDidMount() {
    const url = "/api/Mentors";
    const id = this.props.match.params.id;

    console.log({ props: this.props });

    fetch(`${url}/${id}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          isLoading: false,
          mentorData: data
        })
      );
  }

  render() {
    debugger;
    return <MentorForm {...this.props} isEditing={true} />;
  }
}

export default EditMentor;
