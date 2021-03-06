import React from 'react';
import './footer.css';
import socialImage from '../assets/images/social.png';
import Heading from '../lib/Heading/Heading';

const sections = Array(5).fill(5);
const subSections = Array(5).fill(5);

const Footer = () => (
  <footer>
    <div className="footer-row space-between">
      <div className="footer-column">
        {sections.map((item, index) => (
          <div key={index} className="section">
            <span className="section-title">Section {index + 1}</span>
            {subSections.map((subSection, idx) => (
              <div key={idx} className="section-link">
                Subsection
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="logo">
        <Heading title="This is the" subTitle="Logo" />
      </div>
    </div>
    <div className="footer-row space-between align-center">
      <div className="footer-text">
        {new Date().getFullYear()}. Company. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor.
      </div>
      <img alt="social-icon" src={socialImage} />
    </div>
  </footer>
);

export default Footer;
