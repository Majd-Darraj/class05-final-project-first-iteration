import React, { Component } from "react";
import { Link } from "react-router-dom";
import { facebook, faFacebook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class footer extends Component {
  render() {
    return (
      <>
        <div className="footer-wrapper">
          <div className="footer-inner">
            <div className="footer-about">
              <a className="footer-item" href="/Events">
                <img
                  alt="logo"
                  className="logo"
                  src="https://raw.githubusercontent.com/HackYourFuture-CPH/class05-final-project/master/images/thread-logo.png"
                />
              </a>
              <div className="text">
                <h1 className="mentors-about-head">
                  <span className="letter">T</span>
                  extile <span className="letter">H</span>
                  ub for <span className="letter">R</span>
                  efugees' <span className="letter">E</span>
                  mpowerment, Employment and Entrepreneurship{" "}
                  <span className="letter">A</span>
                  dvancement in <span className="letter">D</span>
                  enmark
                </h1>
              </div>
            </div>
            <section className="mentors-offers site-map footer-item">
              <h3>Contact Us</h3>
              <h6>Associate professor</h6>
              <p>
                <a href="https://saxoinstitute.ku.dk/staff/?pure=en/persons/519745">
                  Jane Malcolm-Davies,{" "}
                </a>
                <br /> Phone:
                <a href="tel:0045262022">+45 26 20 22 09</a>
                <br /> E-mail:&nbsp;
                <a href="mailto:jmalcolm-davies@hum.ku.dk">
                  jmalcolm-davies@hum.ku.dk
                </a>
                &nbsp;&nbsp;
              </p>
              <FontAwesomeIcon icon={facebook} className="social-item" />
              <FontAwesomeIcon icon={faFacebook} className="social-item" />
              <div className="social">
                <Link to={`/internships`}>
                  {" "}
                  <FontAwesomeIcon icon={facebook} className="social-item" />
                </Link>
              </div>
            </section>
            {/* <section className="mentors-offers site-map footer-item">
              <h3>Sitemap</h3>
              <Link to={`/internships`}>Internships</Link>
              <Link to={`/events`}>Events</Link>
              <Link to={`/mentors`}>Mentors</Link>
              <Link to={`/networking`}>Networking</Link>
            </section> */}
            <div className="footer-item">
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
            </div>
          </div>
        </div>
        <div className="copy">
          Copyright 2018 THREAD - Centre for Textile Research. All Rights
          Reserved.
        </div>
      </>
    );
  }
}
