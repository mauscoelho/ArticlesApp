import React, { Component } from 'react';
import { Button } from 'react-native';
import propTypes from 'prop-types';
import ArticlesListContainer from '../containers/ArticleListContainer';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: <Button title={'Filter'} onPress={() => navigation.navigate('Filter')} />,
  })

  render() {
    return <ArticlesListContainer navigation={this.navigation} />;
  }
}

Home.propTypes = {
  navigation: propTypes.object.isRequired,
};

export default Home;
