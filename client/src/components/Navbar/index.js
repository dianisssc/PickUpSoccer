import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg aListBackground coolFont">
      <Link className="navbar-brand text-light coolFont font-size" to="/">
        D'Pick-Up of Soccer
      </Link>
      <div>
        <ul className="navbar-nav">
            
        <li className="nav-item poppins">
            <Link
              to="/create-profile"
              className={window.location.pathname === "/create-profile" ? "nav-link active" : "nav-link"}
            >
              Create a Profile
            </Link>
          </li>
          
          <li className="nav-item poppins">
            <Link
              to="/query"
              className={window.location.pathname === "/query" ? "nav-link active" : "nav-link"}
            >
              Search Players 
            </Link>
          </li>
          <li className="nav-item poppins">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Log In 
            </Link>
          </li>
          
         
        
      
        </ul>
      </div>
      
      
    </nav>
  );
}

export default Navbar;
