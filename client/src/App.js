import React, {useState} from 'react';
import './App.css';
import './Navbar.css';
import {Login} from "./Login";
import {Register} from "./Register";
import Navbar from './Navbar';
import Home from './Home';
import Map from './map.js'
import { Route,Routes} from 'react-router-dom';


 function App() { 
 let componet
   return(
    <div>   
     <>
      <Navbar/>
     <div className= "container">{componet}</div> 
      <Routes>
       <Route path = "Home" element={<Home />}/> 
       <Route path = "Map" element={<Map />}/> 
       <Route path = "login" element={<Login />}/> 
       <Route path = "register" element={<Register />}/> 
      </Routes> 


      </>
      </div>
//    )
//  const [currentForm, setCurrentForm] = useState('login');
//  const togglwForm = (forname) => {
//    setCurrentForm(forname);
//   }

//   return (
//         <div className="App">
//          {
          
//         currentForm === "login" ? <Login onFormSwitch={togglwForm}/>:<Register />
         
//         }
        
//     </div>
      
  );
 }

export default App;
        