import React, { Component } from 'react';
import MentorForm from './mentor-form';


/*export default (props) => {
    return (
        <MentorForm {...props} isEditing={true} />
    )
}*/

class EditMentor extends Component {
    state = {
        isloading: true,
        mentorData: null
    }

componentDidMount() {
    const url = '/api/mentors/'
    const id =this.props.match.params.id;

    console.log({props:this.props});

    //fetch()

}

render() {
    return(
        this.state.isloading ?
        <div> Hang in there ....</div>
        :
         <MentorForm {...this.props} isEditing={true} />
    )
}
}

export default EditMentor;
