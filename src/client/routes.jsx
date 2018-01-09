import React from 'react';
import { Switch, Route }
  from 'react-router';

// import Navbar from './modules/Navbar';
import Home from './modules/Home';
import Services from './modules/Services';
import Portfolio from './modules/Portfolio';
import About from './modules/About';
import Contact from './modules/Contact';

const NoMatch = () => <h1>404 Not Found</h1>;

export default () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/" component={Services} />
    <Route exact path="/" component={Portfolio} /> */}

      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />

      <Route component={NoMatch} />
    </Switch>
  </div>
);
