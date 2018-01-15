import card1 from '../assets/images/card-1.jpg';
import card2 from '../assets/images/card-2.jpg';
import card3 from '../assets/images/card-3.jpg';
import card4 from '../assets/images/card-4.jpg';
import card5 from '../assets/images/card-5.jpg';
import card6 from '../assets/images/card-6.jpg';
import card7 from '../assets/images/card-7.jpg';

export const cards = [
  {
    image: card1,
  },
  {
    title: '@buzzfeedfood',
    description:
      'It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good . Find the recipe from the link in our bio! : @taylormillerphotos',
    comments: '60',
    likes: '14.7k',
  },
  {
    title: '@love_food',
    description:
      'Waffle sticks in Copenhagen! Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [ : @foodwithmichel] #lovefood',
    comments: '789',
    likes: '99.7k',
  },
  {
    image: card2,
  },
  {
    title: '@buzzfeedfood',
    description: 'Getting into long weekend  mode like #pancitpalabok @jeepneynyc)',
    comments: '152',
    likes: '18.2k',
  },
  {
    image: card4,
  },
];

export const recipes = [
  {
    id: '1x',
    isSmall: false,
    isBottomAligned: false,
    isChefChoice: true,
    servings: 4,
    imageURL: card1,
    title: "Charred broccoli & cheat's veggie romesco toast",
    description:
      'Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, vegetable',
  },
  {
    id: '2x',
    isSmall: true,
    isBottomAligned: false,
    isChefChoice: false,
    servings: 2,
    imageURL: card2,
    description:
      'Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, vegetable',
  },
  {
    id: '3x',
    isSmall: true,
    isBottomAligned: true,
    isChefChoice: true,
    servings: 2,
    imageURL: card3,
    title: 'Cheese, spinach & mushroom stuffed cheicken',
    description:
      'Amp up this dinner party classic by stuffing three types of cheese, spinach and mushroom into the chicken',
  },
  {
    id: '4x',
    isSmall: true,
    isBottomAligned: false,
    isChefChoice: false,
    servings: 8,
    imageURL: card4,
    title: 'Feta and peach couscous',
    description:
      'Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta',
  },
  {
    id: '5x',
    isSmall: true,
    isBottomAligned: false,
    isChefChoice: false,
    servings: 8,
    imageURL: card5,
    title: 'Feta and peach couscous',
    description:
      'Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta',
  },
  {
    id: '6x',
    isSmall: false,
    isBottomAligned: false,
    isChefChoice: true,
    servings: 4,
    imageURL: card6,
    title: 'Feta and peach couscous',
    description:
      'Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta',
  },
  {
    id: '7x',
    isSmall: true,
    isBottomAligned: true,
    isChefChoice: true,
    servings: 4,
    imageURL: card7,
    title: 'Feta and peach couscous',
    description:
      'Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta',
  },
];

export const menuColumns = [
  {
    head: 'Starters',
    items: [
      {
        title: 'Quinoa Crouquettas',
        description: 'Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)',
        price: '4.95',
      },
      {
        title: 'Chifa Chicharrones',
        description: 'Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)',
        price: '4.95',
      },
      {
        title: 'Calamares',
        description: 'Crispy baby squid with pickled jalapeño miso salsa',
        price: '6.95',
      },
    ],
  },
  {
    head: 'Main Courses',
    items: [
      {
        title: 'El Classico',
        description:
          'Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)',
        price: '8.95',
      },
      {
        title: 'Tiradito Callao',
        description:
          'Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies',
        price: '8.95',
      },
    ],
  },
  {
    head: 'Sides',
    items: [
      {
        title: 'Super Pollo',
        description: 'Marinated corn fed chicken pieces with rocotto salsa',
        price: '4.95',
      },
      {
        title: 'Patatas Fritas',
        description: 'Sweet potato fires with aji rocotto mayonnaise (v)',
        price: '3.95',
      },
      {
        title: 'Tiradito Callao',
        description:
          'Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies',
        price: '8.95',
      },
    ],
  },
  {
    head: 'Desserts',
    items: [
      {
        title: 'Icecream',
        description: 'Lorem ipsum dolor sit amet salerma petrum sea',
        price: '3.95',
      },
      {
        title: 'Tiramisu',
        description: 'Lorem ipsum dolor sit amet salerma petrum sea',
        price: '3.95',
      },
      {
        title: 'Chocolate Brownie',
        description: 'Lorem ipsum dolor sit amet salerma petrum sea',
        price: '3.95',
      },
    ],
  },
];
