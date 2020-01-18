import React, { Component } from 'react'

import Abinav from 'B:/visual studio/React/profile/src/images/Abinav.JPG'
import Abinav1 from 'B:/visual studio/React/profile/src/images/Abinav1.JPG'
import ButtonToggle  from './buttontoggle'

class Profile extends Component{

    render()
    {
        return( 
            <div className="row-md container"  style={{border:" 2px solid lightgray " ,  padding: "20px"  }}>

            <div style = {{backgroundImage : `url(${Abinav1})`,backgroundSize : "cover" , opacity: "0.4" ,height:"300px", width:  "85%" , position : "absolute",zIndex:-1}}></div>                        
            <img className=" img-fluid rounded" style={{width: "150px" ,height: "200px" }}  src={Abinav}/>
            <h4><b>Abinav sudharshan S</b></h4>
            <ButtonToggle></ButtonToggle>
            
</div>
        )
    }
}


export default Profile 