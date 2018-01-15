import React from 'react';

import './SectionTitle.css';

export default ({ title, description }) => (
  <div className="section-title">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

