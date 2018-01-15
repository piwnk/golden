import React from 'react';

import SectionTitle from '../../components/SectionTitle/SectionTitle';

import data from './portfolio-data';

import './Portfolio.css';


const Project = ({ id, title, desc }) => (
  <div className="project">
    <div className="photo">
      <img src={`img/Portfolio-${id}.png`} alt="" />
    </div>
    <div className="caption">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  </div>
);

const Projects = () => data.map(item => (
  <Project
    id={item.id}
    key={item.id}
    title={item.title}
    desc={item.desc}
  />
));

export default () => (
  <section id="portfolio">
    <SectionTitle
      title="Our portfolio"
      description="Proin iaculis purus consequat sem cure."
    />
    <div className="projects">
      <Projects />
    </div>
  </section>
);
