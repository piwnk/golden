import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ children }) => (
  <div>
    <nav>
      <div>
        <img src="img/Logo-Treehouse.png" alt="logo" />
      </div>
      <div />
    </nav>
    <div>
      {children}
    </div>
  </div>
);

Navbar.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Navbar;
