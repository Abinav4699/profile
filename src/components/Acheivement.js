import React, { Component } from 'react'

class Acheivement extends Component{

    render()
    {
        return( 
            <div id="ACHEIVEMENTS" className="row-sm" style={{border: "2px solid lightgray",textAlign:"left",backgroundColor:"yellow" , color : "black"}}>
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


        )
    }
}


export default Acheivement 