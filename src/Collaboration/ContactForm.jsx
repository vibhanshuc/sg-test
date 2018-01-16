import React from 'react';
import { func } from 'prop-types';
import './contactForm.css';
import Button from '../lib/Button/Button';

const ContactForm = ({ onSubmit }) => (
  /* eslint-disable jsx-a11y/label-has-for */
  <form onSubmit={onSubmit} className="form">
    <div className="form-row">
      <div className="form-column">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" placeholder="Name" />
      </div>
      <div className="form-column">
        <label htmlFor="surname">Surname</label>
        <input id="surname" type="text" name="surname" placeholder="Surname" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-column">
        <label>Phone</label>
        <input type="tel" name="phone" placeholder="Phone" />
      </div>
      <div className="form-column">
        <label>Email Address</label>
        <input type="tel" name="phone" placeholder="Email" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-column">
        <label>Experience</label>
        <select name="experience" defaultValue="select">
          <option disabled value="select">
            Select
          </option>
        </select>
      </div>
      <div className="form-column">
        <label>Where did you hear about us?</label>
        <select name="hear" defaultValue="select">
          <option disabled value="select">
            Select
          </option>
        </select>
      </div>
    </div>
    <div className="form-row justify-end">
      <Button text="Send" type="submit" isPrimary />
    </div>
  </form>
);

ContactForm.propTypes = {
  onSubmit: func.isRequired,
};

export default ContactForm;
