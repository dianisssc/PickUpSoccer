import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="jumbotron hero text-center"   style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    
      {props.children}
    </div>
  );
}

export default Hero;
