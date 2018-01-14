import React, { PureComponent } from 'react';
import { number, func } from 'prop-types';
import Scrollspy from 'react-scrollspy';
import './header.css';

class Header extends PureComponent {
  static propTypes = {
    onUpdate: func.isRequired,
    total: number.isRequired,
  };

  listOfSections = () => {
    const sections = [];
    for (let i = 0; i < this.props.total; i += 1) {
      sections.push(`section-${i + 1}`);
    }
    return sections;
  };

  handleUpdate = (item) => {
    if (item && item.id) {
      this.props.onUpdate(Number(item.id.split('-').reverse()[0]));
    }
  };

  render() {
    return (
      <Scrollspy
        componentTag="header"
        items={this.listOfSections()}
        offset={-200}
        onUpdate={this.handleUpdate}
      >
        <div className="header-list">
          <div className="header-list-item big">Logo</div>
          <a className="header-list-item" href="#section-1">
            About
          </a>
          <a className="header-list-item" href="#section-2">
            Community
          </a>

          <a className="header-list-item" href="#section-3">
            Location
          </a>

          <a className="header-list-item" href="#section-4">
            Our Menu
          </a>

          <a className="header-list-item" href="#section-5">
            Recipes
          </a>
        </div>
        <div className="header-list right">
          <a className="header-list-item" href="#section-6">
            Contact
          </a>
          <a className="header-list-item" href="#login">
            Login
          </a>
        </div>
      </Scrollspy>
    );
  }
}

export default Header;
