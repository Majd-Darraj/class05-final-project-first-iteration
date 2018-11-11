import React, { Component } from "react";
import Result from "./results/result";

export default ({ match: { url }, data }) => (
  <>
    <div className="page-content">
      <section className="cards-list-container ">
        <div className="cards-list">
          <ul>
            {data.map((r, i) => (
              <Result key={i}>{r}</Result>
            ))}
            }
          </ul>
        </div>
        {/* <div className="loader">
          <div className="icon" />
        </div> */}
      </section>
    </div>
  </>
);
