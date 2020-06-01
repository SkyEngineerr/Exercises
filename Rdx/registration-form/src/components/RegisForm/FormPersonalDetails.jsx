import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from  'react-redux';
import { nextStep, prevStep, handleOccupation, handleCity, handleBio
} from '../../actions/regFormActions'

export class FormPersonalDetails extends Component {
  // continue = e => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // };

  // back = e => {
  //   e.preventDefault();
  //   this.props.prevStep();
  // };

  render() {
    //const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter Personal Details' />
          <TextField
            hintText='Enter Your Occupation' //placeHolder
            floatingLabelText='Occupation' // label
            onChange={this.props.handleOccupation}
            defaultValue={this.props.occupation}
          />
          <br />
          <TextField
            hintText='Enter Your City' //placeHolder
            floatingLabelText='City' // label
            onChange={this.props.handleCity}
            defaultValue={this.props.city}
          />
          <br />
          <TextField
            hintText='Enter Your Bio' //placeHolder
            floatingLabelText='Bio' // label
            onChange={this.props.handleBio}
            defaultValue={this.props.bio}
          />
          <br />
          <RaisedButton
            label='Continue'
            color='primary'
            style={style.button}
            onClick={this.props.nextStep}
          />
          <RaisedButton
            label='Back'
            color='secondary'
            style={style.button}
            onClick={this.props.prevStep}
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
  occupation : state.regForm.occupation,
  city : state.regForm.city,
  bio : state.regForm.bio
});

export  default  connect(mapStateToProps, {  nextStep, prevStep, 
  handleOccupation, handleCity, handleBio
})(FormPersonalDetails);

