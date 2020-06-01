import React, { Fragment, Component } from 'react';
import './App.css';
import {BrowserRouter as  Router, Link, Route, Switch} from "react-router-dom";

import Navbar from './components/layout/Navbar.jsx'
import Home from './components/layout/Home.jsx'
import About from './components/layout/About.jsx'
import Login from './components/layout/login/Login.jsx'
import Register from './components/layout/register/Register.jsx'


class App extends Component {


  render() {
    return (
      <Router>
      <Fragment>
      <Navbar />
        <Switch>
          
          <Route exact path='/' component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/about" component={About}/>
         
        </Switch>
      </Fragment>
    </Router>  
    );
  }
}

export default App;