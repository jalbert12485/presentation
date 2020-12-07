import React, { Component } from "react";
import Presentation from "./components/Presentation";
import Website from "./components/Website";
import Navbar from "./components/Navbar";

const style={
  container:{
      border: "3px solid #23d997"
  }
}


function App() {



    return (
      <div className="container" >
        <Navbar />

        <div className="row">
          <div className="col-md-4">
          <Presentation />
          </div>

          <div className="col-md-8">
          <Website />
          </div>
        </div>
        
      </div>
    );
  
}

export default App;