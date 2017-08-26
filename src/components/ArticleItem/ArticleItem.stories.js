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

storiesOf('ArticleItem', module).add('default item', () =>
  <View style={styles.screen}>
    <View style={styles.item}>
      <ArticleItem
        title={"Obama Offers Hopeful Vision While Noting Nation's Fears"}
        author={'Graham Spencer'}
        date={'05/26/2014'}
        website={'MacStories'}
        image={'https://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_01_illh01.jpg'}
      />
    </View>
  </View>,
);
