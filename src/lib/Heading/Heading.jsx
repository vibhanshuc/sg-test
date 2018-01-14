import React from 'react';
import { string, bool } from 'prop-types';
import './heading.css';

const Heading = ({
  title, subTitle, isStrike, isPrimary,
}) => (
  <div className="heading">
    <div className="heading-title">{title}</div>
    <div
      className={`heading-title big ${isStrike ? 'strike' : ''} ${
        isPrimary ? 'strike-primary' : ''
      }`}
    >
      {subTitle}
    </div>
  </div>
);

Heading.propTypes = {
  title: string,
  subTitle: string,
  isStrike: bool,
  isPrimary: bool,
};

Heading.defaultProps = {
  title: '',
  subTitle: '',
  isStrike: false,
  isPrimary: false,
};

export default Heading;
