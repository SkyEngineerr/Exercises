import React, { Fragment, Component } from 'react';
import './App.css';
//BrowserRouter is the router implementation for HTML 5 browser
//Link is your replacement for anchor tags.
import {BrowserRouter as  Router, Link, Route, Switch} from "react-router-dom";

import Navbar from './components/Navbar.jsx'
import Home from './components/home.jsx'
import SeeTheBooks from './components/SeeTheBooks.jsx'
import Addbook from './components/Addbook.jsx'



//We give each route either a target "Component", or we can send a function "render". 
class App extends Component {
  
  state = {
    books: []
  }

  componentDidMount() {
    const booksArr = localStorage.getItem("books");

    if (booksArr) {
      this.setState({ books: JSON.parse(booksArr) });
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.books !== this.state.books) {
      localStorage.setItem("books", JSON.stringify(this.state.books));
    }
  }

  addBooks = books => {
    const book = {
      books
    };

    console.log(books);
    console.log(book);

    this.setState(prevState => ({
      books: [...prevState.books, book]
    }));

    console.log(this.state.books);
  };

 

  removeBook = (e) => {
    e.preventDefault()
    e.target.parentElement.remove()
    const booksArr = JSON.parse(localStorage.getItem("books"))
    console.log(typeof booksArr);
    booksArr.forEach(function(book, index){
      booksArr.splice(index,1);
    });
    
    localStorage.setItem('books',JSON.stringify(booksArr))
    console.log(localStorage.setItem('books',JSON.stringify(booksArr)));

    
  }
 
 
  render() {
    return (
      <Router>
      <div>
      <Navbar />
        <Switch>
          
          <Route exact path = '/' component={Home}/>
          <Route path="/about" render={() => <>
            <SeeTheBooks books2={this.state.books} removeBook={this.removeBook}/>
          </>} />
          <Route path="/contact" render={() => <>
            <Addbook onAddBooks={this.addBooks}/>
          </>} />
         
        </Switch>
      </div>
    </Router>  
    );
  }
}

export default App;
