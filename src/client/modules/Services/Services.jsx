import React from 'react';

import SectionTitle from '../../components/SectionTitle/SectionTitle';

import './Services.css';

const lorem = 'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.';

export default () => (
  <section id="services">
    <SectionTitle
      title="Services"
      description="Proin iaculis purus consequat sem cure."
    />
    <div className="services">
      <div className="service">
        <div className="img-wrapper">
          <img src="img/Icon-Basket.png" alt="basket" />
        </div>
        <div className="caption">
          <h2>E-Commerce</h2>
          <p>{lorem}</p>
        </div>
      </div>
      <div className="service">
        <div className="img-wrapper">
          <img src="img/Icon-Laptop.png" alt="laptop" />
        </div>
        <div className="caption">
          <h2>Responsive Web</h2>
          <p>{lorem}</p>
        </div>
      </div>
      <div className="service">
        <div className="img-wrapper">
          <img src="img/Icon-Locked.png" alt="lock" />
        </div>
        <div className="caption">
          <h2>Web Security</h2>
          <p>{lorem}</p>
        </div>
      </div>
    </div>
  </section>
);
