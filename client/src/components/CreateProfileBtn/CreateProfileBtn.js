import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateProfile from "../../pages/CreateProfile"

//import "./style.css";



function CreateProfileBtn(props) {
  return (
  <button onClick={props.onClick} className="btn btn-success" >
    <Router>
         <Route exact path="/create-profile" component={CreateProfile} />
         

    </Router>
    </button>
  );
}

export default CreateProfileBtn;