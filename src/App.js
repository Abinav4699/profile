import React from 'react';
import logo from './logo.svg';
import './App.css';

 import './css/bootstrap.min.css'
 import './mycss.css'
 //import './js/bootstrap'
 
 import Profile from './components/Profile'
 import Aboutme from './components/Aboutme'
 import Techskills from './components/TechSkills'
 import Education from './components/Education'
 
 import Project from './components/Project'
 import Acheivements from './components/Acheivement'
 import Strength from './components/Strength'
 import Contact from './components/Contact'

function App() {
  return (
    
 <div className="App">
 
         <div className=".container-fluid">
         
       
            <div className= "row">

                    <div className="col-sm-4 " style={{border:" 2px solid gray",zIndex:1,textAlign:"right" }}  >                  
                            <Profile/>
                    </div>
                    
                     <div className="col-sm-8" style={{border: "2px solid gray", padding: "10px",overflow:"scroll" ,height : "1000px"}}>
                              
                                          <Aboutme></Aboutme>
                                           <Techskills></Techskills>
                                            <Education></Education>
                                            <Project></Project>
                                            <Acheivements></Acheivements>
                                            <Strength></Strength>
                                              <Contact></Contact>

                    </div>
             </div>  
          </div>
</div>            
  
    
  );
}

export default App;
