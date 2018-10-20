import React, { Component } from "react";
// import {JobList } from "./componentsclass";
import Searchplace from './Searchbar';
import Combobox from './Searchmenu';


class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {valuecom: null, valueinp:null};
  
    this.Changemenu = this.Changemenu.bind(this);
    this.changeinput = this.changeinput.bind(this);
  
  }
  
  
  Changemenu(comval) {
  this.state.valuecom=comval;
    console.log("this log from api  "+ this.state.valuecom);
    if (this.state.valuecom==='networking') {
      console.log(" this log from calling page via if  "+this.state.valuecom);
      window.location = "http://localhost:3000/networking";
  
    }
     }
  changeinput(inpval) {
   this.state.valueinp=inpval;
   console.log(this.state.valueinp)
   console.log("test print another stat" + this.state.valuecom);
   }
  
  
  render() {
    return (
      <div>
        <Searchplace changeinput={this.changeinput}/>
        <Combobox Changemenu={this.Changemenu} />
      <div>
      </div>


      
      </div>
    );
  }
}

export default Searchbar;