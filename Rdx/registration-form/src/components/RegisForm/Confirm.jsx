import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from  'react-redux';
import { nextStep, prevStep, handleFirstname, handleLastname, handleEmail,
  handleOccupation, handleCity, handleBio
} from '../../actions/regFormActions'

export class Confirm extends Component {
  // continue = e => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // };

  // back = e => {
  //   e.preventDefault();
  //   this.props.prevStep();
  // };

  render() {
    // const {
    //   values: { firstName, lastName, email, occupation, city, bio }
    // } = this.props;
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title='Confirm Your Details' />
          <List>
            <ListItem primaryText='First Name' secondaryText={this.props.firstName} />
            <ListItem primaryText='Last Name' secondaryText={this.props.lastName} />
            <ListItem primaryText='Email' secondaryText={this.props.email} />
            <ListItem primaryText='Occupation' secondaryText={this.props.occupation} />
            <ListItem primaryText='City' secondaryText={this.props.city} />
            <ListItem primaryText='Bio' secondaryText={this.props.bio} />
          </List>
          <br />
          <RaisedButton
            label='Confirm'
            primary={true}
            variant='contained'
            //style={style.button}
            onClick={this.props.nextStep}
          />
          <RaisedButton
            label='Back'
            primary={false}
            variant='contained'
            //style={style.button}
            onClick={this.props.prevStep}
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  firstName : state.regForm.firstName,
  lastName : state.regForm.lastName,
  email : state.regForm.email,
  occupation : state.regForm.occupation,
  city : state.regForm.city,
  bio : state.regForm.bio
});

export  default  connect(mapStateToProps, {  nextStep, prevStep, 
  handleFirstname, handleLastname, handleEmail,
  handleOccupation, handleCity, handleBio
})(Confirm);
