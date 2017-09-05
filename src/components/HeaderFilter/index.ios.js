import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'react-native';

const HeaderFilter = ({ navigation }) => (
  <Button title={'Filter'} onPress={() => navigation.navigate('Filter')} />
);

HeaderFilter.propTypes = {
  navigation: propTypes.object.isRequired,
};

export default HeaderFilter;
