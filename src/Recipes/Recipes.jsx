import React from 'react';
import './recipes.css';
import { recipesProps } from './propTypeDefinitions';
import Recipe from './Recipe';
import Heading from '../lib/Heading/Heading';
import Button from '../lib/Button/Button';
import nextIcon from '../assets/images/next.png';
import backIcon from '../assets/images/back.png';

const Recipes = ({ items }) => (
  <div className="recipes">
    <div className="recipes-row">
      <div>
        <Heading title="Popular" subTitle="Recipes" isStrike isPrimary />
        <Button text="See all" />
      </div>
      <div className="recipes-column align-end">
        <Heading title="Do you want to share your own recipe?" />
        <Button text="Send it now" />
      </div>
    </div>
    <div className="recipes-row align-start recipes-list">
      {items.map(recipe => <Recipe key={recipe.id} {...recipe} />)}
    </div>
    <div className="recipes-row align-end">
      <div className="recipes-nav disabled">
        <img src={backIcon} alt="Back button" />
      </div>
      <div className="recipes-nav">
        <img src={nextIcon} alt="Next Button" />
      </div>
    </div>
  </div>
);

Recipes.propTypes = recipesProps;

export default Recipes;
