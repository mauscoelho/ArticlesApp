import React from 'react';
import propTypes from 'prop-types';
import ArticleDetailContainer from '../containers/ArticleDetailContainer';

const Detail = ({ navigation }) => <ArticleDetailContainer navigation={navigation} />;

Detail.propTypes = {
  navigation: propTypes.object.isRequired,
};

export default Detail;
