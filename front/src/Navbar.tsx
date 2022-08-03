import React from 'react';
import './styles/App.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='grid-container-2'>
        <div className='grid-item'>
          <ul className='navbar-title'>
            <li>
              <NavLink to="/">
                <h2>Museum</h2>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='grid-item'>
          <ul className='navbar'>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'navlink-active' : 'navlink')}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'navlink-active' : 'navlink')}
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'navlink-active' : 'navlink')}
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;
