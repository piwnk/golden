import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

export default () => (
  <section id="home">
    <div className="shade">
      <h3>Welcome To Our Studio!</h3>
      <h1>It's nice to meet you</h1>
      <Link to="/services">
        <button>
          <p>Tell me more</p>
        </button>
      </Link>
    </div>
  </section>
);

