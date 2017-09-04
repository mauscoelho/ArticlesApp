import React from 'react';
import propTypes from 'prop-types';
import { FlatList } from 'react-native';
import SelectableItem from '../SelectableItem';

const FilterList = ({ filters }) => (
  <FlatList
    data={filters}
    keyExtractor={item => item.title}
    renderItem={({ item, index }) => (
      <SelectableItem key={index} title={item.title} />
    )}
  />
);

FilterList.propTypes = {
  filters: propTypes.array.isRequired,
  navigation: propTypes.object,
};

export default FilterList;
