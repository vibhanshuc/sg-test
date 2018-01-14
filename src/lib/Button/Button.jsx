import React from 'react';
import { string, func, bool } from 'prop-types';
import './button.css';

const Button = ({
  onClickHandler, text, isPrimary, type,
}) => (
  <button
    className={`btn ${isPrimary ? 'btn-primary' : 'btn-secondary'}`}
    onClick={onClickHandler}
    type={type}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: string,
  onClickHandler: func,
  isPrimary: bool,
  type: string,
};

Button.defaultProps = {
  text: 'Click Me',
  onClickHandler: () => {},
  type: 'button',
  isPrimary: false,
};

export default Button;
