import React, { Fragment, Component } from 'react';
import './App.css';
//BrowserRouter is the router implementation for HTML 5 browser
//Link is your replacement for anchor tags.
import {BrowserRouter as  Router, Link, Route, Switch} from "react-router-dom";

import Navbar from './components/Navbar.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'



//We give each route either a target "Component", or we can send a function "render". 
class App extends Component {
  state = {
    text: '',
    password: ''
  }

 
  onSubmit = event => {

    this.setState({
      text: event.target.text.value,
      password: event.target.password.value
    })
    
    event.preventDefault()
  };
 
  render() {
    return (
      <Router>
      <Fragment>
      <Navbar />
        <Switch>
          
          <Route exact path = '/' component={Home}/>
          <Route path="/about" render={(props) => <>
            <About values={this.state}/>
          </>} />
          <Route path="/contact" render={() => <>
            <Contact onSubmit2={this.onSubmit}/>
          </>} />
         
        </Switch>
      </Fragment>
    </Router>  
    );
  }
}

export default App;
