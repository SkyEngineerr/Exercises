import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Main </Link>
            <Link to={{pathname: '/about'}}>about us </Link>
            <Link to='./contact'>contact us </Link>
        </div>
    )
}

export default Navbar
