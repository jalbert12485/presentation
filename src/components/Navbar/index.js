import React from "react";
import "./style.css";

const style={
  back: {
    backgroundColor: "#212529",
    color: "white"
  }
}

function Presentation(props) {
  return (
    <React.Fragment>
      <nav className="navbar" style={style.back}>
       <span className="navbar-brand mb-0 h1">Explorer</span>
      </nav>
    </React.Fragment>
  );
}

export default Presentation;
