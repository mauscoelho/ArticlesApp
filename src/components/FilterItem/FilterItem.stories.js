/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { View, StyleSheet } from 'react-native';
import FilterItem from './index';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#DFE0E0',
  },
});

storiesOf('FilterItem', module).add('with not selected', () =>
  <View style={styles.screen}>
    <FilterItem
      title={'Default'}
      selected={false}
      onPress={action('onPress')}
    />
  </View>,
).add('with selected', () =>
  <View style={styles.screen}>
    <FilterItem
      title={'Default'}
      selected
      onPress={action('onPress')}
    />
  </View>,
);
