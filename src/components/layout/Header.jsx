import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to={'/'} className="logo">
        Logo
      </Link>
      <nav>
        <NavLink to={'/'}>Home Page</NavLink>
        <NavLink to={'/login'}>Login Page</NavLink>
        <NavLink to={'/profile'}>Profile Page</NavLink>
      </nav>
    </header>
  );
}

export default Header;
