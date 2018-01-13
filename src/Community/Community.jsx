import React, {Component} from 'react';
import './community.css';
import Card from '../lib/Card/Card';
import Heading from '../lib/Heading/Heading';
import Button from '../lib/Button/Button';

class Community extends Component {
  render() {
    return (
      <div className="community">
        <div>
          <div></div>
          <div>
            <Heading subTitle={'Meet our'}/>
            <Heading subTitle={'Community'} isStrike isPrimary/>
            <Button text={'Know More'}/>
            <p>LOREM IPSUM DOLOR SIT
              AMET ERNUT TEMPARTERO
              SERTU PER NABORE EN
              TORNA ENTALTO</p>
          </div>
          <div>
            <Card
              image={'https://scontent-bom1-1.cdninstagram.com/vp/73698d8c2b50af2474c5e9f2958d9226/5AEC40CF/t51.2885-15/sh0.08/e35/p750x750/26153800_518909545159792_3790275073550581760_n.jpg'}/>
          </div>
          <div>
            <Card title={'@buzzfeedfood'} description={'It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good . Find the recipe from the link in our bio! : @taylormillerphotos'}/>
          </div>
        </div>
        <div>
          <div>
            <Card title={'@love_food'} description={'Waffle sticks in Copenhagen! Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [ : @foodwithmichel] #lovefood'}/>
          </div>
          <div>
            <Card image={'https://scontent-bom1-1.cdninstagram.com/vp/24a23e1d62c5a5933b1d23c5cf4c7e49/5A5BF81C/t51.2885-15/e35/26066296_155888631708508_8814903149308411904_n.jpg'}/>
          </div>
          <div className="empty">
            <p className="description">
              Ut enim ad minim veniam, quis
              nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea
              commodo consequat. Duis
              aute irure dolor in
              reprehenderit in voluptate
              velit esse cillum dolore
            </p>
          </div>
          <div></div>
        </div>
        <div>
          <div className="empty">
            <p className="description">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed
              do eiusmod tempor incididunt
              ut labore et dolore magna
              aliqua. Duis aute irure.
            </p>
          </div>
          <div></div>
          <div>
            <Card title={'@buzzfeedfood'} description={'Getting into long weekend  mode like #pancitpalabok @jeepneynyc)'}/>
          </div>
          <div>
            <Card image={'https://scontent-bom1-1.cdninstagram.com/vp/eb50c96d2eb70bcce222cfdf3280b983/5ADF0037/t51.2885-15/e35/26154117_1742992912397699_9217195976962342912_n.jpg'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
