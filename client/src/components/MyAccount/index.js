import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import API from "../../utils/API";
import Card from "../Card"
import "./style.css";

class MyAccount extends Component {

    state = {
        profiles: null,

        profileDetail: {},
    }

    componentDidMount() {
        const id = sessionStorage.getItem('userId');
        API.getModalProfile(id).then(res => {
            console.log('res brah', res);
            this.setState({ profileDetail: res.data });
        }).catch(err => {
            console.log('the err', err);
        });
    }

    logOut=async event=>{
        event.preventDefault();
        alert("See ya next time!")
        this.props.history.push("/login");
      
    }

    //delete profile 
    deleteProfile=event=>{
        const id = sessionStorage.getItem('userId');
        event.preventDefault();
       if(window.confirm("Are you sure you want to delete your profile?")){
        API.deleteProfile(id).then(res=>{
            alert("Profile Deleted");
            console.log("Goneeeeee")
            this.setState({ profileDetail: res.data });
            this.props.history.push("/")
        }).catch(err => {
            console.log('the err', err);
        });
    }
    else{

    }
    }

    handleFormSubmit=event=>{
        event.preventDefault();
        this.props.history.push("/editProfile");
    }

    render() {
        console.log(this.state.profileDetail)
        const{email,password,name,location,gender,links, role,position,style,age,experience, sessions, contact, about}=this.state.profileDetail;
        return (
            <Container>
                <Row>

                    <h3 id="account-header"className="text-white">{name}</h3>
                    <Col size="md-12">
                 
                             <ul className="list-group list-group-flush" id="account-list">
                             
                                <li className="list-group-item"><strong>Email: </strong> {email} </li>
                                <li className="list-group-item"><strong>Password: </strong>{password}</li>
                               
                                <li className="list-group-item"><strong>Location: </strong>{location} </li>
                                <li className="list-group-item"><strong>Gender: </strong> {gender}</li>
                                <li className="list-group-item"><strong>links: </strong> {links}</li>
                                <li className="list-group-item"><strong>Role: </strong> {role}</li>
                                <li className="list-group-item"><strong>Age: </strong> {age} </li>
                                <li className="list-group-item"><strong>Position: </strong>{position}</li>
                                <li className="list-group-item"><strong>Style: </strong>{style} </li>
                                <li className="list-group-item"><strong>Experience: </strong>{experience}</li>
                                <li className="list-group-item"><strong>Avaiable for Sessions/Gigs: </strong>{sessions}</li>
                                <li className="list-group-item"><strong>Contact: </strong>{contact}</li>
                                <li className="list-group-item"><strong>About: </strong>{about}</li>}
                            </ul> 
                   
                    </Col>
                </Row>
                <Row>
                    <Col size="md-4">
                    <button
                            id="update-route"
                            className="btn btn-info"
                          onClick={this.handleFormSubmit}
                            
                        >Edit Profile</button>
                    </Col>
                    <Col size="md-4">
                    <button
                            id="logout"
                            className="btn btn-info"
                          onClick={this.logOut}
                            
                        >Log Out</button>
                    </Col>
                    <Col size="md-4">
                    <button
                            id="delete"
                            className="btn btn-danger"
                          onClick={this.deleteProfile}
                            
                        >Delete Profile</button>
                    </Col>
                </Row>

            </Container>

            


                )
            }
        }
        
export default MyAccount; 