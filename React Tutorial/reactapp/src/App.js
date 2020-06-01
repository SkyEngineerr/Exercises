import React from 'react';
import Navbar from "./components/Navbar"
import User from "./components/User"
import './App.css';


function App() {
  return (
    <div className="container">
      
      <Navbar title="User App"/>
      <hr/>
      <User
      name= "eren yilmaz"
      salary = "5000"
      />
      <User
      name= "seyma yilmaz"
      department= "law"
      salary = "1000"
      />
    </div>
    
  );
}

export default App;
