import React, { useState } from "react";
import "./style.css";
import Welcome from "./Welcome";
import Overview from "./Overview";
import Authentication from "./Authentication";
import Character from "./Character";
import Character2 from "./Character2";
import Play from "./Play";
import Play2 from "./Play2";
import Earn from "./Earn";
import Earn2 from "./Earn2";
import Questions from "./Questions";



function Presentation() {

  const [page, setPage]=useState({
    page: 1
  });

  function changePage(direction){
    if(direction === "+" && page.page < 10){
      let newPage=page.page +1;
      setPage({page: newPage})
    }else if(direction === "-" && page.page > 1){
      let newPage=page.page -1;
      setPage({page: newPage})
    }
  }

  return (
    <div className="container mt-4">
      {page.page===1 && <Welcome /> }
      {page.page===2 && <Overview /> }
      {page.page===3 && <Authentication /> }
      {page.page===4 && <Character /> }
      {page.page===5 && <Character2 /> }
      {page.page===6 && <Play /> }
      {page.page===7 && <Play2 /> }
      {page.page===8 && <Earn /> }
      {page.page===9 && <Earn2 /> }
      {page.page===10 && <Questions /> }
      <div className="row">
      <button type="button" onClick={()=>changePage("-")} className="mr-auto col-6 btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </button>
      <button type="button" onClick={()=>changePage("+")} className="ml-auto col-6 btn"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </button>
    </div>
    </div>
  );
}

export default Presentation;
