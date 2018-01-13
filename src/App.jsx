import React, {Component} from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import SlideCounter from './SlideCounter/SlideCounter';
import Request from './Request/Request';
import Community from './Community/Community';
import Footer from './Footer/Footer';
import Collaboration from './Collaboration/Collaboration';
import Recipes from './Recipes/Recipes';
import Menu from './Menu/Menu';

class App extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div>
        <Header />
        <SlideCounter total={6} current={1}/>
        <Request />
        <Banner />
        <Community />
        <Menu />
        <Recipes />
        <Collaboration />
        <Footer />
      </div>
    );
  }
}


export default App;
