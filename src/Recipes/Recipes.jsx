import React, { Component } from 'react';
import './recipes.css';
import Heading from '../lib/Heading/Heading';
import Button from '../lib/Button/Button';
import nextIcon from '../assets/images/next.png';
import backIcon from '../assets/images/back.png';
import chefStamp from '../assets/images/chef-stamp.png';

const receipes = [
  {
    id: '1x',
    isSmall: false,
    isBottomAligned: false,
    isChefChoice: true,
    servings: 4,
    imageURL:
      'https://scontent-bom1-1.cdninstagram.com/vp/c3caf173612304bcd25b320a1a9366e6/5A5C96FB/t51.2885-15/e35/25025246_1175759589222660_7828593781279555584_n.jpg',
    title: "Charred broccoli & cheat's veggie romesco toast",
    description:
      'Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, vegetable'
  },
  {
    id: '2x',
    isSmall: true,
    isBottomAligned: false,
    isChefChoice: false,
    servings: 2,
    imageURL:
      'https://scontent-bom1-1.cdninstagram.com/vp/24a23e1d62c5a5933b1d23c5cf4c7e49/5A5BF81C/t51.2885-15/e35/26066296_155888631708508_8814903149308411904_n.jpg',
    title: 'Pineapple fruit salad with fresh cream',
    description:
      'Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, vegetable'
  },
  {
    id: '3x',
    isSmall: true,
    isBottomAligned: true,
    isChefChoice: true,
    servings: 2,
    imageURL:
      'https://scontent-bom1-1.cdninstagram.com/vp/72736b49f25e118244d5e22584a72002/5A5C2EEB/t51.2885-15/e35/26346789_154626795188188_8652755730018861056_n.jpg',
    title: 'Cheese, spinach & mushroom stuffed cheicken',
    description:
      'Amp up this dinner party classic by stuffing three types of cheese, spinach and mushroom into the chicken'
  },
  {
    id: '4x',
    isSmall: true,
    isBottomAligned: false,
    isChefChoice: false,
    servings: 8,
    imageURL:
      'https://scontent-bom1-1.cdninstagram.com/vp/24a23e1d62c5a5933b1d23c5cf4c7e49/5A5BF81C/t51.2885-15/e35/26066296_155888631708508_8814903149308411904_n.jpg',
    title: 'Feta and peach couscous',
    description:
      'Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta'
  },
  {
    id: '5x',
    isSmall: true,
    isBottomAligned: false,
    isChefChoice: false,
    servings: 8,
    imageURL:
      'https://scontent-bom1-1.cdninstagram.com/vp/eb50c96d2eb70bcce222cfdf3280b983/5ADF0037/t51.2885-15/e35/26154117_1742992912397699_9217195976962342912_n.jpg',
    title: 'Feta and peach couscous',
    description:
      'Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta'
  },
  {
    id: '6x',
    isSmall: false,
    isBottomAligned: false,
    isChefChoice: true,
    servings: 4,
    imageURL:
      'https://scontent-bom1-1.cdninstagram.com/vp/580c7e8d5516321e72053f10e3462841/5AF1506A/t51.2885-15/e35/25006142_1146507822147044_1737260412342108160_n.jpg',
    title: 'Feta and peach couscous',
    description:
      'Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta'
  },
  {
    id: '7x',
    isSmall: true,
    isBottomAligned: true,
    isChefChoice: true,
    servings: 4,
    imageURL:
      'https://scontent-bom1-1.cdninstagram.com/vp/739f468352062401d37790173883f457/5A5C3BFC/t51.2885-15/e35/c0.80.640.640/25018754_138862936901624_7637901910556540928_n.jpg',
    title: 'Feta and peach couscous',
    description:
      'Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta'
  }
];

const Recipe = ({
  title,
  description,
  servings,
  imageURL,
  isSmall,
  isBottomAligned,
  isChefChoice
}) => (
  <div className={`recipe ${isBottomAligned ? 'align-bottom' : ''}`}>
    <div className={`recipe-card ${isSmall ? 'small' : ''}`}>
      {isChefChoice && (
        <div className="chef-choice">
          <img src={chefStamp} alt="Chef Choice Recipe" />
        </div>
      )}
      <div
        className="recipe-card-header"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <div className="recipe-card-servings">
          <span>{servings}</span>
          <span>Servings</span>
        </div>
        <div className="recipe-card-icon">
          <img src={nextIcon} alt="button" />
        </div>
      </div>
      <div className="recipe-card-content">
        <span>Difficulty</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    <span>User full name</span>
  </div>
);

class Recipes extends Component {
  render() {
    return (
      <div className="recipes">
        <div className="recipes-row">
          <div>
            <Heading
              title={'Popular'}
              subTitle={'Recipes'}
              isStrike
              isPrimary
            />
            <Button text={'See all'} />
          </div>
          <div className="recipes-column align-end">
            <Heading title={'Do you want to share your own recipe?'} />
            <Button text={'Send it now'} />
          </div>
        </div>
        <div className="recipes-row align-start recipes-list">
          {receipes.map(recipe => <Recipe key={recipe.id} {...recipe} />)}
        </div>
        <div className="recipes-row align-end">
          <div className="recipes-nav disabled">
            <img src={backIcon} alt="Back button" />
          </div>
          <div className="recipes-nav">
            <img src={nextIcon} alt="Next Button" />
          </div>
        </div>
      </div>
    );
  }
}

Recipes.propTypes = {};
Recipes.defaultProps = {};

export default Recipes;
