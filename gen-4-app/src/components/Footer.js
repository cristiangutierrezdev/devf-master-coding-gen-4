import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <nav className='nav flex-column navbar-light bg-light'>
      <Link className='nav-link active' aria-current='page' to='/'>
        Active
      </Link>
      <Link className='nav-link' to='/'>
        Link
      </Link>
      <Link className='nav-link' to='/'>
        Link
      </Link>
      <Link
        className='nav-link disabled'
        to='/'
        aria-disabled='true'>
        Disabled
      </Link>
    </nav>
  );
}

export default Footer;
