import React, { Component } from 'react'

class Contact extends Component{

    render()
    {
        return( 
            <div id="CONTACT" className="row-sm"  style={{border: "2px solid lightgray",textAlign:"left",backgroundColor:"gray" , color : "white"}}>
            <h4><b><i>CONTACT</i></b></h4>

                    <dl className="row" style={{marginLeft: "40px"}}>
                        <dt className="col-sm-3">Mobile:</dt>
                        <dd className="col-sm-9" style={{color: "blue"}}>8778668049</dd>
                        <dt className="col-sm-3">Email-id:</dt>
                        <dd className="col-sm-9" style={{color: "blue"}}>abinavsudharshan4699 @gmail.com</dd>
                    </dl>
</div>
        )
    }
}


export default Contact 