/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, StyleSheet } from 'react-native';
import ArticleItem from './index';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#DFE0E0',
  },
  item: {
    height: 200,
  },
});

storiesOf('ArticleItem', module).add('with obama news', () =>
  <View style={styles.screen}>
    <View style={styles.item}>
      <ArticleItem
        title={"Obama Offers Hopeful Vision While Noting Nation's Fears"}
        authors={'Graham Spencer'}
        date={'05/26/2014'}
        website={'MacStories'}
        image={'https://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_01_illh01.jpg'}
      />
    </View>
  </View>,
).add('with NASA news', () =>
  <View style={styles.screen}>
    <View style={styles.item}>
      <ArticleItem
        title={'NASA Formalizes Efforts To Protect Earth From Asteroids'}
        authors={'Alexandre Henrique Shailesh Zeta-Jones'}
        date={'05/28/2014'}
        website={'International Business Times - Australia'}
        image={'https://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_03_ocz3gy.jpg'}
      />
    </View>
  </View>,
).add('with obama read', () =>
  <View style={styles.screen}>
    <View style={styles.item}>
      <ArticleItem
        title={"Obama Offers Hopeful Vision While Noting Nation's Fears"}
        authors={'Graham Spencer'}
        date={'05/26/2014'}
        website={'MacStories'}
        image={'https://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_01_illh01.jpg'}
        isRead={true}
      />
    </View>
  </View>,
);
