import React from 'react';
import { string } from 'prop-types';
import './card.css';
import instagramIcon from '../../assets/images/instagram-btn.png';

const Card = ({
  title, description, image, likes, comments,
}) => (
  <div className="card">
    <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
      {title && <div className="card-title"> {title} </div>}
      {description && <div className="card-description"> {description} </div>}
      {image && (
        <div className="card-icon">
          <img alt="icon" src={instagramIcon} />
        </div>
      )}
      {(likes || comments) && (
        <div className="card-footer">
          {comments && (
            <span>
              <i>&diams;</i> {comments}
            </span>
          )}
          {likes && (
            <span>
              <i>&hearts;</i> {likes}
            </span>
          )}
        </div>
      )}
    </div>
  </div>
);

Card.propTypes = {
  title: string,
  description: string,
  image: string,
};

Card.defaultProps = {
  title: '',
  description: '',
  image: '',
};

export default Card;
