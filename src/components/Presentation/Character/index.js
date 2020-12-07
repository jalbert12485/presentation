import React from "react";
import "./style.css";

function Character() {
  return (
    <div className="container">

<h1> Characters and Ships</h1>
      <h2> Ships </h2>
      <ul>
        <li> File Name </li>
        <li> Cost </li>
        <li> Max Level </li>
      </ul>
      <h2> Characters </h2>
      <ul>
        <li> Globaly accessible state </li>
        <li> Name, Age, Credit </li>
        <li> Birth year and current year -- for relativistic effects!</li>
      </ul>


    </div>
  );
}

export default Character;
