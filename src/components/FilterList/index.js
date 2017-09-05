import React from 'react';
import propTypes from 'prop-types';
import { FlatList, View, StyleSheet } from 'react-native';
import FilterItemContainer from '../../containers/FilterItemContainer';

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#EEF0F3',
  },
});

const renderSeparator = () => (
  <View
    style={styles.separator}
  />
);

const FilterList = ({ filters, navigation }) => (
  <FlatList
    style={styles.list}
    data={filters}
    keyExtractor={item => item.title}
    ItemSeparatorComponent={renderSeparator}
    renderItem={({ item, index }) => (
      <FilterItemContainer
        key={index}
        title={item.title}
        selected={item.selected}
        navigation={navigation}
      />
    )}
  />
);

FilterList.propTypes = {
  filters: propTypes.array.isRequired,
  navigation: propTypes.object,
};

export default FilterList;
