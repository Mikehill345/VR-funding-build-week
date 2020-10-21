import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyles from './HeaderStyles';

const Header = () => {


    const submitLogout = () => {
        localStorage.removeItem('token');
      }

    return (
        <HeaderStyles>
            <div className='Title'>
                <h1>VR Funding</h1>
            </div>

            <div className='Navigation'>
                <Link to='/dashboard'>Home</Link>
                <Link to='/addproject' >Add New Project</Link>
                <Link to='/' onClick={() => submitLogout()}> Logout  </Link>
            </div>
        </HeaderStyles>
    )
}

export default Header;
