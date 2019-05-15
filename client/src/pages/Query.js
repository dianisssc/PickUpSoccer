import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import QueryForm from "../components/QueryForm"
import Row from "../components/Row";
import Col from "../components/Col";
import Hero from "../components/Hero"

import query from 'query-string'
//import ProfileModal from "../components/ProfileModal"

//image variables 
const img01 = "https://orlando-mp7static.mlsdigital.net/styles/image_landscape/s3/images/;jasdlfasfa.jpg?A.k_aft5YwgQYcBcLu50LZtzNDvUskaf&itok=j7i28hDT&c=f68a3c90301738401d26ce933e12868e";
const img02 = "http://www.wpc.com/projects/image.php/XLSoccerWorldOrlando38.jpg?width=760&height=344&cropratio=760:334&image=/projects/images/XLSoccerWorldOrlando38.jpg";
const img03 ="http://www.soccercenters.com/wp-content/uploads/2011/03/13047648_10206811331429965_5749135250356006282_o.jpg";
const img04 ="https://lunchticket.org/wp-content/uploads/2014/11/futbol.jpg";
const img05 ="https://static.wixstatic.com/media/f04814_55e881cd6df64ead8b5132707ca41647.jpg/v1/fill/w_369,h_288,al_c,lg_1,q_80/f04814_55e881cd6df64ead8b5132707ca41647.jpg";
const img06 ="http://www.trbimg.com/img-5b34bb9e/turbine/os-1530182554-9scr5o5sy1-snap-image/650/650x366";
const img07 ="https://totalcommercial.com/photos/35/145035-resized.jpg";
const img08 ="https://static1.squarespace.com/static/56c86be51bbee09ef65090c5/t/5a033d36f9619a5d8dcc7bdf/1510161720413/queencast.jpg?format=750w";


//img array with random picker 
const imgArr = [img01,img02,img03,img04,img05,img06,img07,img08]
const pickedImage = imgArr[Math.floor(Math.random()*imgArr.length)];




class Query extends Component {
    state = {
        profiles: null,
        name: "",
        profileDetail: null,
        sessions: "", 
        location: "",
        gender: "",
        role: "",
        position: "",
        style: "",
        showProfiles: false,
        showProfileModal: false
    }
    

    componentDidMount() {
        this.loadProfiles();
    }


    loadProfiles = () => {
        API.getProfiles({
            name: this.state.name,
            location: this.state.location,
            gender: this.state.gender, 
            position: this.state.position,
            style: this.state.style,

        })
            .then(res => {
                //if(position === positionKey && style === styleKey){

                this.setState({ profiles: res.data })
                // }
            }).catch(err => console.log(err));
    };

    //create on click for get profile 
    //grab the id of that field 
    profileModal = (e, id) => {
        e.preventDefault();
        API.getModalProfile(id).then(res => {
            this.setState({ showProfileModal: true, profileDetail: res.data })
        }).catch(err => console.log(err))
        console.log('the id ', id);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    
    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            query: "",
            errors: {},
            showProfiles: true
        });

        //initialize variables for the query form inputs 
        // const positionKey = document.getElementById('position-input').value;
        // const styleKey = document.getElementById('style-input').value;
       console.log('the state now ', this.state);

        // REACT ROUTER CODE TO SET QUERY
       // let query = "?position=" + this.state.position + "&style=" + this.state.style;
        //console.log(this.props.history)
        this.props.history.push(query)

        API.getProfiles({
            position: this.state.position,
            style: this.state.style, 
            gender: this.state.gender,
            location: this.state.location
        })
            .then(res => this.setState({ profiles: res.data }))
            .catch(err => console.log(err));

    };

    render() {
        console.log('this.state', this.state);
        const { profiles, showProfiles, showProfileModal, profileDetail} = this.state;
        return (
            <div>
                {(showProfileModal &&


                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content bg-dark text-white">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{profileDetail.name}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <img src={profileDetail.image} className="card-img-top profile-image" alt="..." />

                                    <ul className="list-group list-group-flush" >

                                        <li className="list-group-item bg-dark">Location: {profileDetail.location}</li>
                                        <li className="list-group-item bg-dark">Gender: {profileDetail.gender}</li>
                                        <li className="list-group-item bg-dark">links: {profileDetail.links}</li>
                                        <li className="list-group-item bg-dark">Age: {profileDetail.age}</li>
                                        <li className="list-group-item bg-dark">Role: {profileDetail.role}</li>
                                        <li className="list-group-item bg-dark">position: {profileDetail.position}</li>
                                        <li className="list-group-item bg-dark">Style: {profileDetail.style}</li>
                                        <li className="list-group-item bg-dark">Avaliale for Sessions or Gigs: {profileDetail.sessions}</li>
                                        <li className="list-group-item bg-dark">Experience: {profileDetail.experience}</li>
                                        <li className="list-group-item bg-dark">Contact: {profileDetail.contact}</li>
                                        <li className="list-group-item bg-dark">About: {profileDetail.about}</li>
                                    </ul>


                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                )}
                <Container >
                    
                    <Hero backgroundImage={pickedImage}>
                        <Row>
                        <h3 className="text-light mx-auto">What are you looking for?</h3>
                        </Row>
                        <Col size="md-12">
                                <QueryForm handleInputChange={this.handleInputChange} />
                            </Col>
                        <Row>
                            <Col size="md-12">
                                <button
                                    id="profileSearch"
                                    className="btn btn-info"
                                    onClick={this.handleFormSubmit}
                                >Search</button>
                            </Col>




                        </Row>
                  </Hero>
                    <Row>

                        <Col className="profile-table text-light" size="xs-12">


                            {(profiles && showProfiles) &&
                                <table className="table table-striped results mt-5" placeholder="Results" id="resTable">

                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">position</th>
                                            <th scope="col">Style</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {profiles.map((profile) =>
                                            <tr key={profile._id}>

                                                <td>
                                                    <strong>
                                                        {profile.name}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <strong>
                                                        {profile.location}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <strong>
                                                        {profile.position}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <strong>
                                                        {profile.style}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <button
                                                        
                                                        onClick={(e) => this.profileModal(e, profile._id)}
                                                        data-toggle="modal"
                                                        data-target="#exampleModal"
                                                    >
                                                        Open Profile
                                                </button>
                                                </td>
                                            </tr>

                                        )}
                                    </tbody>
                                </table>

                            }


                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}
export default Query;