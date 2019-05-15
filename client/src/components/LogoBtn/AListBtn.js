import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PlayerList from "../../pages/PlayerList";
//import "./style.css";

function LogoBtn(props) {
  return (
    <Router>
         <Route exact path="/search" component={PlayerList} />
         <button onClick={props.onClick} type="button" className="btn btn-success float-left">View Da' List</button>

    </Router>
  );
}

export default LogoBtn;