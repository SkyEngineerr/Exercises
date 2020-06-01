import React, { Component } from 'react'

export class contact extends Component {
    state = {
        book: '',
        author: '',
        isbn: '',
        delete: ''
    }

    onSubmit = event => {
        event.preventDefault()
        console.log(event.target[0].value);
       
        this.props.onAddBooks(
            (event.target[0].value === '' || event.target[1].value === '' || event.target[2].value === '') ? alert("Hello! I am an alert box!!") : this.state
        );

        this.setState({
            book: '',
            author: '',
            isbn: '',
            delete: ''
        });
    };


    handleChange =e =>{
        this.setState({[e.target.name]:e.target.value,
        delete: 'X'})
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <p>Book Name: </p>
                        <input
                        type='text'
                        name="book"
                        onChange={this.handleChange}
                        />
                    <p>Author: </p>
                        <input
                        type='text'
                        name="author"
                        onChange={this.handleChange}
                        />
                    <p>ISBN : </p>
                        <input
                        type='text'
                        name="isbn"
                        onChange={this.handleChange}
                        />
                        <input type='submit'/>
                </form> 
            </div>
        )
    }
}

export default contact

