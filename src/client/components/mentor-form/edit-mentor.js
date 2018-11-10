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
        message:'Hang in there...',
        mentorsData: null
    }

componentDidMount() {
    const url = '/api/mentors'
    const id =this.props.match.params.id;

    console.log({props:this.props});
 
    
    fetch(`${url}/${id}`)
    .then(
        response => response.json()
    ).then(
        data => this.setState({
            isLoading: false,
            mentorsData: data
        })
    )
}

render() {
    return(
        this.state.isloading ?
        <div>{this.state.message}</div>
        :
    <MentorForm {...this.props} mentorsData={this.state.mentorsData} id={this.props.match.params.id} isEditing={true} />    )
}
}

export default EditMentor;
