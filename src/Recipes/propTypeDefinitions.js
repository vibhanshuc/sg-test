import { string, bool, number, arrayOf, shape } from 'prop-types';

export const recipeProps = {
  title: string.isRequired,
  description: string.isRequired,
  servings: number.isRequired,
  imageURL: string.isRequired,
  isSmall: bool,
  isBottomAligned: bool,
  isChefChoice: bool
};

export const recipesProps = { items: arrayOf(shape(recipeProps)).isRequired };
