import React from 'react';
import PropTypes from 'prop-types';

import { connect } from  'react-redux';
import {setAlert} from '../../../actions/userFormActions'

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className={'fas fa-info-circle'} />
        {alert.msg}
      </div>
    )
  );
};
Alert.propTypes = {
  alert: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  alert: state.userForm.alert
});

export  default  connect(mapStateToProps, { setAlert })(Alert);
