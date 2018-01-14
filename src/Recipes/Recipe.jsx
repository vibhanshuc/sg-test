import React from 'react';
import './recipe.css';
import chefStamp from '../assets/images/chef-stamp.png';
import nextIcon from '../assets/images/next.png';
import { recipeProps } from './propTypeDefinitions';

const Recipe = ({
  title,
  description,
  servings,
  imageURL,
  isSmall,
  isBottomAligned,
  isChefChoice,
}) => (
  <div className={`recipe ${isBottomAligned ? 'align-bottom' : ''}`}>
    <div className={`recipe-card ${isSmall ? 'small' : ''}`}>
      {isChefChoice && (
        <div className="chef-choice">
          <img src={chefStamp} alt="Chef Choice Recipe" />
        </div>
      )}
      <div className="recipe-card-header" style={{ backgroundImage: `url(${imageURL})` }}>
        <div className="recipe-card-servings">
          <span>{servings}</span>
          <span>Servings</span>
        </div>
        <div className="recipe-card-icon">
          <img src={nextIcon} alt="button" />
        </div>
      </div>
      <div className="recipe-card-content">
        <span>Difficulty</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    <span>User full name</span>
  </div>
);

Recipe.propTypes = recipeProps;
Recipe.defaultProps = {
  isSmall: true,
  isBottomAligned: false,
  isChefChoice: false,
};

export default Recipe;
