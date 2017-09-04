/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, StyleSheet } from 'react-native';
import FilterList from './index';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#DFE0E0',
  },
});

const filters = [
  { title: 'Default' },
  { title: 'Authors' },
  { title: 'Date' },
  { title: 'Title' },
  { title: 'Website' },
];

storiesOf('FilterList', module).add('with default list', () =>
  <View style={styles.screen}>
    <FilterList filters={filters} />
  </View>,
);
