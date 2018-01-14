import React, { PureComponent } from 'react';
import { bool, arrayOf, shape, string } from 'prop-types';
import './community.css';
import Card from '../lib/Card/Card';
import Heading from '../lib/Heading/Heading';
import Button from '../lib/Button/Button';

/* global window: false */
const { document } = window;

class Community extends PureComponent {
  static propTypes = {
    items: arrayOf(shape({
      title: string,
      image: string,
      description: string,
    })),
    isVisible: bool,
  };

  static defaultProps = {
    items: [],
    isVisible: false,
  };

  componentDidMount() {
    this.animateBoxes = document.querySelectorAll('.down');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isVisible) {
      this.animateBoxes.forEach(el => el.classList.remove('down'));
    }
  }
  render() {
    const { items } = this.props;

    return (
      <div className="community">
        <div className="community-row">
          <div className="empty" />
          <div className="column-row-column community-row-head">
            <Heading subTitle="Meet our" />
            <Heading subTitle="Community" isStrike isPrimary />
            <Button text="Know More" />
            <p>LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</p>
          </div>
          <div className="community-row-column down">
            <Card {...items[0]} />
          </div>
          <div className="community-row-column down">
            <Card {...items[1]} />
          </div>
        </div>
        <div className="community-row">
          <div className="community-row-column down">
            <Card {...items[2]} />
          </div>
          <div className="community-row-column down">
            <Card {...items[3]} />
          </div>
          <div className="empty community-row-column down">
            <p className="description">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore
            </p>
          </div>
          <div className="empty" />
        </div>
        <div className="community-row">
          <div className="empty community-row-column down">
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Duis aute irure.
            </p>
          </div>
          <div className="empty" />
          <div className="community-row-column down">
            <Card {...items[4]} />
          </div>
          <div className="community-row-column down">
            <Card {...items[5]} />
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
