import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";
import API from "../../utils/ProfileAPI"

function Card(props) {
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h3>Name</h3>

      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Email:{props.email} </li>
        <li className="list-group-item">Password: {props.password}</li>
        <li className="list-group-item">Location:{props.location} </li>
        <li className="list-group-item">Gender: {props.gender}</li>
        <li className="list-group-item">links: {props.links}</li>
        <li className="list-group-item">Age: {props.age} </li>
        <li className="list-group-item">Position: {props.poisition}</li>
        <li className="list-group-item">Style:{props.style} </li>
        <li className="list-group-item">Experience: {props.experience}</li>
        <li className="list-group-item">Avaiable for Season: {props.season}</li>
        <li className="list-group-item">Contact: {props.contact}</li>
        <li className="list-group-item">About: {props.about}</li>
      </ul>
      <div className="card-body">
        <br />
        <br />


        
      </div>

    </div>



  );
}

export default Card;
