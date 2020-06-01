import React, { Component } from 'react';

export class Body extends Component {
  render() {
    return (
      <div>
        <p>Change Header: </p>
        <input
          type='text'
          name="text"
          onChange={this.props.changeHandler}
          placeholder={this.props.newValue}
        />
        <p>Change Footer: </p>
        <input
          type='text'
          name="password"
          onChange={this.props.changeHandler}
        />
      </div>
    );
  }
}

export default Body;
