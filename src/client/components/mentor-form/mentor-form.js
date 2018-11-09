import React, { Component } from 'react';


class MentorForms extends Component {

    state = {
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

    // componentDidMount = () => {
    //     const url = "/api/events";
    //     const id = this.props.match.params.id;

    //     fetch(`/api/mentors`)
    //       .then(response => response.json())
    //       .then(mentorsData => 
    //         mentorsData.map(mentor => {
    //             if (this.props.match.params.id == mentor.id)
    //         this.setState({
    //             "first_name": mentor.first_name,
    //             "last_name": "",
    //             "email": "",
    //             "gender": "",
    //             "profile_picture": "",
    //             "languages": "",
    //             "availability": "",
    //             "offering": "",
    //             "area_location": "",
    //             "preffered_meeting_place": "",
    //             "affiliation": "",
    //             "active": 1
    //         });
    //       })
    //     };

    updateField = (e) => {
        const {name, value }= e.target;
        this.setState({
            [name]:value,
        })
    }
    
    submitForm = (e) => {
        e.preventDefault();
       // alert(JSON.stringify(this.state));

       var url ='./api/mentors';
       var data =this.state;

       fetch(url,{
        method:'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
       }).then(res => res.text())
       .then(response => {
           console.log('Success', response)
       })
         
       .catch(error => console.log('Error',error));
    }

    render () {
        return (
        <form onSubmit={this.submitForm}>
        <h2>
            {`${this.props.isEditing ? "Edit" : "Add"} Mentor`}   
        </h2>     
            <div>
                <label>
                    First Name
                    <input name ="first_name" value={this.state.first_name} onChange={this.updateField} />
                </label>
            </div>
            <div>
                <label>
                 Last Name
                <input name="last_name" value={this.state.last_name} onChange={this.updateField} />
                </label>
            </div>
            <div>
                <label>
                Gender
                <input name="gender" value={this.state.gender} onChange={this.updateField} />
                 </label>
            </div>
            <div> 
                 <label>
                Profile Picture
                <input name="profile_picture" value={this.state.profile_picture} onChange={this.updateField} />
                </label>
            </div>
            <div>
                <label>
                Mentor Description
                <input name="mentor_description" value={this.state.mentor_description} onChange={this.updateField} />
                </label>
            <div>
                <label>
                Languages
                <input name="Languages" value={this.state.languages} onChange={this.updateField} />
                </label>
            </div>
            <div>
                 <label>
                Offering
                <input name="Offering" value={this.state.offering} onChange={this.updateField} />
                 </label>
            </div>
            <div>
                <label>
                Area Location
                <input name="area_location" value={this.state.area_location} onChange={this.updateField} />
                </label>
            </div>
            <div>
                <label>
                Preferred Meeting Place
                <input name="preferred_meeting_place" value={this.state.preferred_meeting_place} onChange={this.updateField} />
                </label>
            </div>
                <label>
                Affiliation
                <input name="affiliation" value={this.state.affiliation} onChange={this.updateField} />
                        </label>
            </div>
            <button type= "submit"> Submit</button>
            <button > Cancel </button>
        </form>
        )
    }
}

export default MentorForms;