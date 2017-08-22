/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react-native';

import ArticleItem from './index';

storiesOf('ArticleItem', module).add('default item', () =>
  <ArticleItem
    title={"Obama Offers Hopeful Vision While Noting Nation's Fears"}
    author={'Graham Spencer'}
    date={'05/26/2014'}
    website={'MacStories'}
    image={
      'http://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_01_illh01.jpg'
    }
  />,
);
