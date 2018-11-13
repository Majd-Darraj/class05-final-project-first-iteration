import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap-grid.css";


const Footer = () => {
    return (
     <footer> 
    <div className="container"> 
    <br />
         <legend> About Us:</legend>
         <br /> 
         <p> 
        Textile Hub for Refugees' Empowerment, Employment 
        and Entrepreneurship Advancement in Denmark - a 
        new model
        </p>
        <p>
        Integration is a key problem for refugees and their host countries.
          This project seeks to help solve this problem by developing and
          testing a pioneering themed model of Empowerment, Employment and
          Entrepreneurship opportunities. The model offers a step-change
          programme to women refugees with differing levels of life experience
          and educational qualifications, which may be accessed according to
          their individual confidence and competence.
        </p>
        <p> The project is funded by Innovationsfonden.
        </p>
    </div>     
     
     <div className="col-12 col-md-6 col-lg-3">
     <br />
        <h3> Contact:</h3>
        <p>
        Jane Malcolm-Davies, Director <br /> 
        Centre for Textile Research<br/>
        University of Copenhagen<br />
        Tel.: +45 26 20 22 09 <br /> 
        E-mail: jane@jmdandco.com
        <br />   
        </p>

        <p> 
         Egzona Haxha, Co - Director <br />
         Centre for Textile Research <br /> 
         University of Copenhagen <br /> 
         Tel.: +45 60 86 32 17 <br />
         E-mail: egzona@hum.ku.dk <br />         
        </p>
    </div>
    <div id="main-footer"> 
        <h4> Developed by: </h4>
        <p>
    Group 3 for the Final Project Class at <br /> 
    Hack Your Future - Copenhagen
    <a href ="http://hackyourfuture.dk" target ="_blank">
        http://hackyourfuture.dk
    </a>
        </p>
    </div>
        </footer>
    );
};


export default Footer;