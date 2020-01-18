import React, { Component } from 'react'

class Education extends Component{

    render()
    {
        return( 
            <div id="EDUCATION" className="row-sm" style={{border: "2px solid lightgray",textAlign:"left",backgroundColor:"orange" , color : "white"}}>

                                        <h4><i><b>EDUCATION</b></i></h4>
                                      <ul>
                                      <li> BANNARI AMMAN INSTITUTE OF TECHNOLOGY<br/>
                                        <em>Graduate in 2020</em><br/>
                                        BE COMPUTER SCIENCE AND ENGINEERING<br/>
                                        <em> 8.57 CGPA (UP TO 7TH SEMESTER)</em></li><br/>
                    
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
        )
    }
}


export default Education 