/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, StyleSheet } from 'react-native';
import SelectableItem from './index';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#DFE0E0',
  },
});

storiesOf('SelectableItem', module).add('with not selected', () =>
  <View style={styles.screen}>
    <SelectableItem
      title={'Default'}
      selected={false}
    />
  </View>,
).add('with selected', () =>
  <View style={styles.screen}>
    <SelectableItem
      title={'Default'}
      selected
    />
  </View>,
);
