import React from 'react';
import { Link } from 'react-router-dom';

import academiclogo from './../../assets/academiclogo.webp';
import './header.styles.css';

const Header = () => (
    <div className='header'>
          <Link className='logo-container' to='/'>
            <img  src={academiclogo} alt="Academic-logo" className="img-1"></img>
            </Link>
        <div className='options'>
          
            <Link className='option' to='/'>
                Home
      </Link>
            <Link className='option' to='/careers'>
                Careers
      </Link>
            <Link className='option' to='/contact-us'>
                Contact Us
      </Link>

        </div>

    </div>
);



export default Header;
