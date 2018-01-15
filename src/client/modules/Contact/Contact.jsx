import React from 'react';

import SocialButtons from '../../components/SocialButtons/SocialButtons';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

import './Contact.css';

export default () => (
  <section id="contact">
    <SectionTitle
      title="Contact us"
      description="Proin iaculis purus consequat sem cure."
    />
    <form>
      <div>
        <div>
          <input type="text" placeholder="YOUR NAME *" required />
          <input type="text" placeholder="YOUR E-MAIL *" required />
          <input type="text" placeholder="SUBJECT" />
        </div>
        <div>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="YOUR MESSAGE *" required />
        </div>
      </div>
      <input className="submit-btn" type="submit" value="SEND MESSAGE" />
    </form>
    <div className="footer">
      <p>© Copyright 2014 FreebiesXpress.com</p>
      <SocialButtons names={['twitter', 'facebook', 'pinterest-p', 'google-plus']} />
    </div>
  </section>
);
