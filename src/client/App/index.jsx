import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../store';

import Navbar from '../modules/Navbar';
import Routes from '../routes';


import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
