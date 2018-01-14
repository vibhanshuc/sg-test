import React, { PureComponent } from 'react';
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
import { cards, menuColumns, recipes } from './lib/data';

class App extends PureComponent {
  state = {
    current: 1,
  };

  sections = [
    <Banner />,
    <Community items={cards} />,
    <Location />,
    <Menu items={menuColumns} />,
    <Recipes items={recipes} />,
    <Collaboration />,
  ];

  handleSectionScrollIntoView = (sectionId) => {
    this.setState({ current: sectionId });
  };

  render() {
    return (
      <div>
        <Header total={this.sections.length} onUpdate={this.handleSectionScrollIntoView} />
        <SlideCounter total={this.sections.length} current={this.state.current} />
        <Request />
        {this.sections.map((section, index) => (
          <div id={`section-${index + 1}`} key={index}>
            {React.cloneElement(section, {
              isVisible: this.state.current === index + 1,
            })}
          </div>
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
