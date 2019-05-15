import React from "react";
import showProfileModal from "../../pages/Query"
function ProfileModal(props){
    return(
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{props.name}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <img src="..." className="card-img-top" alt="..." />

                                    <ul className="list-group list-group-flush" >

                                        <li className="list-group-item">Location: {props.location}</li>
                                        <li className="list-group-item">Gender: {props.gender}</li>
                                        <li className="list-group-item">links: {props.links}</li>
                                        <li className="list-group-item">Age: {props.age}</li>
                                        <li className="list-group-item">Position: {props.position}</li>
                                        <li className="list-group-item">Style: {props.style}</li>
                                        <li className="list-group-item">Experience: {props.experience}</li>
                                        <li className="list-group-item">Contact: {props.contact}</li>
                                        <li className="list-group-item">About: {props.about}</li>
                                    </ul>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


      
                </div>
    )

}

export default ProfileModal