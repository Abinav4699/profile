import React, { Component } from 'react'

class Project extends Component{

    render()
    {
        return( 
                     
                                       
            <div id="PROJECTS"className="row-sm"  style={{border: "2px solid lightgray",textAlign:"left",backgroundColor:"green" , color : "black"}}>
            <h4><b><i>PROJECTS</i></b></h4>
                    
                    <dl className="row" style={{marginLeft: "40px"}}>
                        <dt className="col-sm-3">Title:</dt>
                        <dd className="col-sm-8" style={{color: "white"}}>VR PHOBIA</dd>
                        <dt className="col-sm-3">Project Description:</dt>
                        <dd className="col-sm-8" style={{color: "white"}}>Stage fear, Height, Blood experiences  are immersively designed</dd>
                    </dl><br/>
                    <dl className="row" style={{marginLeft: "40px"}}>
                        <dt className="col-sm-3">Title:</dt>
                        <dd className="col-sm-9" style={{color: "white"}}>Smart Factory using VR</dd>
                        <dt className="col-sm-3">Project Description:</dt>
                        <dd className="col-sm-9" style={{color: "white"}}>Working of factory robotic arm can be viewed using smart phones</dd>
                  </dl><br/>
                  <dl className="row" style={{marginLeft: "40px"}}>
                    <dt className="col-sm-3">Title:</dt>
                    <dd className="col-sm-9" style={{color: "white"}}>VR in Military</dd>
                    <dt className="col-sm-3">Project Description:</dt>
                    <dd className="col-sm-9" style={{color: "white"}}>The Basic presence of mind with  immersive experience and AI   interaction are deployed.</dd>
                  </dl><br/>
                  <dl className="row" style={{marginLeft: "40px"}}>
                    <dt className="col-sm-3">Title:</dt>
                    <dd className="col-sm-9" style={{color: "white"}}>VR SHOPPING MALL</dd>
                    <dt className="col-sm-3">Project Description:</dt>
                    <dd className="col-sm-9" style={{color: "white"}}>: Immersive experience for shopping and interaction with 3D objects are designed.</dd>
                  </dl><br/>
        </div>

        )
    }
}


export default Project 