import React from 'react';
import propTypes from 'prop-types';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  card: {
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
  cardNotRead: {
    backgroundColor: '#fff',
  },
  cardRead: {
    backgroundColor: '#E0E0E0',
  },
  content: {
    margin: 10,
  },
  image: {
    height: 150,
  },
  imageRead: {
    opacity: 0.4,
  },
  imageNotRead: {
    opacity: 1,
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
    flex: 1,
    fontSize: 10,
    color: '#757575',
    fontWeight: '500',
  },
  website: {
    fontSize: 10,
    color: '#757575',
  },
  bottomContainer: {
    marginTop: 8,
    flexDirection: 'row',
  },
});

const ArticleItem = ({ title, date, authors, website, image_url, isRead, onPress }) =>
  <View style={[styles.card, isRead ? styles.cardRead : styles.cardNotRead]}>
    <TouchableHighlight onPress={onPress} underlayColor={'#BDBDBD'}>
      <View>
        <Image
          style={[styles.image, isRead ? styles.imageRead : styles.imageNotRead]}
          source={{ uri: image_url }}
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.authors}>
            {authors}
          </Text>
          <View style={styles.bottomContainer}>
            <Text style={styles.date}>
              {date}
            </Text>
            <Text style={styles.website}>
              {website}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  </View>;

ArticleItem.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  authors: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  image_url: propTypes.string.isRequired,
  isRead: propTypes.bool,
  onPress: propTypes.func,
};

ArticleItem.defaultProps = {
  isRead: false,
};

export default ArticleItem;
