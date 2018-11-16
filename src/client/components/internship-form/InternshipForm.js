import React, {Component} from 'react';
//import {Link} from  "react-router-dom";

class InternshipForm extends Component {
    state = {
    data: {
        "internship_title": "",
        "internship_category": "",
        "organisation_name": "",
        "department": "",
        "internship_description": "",
        "organisation_description": "",
        "internship_agreement": "",
        "internship_requirements": "",
        "application_requirements": "",
        "internship_availabiltiy_schedule": "",
        "travel_expenses": "",
        "location": "",
        "internship_add_date": "",
        "closing_date": "",
        "internship_deadline": "",
        "contact_person": "",
        "phone_contact": "",                    
        "email_contact": "",
        "organisation_address": "",
        "organisation_website": "",
        "internship_theme_image": "",                    
        "active": 1
    }
};

componentDidMount = () => {
    if (this.props.isEditing) {
      this.setState({
        data: this.props.data
      });
    } else if (this.props.isAdding) {
      return null;
    }
  };

  updateField = e => {
    const { name, value } = e.target;
    // debugger;
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    });
  };


  submitForm = e => {
    e.preventDefault();

      let url = "",
      method = "";

    if (this.props.isEditing) {
      url = `/api/internships/${this.props.match.params.id}`;
      method = "PUT";
    } else {
      url = `/api/internships`;
      method = "POST";
    }

    fetch(url, {
        method,
        body: JSON.stringify(this.state.data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.text())
        .then(response => {
          alert("Success:", response);
        })
        .catch(error => console.error("Error:", error));
    };


render() {
    const { data } = this.state;

    return (
        <form onSubmit ={this.submitForm}>
        <h2>
            {`${this.props.isEditing ? "Edit" : "Add"} Internship`}
        </h2>
        <div> 
         <label> 
         Internship_title
        <input 
            name= "internship_title"
            value = {data.first_name}
            onChange= {this.updateField} 
            />
         </label>
        </div>
        <div> 
            <label> 
            Internship_category
        <input
            name= "internship_category"
            value={data.internship_category}
            onChange={this.updateField}
            />
            </label>
        </div>
        <button type="submit"> Submit</button>
        <button> Cancel </button>
        </form>
    );
   }
}

export default InternshipForm;
