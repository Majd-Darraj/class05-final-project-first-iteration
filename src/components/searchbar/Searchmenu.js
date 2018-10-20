import React , {Link} from 'react';
import '../App.css';


function Combobox (props) {
    

      return (
          <form >
          <span className="custom-dropdown">
          <label>
            Pick your favorite flavor:
            <select value={props.value} onChange={(e) =>{
                        
                                props.handleChange((e.target).value);
            } }>
              <option value="all" >ALL</option>
              <option value="interships">Interships</option>
              <option value="events" link="events">Events</option>
              <option value="mentors">Mentors</option>
              <option value="networking" link="networking">Networking</option>
            </select>
          </label>
          </span>
    
        </form>
      );
    }
  export default Combobox;