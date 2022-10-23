import React from 'react';
import SelectedMoviesForm from '../components/SelectedMoviesForm';


export default {
  title: 'Forms/SelectedMovies',
  component: SelectedMoviesForm,
};

const Template = (args) => <SelectedMoviesForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  onSubmit: () => {}
};
