import React from 'react';
import { Link } from 'react-router-dom';
import MainHeaderStyles from './MainHeaderStyles';

const MainHeader = () => {

    return (
        <MainHeaderStyles>
            <div className='Title'>
                <h1>VR Funding</h1>
            </div>

            <div className='Navigation'>
                <Link to='/'>Sign In</Link>
                <Link to='/signup'>Sign Up</Link>
                <Link to='dashboard'>Dashboard</Link>
            </div>
        </MainHeaderStyles>
    )
}

export default MainHeader;
