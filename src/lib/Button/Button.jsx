import React from 'react';
import { string, bool, func } from 'prop-types';
import './button.css';

const Button = ({onClickHandler, text, isPrimary, type}) => (
  <button className={`btn ${isPrimary ? 'btn-primary' : 'btn-secondary'}`} onClick={onClickHandler}
          type={type}>{text}</button>
);

Button.propTypes = {
  text: string.isRequired,
  onClickHandler: func.isRequired,
  isPrimary: bool,
  type: string
};

Button.defaultProps = {
  onClickHandler: () => {
  },
  type: 'button'
};

export default Button;
