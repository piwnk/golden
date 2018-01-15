import React from 'react';
import { Link } from 'react-router-dom';

// import Button from './Button.container';

import './Navbar.css';

import Tabs from './Tabs.container';

// const Buttons = () =>

export default () => (
  <header>
    <div>
      <Link to="/">
        <img src="img/Logo-Treehouse.png" alt="logo" />
      </Link>
    </div>
    <nav>
      <Tabs />
      <div />
    </nav>
  </header>
);

