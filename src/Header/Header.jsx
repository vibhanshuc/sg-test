import React, { Component } from 'react';
import { number, func } from 'prop-types';
import Scrollspy from 'react-scrollspy';
import './header.css';

class Header extends Component {
  static propTypes = {
    onUpdate: func.isRequired,
    total: number.isRequired
  };

  listOfSections = () => {
    const sections = [];
    for (let i = 0; i < this.props.total; i++) {
      sections.push(`section-${i + 1}`);
    }
    return sections;
  };

  handleUpdate = item => {
    if (item && item.id) {
      this.props.onUpdate(Number(item.id.split('-').reverse()[0]));
    }
  };

  render() {
    return (
      <header>
        <Scrollspy
          className="header-list"
          items={this.listOfSections()}
          offset={-100}
          onUpdate={this.handleUpdate}
        >
          <div>
            <li className="header-list-item big">Logo</li>
            <li className="header-list-item">
              <a href="#section-1">About</a>
            </li>
            <li className="header-list-item">
              <a href="#section-2">Community</a>
            </li>
            <li className="header-list-item">
              <a href="#section-3">Location</a>
            </li>
            <li className="header-list-item">
              <a href="#section-4">Our Menu</a>
            </li>
            <li className="header-list-item">
              <a href="#section-5">Recipes</a>
            </li>
          </div>
          <div>
            <li className="header-list-item right">
              <a href="#section-6">Contact</a>
            </li>
            <li className="header-list-item right">
              <a href="#">Login</a>
            </li>
          </div>
        </Scrollspy>
      </header>
    );
  }
}

export default Header;
