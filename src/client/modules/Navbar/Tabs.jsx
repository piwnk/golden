import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const sections = [
  'home',
  'services',
  'portfolio',
  'about',
  'team',
  'contact',
];

const Tabs = ({ activeTab, setActiveTab }) => (
  <ul>
    {sections.map((name, i) => (
      <Link
        key={i}
        to={`/${name}`}
        onClick={() => setActiveTab(name)}
        className={activeTab === name ? 'active' : ''}
      >
        {name.toUpperCase()}
      </Link>
    ))}
  </ul>
);

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

Tabs.componentWillMount = () => {
  console.log(window.location.href);
};

export default Tabs;
