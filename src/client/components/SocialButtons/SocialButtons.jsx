import React from 'react';

import './SocialButtons.css';

const Button = ({ name }) => (
  <div className="social">
    <i className={`fa fa-${name}`} />
  </div>
);

export default ({ names }) => (
  <div className="socials">
    {names.map((name, i) => (
      <Button key={i} name={name} />
    ))}
  </div>
);
