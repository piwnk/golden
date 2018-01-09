import React from 'react';
import { Route,
  // IndexRoute,
}
  from 'react-router';

import Home from './components/Home';
import Services from './components/Services';
import Navbar from './components/Navbar';

const PageNotFound = () => <h1>404 Not Found</h1>;

export default (
  <Route path="/" component={Navbar}>
    {/* <IndexRoute component={Navbar} /> */}
    {/* <Route path="./home" component={Home} /> */}
    {/* <Route path="./services" component={Services} /> */}

    <Route path="*" component={PageNotFound} />
  </Route>
);
