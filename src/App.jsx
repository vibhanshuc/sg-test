import React, { Component } from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import SlideCounter from './SlideCounter/SlideCounter';
import Request from './Request/Request';
import Community from './Community/Community';
import Footer from './Footer/Footer';
import Collaboration from './Collaboration/Collaboration';
import Recipes from './Recipes/Recipes';
import Menu from './Menu/Menu';
import Location from './Location/Location';

const sections = [
  <Banner className={'slide1'} />,
  <Community />,
  <Location />,
  <Menu />,
  <Recipes />,
  <Collaboration />
];

class App extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div>
        <Header />
        <SlideCounter total={sections.length} current={1} />
        <Request />
        {sections.map((section, index) => (
          <div
            ref={node => (this.sections[index] = node)}
            id={`slide slide-${index}`}
            key={index}
          >
            {section}
          </div>
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
