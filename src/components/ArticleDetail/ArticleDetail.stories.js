/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, StyleSheet } from 'react-native';
import ArticleDetail from './index';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#DFE0E0',
  },
  item: {
    height: 200,
  },
});

storiesOf('ArticleDetail', module).add('with obama news', () =>
  <View style={styles.screen}>
    <View style={styles.item}>
      <ArticleDetail
        title={"Obama Offers Hopeful Vision While Noting Nation's Fears"}
        authors={'Graham Spencer'}
        date={'05/26/2014'}
        website={'MacStories'}
        image_url={'https://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_01_illh01.jpg'}
        content={'In his last State of the Union address, President Obama sought to paint a hopeful portrait. But he acknowledged that many Americans felt shut out of a political and economic system they view as rigged.'}
        tags={[
          {
            id: 1,
            label: 'Politics',
          },
          {
            id: 2,
            label: 'Obama',
          },
        ]}
      />
    </View>
  </View>,
).add('with obama read', () =>
  <View style={styles.screen}>
    <View style={styles.item}>
      <ArticleDetail
        title={"Obama Offers Hopeful Vision While Noting Nation's Fears"}
        authors={'Graham Spencer'}
        date={'05/26/2014'}
        website={'MacStories'}
        image_url={'https://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_01_illh01.jpg'}
        isRead={true}
        content={'In his last State of the Union address, President Obama sought to paint a hopeful portrait. But he acknowledged that many Americans felt shut out of a political and economic system they view as rigged.'}
        tags={[
          {
            id: 1,
            label: 'Politics',
          },
        ]}
      />
    </View>
  </View>,
);
