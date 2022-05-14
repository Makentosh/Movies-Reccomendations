import React from 'react';

import MovieCard from '../components/MovieCard';
import { movies } from './stub';

export default {
  title: 'Card/Movie Card',
  component: MovieCard,
  argTypes: {},
};

const Template = (args) => <MovieCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  movie: movies[0]
};
