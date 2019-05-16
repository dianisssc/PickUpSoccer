import React from "react";
import "./style.css";

const QueryForm = ({ handleInputChange }) => {
  return (

    <form className="text-light" id="queryForm">

      {/*Position Input */}
      <div className="form-group">
        <label for="exampleFormControlSelect1"></label>
        <select className="form-control mx-auto" id="position-input" name="position" onChange={handleInputChange}>
        <option>Select a position</option>
        <option>Goalie</option>
        <option>Defense</option>
        <option>Midfielder</option>
        <option>Outside Mid</option>
        <option>Forward/Striker</option>
        <option>Just kickin' it!</option>
        <option>Doesn't Matter I'm a beast!</option>
        <option>Learning the game</option>
        </select>
      </div>
      
      {/*Style Input */}
      <div className="form-group">
        <label for="exampleFormControlSelect1"></label>
        <select className="form-control mx-auto" id="style-input" name="style" onChange={handleInputChange}>
        <option>Select a Place</option>
        <option>XL Soccer World Orlando</option>
        <option>OIS League</option>
        <option>HD Orlando</option>
        <option>Free Kick Orlando</option>
        <option>High Soccer Arena</option>
        </select>
      </div>

      {/*Gender Input */}
      <div className="form-group">
        <label for="exampleFormControlSelect1"></label>
        <select className="form-control mx-auto" id="gender-input" name="gender" onChange={handleInputChange}>
          <option>Select a Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      
      {/*Location Input */}
      <div class="form-group">
        <label for="exampleInputEmail1"></label>
        <input type="text" class="form-control"  id="location-input"aria-describedby="emailHelp"onChange={handleInputChange} placeholder="Enter a City and State"/>
      </div>
   
      </form>
      );
   };
  
export default QueryForm;