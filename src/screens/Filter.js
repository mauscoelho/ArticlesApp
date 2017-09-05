import React from 'react';
import propTypes from 'prop-types';
import FilterListContainer from '../containers/FiltertListContainer';

const Filter = ({ navigation }) => <FilterListContainer navigation={navigation} />;

Filter.propTypes = {
  navigation: propTypes.object.isRequired,
};

export default Filter;
