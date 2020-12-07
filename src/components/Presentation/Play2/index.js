import React from "react";
import "./style.css";

function Play2() {
  return (
    <div className="container">


        <h2>Location</h2>
        <p>When the plane or ship arrives, its position determines a location.</p>
          <ul><li>Uses divs to create a mapping of the image. </li>
          <li>When the click is inside one of these divs, it changes current location</li>
          <li>Pressing 'L' will case the location information to show</li>
          <li>Information stored in and retrieved from database</li></ul>
        <h2>Levels</h2>
        <p> There are currently two levels</p>
        <ul><li>Earth, showing continents. </li>
        <li> Solar system, showing planents. </li></ul>

    </div>
  );
}

export default Play2;
