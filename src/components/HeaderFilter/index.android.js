import React from 'react';
import propTypes from 'prop-types';
import { TouchableHighlight, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
});

const HeaderFilter = ({ navigation }) => (
  <TouchableHighlight
    style={styles.container}
    underlayColor={'#BDBDBD'}
    onPress={() => navigation.navigate('Filter')}
  >
    <View>
      <Icon type={'material-community'} name="sort-variant" />
    </View>
  </TouchableHighlight>
);

HeaderFilter.propTypes = {
  navigation: propTypes.object.isRequired,
};

export default HeaderFilter;
