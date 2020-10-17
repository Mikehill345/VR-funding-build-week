import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {


    const submitLogout = () => {
        localStorage.removeItem('token');
      }

    return (
        <div>
            <Link to='/dashboard'>Home</Link>
            <Link to="/" >Add New Funding</Link>
            <Link to='/' onClick={() => submitLogout()}> Logout  </Link>
        </div>
    )
}

export default Header
