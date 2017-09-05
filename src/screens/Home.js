import React from 'react';
import propTypes from 'prop-types';
import ArticlesListContainer from '../containers/ArticleListContainer';

const Home = ({ navigation }) => <ArticlesListContainer navigation={navigation} />;

Home.propTypes = {
  navigation: propTypes.object.isRequired,
};

export default Home;
