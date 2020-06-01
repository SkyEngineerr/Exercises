import React, { Component } from 'react';
import './App.css';
import Navbar from './layout/Navbar.jsx';
//import axios from 'axios';
import Users from './users/Users.jsx';
import Search from './users/Search.jsx';
import Alert from './layout/Alert.jsx';

// import { connect } from  'react-redux';
// import { searchText, setAlert, clearUsers} from '../../actions/userFormActions'



//having one state for our all react application
class App extends Component {
  // state = {
  //   users: [],
  //   loading: false,
  //   alert: null
  // };

  // searchText = async text => {
  //   this.setState({ loading: true });
    
  //   // console.log(APIKey);
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}`
  //   );
  //   this.setState({ users: res.data.items, loading: false });
  //   console.log(res.data);
  // };
  // clearUsers = () => {
  //   this.setState({ users: [], loading: false });
  // };
  // setAlert = (msg, type) => {
  //   this.setState({ alert: { msg, type } });
  //   setTimeout(() => {
  //     this.setState({ alert: null });
  //   }, 5000);
  // };

  render() {
    return (
      <div>
        <Navbar />
        <Alert 
        // alert={this.state.alert} 
        />
        <Search
          // searchValue={this.searchText}
          // clearUsers={this.clearUsers}
          // showClear={this.state.users.length > 0 ? true : false}
          // setAlert={this.setAlert}
        />
        <Users 
        // loading={this.state.loading} users={this.state.users} 
        />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   users: state.userForm.users,
//   loading: state.userForm.loading,
//   alert: state.userForm.alert
// });

// export  default  connect(mapStateToProps, {  searchText, clearUsers, setAlert })(App);


export  default App