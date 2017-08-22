import React from 'react';
import propTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const ArticleItem = ({ title, date, author, website, image }) =>
  <View style={styles.container}>
    <Text>
      {title}
    </Text>
    <Text>
      {date}
    </Text>
    <Text>
      {author}
    </Text>
    <Text>
      {website}
    </Text>
    <Text>
      {image}
    </Text>
  </View>;

ArticleItem.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};

export default ArticleItem;
