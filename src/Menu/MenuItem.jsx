import React from 'react';
import { menuItemPropTypes } from './propTypeDefinitions';

const MenuItem = ({ title, description, price }) => (
  <div className="menu-item">
    <div className="menu-item-title">{title}</div>
    <div className="menu-item-description">{description}</div>
    <div className="menu-item-price">&pound;{price}</div>
  </div>
);

MenuItem.propTypes = menuItemPropTypes;

export default MenuItem;
