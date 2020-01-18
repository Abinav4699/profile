import React, { Component }  from 'react'

class ButtonToggle extends Component{

    constructor()
    {
        super()
        this.state = {       
            display : "none",
            message:"<>", 
        }
    }

   

    togglehandler = () => {
   
          if(this.state.display == "block")
         { 
             this.setState({ 
                message:"<>", 
              display : "none"
          },()=> console.log("button clicked" + this.state.display))
         
        }
          else
          {
              this.setState({

            display : "block",
            message:"<::::::::::::::>", 
           },()=> console.log("button clicked" + this.state.display))
        }

      
    }

    render()
    {
        console.log(this.state.display);
        return (
            <div  >
                
                <div className="col-md   list-display" >
                    <button style={{position : "fixed" ,top : 300, left : 20,backgroundColor:"gray"}} onClick={this.togglehandler}> {this.state.message}
                    <div className="list-group" id="myList" style={{display : this.state.display ,overflow:"scroll" , height : "300px"}} >
                        <a className="list-group-item list-group-item-action " href="#ABOUTME">ABOUT ME</a>
                         <a className="  list-group-item list-group-item-action" href="#TECHNICALSKILL">TECHNICAL SKILL</a>
                        <a className="list-group-item list-group-item-action" href="#EDUCATION">EDUCATION</a>
                        <a className="list-group-item list-group-item-action" href="#PROJECTS">PROJECTS</a>
                        <a className="  list-group-item list-group-item-action" href="#ACHEIVEMENTS">ACHEIVEMENTS</a>
                        <a className="list-group-item list-group-item-action" href="#STRENGTH">STRENGTH</a>
                        <a className="list-group-item list-group-item-action" href="#CONTACT">CONTACT</a>    
                    </div>  
                    </button>
                </div> 
               
            </div>
        )
    }

}


export default ButtonToggle