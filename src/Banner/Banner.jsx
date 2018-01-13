import React, {Component} from 'react';
import './banner.css';
import logoImage from '../assets/images/stamp.png';

class Banner extends Component {

  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div className="banner">
        <div className="banner-logo">
          <img alt="logo" src={logoImage} />
        </div>
        <div className="banner-head">
          <div className="banner-head-title">The best foodie</div>
          <div className="banner-head-title big">Experience</div>
          <div className="banner-head-title small">Now in London</div>
        </div>
      </div>
    );
  }
}


export default Banner;
