import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Home.css';

import { setActiveTab } from '../Navbar/Navbar.actions';

const Container = ({ setActiveTab }) => (
  <section id="home">
    <div className="shade">
      <h3>Welcome To Our Studio!</h3>
      <h1>It's nice to meet you</h1>
      <Link
        to="/services"
        onClick={() => setActiveTab('services')}
      >
        <button>
          <p>Tell me more</p>
        </button>
      </Link>
    </div>
  </section>
);

const mapDispatchToProps = {
  setActiveTab,
};


export default connect(undefined, mapDispatchToProps)(Container);
