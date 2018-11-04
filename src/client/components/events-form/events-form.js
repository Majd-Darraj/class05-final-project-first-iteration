import React from 'react';
import EventCard from './cards/EventCard';

class EventsForm extends React.Component{
    constructor(props){
        super(props);
        if (this.props.isEditing) {
        this.state = {
            eventsData : this.props.eventsData,
            displaySubmitForm : false,
            displayDetailsCard:true,
            isActive : true
        }
    }else{
        this.state = 
            {
                eventsData : {
                    "contact_email": "",
                    "contact_person": "",
                    "contact_phone": "",
                    "event_URL": "",
                    "event_address": "",
                    "event_agenda": "",
                    "event_city": "",
                    "event_end_date": "",
                    "event_end_hour": "",
                    "event_geo_lat": 0,
                    "event_geo_lng": 0,
                    "event_language": "",
                    "event_name": "",
                    "event_postal_code": "",
                    "event_start_date": "",
                    "event_start_hour": "",
                    "event_theme_image": "",
                    "event_type": "",
                    "max_participants": "",
                    "active": "1"
                },
                displaySubmitForm : true,
                displayDetailsCard: false,
                isActive: true
            }

    }
    }
    updateField = (e) =>{
        const {name, value} = e.target;
        
        this.setState({
            eventsData : {
                ...this.state.eventsData, 
                [name]: value
            }
        })
    }
}

export default EventsForm;