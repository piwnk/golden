import React from 'react';

import SectionTitle from '../../components/SectionTitle/SectionTitle';

import './About.css';

import data from './about-data';

const Entry = ({
  date, title, desc, id, textOnTheLeft,
}) => {
  const Event = () => (
    <div className={textOnTheLeft ? 'event right' : 'event left'}>
      <h2>{date}</h2>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );

  return (
    <div className="entry">
      <div>
        {textOnTheLeft ? <Event /> : null}
      </div>
      <div className="img-wrapper">
        <img src={`img/About-${id}.png`} alt={`About-${id}`} />
      </div>
      <div>
        {textOnTheLeft ? null : <Event />}
      </div>
    </div>
  );
};

const LastEntry = () => (
  <div className="entry">
    <div className="img-wrapper">
      <p>OUR STORY CONTINUES ...</p>
    </div>
  </div>
);

const Entries = () => data.map((entry, i) => (
  <Entry
    key={i}
    id={i}
    textOnTheLeft={i % 2 === 0}
    {...entry}
  />
));

export default () => (
  <section id="about">
    <SectionTitle
      title="about us"
      description="Proin iaculis purus consequat sem cure."
    />
    <div className="entries">
      <Entries />
      <LastEntry />
      <div className="verticalLine" />
    </div>
  </section>
);
