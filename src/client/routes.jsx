import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router';

// import Navbar from './modules/Navbar';
import Home from './modules/Home/Home';
import Services from './modules/Services/Services';
import Portfolio from './modules/Portfolio/Portfolio';
import About from './modules/About/About';
import Team from './modules/Team/Team';
import Contact from './modules/Contact/Contact';

import './App/App.css';

const NoMatch = () => <h1>404 Not Found</h1>;

export default () => (
  <div className="main">
    <Switch>
      <Redirect exact from="/" to="/home" />

      <Route path="/home" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />

      <Route component={NoMatch} />
    </Switch>
  </div>
);
