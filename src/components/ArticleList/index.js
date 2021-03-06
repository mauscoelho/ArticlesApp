import React from 'react';
import propTypes from 'prop-types';
import { FlatList } from 'react-native';
import ArticleItemContainer from '../../containers/ArticleItemContainer';

const ArticleList = ({ articles, navigation }) =>
  <FlatList
    data={articles}
    keyExtractor={item => item.title}
    renderItem={({ item, index }) =>
      <ArticleItemContainer
        index={index}
        title={item.title}
        date={item.date}
        image_url={item.image_url}
        authors={item.authors}
        website={item.website}
        isRead={item.isRead}
        navigation={navigation}
      />}
  />;

ArticleList.propTypes = {
  articles: propTypes.array.isRequired,
  navigation: propTypes.object,
};

export default ArticleList;
