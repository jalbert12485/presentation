import React from "react";
import "./style.css";

function Authentication() {
  return (
    <div className="container">

      <h1>Authentication</h1>
      <hr />
      <ul>
        <li>JSON Web Token</li>
        <li>Bcrypt JS</li>
        <li>Database Encryption</li>
      </ul>
      <hr />
      <h3>Future Development</h3>
      <ul>
        <li>Forgot Password</li>
        <li>Profile image, Gravatar</li>
      </ul>
    </div>

  );
}

export default Authentication;
