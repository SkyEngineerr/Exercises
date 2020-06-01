import React, { Component } from 'react';
import UserForm from './components/RegisForm/UserForm.jsx';
import './App.css';
import { Provider } from  'react-redux';
import  store  from  './store/index';

class App extends Component {
  render() {
    return (
      <Provider  store={store}>
        <div className='App'>
          <UserForm />
        </div>
      </Provider>
    );
  }
}

export default App;
