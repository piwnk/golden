import React from 'react';

import data from './team-data';

import './Team.css';

import SocialButtons from '../../components/SocialButtons/SocialButtons';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Member = ({
  name, job, skills, id,
}) => (
  <div className="member">
    <div className="img-wrapper">
      <img src={`img/Team-${id}.jpeg`} alt={`Team-${id}`} />
    </div>
    <h2>{name}</h2>
    <p>{job}</p>
    <SocialButtons names={skills} />
  </div>
);

const Caption = () => (
  <div className="caption">
    <p>Proin iaculis purus consequat sem cure  digni ssim donec porttitora entum suscipit
aenean rhoncus posuere odio in tincidunt proin iaculis.
    </p>
  </div>
);

const Technologies = () => (
  <div className="technologies">
    {[...Array(4).keys()].map(i => (
      <div className="tech" key={i}>
        <img src={`img/Technology-${i}.png`} alt="" />
      </div>
    ))}
  </div>
);

export default () => (
  <section id="team">
    <SectionTitle
      title="OUR AMAZING TEAM"
      description="Proin iaculis purus consequat sem cure."
    />
    <div className="members">
      {data.map((member, i) => (
        <Member
          key={i}
          id={i}
          {...member}
        />
      ))}
    </div>
    <Caption />
    <Technologies />
  </section>
);

