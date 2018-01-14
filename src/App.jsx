import React, { Component } from 'react';
import Header from './Header/Header';
import SlideCounter from './SlideCounter/SlideCounter';
import Banner from './Banner/Banner';
import Request from './Request/Request';
import Community from './Community/Community';
import Footer from './Footer/Footer';
import Collaboration from './Collaboration/Collaboration';
import Recipes from './Recipes/Recipes';
import Menu from './Menu/Menu';
import Location from './Location/Location';

class App extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    current: 1
  };

  sections = [
    <Banner />,
    <Community />,
    <Location />,
    <Menu />,
    <Recipes />,
    <Collaboration />
  ];

  handleSectionScrollIntoView = sectionId => {
    this.setState({ current: sectionId });
  };

  render() {
    return (
      <div>
        <Header
          total={this.sections.length}
          onUpdate={this.handleSectionScrollIntoView}
        />
        <SlideCounter
          total={this.sections.length}
          current={this.state.current}
        />
        <Request />
        {this.sections.map((section, index) => (
          <div id={`section-${index + 1}`} key={index}>
            {section}
          </div>
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
