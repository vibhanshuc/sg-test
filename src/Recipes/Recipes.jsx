import React, { Component } from 'react';
import './recipes.css';
import { recipesProps } from './propTypeDefinitions';
import Recipe from './Recipe';
import Heading from '../lib/Heading/Heading';
import Button from '../lib/Button/Button';
import nextIcon from '../assets/images/next.png';
import backIcon from '../assets/images/back.png';

/* global window */

class Recipes extends Component {
  state = {
    isRightNavEnabled: false,
    isLeftNavEnabled: true,
  };
  componentDidMount() {
    this.recepies = [...window.document.querySelectorAll('.recipe')];
    this.row = null;
  }

  handleNavigation = (amount) => {
    const rowRect = this.row.getBoundingClientRect();
    const firstRecipeRect = this.recepies[0].getBoundingClientRect();
    const lastRecipeRect = this.recepies[this.recepies.length - 1].getBoundingClientRect();

    this.setState(
      {
        isRightNavEnabled: firstRecipeRect.left < rowRect.left,
        isLeftNavEnabled: lastRecipeRect.right > rowRect.right,
      },
      () => {
        this.recepies.forEach((el) => {
          /* eslint-disable no-param-reassign */
          el.style.transform = `translate(${parseInt(el.style.transform.split('(')[1] || 0, 10) +
            amount}px)`;
        });
      },
    );
  };

  navigateLeft = () => {
    this.handleNavigation(-300);
  };

  navigateRight = () => {
    this.handleNavigation(300);
  };

  render() {
    return (
      <div className="recipes">
        <div className="recipes-row">
          <div>
            <Heading title="Popular" subTitle="Recipes" isStrike isPrimary />
            <Button text="See all" />
          </div>
          <div className="recipes-column end">
            <Heading title="Do you want to share your own recipe?" />
            <Button text="Send it now" />
          </div>
        </div>
        <div
          ref={(node) => {
            this.row = node;
          }}
          className="recipes-row justify-start recipes-list"
        >
          {this.props.items.map(recipe => <Recipe key={recipe.id} {...recipe} />)}
        </div>
        <div className="recipes-row justify-end">
          <button
            className="recipes-nav"
            disabled={!this.state.isRightNavEnabled}
            onClick={this.navigateRight}
          >
            <img src={backIcon} alt="Back button" />
          </button>
          <button
            className="recipes-nav"
            disabled={!this.state.isLeftNavEnabled}
            onClick={this.navigateLeft}
          >
            <img src={nextIcon} alt="Next Button" />
          </button>
        </div>
      </div>
    );
  }
}

Recipes.propTypes = recipesProps;

export default Recipes;
