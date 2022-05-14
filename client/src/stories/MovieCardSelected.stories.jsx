import React from 'react';

import { movies } from './stub';
import MovieCardSelected from '../components/MovieCardSelected';

export default {
  title: 'Card/Movie card selected',
  component: MovieCardSelected
};

const Template = (args) => <MovieCardSelected { ...args } />;

export const Primary = Template.bind({});
Primary.args = {
  movie: movies[0]
};
