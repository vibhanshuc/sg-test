import React, { PureComponent } from 'react';
import Heading from '../lib/Heading/Heading';
import './menu.css';
import Button from '../lib/Button/Button';
import MenuItem from './MenuItem';
import { menuPropTypes } from './propTypeDefinitions';

/* global window: false */
const { document } = window;

class Menu extends PureComponent {
  static propTypes = menuPropTypes;

  componentDidMount() {
    this.columns = document.querySelectorAll('.menu-column-content');
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    [].forEach.call(this.columns, (item, i) => {
      const transform = this.container.getBoundingClientRect().top;
      /* eslint-disable no-param-reassign */
      item.style.transform = `translateY(${i % 2 === 0 ? transform : -transform}px)`;
    });
  };

  render() {
    return (
      <div
        ref={(node) => {
          this.container = node;
        }}
        className="menu padded"
      >
        <div className="menu-head">
          <Heading subTitle="Our Menu" isStrike isPrimary />
          <Button text="Know More" />
        </div>
        <div className="menu-content">
          {this.props.items.map((column, index) => (
            /* eslint-disable react/no-array-index-key */
            <div key={index} className="menu-column">
              <div className="menu-column-content">
                <Heading subTitle={column.head} />
                {column.items.map((item, idx) => <MenuItem key={idx} {...item} />)}
              </div>
            </div>
          ))};
        </div>
      </div>
    );
  }
}

export default Menu;
