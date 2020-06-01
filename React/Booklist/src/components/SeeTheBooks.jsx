import React, { Component } from 'react'

export class SeeTheBooks extends Component {

  
    
    render() {
        return (
            <div>
              <table>
            <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>ISBN</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
              {
               this.props.books2.map((element, index) => {
                    return <tr key={index}>
                        <td >{element.books.book}</td>
                        <td >{element.books.author}</td>
                        <td >{element.books.isbn}</td>
                        <td onClick={this.props.removeBook}>{element.books.delete}</td>
                    </tr>
                })
              }
              </tbody>
        </table>
                
            </div>
        )
    }
}

export default SeeTheBooks





