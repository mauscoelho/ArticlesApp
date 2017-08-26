import React from 'react';
import propTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
  },
  image: {
    height: 150,
  },
});

const ArticleItem = ({ title, date, author, website, image }) =>
  <View style={styles.card}>
    <Image
      style={styles.image}
      source={{ uri: image }}
    />
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
  </View>;

ArticleItem.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};

export default ArticleItem;
