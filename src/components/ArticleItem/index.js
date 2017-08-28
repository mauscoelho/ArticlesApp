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
  content: {
    margin: 10,
  },
  image: {
    height: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  authors: {
    fontSize: 14,
    color: '#424242',
  },
  date: {
    fontSize: 10,
    color: '#757575',
    fontWeight: '500',
  },
  website: {
    fontSize: 10,
    color: '#757575',
    marginTop: 4,
    alignSelf: 'flex-end',
  },
});

const ArticleItem = ({ title, date, authors, website, image }) =>
  <View style={styles.card}>
    <Image
      style={styles.image}
      source={{ uri: image }}
    />
    <View style={styles.content}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.authors}>
        {authors}
      </Text>
      <Text style={styles.date}>
        {date}
      </Text>
      <Text style={styles.website}>
        {website}
      </Text>
    </View>
  </View>;

ArticleItem.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  authors: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};

export default ArticleItem;
