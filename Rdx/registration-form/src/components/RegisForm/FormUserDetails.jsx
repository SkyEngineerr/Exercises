import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from  'react-redux';
import { nextStep, prevStep, handleFirstname, handleLastname, handleEmail
} from '../../actions/regFormActions'

class FormUserDetails extends Component {
 

  render() {
    //const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter User Details' />
          <TextField
            hintText='Enter Your First Name' //placeHolder
            floatingLabelText='First Name' // label
            onChange={this.props.handleFirstname}
            defaultValue={this.props.firstName}
          />
          <br />
          <TextField
            hintText='Enter Your Last Name' //placeHolder
            floatingLabelText='Last Name' // label
            onChange={this.props.handleLastname}
            defaultValue={this.props.lastName}
          />
          <br />
          <TextField
            hintText='Enter Your Email' //placeHolder
            floatingLabelText='Email' // label
            onChange={this.props.handleEmail}
            defaultValue={this.props.email}
          />
          <br />
          <RaisedButton
            label='Continue'
            color='primary'
            style={style.button}
            onClick={this.props.nextStep}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const style = {
  button: {
    margin: 15
  }
};

const mapStateToProps = state => ({
  firstName : state.regForm.firstName,
  lastName : state.regForm.lastName,
  email : state.regForm.email
});

export  default  connect(mapStateToProps, {  nextStep, prevStep, 
  handleFirstname, handleLastname, handleEmail
})(FormUserDetails);


