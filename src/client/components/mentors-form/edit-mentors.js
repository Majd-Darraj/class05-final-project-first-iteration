import React, { Component } from 'react';
import MentorForm from './mentor-form';


class EditMentor extends Component {
    state = {
        isLoading: true,
        message: 'Hang in there...',
        mentorData: null
    }

    componentDidMount() {
        const url = '/api/mentors'
        const id = this.props.match.params.id;


        fetch(`${url}/${id}`)
        .then(
            response => response.json()
        ).then(
            data => this.setState({
                isLoading: false,
                mentorData: data
            })
        )
        
    }

    render() {
        return (
            this.state.isLoading ? 
                <div>{this.state.message}</div>
                :
                <MentorForm {...this.props} mentorData={this.state.mentorData} id={this.props.match.params.id} isEditing={true} />
        )
    }
}

export default EditMentor;