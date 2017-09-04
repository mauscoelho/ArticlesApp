import React from 'react';
import propTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingLeft: 18,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});

const SelectableItem = ({ title, selected, onPress }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
  </View>
);

SelectableItem.propTypes = {
  title: propTypes.string.isRequired,
  selected: propTypes.bool,
  onPress: propTypes.func,
};

SelectableItem.defaultProps = {
  selected: false,
};

export default SelectableItem;
