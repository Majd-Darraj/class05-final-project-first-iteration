import React from "react";
import Result from "./Result";

export default ({ results }) => {
  return (
    <ul>
      {results.map((r, i) => (
        <Result key={i}> {r} </Result>
      ))}
    </ul>
  );
};
