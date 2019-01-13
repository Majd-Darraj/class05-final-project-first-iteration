import React, { Component } from "react";
import { Link } from "react-router-dom";
import { facebook, faFacebook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class footer extends Component {
  render() {
    return (
      <>
        <footer className="footer-wrapper">
          <div className="footer-inner">
            <section className="text footer-item">
              <div className="aboutus">
                <h3>About Us</h3>
                <div className="contact-item">
                  <h6>
                    Textile Hub for Refugees' Empowerment, Employment and
                    Entrepreneurship Advancement in Denmark - a new model
                  </h6>
                  <p>
                    Integration is a key problem for refugees and their host
                    countries. This project seeks to help solve this problem by
                    developing and testing a pioneering themed model of
                    Empowerment, Employment and Entrepreneurship opportunities.
                    The model offers a step-change programme to women refugees
                    with differing levels of life experience and educational
                    qualifications, which may be accessed according to their
                    individual confidence and competence.
                  </p>
                  <p>The project is funded by Innovationsfonden.</p>
                </div>
              </div>
            </section>
            <section className="mentors-offers site-map footer-item">
              <h3>Contact Us</h3>
              <div className="contact-item">
                <a
                  className="contact-link"
                  href="https://saxoinstitute.ku.dk/staff/?pure=en/persons/519745"
                >
                  Jane Malcolm-Davies
                </a>
                <p>
                  Phone:
                  <a href="tel:0045262022"> +45 26 20 22 09</a>
                  <br /> E-mail:&nbsp;
                  <a href="mailto:jmalcolm-davies@hum.ku.dk">
                    jmalcolm-davies@hum.ku.dk
                  </a>
                  &nbsp;&nbsp;
                </p>
              </div>
              <hr className="footer-hr" />
              <div className="contact-item">
                <a
                  className="contact-link"
                  href="https://saxoinstitute.ku.dk/staff/?pure=en/persons/519745"
                >
                  Egzona Haxha
                </a>
                <p>
                  Phone:
                  <a href="tel:004560863217"> +45 60 86 32 17</a>
                  <br /> E-mail:&nbsp;
                  <a href="mailto:egzona@hum.ku.dk">egzona@hum.ku.dk</a>
                  &nbsp;&nbsp;
                </p>
              </div>
              {/* <FontAwesomeIcon icon={facebook} className="social-item" />
              <FontAwesomeIcon icon={faFacebook} className="social-item" />
              <div className="social">
                <Link to={`/internships`}>
                  {" "}
                  <FontAwesomeIcon icon={facebook} className="social-item" />
                </Link>
              </div> */}
            </section>

            {/* <section className="mentors-offers site-map footer-item">
              <h3>Sitemap</h3>
              <Link to={`/internships`}>Internships</Link>
              <Link to={`/events`}>Events</Link>
              <Link to={`/mentors`}>Mentors</Link>
              <Link to={`/networking`}>Networking</Link>
            </section> */}
            {/* <div className="footer-item">
              <h3>Partners</h3>
              <ul>
                <li>
                  <a href="/">Centre for Textile Research</a>
                  <a href="https://cms.ku.dk/hum-sites/saxo-sites/engelsk/centre/ctr/">
                    ,
                  </a>{" "}
                  University of Copenhagen
                </li>
                <li>
                  <a href="http://www.en.aau.dk/education/master/development-international-relations/specialisations/global-refugee-studies">
                    Global Refugee Studies,
                  </a>{" "}
                  Aalborg University
                </li>
                <li>
                  <a href="https://www.designskolenkolding.dk/en">
                    Design school Kolding
                  </a>
                </li>
                <li>
                  <a href="http://www.henrikvibskov.com/">Henrik Vibskov,</a>{" "}
                  Designer
                </li>
                <li>
                  <a href="http://www.vikingelandsbyen.dk/">
                    Albertslund Vikingelandsby,
                  </a>{" "}
                  Historical Workshop
                </li>
                <li>
                  <a href="https://ucc.dk/international/about-ucc/school-bachelor-degree-programme/textile-and-handicraft-design">
                    Textile Design, Handicraft and Communication,
                  </a>{" "}
                  University College Copenhagen, UCC
                </li>
                <li>
                  <a href="http://www.fakti.dk/">FAKTI</a> (Foreningen af
                  flygtninge og indvanderkvinder, Society of female refugees and
                  migrants)
                </li>
                <li>
                  <a href="http://www.termplus.dk/">TermPlus</a>
                </li>
                <li>
                  <a href="https://designvanilie.wordpress.com/kurser-for-etniske-kvinder-og-flygtninge-kvinder/">
                    Design Vanilie
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </footer>
        <div className="copy">
          Copyright 2018 THREAD - Centre for Textile Research. All Rights
          Reserved.
        </div>
      </>
    );
  }
}

// <footer>
//   <div className="container">
//     <br />
//     <legend> About Us:</legend>
//     <br />
//     <p>
//       Textile Hub for Refugees' Empowerment, Employment and Entrepreneurship
//       Advancement in Denmark - a new model
//     </p>
//     <p>
//       Integration is a key problem for refugees and their host countries. This
//       project seeks to help solve this problem by developing and testing a
//       pioneering themed model of Empowerment, Employment and Entrepreneurship
//       opportunities. The model offers a step-change programme to women refugees
//       with differing levels of life experience and educational qualifications,
//       which may be accessed according to their individual confidence and
//       competence.
//     </p>
//     <p> The project is funded by Innovationsfonden.</p>
//   </div>

//   <div className="col-12 col-md-6 col-lg-3">
//     <br />
//     <h3> Contact:</h3>
//     <p>
//       Jane Malcolm-Davies, Director <br />
//       Centre for Textile Research
//       <br />
//       University of Copenhagen
//       <br />
//       Tel.: +45 26 20 22 09 <br />
//       E-mail: jane@jmdandco.com
//       <br />
//     </p>
//     <p>
//       Egzona Haxha, Co - Director <br />
//       Centre for Textile Research <br />
//       University of Copenhagen <br />
//       Tel.: +45 60 86 32 17 <br />
//       E-mail: egzona@hum.ku.dk <br />
//     </p>
//   </div>
//   <div id="main-footer">
//     <h4> Developed by: </h4>
//     <p>
//       Group 3 for the Final Project Class at <br />
//       Hack Your Future - Copenhagen
//       <a href="http://hackyourfuture.dk" target="_blank">
//         http://hackyourfuture.dk
//       </a>
//     </p>
//   </div>
// </footer>;
