import React, { Fragment, Component } from 'react';
import './App.css';
import Input from './components/Input.jsx';
import Output from './components/Output.jsx';


//having one state for our all react application
class App extends Component {
  state = {
   title : 'My Header'
  }


  render() {
    return (
      <Fragment>
        <Input title={this.state.title}/>
      </Fragment>
    );
  }
}

export default App;
