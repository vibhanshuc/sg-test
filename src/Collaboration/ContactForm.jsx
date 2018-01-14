import React from 'react';
import { func } from 'prop-types';
import Button from '../lib/Button/Button';

const ContactForm = ({ onSubmit }) => (
  /* eslint-disable jsx-a11y/label-has-for */
  <form onSubmit={onSubmit}>
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" placeholder="Name" />
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input id="surname" type="text" name="surname" placeholder="Surname" />
      </div>
    </div>
    <div>
      <div>
        <label>Phone</label>
        <input type="tel" name="phone" placeholder="Phone" />
      </div>
      <div>
        <label>Email Address</label>
        <input type="tel" name="phone" placeholder="Email" />
      </div>
    </div>
    <div>
      <div>
        <label>Experience</label>
        <select name="experience" defaultValue="select">
          <option disabled value="select">
            Select
          </option>
        </select>
      </div>
      <div>
        <label>Where did you hear about us?</label>
        <select name="hear" defaultValue="select">
          <option disabled value="select">
            Select
          </option>
        </select>
      </div>
    </div>
    <div>
      <Button text="Send" type="submit" isPrimary />
    </div>
  </form>
);

ContactForm.propTypes = {
  onSubmit: func.isRequired,
};

export default ContactForm;
