import { fn } from '@storybook/test';
import Card from '.';

export default {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    title: 'Filme aleatório',
    imageUrl:
      'https://i.pinimg.com/736x/09/e7/a2/09e7a2af3928682cfaff2cd8c7b589ea.jpg',
    favorite: true,
    clickFavorite: (id, favorite) => {
      console.log('funcionou');
    },
  },
};
