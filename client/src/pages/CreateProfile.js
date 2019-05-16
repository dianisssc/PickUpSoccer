import React, { Component } from "react";
import Container from "../components/Container";

import CreateProfileForm from "../components/CreateProfileForm"
import Row from "../components/Row"
import Col from "../components/Col"
import API from "../utils/API"
import FormBtn from "../components/FormBtn"
import Hero from "../components/Hero"
import axios from "axios";

class CreateProfile extends Component {
    state = {
        email: "",
        password: "",
        name: "",
        location: "",
        image: "",
        links: "",
        gender: "",
        age: "",
        role: "",
        position: "",
        style: "",
        experience: "",
        sessions: "", 
        contact: "",
        about: "",
        selectedFile: null,
        errors: {}
    }

    loadProfiles = () => {
        API.getProfiles()
            .then(res =>
                this.setState({
                    email: "",
                    password: "",
                    name: "",
                    location: "",
                    image: "",
                    gender: "",
                    links: "",
                    age: 0,
                    role:"",
                    position: "",
                    style: "",
                    experience: "",
                    sessions: "", 
                    contact: "",
                    about: ""
                })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        console.log('the name', event.target.name);
        console.log('the value', event.target.value);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.style === '') {
            return this.setState({ errors: { styleEmpty: 'You must Select a one' } });
        }
        this.setState({ errors: {} });
        API.saveProfile({
            email: this.state.email,
            password: this.state.password, 
            name: this.state.name,
            location: this.state.location,
            gender: this.state.gender,
            image: this.state.image,
            links: this.state.links,
            age: this.state.age,
            role: this.state.role,
            position: this.state.position,
            style: this.state.style,
            experience: this.state.experience,
            sessions: this.state.sessions, 
            contact: this.state.contact,
            about: this.state.about
        })
            .then(res => console.log('the results', res))
            .catch(err => console.log(err));
            alert("Player Profile created! Now let's get kickin'!")
            window.location.assign("/");
    };

    fileSelectedHandler = event =>{
        //log the event to make sure the correct file is targeted
        console.log(event.target.files[0]);
        this.setState({
        
            //image: event.target.files[0]
        })
    }

    fileUploadHandler=()=>{
        
        axios.post("api/profiles/uploads");
    }

    render() {
        console.log('this.state', this.state);
        const { errors, email, password, style, sessions, role, location, gender, name, links, contact, image } = this.state;
        return (
            <div>
                <Container >
                    <h1 className="text-light coolFont">Create a Player Profile</h1>
                    <Row>

                        <Col size="md-12">
                            <form className="text-light">
                                {/*Email Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email</label>
                                    <input type="text"
                                        value={email}
                                        name="email"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Your Email Address" />
                                </div>

                                 {/*Password Input */}
                                 <div className="form-group">
                                    <label for="exampleFormControlInput1">Password</label>
                                    <input type="text"
                                        value={password}
                                        name="password"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Choose a Password" />
                                </div>

                                 {/*Name Input */}
                                 <div className="form-group">
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input type="text"
                                        value={name}
                                        name="name"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Your Name Here" />
                                </div>

                                {/*Location Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Location </label>
                                    <p id="location-instruction">(Please spell your city completely followed by your state's abbreviation. (Example: Orlando, FL)</p>
                                    <input type="text"
                                        value={location}
                                        name="location"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Where are you located?" />
                                </div>

                                {/*Gender Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">What Gender Are You?</label>
                                    <select value={gender}
                                        name="gender"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1" placeholder="Select One">
                                        <option>Select One (Optional)</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>

                                {/*Image Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Image</label>
                                    <input type="file"
                                        value={image}
                                        name="image"
                                        onClick={this.fileUploadHandler}
                                        onChange={this.fileSelectedHandler}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Show us your grill" />
                                </div>

                                {/*Links Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Links to your social media!</label>
                                    <p id="location-instruction">Time to showcase your interest in the game! Drop some links to social media to just to connect!</p>
                                    <input type="text"
                                        value={links}
                                        name="links"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="You'll get more chances of building your squad quicker if your in touch with what we check the most" />
                                </div>

                                {/*Age Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Age</label>
                                    <input type="text"
                                        value={this.state.age}
                                        name="age"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="How old are you?" />
                                </div>

                                  {/*Role Input */}
                                  <div className="form-group">
                                    <label for="exampleFormControlSelect1">What are you?</label>
                                    <select value={role}
                                        name="role"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1" placeholder="Select One">
                                        <option>Select One</option>
                                        <option>I am a student</option>
                                        <option>I am a college player</option>
                                        <option>I am a retired athlete</option>
                                        <option>I am a just enjoying the game!</option>
                                       
                                    </select>
                                </div>

                                {/*Position Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">What position do you play?</label>
                                    <select value={this.state.position}
                                        name="position"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1" placeholder="Select One">
                                        <option>Position Preference</option>
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
                                    <select value={style}
                                        name="style"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1">
                                        <option>Select a Place</option>
                                        <option>XL Soccer World Orlando</option>
                                        <option>OIS League</option>
                                        <option>HD Orlando</option>
                                        <option>Free Kick Orlando</option>
                                        <option>High Soccer Arena</option>
                                       
                                     </select>
                                    <p className="text-danger">{Object.keys(errors).length > 0 ? errors.styleEmpty : null}</p>
                                </div>

                                {/*Experience Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">How many years of playing experience do you have?</label>
                                    <select value={this.state.experience}
                                        name="experience"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1">
                                        <option>Decide your history</option>
                                        <option>Getting pressured to play :)</option>
                                        <option>Less than a year</option>
                                        <option>1 to 5 years</option>
                                        <option>5 to 10+ Years</option>
                                        <option>grew up playing, basically a lifestyle</option>
                                    </select>
                                </div>

                                {/*Sessions Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Are you willing to commit to a league if offered?</label>
                                    <select value={sessions}
                                        name="sessions"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1">
                                        <option>Select One</option>
                                        <option>Yes, I'm open to team placement opportunities</option>
                                        <option>No, I'm just looking to play occasionally </option>
                                    </select>
                                    </div>

                                {/*Contact Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Contact Info</label>
                                    <input type="text"
                                        value={contact}
                                        name="contact"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="What is your preferred method of contact?" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">About</label>
                                    <textarea type="text"
                                        value={this.state.about}
                                        name="about"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Tell us about yourself" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button className="btn btn-info" onClick={this.handleFormSubmit}>Submit</button>
                            </form>

                        </Col>
                    </Row>

                </Container>

            </div>
        )
    }
};
export default CreateProfile;