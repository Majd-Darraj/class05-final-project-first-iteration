import React from 'react';
import MentorForm from './mentor-form';


export default (props) => {
    return (
        <MentorForm {...props} isEditing={true} />
    )
}

class EditMentor extends Component {
    state = {
        isloading = true,
        mentorData: "",
    }

componentDidMount() {
    const url = '/api/mentors/'
    const id =this.props.match.id;

    console.log

    fetch()

}

render() {
    return(
        this.state.isloading ?
        <div> Hang in there ....</div>
        :
         <MentorForm {...this.props} mentor={this.state.mentorData} isEditing={true} />
    )
}
}

export default EditMentor;
