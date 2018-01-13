import React from 'react';
import { string } from 'prop-types';
import './card.css';

const Card = ({title, desription, image, icon}) => (
  <div className="card">
    {title && <div className="card-title"> {title} </div>}
    {desription && <div className="card-description"> {desription} </div>}
    {image && <div className="card-image">
      <img alt="" src={image} />
    </div>}
    {icon && <div className="card-icon">
      <img alt="icon" src={icon} />
    </div>
    }
  </div>
);

Card.propTypes = {
  title: string,
  description: string,
  image: string,
  icon: string,
};

Card.defaultProps = {
  title: '',
  description: '',
  image: '',
  icon: '',
};

export default Card;
