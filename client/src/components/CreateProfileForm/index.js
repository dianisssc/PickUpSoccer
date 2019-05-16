import React from "react";
import "./style.css";
import FormBtn from "../FormBtn"


// Using the datalist element we can create Auto-fill suggestions based on the props.breeds array..

function CreateProfileForm(props) {
  return (
    <form>
    {/*Name Input */}
    <div className="form-group" id="poppins">
      <label for="exampleFormControlInput1">Name</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Full Name Here" />
    </div>

     {/*Location Input */}
    <div className="form-group">
      <label for="exampleFormControlInput1">Location</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Where Are You Currently Located?" />
    </div>

    {/*Image Input */}
    <div className="form-group">
      <input type="file"/>
    </div>

     {/*Age Input */}
     <div className="form-group">
      <label for="exampleFormControlInput1">Age</label>
      <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="How Old Are You?" />
    </div>

     {/*Gender Input */}
     <div className="form-group">
      <label for="exampleFormControlSelect1">What Gender Are You?</label>
      <select className="form-control" id="exampleFormControlSelect1" placeholder="Select a Gender (Optional)">
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>

      {/*Position Input */}
    <div className="form-group">
      <label for="exampleFormControlSelect1">What position do you normally play?</label>
      <select className="form-control" id="exampleFormControlSelect1" placeholder="Select One">
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
      <label for="exampleFormControlSelect1">Which location do you prefer to play at?</label>
      <select className="form-control" id="exampleFormControlSelect1"placeholder="Select One">
      <option>XL Soccer World Orlando</option>
      <option>OIS League</option>
      <option>HD Orlando</option>
      <option>Free Kick Orlando</option>
      <option>High Soccer Arena</option>
      </select>
    </div>

    {/*Experience Input */}
    <div className="form-group">
      <label for="exampleFormControlSelect1">How many years of playing experience do you have?</label>
      <select className="form-control" id="exampleFormControlSelect1">
      <option>Decide your history</option>
      <option>Getting pressured to play :)</option>
      <option>Less than a year</option>
      <option>1 to 5 years</option>
      <option>5 to 10+ Years</option>
      <option>grew up playing, basically a lifestyle</option>
      </select>
    </div>
    <div className="form-group">
      <label for="exampleFormControlTextarea1">About</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  
  </form>

  );
}

export default CreateProfileForm;
