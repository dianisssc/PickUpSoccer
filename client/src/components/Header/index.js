import React from "react";
import "./style.css";
import Soccer2 from "../../video/Soccer2.mp4";
import Soccer from "../../video/Soccer.mp4";


let videoArr = [Soccer2, Soccer];
let video = videoArr[Math.floor(Math.random()*videoArr.length)];

function Header(props) {
    return (
      <div className=" text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
     
        { <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"id="video">
        <source src={video} type="video/mp4"></source>
      
      </video> }
      
        {props.children}
      </div>
    );
  }
  
  export default Header;
  