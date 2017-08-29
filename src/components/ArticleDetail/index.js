import React from 'react';
import propTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';

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
  body: {
    margin: 10,
  },
  image: {
    height: 250,
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
  content: {
    marginTop: 6,
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
  hashtagContainer: {
    marginTop: 6,
    flexDirection: 'row',
  },
  hashtag: {
    marginRight: 2,
  },
  bottomContainer: {
    marginTop: 8,
    flexDirection: 'row',
  },
});

const renderHashtags = tags => tags.map(tag => <Text style={styles.hashtag} key={tag.id}>{`#${tag.label}`}</Text>);

const ArticleDetail = ({ title, date, authors, website, image_url, content, tags, isRead }) =>
  <View style={[styles.card, isRead ? styles.cardRead : styles.cardNotRead]}>
    <Image
      style={[styles.image, isRead ? styles.imageRead : styles.imageNotRead]}
      source={{ uri: image_url }}
    />
    <View style={styles.body}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.authors}>
        {authors}
      </Text>
      <Text style={styles.content}>
        {content}
      </Text>
      <View style={styles.hashtagContainer}>
        {renderHashtags(tags)}
      </View>
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
  ;

ArticleDetail.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  authors: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  image_url: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  tags: propTypes.array.isRequired,
  isRead: propTypes.bool,
};

ArticleDetail.defaultProps = {
  isRead: false,
};

export default ArticleDetail;
