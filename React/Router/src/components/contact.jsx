import React, { Component } from 'react'

export class contact extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit2}>
                    <p>Text: </p>
                        <input
                        type='text'
                        name="text"
                        
                        />
                    <p>Password: </p>
                        <input
                        type='password'
                        name="password"
                        
                        />
                        <input type='submit'/>
                </form> 
            </div>
        )
    }
}

export default contact

