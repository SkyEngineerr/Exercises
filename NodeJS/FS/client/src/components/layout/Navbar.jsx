import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg  justify-content-center">
            <div class="mr-3 h2"><Link to='/'>Main </Link></div>
            <div class="mr-3 h2"><Link to={{pathname: '/login'}}>Login</Link></div>
            <div class="mr-3 h2"><Link to={{pathname: '/register'}}>Register</Link></div>
            <div class="mr-3 h2"><Link to={{pathname: '/about'}}>About us </Link></div>
            
            
            
           
        </nav>
    )
}

export default Navbar