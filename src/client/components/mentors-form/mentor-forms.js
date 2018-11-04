import React, { Component } from 'react';


class MentorForm extends Component {
    constructor(props) {
        super(props);
        if (this.props.isEditing) {
            this.state = {
                MentorData: this.props.MentorData
            }
        } else {
            this.state = {
                MentorData: {
                  "first_name": "",
                  "last_name": "",
                  "email": "",
                  "gender": "",
                  "profile_picture": "",
                  "languages": "",
                  "availability": "",
                  "offering": "",
                  "area_location": "",
                  "preffered_meeting_place": "",
                  "affiliation": "",
                  "active": 1

                }
            }

        }
    }

    updateField= (e) => {
        const { name, value}= e.target;


        this.setState({
            MentorData: {
                ...this.state.MentorData,
                [name]: value,
            }
        })
    }

    submitForm = (e) => {
        e.preventDefault();

        let url='', method = '';
        
        if (this.props.isEditing) {
            url ='/api/mentors/${this.props.match.params.id}'
            method='PUT';
        }else{
            url= '/api/mentors'
            method='POST';
        }

        fetch(url,{
            method, 
            body: JSON.stringify(this.state.MentorData),
            headers: {
                'Content-Type': "application/json"
            } 
        }).then (res=> res.text())
            .then(response => {
                consologe.log ('Succes:', response)
            })
        .catch(error => console.error ('Error',error));
        }

        render() {
            return(
                <form onSubmit= {this.submitForm}>
                <div className='col'>
                    <label>
                        First Name 
                        <input name ="first_name" value={this.state.mentorData.first_name} onChange={this.updateField} />
                    </label>
                </div>
                <button type ="submit">Submit</button>
                <div className='col'>
                            <label>
                                Last Name
                                <input name="last_name" value={this.state.mentorData.last_name} onChange={this.updateField} />
                            </label>
                </div>
                <div className='col'>
                            <label>
                                Email
                                <input name="email" value={this.state.mentorData.email} onChange={this.updateField} />
                            </label>
                        </div>
                <div className='col'>
                            <label>
                                Gender
                                <input name="gender" value={this.state.mentorData.gender} onChange={this.updateField} />
                            </label>
                        </div>
                        <div className='col'>
                        <label>
                            Profile Picture
                            <input name="profile_picture" value={this.state.mentorData.profile_picture} onChange={this.updateField} />
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                         Mentor Description
                            <input name="mentor_description" value={this.state.mentorData.mentor_description} onChange={this.updateField} />
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                        Languages
                            <input name="languages" value={this.state.mentorData.languages} onChange={this.updateField} />
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                        Offering
                            <input name="Offering" value={this.state.mentorData.offering} onChange={this.updateField} />
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                        Area Location
                            <input name="area_location" value={this.state.mentorData.area_location} onChange={this.updateField} />
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                        Preferred Meeting Place
                        <input name="preferred_meeting_place" value={this.state.mentorData.preferred_meeting_place} onChange={this.updateField} />
                        </label>
                    </div>
                    <div className='col'>
                        <label>
                        Affiliation
                            <input name="affiliation" value={this.state.mentorData.affiliation} onChange={this.updateField} />
                        </label>
                    </div>
                    <div>
                        <button className='btn btn-warning' type="submit">Save</button>
                        <button className='btn btn-warning' type="cancel">Cancel</button>
                    </div>
                </form>
            )
        }
    
    }


export default MentorForm;