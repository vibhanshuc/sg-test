import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <header>
        <div className="header-list">
          <div className="header-list-item big">Logo</div>
          <div className="header-list-item">About</div>
          <div className="header-list-item">Community</div>
          <div className="header-list-item">Location</div>
          <div className="header-list-item">Our Menu</div>
          <div className="header-list-item">Recipes</div>
        </div>
        <div className="header-list">
          <div className="header-list-item right">Contact</div>
          <div className="header-list-item right">Login</div>
        </div>
      </header>
    );
  }
}

export default Header;
