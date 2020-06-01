import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import { connect } from  'react-redux';
import { setAlert, clearUsers,changeHandler, submitHandler} from '../../../actions/userFormActions'

class Search extends Component {
  // state = {
  //   text: ''
  // };

  // static propTypes = {
  //   searchValue: PropTypes.func.isRequired,
  //   clearUsers: PropTypes.func.isRequired,
  //   showClear: PropTypes.bool.isRequired,
  //   setAlert: PropTypes.func.isRequired
  // };

  // changeHandler = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  // subimtHandler = e => {
  //   e.preventDefault();
  //   if (this.state.text === '') {
  //     this.props.setAlert('Please enter something', 'light');
  //   } else {
  //     this.props.searchValue(this.state.text);
  //     this.setState({
  //       text: ''
  //     });
  //   }
  // };

  render() {
    return (
      <>
        <form onSubmit={this.props.submitHandler} className='form'>
          <input
            type='text'
            name='text'
            value={this.props.text}
            placeholder='Search Users ...'
            onChange={this.props.changeHandler}
          />
          <input
            className='btn btn-dark btn-block'
            type='submit'
            value='Search'
          />
        </form>
        {this.props.showClear && (
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userForm.users,
  loading: state.userForm.loading,
  text: state.userForm.text
});

export  default  connect(mapStateToProps, 
  {setAlert, clearUsers, changeHandler, submitHandler})(Search);



