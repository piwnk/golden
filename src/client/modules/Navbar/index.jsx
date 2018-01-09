import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default () => (
  <header>
    <div>
      <Link to="/">
        <img src="img/Logo-Treehouse.png" alt="logo" />
      </Link>
    </div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div />
    </nav>
  </header>
);
