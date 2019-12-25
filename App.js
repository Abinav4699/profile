import React from 'react';
import logo from './logo.svg';
import './App.css';
 import './css/bootstrap.min.css'
 import './mycss.css'
 import Abinav from './images/Abinav.JPG'

function App() {
  return (
 <div className="App">
     <div className=".container-fluid">

            <div className= "row">

                        <div className=" col-sm" style={{border:" 2px solid gray", padding: "20px", margin : "20px"}}  >

                                <div className="row-sm"  style={{border:" 2px solid lightgray" , textAlign:"left"}}>
                                    <img className="img-fluid  rounded " style={{width: "150px" ,height: "200px"}}  src={Abinav}/>
                                    <h4><b>Abinav sudharshan S</b></h4>
                                </div>

                                <div className="row-sm"  style={{border: "2px solid lightgray",textAlign:"left"}}>
                                            <h4><b><i>CONTACT</i></b></h4>

                                                    <dl className="row" style={{marginLeft: "40px"}}>
                                                        <dt className="col-sm-3">Mobile:</dt>
                                                        <dd className="col-sm-9" style={{color: "blue"}}>8778668049</dd>
                                                        <dt className="col-sm-3">Email-id:</dt>
                                                        <dd className="col-sm-9" style={{color: "blue"}}>abinavsudharshan4699 @gmail.com</dd>
                                                    </dl>
                                </div>

                                <div className="row-sm" style={{border: "2px solid lightgray" ,textAlign:"left"}}>
                                    <h4><b><i>CAREER OBJECTIVE</i></b></h4>
                                    <p>To work in a professional environment where I can
                                        contribute my knowledge and enrich my skills
                                        according to the latest technologies and to work
                                        towards achieving the organizational goals.
                                        </p>
                                </div>


                                <div className="row-sm" style={{border: "2px solid lightgray",textAlign:"left"}}>
                                    <h4><b><i>AREA OF INTEREST</i></b></h4>
                                    <ul>
                                        <li>Data Structure</li>
                                        <li>Virtual Reality</li>
                                        <li>Web Development</li>
                                      </ul>
                                </div>  


                                <div className="row-sm" style={{border: "2px solid lightgray",textAlign:"left"}}>
                                    <h4><b><i>TECHNICAL SKILLS</i></b></h4>
                                    <ul>
                                        <li>C</li>
                                        <li>Data Structure</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Unity</li>
                                        <li>Unreal Engine 4</li>
                                      </ul>
                                </div>  

                              <div className="row-sm" style={{border: "2px solid lightgray",textAlign:"left"}}>

                            <h4><i><b>EDUCATIONAL ATTAINMENT</b></i></h4>
                           <ul>
                           <li> BANNARI AMMAN INSTITUTE OF TECHNOLOGY<br/>
                            <em>Graduate in 2020</em><br/>
                            BE COMPUTER SCIENCE AND ENGINEERING<br/>
                            <em> 8.66 CGPA (UP TO 5TH SEMESTER)</em></li><br/>
        
                           <li> VEVEAHAM BOYS HIGHER SECONDARY SCHOOL,<br/>
                            DHARAPURAM.<br/>
                            <em>Passed in 2016</em><br/>
                            HIGHER SECONDARY<br/>
                            <em>91.7%</em></li><br/>
                            
                           <li>RVS MATRICULATION HIGHER SECONDARY<br/>
                            SCHOOL, REDDIARMADAM.<br/>
                            <em>Passed in 2014</em><br/>
                            SECONDARY EDUCATION<br/>
                            <em>97.2%</em></li>
                            </ul>
                        </div>
                                
                        </div>

                        <div class="col-sm" style={{border: "2px solid gray", padding: "10px", margin : "20px" }}>

                                        <div class="row-sm"  style={{border: "2px solid lightgray",textAlign:"left"}}>
                                            <h4><b><i>PROJECTS</i></b></h4>
                                                    
                                                    <dl class="row" style={{marginLeft: "40px"}}>
                                                        <dt class="col-sm-3">Title:</dt>
                                                        <dd class="col-sm-8" style={{color: "blue"}}>VR PHOBIA</dd>
                                                        <dt class="col-sm-3">Project Description:</dt>
                                                        <dd class="col-sm-8" style={{color: "blue"}}>Stage fear, Height, Blood experiences  are immersively designed</dd>
                                                    </dl><br/>
                                                    <dl class="row" style={{marginLeft: "40px"}}>
                                                        <dt class="col-sm-3">Title:</dt>
                                                        <dd class="col-sm-9" style={{color: "blue"}}>Smart Factory using VR</dd>
                                                        <dt class="col-sm-3">Project Description:</dt>
                                                        <dd class="col-sm-9" style={{color: "blue"}}>Working of factory robotic arm can be viewed using smart phones</dd>
                                                  </dl><br/>
                                                  <dl class="row" style={{marginLeft: "40px"}}>
                                                    <dt class="col-sm-3">Title:</dt>
                                                    <dd class="col-sm-9" style={{color: "blue"}}>VR in Military</dd>
                                                    <dt class="col-sm-3">Project Description:</dt>
                                                    <dd class="col-sm-9" style={{color: "blue"}}>The Basic presence of mind with  immersive experience and AI   interaction are deployed.</dd>
                                                  </dl><br/>
                                                  <dl class="row" style={{marginLeft: "40px"}}>
                                                    <dt class="col-sm-3">Title:</dt>
                                                    <dd class="col-sm-9" style={{color: "blue"}}>VR SHOPPING MALL</dd>
                                                    <dt class="col-sm-3">Project Description:</dt>
                                                    <dd class="col-sm-9" style={{color: "blue"}}>: Immersive experience for shopping and interaction with 3D objects are designed.</dd>
                                                  </dl><br/>
                                        </div>

                                        <div class="row-sm" style={{border: "2px solid lightgray",textAlign:"left"}}>
                                            <h4><b><i>ACHEIVEMENTS</i></b></h4>
                                            <ul>
                                                <li>Won  <em>1st prize</em>  in
                                                    <em>BIT HackFest'18</em> for topic<em> "VR IN MILITARY".</em></li><br/>
                                                <li>Won <em>2nd RunnerUp TiE Hackathon</em> for topic
                                                  <em> "DISASTER MANAGEMENT WITH AI USING VR"</em></li><br/>
                                                  <li> Won best <em>innovation</em> Award in VIT HackerFest'18 for
                                                            <em>MOHENJA-DARO </em>innovation</li>      
                                              </ul>
                                        </div>  

                                        <div class="row-sm" style={{border: "2px solid lightgray",textAlign:"left"}}>
                                            <h4><b><i>EXTRA CURRICULAR ACTIVITIES</i></b></h4>
                                            <ul>
                                                <li>Conducted <em>VIRTUAL REALITY/AUGUMENTED
                                                    REALITY</em> for final and pre-final year students and
                                                    completed 3 main projects at <em> PACIFIC
                                                    UNIVERSITY, Malaysia</em></li><br/>
                                                <li>Conducted <em>VIRTUAL REALITY GUEST LECTURE</em>
                                                    for 1st-year students at Bannari Amman Institute
                                                    of Technology</li>                        
                                              </ul>
                                        </div>  

                                        <div class="row-sm" style={{border: "2px solid lightgray",textAlign:"left"}}>
                                            <h4><b><i>STRENGTH</i></b></h4>
                                            <ul>
                                                <li>Quick Learner</li>
                                                <li>Easily Adoptable and self-motivated</li>
                                                <li>Punctuality</li>
                                              
                                              </ul>
                                        </div>  

                                        <div class="row-sm"  style={{border: "2px solid lightgray",textAlign:"left"}}>
                                            <h4><b><i>PERSONAL INFORMATION</i></b></h4>

                                                    <dl class="row" style={{marginLeft: "40px"}}>
                                                        <dt class="col-sm-3">Address:</dt>
                                                        <dd class="col-sm-9" style={{color: "blue"}}>1/85A , Ravanapuram, Ravanapuram (PO), Udumelpet, Tirupur 642207. </dd>
                                                        <dt class="col-sm-3">Date of Birth:</dt>
                                                        <dd class="col-sm-9" style={{color: "blue"}}>04-06-1999</dd>
                                                        <dt class="col-sm-3">Language known:</dt>
                                                        <dd class="col-sm-9" style={{color: "blue"}}> English(R/W/S), Tamil (R/W/S)</dd>
                                                        
                                                    </dl>
                                        </div>

                                </div>
              </div>  

              <div class="row-sm" style={{border: "2px solid lightgray", textAlign:"left"}}>
                <h4><b><i>DECLARATION</i></b></h4>
                <p>I here by declare that the above given details are true to the best of my knowledge and belief
                    </p>
            </div>       
       </div>
   </div>            
        
  );
}

export default App;
