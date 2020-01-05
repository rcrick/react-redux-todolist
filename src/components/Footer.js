import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => {
  return (
    <p>
      SHow: <FilterLink filter="SHOW_ALL">ALl</FilterLink>{' |'}
      <FilterLink filter="SHOW_ACTIVE">ACTIVE</FilterLink>{' |'}
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>
  );
};

export default Footer;
