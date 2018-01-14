import React from 'react';
import { number } from 'prop-types';
import './slideCounter.css';

const SlideCounter = ({ total, current }) => (
  <div className="counter">
    {Array(total)
      .fill(total)
      .map((item, index) => (
        <span key={index} className={`counter-item${index + 1 === current ? ' active' : ''}`}>
          {index + 1}
        </span>
      ))}
  </div>
);

SlideCounter.propTypes = {
  total: number.isRequired,
  current: number.isRequired,
};

export default SlideCounter;
