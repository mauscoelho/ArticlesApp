/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Map } from 'immutable';
import FilterList from './index';

const mockStore = configureStore();
const store = mockStore(
  Map({
    settings: Map({ visibilityFilter: 'Default' }),
  }),
);

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

storiesOf('FilterList', module)
  .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
  .add('with default list', () => (
    <View style={styles.screen}>
      <FilterList filters={filters} />
    </View>
  ));
