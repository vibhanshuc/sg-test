import React, { PureComponent } from 'react';
import Heading from '../lib/Heading/Heading';
import './menu.css';
import Button from '../lib/Button/Button';
import MenuItem from './MenuItem';
import { menuPropTypes } from './propTypeDefinitions';

class Menu extends PureComponent {
  static propTypes = menuPropTypes;

  render() {
    return (
      <div className="menu padded">
        <div className="menu-head">
          <Heading subTitle="Our Menu" isStrike isPrimary />
          <Button text="Know More" />
        </div>
        <div className="menu-content">
          {this.props.items.map((column, index) => (
            /* eslint-disable react/no-array-index-key */
            <div key={index} className={`menu-column menu-column-${index + 1}`}>
              <Heading subTitle={column.head} />
              {column.items.map((item, idx) => <MenuItem key={idx} {...item} />)}
            </div>
          ))};
        </div>
      </div>
    );
  }
}

export default Menu;
