import React, { Component } from 'react'

export class Input extends Component {
    state = {
        text:"",
        password:""
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    render() {
        return (
            <div>
                <form className="form">
                    <input type="text" name="text"  onChange={this.props.changeHandler}/>
                    <input type="password" name="password"  onChange={this.props.changeHandler}/>

                </form>
            </div>
        )
    }
}

export default Input
