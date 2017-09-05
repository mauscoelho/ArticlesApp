import React from 'react';
import propTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    flex: 1,
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

const SelectableItem = ({ title, selected, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor={'#BDBDBD'}>
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {selected && (
        <Icon
          style={styles.icon}
          type={'material-community'}
          name="check-circle"
        />
      )}
    </View>
  </TouchableHighlight>
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
