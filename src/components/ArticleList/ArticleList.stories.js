/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, StyleSheet } from 'react-native';
import ArticleList from './index';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#DFE0E0',
  },
});

const articles = [
  {
    title: 'Obama Offers Hopeful Vision While Noting Nation\'s Fears',
    website: 'MacStories',
    authors: 'Graham Spencer',
    date: '05/26/2014',
    content: 'In his last State of the Union address, President Obama sought to paint a hopeful portrait. But he acknowledged that many Americans felt shut out of a political and economic system they view as rigged.',
    tags: [
      {
        id: 1,
        label: 'Politics',
      },
    ],
    image_url: 'https://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_01_illh01.jpg',
  },
  {
    title: 'Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third PartyÂ Apps',
    website: 'Masslive',
    authors: 'Fran Bellamy',
    date: '05/27/2014',
    content: 'One day after Uber updated its API to add \'content experiences\' for passengers, the U.S. companyâ€™s biggest rival â€” Didi Kuaidi in China â€” has opened its own platform up by releasing an SDK for developers and third-parties.',
    tags: [
      {
        id: 2,
        label: 'Tech',
      },
    ],
    image_url: 'https://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_02_ulyqvw.jpg',
  },
  {
    title: 'NASA Formalizes Efforts To Protect Earth From Asteroids',
    website: 'International Business Times - Australia',
    authors: 'Alexandre Henrique Shailesh Zeta-Jones',
    date: '05/28/2014',
    content: 'Last week, NASA announced a new program called the Planetary Defense Coordination Office (PDCO) which will coordinate NASAâ€™s efforts for detecting and tracking near-Earth objects (NEOs). If a large object comes hurtling toward our planetâ€¦ ',
    tags: [
      {
        id: 3,
        label: 'Science',
      },
    ],
    image_url: 'https://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_03_ocz3gy.jpg',
  },
  {
    title: 'For Some Atlanta Hawks, a Revved-Up Game of Uno Is Diversion No. 1',
    website: 'Into Mobile',
    authors: 'Dusan Belic',
    date: '05/26/2014',
    content: 'The favored in-flight pastime of a group of players including Al Horford, Kent Bazemore and Dennis Schroder is a schoolchildrenâ€™s card game with some added twists.',
    tags: [
      {
        id: 4,
        label: 'Sports',
      },
    ],
    image_url: 'https://res.cloudinary.com/cheesecakelabs/image/upload/v1488994455/challenge/news_04.jpg',
  },
  {
    title: 'Picking a Windows 10 Security Package',
    website: 'CNN',
    authors: 'Harmeet Shah Singh',
    date: '04/02/2014',
    content: 'Oscar the Grouch has a recycling bin and Big Bird has moved to a tree as the childrenâ€™s classic debuts on HBO, aiming at a generation that doesnâ€™t distinguish between TV and mobile screens.',
    tags: [
      {
        id: 2,
        label: 'Tech',
      },
    ],
    image_url: 'https://res.cloudinary.com/cheesecakelabs/image/upload/v1488994454/challenge/news_05.jpg',
  },
  {
    title: 'As U.S. Modernizes Nuclear Weapons, \'Smaller\' Leaves Some Uneasy',
    website: 'iMore',
    authors: 'Rene Ritchie',
    date: '05/26/2014',
    content: 'The Energy Department and the Pentagon have been readying a weapon with a build-it-smaller approach, setting off a philosophical clash in the world of nuclear arms.',
    tags: [
      {
        id: 3,
        label: 'Science',
      },
    ],
    image_url: 'https://res.cloudinary.com/cheesecakelabs/image/upload/v1488994454/challenge/news_06.png',
  },
];

storiesOf('ArticleList', module).add('default', () =>
  <View style={styles.screen}>
    <ArticleList articles={articles} />
  </View>,
);
