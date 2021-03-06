import React, { Fragment, Component } from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

import './App.css';


class Father extends Component {
  state = {
    text: '',
    password: ''
  };

  myDefinition = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Fragment className='App'>
        <Header title={this.state.text} />
        <Body  changeHandler={this.myDefinition} />
        <Footer password = {this.state.password}/>
      </Fragment>
    );
  }
}

export default Father;
