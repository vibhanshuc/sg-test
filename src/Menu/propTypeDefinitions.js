import { string, arrayOf, shape } from 'prop-types';

export const menuItemPropTypes = {
  title: string.isRequired,
  description: string.isRequired,
  price: string.isRequired,
};

const menuColumnPropTypes = {
  head: string.isRequired,
  items: arrayOf(shape(menuItemPropTypes)).isRequired,
};

export const menuPropTypes = {
  items: arrayOf(shape(menuColumnPropTypes)).isRequired,
};
