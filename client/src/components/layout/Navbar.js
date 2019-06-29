import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/dashboard'>
          <i className='fas fa-people-carry' /> Family Talents
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/profiles'>I want to work</Link>
        </li>
        <li>
          <Link to='/profiles'>I want to hire</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
