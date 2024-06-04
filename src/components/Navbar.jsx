import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  
  return (
      <header className="navbar">
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
          <li className={location.pathname === '/about Me' ? 'active' : ''}><Link to="/about">About</Link></li>
          <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
          <li className={location.pathname === '/cv' ? 'active' : ''}><Link to="/cv">CvSida</Link></li>
          <li className={location.pathname === '/portfolio' ? 'active' : ''}><Link to="/portfolio">Portfolio</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;