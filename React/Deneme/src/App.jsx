import React, { Component } from 'react';
import './App.css';
import Input from './components/Input/Input.jsx';
import Output from './components/Output/Output.jsx';

//having one state for our all react application
class App extends Component {
  state = {text: "", password:'' }

  anyFuncName = (e) => {
      this.setState({[e.target.name]: e.target.value})
}

  render() {
    return (
      <div>
        <Input changeHandler = {this.anyFuncName}/>
        <Output Values = {this.state}/>
      </div>
    );
  }
}

export default App;
