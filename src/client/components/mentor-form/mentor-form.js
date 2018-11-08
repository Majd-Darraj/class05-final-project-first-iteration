import React, { Component } from 'react';




class AddMentor extends Component {

        state = {
                "first_name": "Sussanne",
                "last_name": "Lervard",
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
            <button type= "submit"> Submit</button>
        </form>
        )
    }
}

export default AddMentor;