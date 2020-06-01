import React, { Component } from 'react'

export class Output extends Component {
    render() {
        return (
            <div>
                <p>email= {this.props.Values.text} </p>
                <p>password= {this.props.Values.password}</p>
            </div>
        )
    }
}

export default Output
