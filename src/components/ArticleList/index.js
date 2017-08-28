import React from 'react';
import propTypes from 'prop-types';
import { FlatList } from 'react-native';
import ArticleItem from '../ArticleItem';

const ArticleList = ({ articles }) =>
  <FlatList
    data={articles}
    keyExtractor={item => item.title}
    renderItem={({ item }) =>
      <ArticleItem
        title={item.title}
        date={item.date}
        image={item.image_url}
        authors={item.authors}
        website={item.website}
      />}
  />;

ArticleList.propTypes = {
  articles: propTypes.array.isRequired,
};

export default ArticleList;
