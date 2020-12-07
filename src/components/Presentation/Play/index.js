import React from "react";
import "./style.css";

function Character() {
  return (
    <div className="container">

        <h1>Explore and Learn</h1>
        <p> In this portion of the game you actually get to explore and learn!</p>
        <h2> Plane/ Ship </h2>
        <ul><li> Uses click event to move.</li>
        <li>Get position from the event.</li>
        <li>Transitions to new location over 1 second.</li>
        </ul>

    </div>
  );
}

export default Character;
